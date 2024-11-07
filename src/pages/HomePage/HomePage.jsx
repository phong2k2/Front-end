import React, { useEffect, useRef, useState } from 'react'
import Typeproduct from '../../components/Typeproduct/Typeproduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import Slidercomponent from '../../components/Slidercomponent/Slidercomponent'
import slider4 from '../../assets/images/slider4.webp'
import slider2 from '../../assets/images/slider2.webp'
import slider3 from '../../assets/images/slider3.webp'
import slider1 from '../../assets/images/slider1.webp'
import Cardcomponent from '../../components/Cardcomponent/Cardcomponent'
import { useQuery } from '@tanstack/react-query'
import *as ProductService from '../../services/ProductService'
import { useSelector } from 'react-redux'
import Loading from '../../components/Loadingcomponent/Loading'
import { useDebounce } from '../../hooks/useDebounce'

const HomePage = () => {
    const searchProduct = useSelector((state) => state?.product?.search)
    const searchDebounce = useDebounce(searchProduct, 500)
    const refSearch = useRef()
    const [loading, setLoading] = useState(false)
    const [stateProducts, setStateProducts] = useState([])
    const arr = ['TV', 'Tủ Lạnh', 'Lap Top']
    const fetchProductAll = async (search) => {
        // if(search.length>0){}
        const res = await ProductService.getAllProduct(search)
        if (search?.length > 0 || refSearch.current) {
            setStateProducts(res?.data)
        } else {
            return res
        }
    }

    useEffect(() => {
        if (refSearch.current) {
            setLoading(true)
            fetchProductAll(searchDebounce)
        }
        refSearch.current = true
        setLoading(false)
    }, [searchDebounce])

    const { isPending, data: products } = useQuery({ queryKey: ['products'], queryFn: fetchProductAll, retry: 3, retryDelay: 1000 });

    {/*useEffect(() => {
        if (products ? data?.length > 0) {
            setStateProducts(products?.data)
        }
    }, [products])*/}
    useEffect(() => {
        if (products && products.data?.length > 0) {
            setStateProducts(products.data);
        }
    }, [products]);


    return (
        <Loading isPending={isPending || loading}>
            <div style={{ width: '1270px', margin: '0 auto' }}>
                <WrapperTypeProduct>
                    {arr.map((item) => {
                        return (
                            <Typeproduct name={item} key={item} />
                        )
                    })}
                </WrapperTypeProduct>
            </div>
            <div className='body' style={{ width: '100%', backgroundColor: '#efefef' }} >
                < div id="container" style={{ height: '1000px', width: '1270px', margin: '0 auto' }}>
                    <Slidercomponent arrImages={[slider4, slider1, slider2, slider3]} />
                    <WrapperProducts>
                        {stateProducts?.map((product) => {
                            console.log('product', product)
                            return (
                                <Cardcomponent
                                    key={product._id}
                                    countInStock={product.countInStock}
                                    description={product.description}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    rating={product.rating}
                                    type={product.type}
                                    discount={product.discount}
                                    selled={product.selled}
                                />
                            )
                        })}
                    </WrapperProducts>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <WrapperButtonMore textButton="Xem thêm" type="outline" styleButton={{
                            border: '1px solid rgb(11, 116, 229)', color: 'rgb(11, 116, 229)',
                            width: '240px', height: '38px', borderRadius: '4px'
                        }}
                            styleTextButton={{ fontWeight: 500 }} />
                    </div>
                </div >
            </div >
        </Loading>
    )
}

export default HomePage