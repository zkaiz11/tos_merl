import ErrorPage from './routes/Errorpage';
import { Root } from './routes/root';
import Login from './components/Login';
import Content from './components/Content';
import Welcome from './components/Welcome';
import Watch from './components/Watch';
import Home from './components/Home';
import Account from './components/Account';
import AccountSetting from './components/AccountSetting';
import Signup from './components/Signup';
import EditProfile from './components/EditProfile';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Protected from './routes/Protected';
import DataContext from './contexts/DataContext';
import { useContext, useEffect, useState } from 'react';


const App = () => {
    const {isLoggedIn, setIsLoggedIn, setAccessToken} = useContext(DataContext);
    useEffect(()=>{
        const accessToken = JSON.parse(localStorage.getItem('accessToken'));
        if (accessToken !== null) {
            setAccessToken(accessToken);
            setIsLoggedIn(true);
        }
    },[])
  return (
    <Routes>
        <Route
        path="/"
        element={<Root/>}
        errorElement={<ErrorPage />}
        >
            <Route index element={<Welcome/>} />
            <Route
                path='/account'
                element={<Account />}
                errorElement={<ErrorPage />}
            >
                <Route index element={<AccountSetting/>}>
                </Route>
                <Route
                path='/account/login'
                element={<Login/>}
                ></Route>
                <Route
                path='/account/signup'
                element={<Signup/>}
                ></Route>
                <Route
                path='/account/profile'
                element={
                    <Protected >
                        <EditProfile/>
                    </Protected>
                }
                ></Route>
            </Route>
            <Route element={<Protected />}>
                <Route path='/content' element={<Content/>}>
                    <Route index element={<Home/>}></Route>
                    <Route
                    path='/content/home'
                    element={<Home/>}
                    >
                    </Route>
                    <Route path='/content/watch'
                    element={<Watch/>}
                    >
                </Route>
            </Route>
            </Route>
        </Route>
    </Routes>
  )
}

export default App