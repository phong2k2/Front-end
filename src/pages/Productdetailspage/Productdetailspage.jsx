import React from 'react'
import Productdetailscomponent from '../../components/Productdetailscomponent/Productdetailscomponent'
import { useNavigate, useParams } from 'react-router-dom'

const Productdetailspage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    return (
        <div style={{ height: '100vh', with: '100%', background: '#efefef' }}>
            <div style={{ width: '1270px', margin: '0 auto', height: '100%' }}>
                <h5><span style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => { navigate('/') }}>Trang chủ</span> - Chi tiết sản phẩm</h5>
                <Productdetailscomponent idProduct={id} />
            </div>
        </div>
    )
}

export default Productdetailspage