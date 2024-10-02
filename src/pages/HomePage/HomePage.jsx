import React from 'react'
import Typeproduct from '../../components/Typeproduct/Typeproduct'
import { WrapperTypeProduct } from './style'
import Slidercomponent from '../../components/Slidercomponent/Slidercomponent'
import slider4 from '../../assets/images/slider4.webp'
import slider2 from '../../assets/images/slider2.webp'
import slider3 from '../../assets/images/slider3.webp'
import slider1 from '../../assets/images/slider1.webp'
import Cardcomponent from '../../components/Cardcomponent/Cardcomponent'
import Navbarcomponent from '../../components/Navbarcomponent/Navbarcomponent'


const HomePage = () => {
    const arr = ['TV', 'Tủ Lạnh', 'Lap Top']
    return (
        <>
            <div style={{ padding: '0 120px' }}>
                <WrapperTypeProduct>
                    {arr.map((item) => {
                        return (
                            <Typeproduct name={item} key={item} />
                        )
                    })}
                </WrapperTypeProduct>

            </div>
            <div id="container" style={{ backgroundColor: '#efefef', padding: '0 120px', height: '1000px' }} >
                <Slidercomponent arrImages={[slider4, slider1, slider2, slider3]} />
                <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <Cardcomponent />
                </div>
                <Navbarcomponent />
            </div>
        </>
    )
}

export default HomePage