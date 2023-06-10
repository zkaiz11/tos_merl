import { createContext, useState, useRef } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import api from "../api/api";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const errRef = useRef();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(
        "/login",
        JSON.stringify({ username: username, password: password }),
        {
          headers: {
            "Content-Type": "application/json",
            withCredential: true,
          },
        }
      );
      const userInfo = response?.data?.UserInfo;
      const accessToken = response?.data?.access_token;
      localStorage.setItem("accessToken", JSON.stringify(accessToken));
      setAccessToken(accessToken);
      setAuth({ userInfo });
      setIsLoggedIn(true);
      setUsername("");
      setPassword("");
      navigate("/content/home", { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const user = {
        username,
        password,
        firstName,
        lastName,
        phoneNumber,
        gender: "female" ? true : false,
        dateOfBirth,
      };
      const response = await api.post("/register", JSON.stringify(user), {
        headers: {
          "Content-Type": "application/json",
          withCredential: true,
        },
      });
      const userInfo = response?.data?.UserInfo;
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ userInfo, accessToken, roles });
      setUsername("");
      setPassword("");
      setDateOfBirth("");
      setPhoneNumber("");
      setFirstName("");
      setLastName("");
      setGender("");
      navigate("/account/login", { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing User Information");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else if (err.response?.status === 409) {
        setErrMsg("User already existed");
      } else {
        setErrMsg("Sign Up Failed");
      }
      errRef.current.focus();
    }
  };

  const value = { 
    auth, 
    setAuth, 
    isLoggedIn, 
    setIsLoggedIn,
    username,
    setUsername,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phoneNumber,
    setPhoneNumber,
    gender,
    setGender,
    dateOfBirth,
    setDateOfBirth,
    errMsg,
    setErrMsg,
    errRef, 
    handleLogin, 
    handleSignup,
    navigate,
    accessToken,
    setAccessToken,
   };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataContext;
