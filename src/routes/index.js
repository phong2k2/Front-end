import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import Productdetailspage from "../pages/Productdetailspage/Productdetailspage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import Signinpage from "../pages/Signinpage/Signinpage";
import Signuppge from "../pages/Signuppage/Signuppge";
import Typeproductppage from "../pages/Typeproductpage/Typeproductppage";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/products',
        page: ProductsPage,
        isShowHeader: true
    },
    {
        path: '/:type',
        page: Typeproductppage,
        isShowHeader: true
    },
    {
        path: '/sign-in',
        page: Signinpage,
        isShowHeader: true
    },
    {
        path: '/sign-up',
        page: Signuppge,
        isShowHeader: true
    },
    {
        path: '/product-details',
        page: Productdetailspage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage
    }
]