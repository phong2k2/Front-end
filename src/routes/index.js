import AdminPage from "../pages/AdminPage/AdminPage";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import Productdetailspage from "../pages/Productdetailspage/Productdetailspage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProfilePage from "../pages/Profile/ProfilePage";
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
        path: '/payment',
        page: PaymentPage,
        isShowHeader: true
    },
    {
        path: '/products',
        page: ProductsPage,
        isShowHeader: true
    },
    {
        path: '/product/:type',
        page: Typeproductppage,
        isShowHeader: true
    },
    {
        path: '/sign-in',
        page: Signinpage,
        isShowHeader: false
    },
    {
        path: '/sign-up',
        page: Signuppge,
        isShowHeader: false
    },
    {
        path: '/product-details/:id',
        page: Productdetailspage,
        isShowHeader: true
    },
    {
        path: '/profile-user',
        page: ProfilePage,
        isShowHeader: true
    },
    {
        path: '/system/admin',
        page: AdminPage,
        isShowHeader: false,
        isPrivate: true
    },
    {
        path: '*',
        page: NotFoundPage
    }
]