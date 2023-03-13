import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function AdminRoute() {
  const REACT_APP_URL = process.env.REACT_APP_URL;
  const [ok, setOk] = useState(false);
  const [auth ] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(`${REACT_APP_URL}/api/v1/auth/profile`);
      if (res.data.user?.role === "ADMIN") {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner path="" />;
}
