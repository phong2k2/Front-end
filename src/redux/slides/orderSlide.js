import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orderItems: [],
    orderItemSelected: [],
    shippingAddress: {
    },
    paymentMethod: '',
    itemsPrice: 0,
    shippingPrice: 0,
    taxPrice: 0,
    totalPrice: 0,
    user: '',
    isPaid: false,
    paidAt: '',
    isDelivered: false,
    deliveredAt: '',
    isSuccessOrder: false,
}

export const orderSlide = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrderProduct: (state, action) => {
            const { orderItem } = action.payload
            const itemOrder = state?.orderItems?.find((item) => item?.product === orderItem.product)
            if (itemOrder) {
                if (itemOrder.amount <= itemOrder.countInStock) {
                    itemOrder.amount += orderItem?.amount
                    state.isSuccessOrder = true
                    state.isErrorOrder = false
                }
            } else {
                state.orderItems.push(orderItem)
            }
        },
        resetOrder: (state) => {
            state.isSuccessOrder = false
        },
        increaseAmount: (state, action) => {
            const { idProduct } = action.payload
            const itemOrder = state?.orderItems?.find((item) => item?.product === idProduct)
            const itemOrderSelected = state?.orderItemSelected?.find((item) => item?.product === idProduct)
            itemOrder.amount++;
            if (itemOrderSelected) {
                itemOrderSelected.amount++;
            }
        },
        decreaseAmount: (state, action) => {
            const { idProduct } = action.payload
            const itemOrder = state?.orderItems?.find((item) => item?.product === idProduct)
            const itemOrderSelected = state?.orderItemSelected?.find((item) => item?.product === idProduct)
            itemOrder.amount--;
            if (itemOrderSelected) {
                itemOrderSelected.amount--;
            }
        },
        //  removeOrderProduct: (state, action) => {
        //    const { idProduct } = action.payload
        //      const itemOrder = state?.orderItems?.find((item) => item?.product !== idProduct)
        //       itemOrder.orderItems = itemOrder
        //   },
        removeOrderProduct: (state, action) => {
            const { idProduct } = action.payload;

            // Xóa sản phẩm bằng cách lọc các sản phẩm không có `product` khớp với `idProduct`
            state.orderItems = state.orderItems.filter((item) => item.product !== idProduct);
            state.orderItemSelected = state.orderItemSelected.filter((item) => item.product !== idProduct);
        },
        removeAllOrderProduct: (state, action) => {
            const { listChecked } = action.payload;

            // Xóa sản phẩm bằng cách lọc các sản phẩm không có `product` khớp với `idProduct`
            state.orderItems = state.orderItems.filter((item) => !listChecked.includes(item?.product));
            state.orderItemSelected = state.orderItemSelected.filter((item) => !listChecked.includes(item?.product));
        },
        selectedOrder: (state, action) => {
            const { listChecked } = action.payload
            const orderSelected = []
            state.orderItems.forEach((order) => {
                if (listChecked.includes(order.product)) {
                    orderSelected.push(order)
                }
            })
            state.orderItemSelected = orderSelected
        }
    },
})


// Action creators are generated for each case reducer function
export const { addOrderProduct, increaseAmount, decreaseAmount, removeOrderProduct, removeAllOrderProduct, selectedOrder, resetOrder } = orderSlide.actions

export default orderSlide.reducer