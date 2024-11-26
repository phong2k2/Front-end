import React, { useEffect } from 'react';
import Loading from '../../components/Loadingcomponent/Loading';
import { useQuery } from '@tanstack/react-query';
import * as OrderService from '../../services/OrderService';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutationHooks } from '../../hooks/useMutationHook';
import { WrapperContainer, WrapperFooterItem, WrapperHeaderItem, WrapperItemOrder, WrapperListOrder, WrapperStatus } from './style';
import * as message from '../../components/Message/Message';
import { convertPrice } from '../../utils';
import Buttoncomponent from '../../components/Buttoncomponent/Buttoncomponent';

const MyOrderPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const user = useSelector((state) => state.user);

    // Xử lý logic trước khi dùng hook
    const isValidUser = !!(state?.id && state?.token);

    // Fetch orders
    const fetchMyOrder = async () => {
        const res = await OrderService.getOrderByUserId(state?.id, state?.token);
        return res.data;
    };

    const queryOrder = useQuery({
        queryKey: ['orders'],
        queryFn: fetchMyOrder,
        enabled: isValidUser, // Điều kiện chạy
    });

    const { isPending, data } = queryOrder;

    // Cancel order mutation
    const mutation = useMutationHooks((data) => {
        const { id, token, orderItems, userId } = data;
        return OrderService.cancelOrder(id, token, orderItems, userId);
    });

    const handleCancelOrder = (order) => {
        mutation.mutate(
            { id: order._id, token: state?.token, orderItems: order?.orderItems, userId: user.id },
            {
                onSuccess: () => {
                    queryOrder.refetch();
                    message.success('Hủy đơn hàng thành công!');
                },
                onError: () => {
                    message.error('Hủy đơn hàng thất bại!');
                },
            }
        );
    };

    const handleDetailsOrder = (id) => {
        navigate(`/details-order/${id}`, {
            state: {
                token: state?.token,
            },
        });
    };

    const renderProduct = (data) => {
        return data?.map((order) => (
            <WrapperHeaderItem key={order?._id}>
                <img
                    src={order?.image}
                    alt="Product"
                    style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'cover',
                        border: '1px solid rgb(238, 238, 238)',
                        padding: '2px',
                    }}
                />
                <div
                    style={{
                        width: 260,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        marginLeft: '10px',
                    }}
                >
                    {order?.name}
                </div>
                <span style={{ fontSize: '13px', color: '#242424', marginLeft: 'auto' }}>
                    {convertPrice(order?.price)}
                </span>
            </WrapperHeaderItem>
        ));
    };

    // Trường hợp không hợp lệ
    if (!isValidUser) {
        message.error('Người dùng không hợp lệ!');
        return null;
    }

    return (
        <Loading isPending={isPending || mutation.isPending}>
            <WrapperContainer>
                <div style={{ height: '100%', width: '1270px', margin: '20px auto 0' }}>
                    <h4>Đơn hàng của tôi</h4>
                    <WrapperListOrder>
                        {data?.map((order) => (
                            <WrapperItemOrder key={order?._id}>
                                <WrapperStatus>
                                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Trạng thái</span>
                                    <div>
                                        <span style={{ color: 'rgb(255, 66, 78)' }}>Giao hàng: </span>
                                        <span
                                            style={{
                                                color: 'rgb(90, 32, 193)',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {order.isDelivered ? 'Đã giao hàng' : 'Chưa giao hàng'}
                                        </span>
                                    </div>
                                    <div>
                                        <span style={{ color: 'rgb(255, 66, 78)' }}>Thanh toán: </span>
                                        <span
                                            style={{
                                                color: 'rgb(90, 32, 193)',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {order.isPaid ? 'Đã thanh toán' : 'Chưa thanh toán'}
                                        </span>
                                    </div>
                                </WrapperStatus>
                                {renderProduct(order?.orderItems)}
                                <WrapperFooterItem>
                                    <div>
                                        <span style={{ color: 'rgb(255, 66, 78)' }}>Tổng tiền: </span>
                                        <span
                                            style={{
                                                fontSize: '13px',
                                                color: 'rgb(56, 56, 61)',
                                                fontWeight: 700,
                                            }}
                                        >
                                            {convertPrice(order?.totalPrice)}
                                        </span>
                                    </div>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <Buttoncomponent
                                            onClick={() => handleCancelOrder(order)}
                                            size={40}
                                            styleButton={{
                                                height: '36px',
                                                border: '1px solid #9255FD',
                                                borderRadius: '4px',
                                            }}
                                            textButton="Hủy đơn hàng"
                                            styleTextButton={{ color: '#9255FD', fontSize: '14px' }}
                                        />
                                        <Buttoncomponent
                                            onClick={() => handleDetailsOrder(order?._id)}
                                            size={40}
                                            styleButton={{
                                                height: '36px',
                                                border: '1px solid #9255FD',
                                                borderRadius: '4px'
                                            }}
                                            textButton={'Xem chi tiết'}
                                            styleTextButton={{ color: '#9255FD', fontSize: '14px' }}
                                        />
                                    </div>
                                </WrapperFooterItem>
                            </WrapperItemOrder>
                        ))}
                    </WrapperListOrder>
                </div>
            </WrapperContainer>
        </Loading>
    );
};

export default MyOrderPage;
