import { Button, Input } from 'antd'
import React from 'react'
import {
    SearchOutlined,
} from '@ant-design/icons';

const Buttoninputsearch = (props) => {
    const {
        size, placeholder, textButton,
        bordered, backgroundColorInput = '#fff',
        backgroundColorButtton = 'rgb(13, 92, 182)',
        colorButton = '#fff'
    }
        = props
    return (
        <div style={{ display: 'flex' }}>
            <Input
                size={size}
                placeholder={placeholder}
                bordered={bordered}
                style={{ backgroundColor: backgroundColorInput }} />
            <Button
                size={size}
                bordered={bordered}
                style={{ background: backgroundColorButtton, color: colorButton, border: !bordered && 'none' }}
                icon={<SearchOutlined style={{ color: colorButton }} />}
            >{textButton}</Button>
        </div>
    )
}

export default Buttoninputsearch