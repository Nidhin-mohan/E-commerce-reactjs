import axios from 'axios';
import React,{useState, useEffect, createContext, useContext} from 'react'

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
    //eslint-disable-next-line
  }, []);

  //default axios
  // axios.defaults.headers.common["Authorization"] = auth?.token;

   axios.defaults.headers.common[
     "Authorization"
   ] = `Bearer ${auth.token}`;

  
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
}

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };