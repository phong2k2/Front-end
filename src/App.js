import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import Defaultcomponent from './components/Defaultcomponent/Defaultcomponent'
import { isJsonString } from './utils'
import { jwtDecode } from "jwt-decode";
import * as UserService from './services/Userservice'
import { useDispatch } from 'react-redux'
import { updateUser } from './redux/slides/userSlide'
import axios from 'axios'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const { storageData, decoded } = handleDecoded()
    if (decoded?.id) {
      handleGetDetailsUser(decoded?.id, storageData)
    }
  }, [])

  const handleDecoded = () => {
    let storageData = localStorage.getItem('access_token')
    let decoded = {}
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData)
      decoded = jwtDecode(storageData)
    }
    return { decoded, storageData }
  }

  UserService.axiosJWT.interceptors.request.use(async (config) => {
    // Do something before request is sent
    const currentTime = new Date()
    const { decoded } = handleDecoded()
    if (decoded?.exp < currentTime.getTime() / 1000) {
      const data = await UserService.refreshToken()
      config.headers['token'] = `Bearer ${data?.access_token}`
    }
    return config;
  }, (err) => {
    return Promise.reject(err);
  });

  //const handleGetDetailsUser = async (id, token) => {
  //const res = await UserService.getDetailsUser(id, token)
  //  dispatch(updateUser({ ...res?.data, access_token: token }))
  //}
  const handleGetDetailsUser = async (id, token) => {
    // console.log("Fetching user details for ID:", id);
    try {
      const res = await UserService.getDetailsUser(id, token);
      dispatch(updateUser({ ...res?.data, access_token: token }));
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };



  return (
    <div>

      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            const Layout = route.isShowHeader ? Defaultcomponent : Fragment
            return (
              <Route key={route.path} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              } />
            )
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App