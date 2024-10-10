import { Badge, Col } from 'antd'
import React from 'react'
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style'
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';
import Buttoninputsearch from '../Buttoninputsearch/Buttoninputsearch';

const Headercomponent = () => {
    return (
        <div style={{ width: '100%', background: 'rgb(26, 148, 255)', display: 'flex', justifyContent: 'center' }}>
            <WrapperHeader >
                <Col span={5}>
                    <WrapperTextHeader> PHONGDEV</WrapperTextHeader>
                </Col>
                <Col span={13}>
                    <Buttoninputsearch
                        size="large"
                        bordered={false}
                        textButton="Tìm kiếm"
                        placeholder="input search text" />
                </Col>
                <Col span={6} style={{ display: 'flex', gap: '54px', alignItems: 'center' }}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize: '30px' }} />
                        <div>
                            <WrapperTextHeaderSmall>Đăng nhập/ Đăng ký</WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall>Tài khoản </WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>

                        </div>
                    </WrapperHeaderAccount>
                    <div>
                        <Badge count={4} size="small">
                            <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
                        </Badge>
                        <WrapperTextHeaderSmall>Giỏ hàng </WrapperTextHeaderSmall>

                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default Headercomponent