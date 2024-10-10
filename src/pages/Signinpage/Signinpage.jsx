import React from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import Inputform from '../../components/Inputform/Inputform'
import Buttoncomponent from '../../components/Buttoncomponent/Buttoncomponent'
import imageLogo from '../../assets/images/logo-login.png'
import { Image } from 'antd'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { useState } from 'react'

const Signinpage = () => {
    const [isShowPassword, setisShowPassword] = useState(false)
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
            <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
                <WrapperContainerLeft>
                    <h1>Xin chào</h1>
                    <p>Đăng nhập và tạo tài khoản</p>
                    <Inputform style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" />
                    <div style={{ position: 'relative' }}>
                        <span
                            style={{
                                zIndex: 10,
                                position: 'absolute',
                                top: '4px',
                                right: '8px'
                            }}
                        >{
                                isShowPassword ? (
                                    <EyeFilled />
                                ) : (
                                    <EyeInvisibleFilled />
                                )
                            }
                        </span>
                        <Inputform placeholder="password" type={isShowPassword ? "text" : "password"} />
                    </div>
                    <Buttoncomponent
                        bordered={false}
                        size={40}
                        styleButton={{
                            background: 'rgb(255, 57, 69)',
                            height: '48px', width: '100%',
                            border: 'none', borderRadius: '4px',
                            margin: '26px 0 10px'
                        }}
                        textButton={"Đăng nhập"}
                        styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                    ></Buttoncomponent>
                    <p><WrapperTextLight>Quên mật khẩu ?</WrapperTextLight></p>
                    <p>Chưa có tài khoản ? <WrapperTextLight> Tạo tài khoản </WrapperTextLight></p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image src={imageLogo} preview={false} alt="image-logo" height="203px" width="203px" />
                    <h4>Mua sắm tại PHONGDEV</h4>
                </WrapperContainerRight>
            </div>
        </div>
    )
}

export default Signinpage