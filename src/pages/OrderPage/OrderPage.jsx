import React from 'react'
import { WrapperCountOrder, WrapperInfo, WrapperItemOrder, WrapperLeft, WrapperListOrder, WrapperPriceDiscount, WrapperRight, WrapperStyleHeader, WrapperTotal } from './style';
import { Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

//import { WrapperInputNumber, } from '../../components/Productdetailscomponent'
import Buttoncomponent from '../../components/Buttoncomponent/Buttoncomponent';


const OrderPage = ({ count = 1 }) => {
    const onChange = (e) => {
        console.log('checked=${e.target.value}');
    };
    const handleChangeCount = () => {

    }
    const handleOnChangeCheckAll = (e) => {

    }
    return (
        <div style={{ background: '#f5f5fa', width: '100%', height: '100vh' }}>
            <div style={{ height: '100%', width: '1270px', margin: '0 auto' }}>
                <h3>Giỏ hàng</h3>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <WrapperLeft>
                        <WrapperStyleHeader>
                            <span style={{ display: 'inline-block', width: '390px' }}>
                                <Checkbox onChange={handleOnChangeCheckAll}></Checkbox>
                                <span>Tất cả ({count} sản phẩm)</span>
                            </span>
                            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span>Đơn giá</span>
                                <span>Số lượng</span>
                                <span>Thành tiền</span>
                                <DeleteOutlined style={{ cursor: 'pointer' }} />
                            </div>
                        </WrapperStyleHeader>

                        <WrapperListOrder>
                            <WrapperItemOrder>
                                <Checkbox style={{ marginRight: '10px' }} />
                                <img src="https://via.placeholder.com/80" alt="Product" style={{ marginRight: '10px' }} />
                                <span style={{ flex: 1 }}>Tên sản phẩm</span>
                                <div>
                                    <span>211</span>
                                    <WrapperPriceDiscount>230</WrapperPriceDiscount>
                                </div>
                                <WrapperCountOrder>
                                    <button>-</button>
                                    <input type="text" value="10" style={{ textAlign: 'center', width: '40px', border: 'none' }} />
                                    <button>+</button>
                                </WrapperCountOrder>
                                <span style={{ color: 'red', fontWeight: 'bold', margin: '0 10px' }}>1212</span>
                                <DeleteOutlined style={{ cursor: 'pointer' }} />
                            </WrapperItemOrder>
                        </WrapperListOrder>
                    </WrapperLeft>
                    <WrapperRight>
                        <WrapperInfo>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Tạm tính</span>
                                <span>0</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Giảm giá</span>
                                <span>0</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Thuế</span>
                                <span>0</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Phí giao hàng</span>
                                <span>0</span>
                            </div>
                        </WrapperInfo>

                        <WrapperTotal>
                            <span>Tổng tiền</span>
                            <span style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ color: 'rgb(254, 56, 52)', fontSize: '24px', fontWeight: 'bold', justifyContent: 'space-between' }}>0213</span>
                                <span style={{ color: '#000', fontSize: '11px' }}>(Đã bao gồm phí VAT)</span>
                            </span>
                        </WrapperTotal>

                        <Buttoncomponent
                            size={40}
                            styleButton={{
                                background: 'rgb(255, 57, 69)',
                                height: '48px',
                                width: '220px',
                                border: 'none',
                                borderRadius: '4px'
                            }}
                            textButton={'Mua hàng'}
                            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '' }}
                        ></Buttoncomponent>
                    </WrapperRight>
                </div>
            </div>
        </div>
    )
}
export default OrderPage