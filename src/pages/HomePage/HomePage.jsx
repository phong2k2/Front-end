import React, { useEffect, useState } from 'react'
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
    const [loading, setLoading] = useState(false)
    const [limit, setLimit] = useState(6)
    const [typeProducts, setTypeProducts] = useState([])
    const fetchProductAll = async (context) => {
        const limit = context?.queryKey && context?.queryKey[1]
        const search = context?.queryKey && context?.queryKey[2]
        const res = await ProductService.getAllProduct(search, limit)
        return res
    }

    const fetchAllTypeProduct = async () => {
        const res = await ProductService.getAllTypeProduct()
        if (res?.status === 'OK') {
            setTypeProducts(res?.data)
        }
    }

    const { isPending, data: products, isPreviousData } = useQuery({ queryKey: ['products', limit, searchDebounce], queryFn: fetchProductAll, retry: 3, retryDelay: 1000, keepPreviousData: true });

    useEffect(() => {
        fetchAllTypeProduct()
    }, [])

    return (
        <Loading isPending={isPending || loading}>
            <div style={{ width: '1270px', margin: '0 auto' }}>
                <WrapperTypeProduct>
                    {typeProducts.map((item) => {
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
                        {products?.data?.map((product) => {
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
                                    id={product._id}
                                />
                            )
                        })}
                    </WrapperProducts>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <WrapperButtonMore
                            textButton={isPreviousData ? 'Load more' : "Xem thêm"} type="outline" styleButton={{
                                border: '1px solid rgb(11, 116, 229)', color: `${products?.total === products?.data?.length ? '#ccc' : 'rgb(11, 116, 229)'}`,
                                width: '240px', height: '38px', borderRadius: '4px'
                            }}
                            disabled={products?.total === products?.data?.length || products.totalPage === 1}
                            styleTextButton={{ fontWeight: 500, color: products?.total === products?.data?.length && '#fff' }}
                            onClick={() => setLimit((prev) => prev + 6)}
                        />
                    </div>
                </div >
            </div >
        </Loading>
    )
}

export default HomePage