import React from 'react'
import { WrapperContent, WrapperLabelText, WrapperTextPrice, WrapperTexValue } from './style'
import { Checkbox, Col, Rate, Row } from 'antd'

const Navbarcomponent = () => {
    const onChange = () => { }
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((options) => {
                    return (
                        <WrapperTexValue>{options}</WrapperTexValue>
                    )
                })
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                        {options.map((options) => {
                            return (
                                <Checkbox style={{ marginLeft: 0 }} value={options.value}>{options.label}</Checkbox>
                            )
                        })}
                    </Checkbox.Group>
                )
            case 'star':
                return options.map((options) => {
                    return (
                        <div style={{ display: 'flex', gap: '4px' }}>
                            <Rate style={{ fontSize: '12px' }} disabled defaultValue={options} />
                            <span> {`Từ ${options} sao`}</span>
                        </div>
                    )
                })
            case 'price':
                return options.map((options) => {
                    return (
                        <WrapperTextPrice>{options}</WrapperTextPrice>
                    )
                })
            default:
                return {}
        }
    }

    return (
        <div>
            <WrapperLabelText>Label</WrapperLabelText>
            <WrapperContent>
                {renderContent('text', ['Tủ lạnh', 'TV', 'Máy giặt'])}
            </WrapperContent>
        </div>
    )
}

export default Navbarcomponent