import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../hooks/useStorage";
import { useNavigate } from "react-router";
import { resetRegister, registerUser } from "./RegisterSlice";

const RegisterLogics = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [visible, setVisible] = useState(true);


    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const registered = useSelector((state) => state.registered);
  
    // useEffect(() => {
    //   if (registered.status === "fulfilled") {
    //     getUser(registered.user);
    //     dispatch(resetLogin());
    //     navigate("/");
    //   }
    // }, [registered, dispatch, navigate]);
  
    // const handleRegister = (e) => {
    //   e.preventDefault();
    //   dispatch(loginUser({name, email, number, code, password, confirmPassword, password }));
    // };


    return [
        name,
        email,
        number,
        code,
        password,
        confirmPassword,
        visible
    ]
}

export default RegisterLogics;