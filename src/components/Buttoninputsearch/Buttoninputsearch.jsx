import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import Inputcomponent from '../Inputcomponent/Inputcomponent';
import Buttoncomponent from '../Buttoncomponent/Buttoncomponent';

const Buttoninputsearch = (props) => {
    const {
        size, placeholder, textButton,
        bordered, backgroundColorInput = '#fff',
        backgroundColorButtton = 'rgb(13, 92, 182)',
        colorButton = '#fff'
    } = props

    return (
        <div style={{ display: 'flex' }}>
            <Inputcomponent
                size={size}
                placeholder={placeholder}
                style={{ backgroundColor: backgroundColorInput, border: bordered ? '1px solid #000' : 'none' }}
            />
            <Buttoncomponent
                size={size}
                styleButton={{ background: backgroundColorButtton, border: !bordered && 'none' }}
                icon={<SearchOutlined color={colorButton} style={{ color: '#fff' }} />}
                textButton={textButton}
                styleTextButton={{ color: colorButton }}
            />
        </div>
    )
}

export default Buttoninputsearch