import React from 'react'
import Typeproduct from '../../components/Typeproduct/Typeproduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import Slidercomponent from '../../components/Slidercomponent/Slidercomponent'
import slider4 from '../../assets/images/slider4.webp'
import slider2 from '../../assets/images/slider2.webp'
import slider3 from '../../assets/images/slider3.webp'
import slider1 from '../../assets/images/slider1.webp'
import Cardcomponent from '../../components/Cardcomponent/Cardcomponent'

const HomePage = () => {
    const arr = ['TV', 'Tủ Lạnh', 'Lap Top']
    return (
        <>
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
                        <Cardcomponent />
                        <Cardcomponent />
                        <Cardcomponent />
                        <Cardcomponent />
                        <Cardcomponent />
                        <Cardcomponent />
                        <Cardcomponent />
                        <Cardcomponent />
                        <Cardcomponent />
                        <Cardcomponent />
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
        </>
    )
}

export default HomePage