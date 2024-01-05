import { createContext, useReducer, useEffect } from "react";
import reducers from "./Reducers";

import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { setAuthToken } from "../utils/Apis";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    notify: {},
    auth: {},
  };

  const [state, dispatch] = useReducer(reducers, initialState);
  const { auth } = state;

  useEffect(() => {
    // const token = localStorage.getItem('token');
    const userInfo = Cookie.get("userInfo");
    const token = Cookie.get("token");
    if (token && userInfo) {
      setAuthToken(token);
      dispatch({
        type: "AUTH",
        payload: {
          token: token,
          user: JSON.parse(userInfo),
        },
      });
    }
  }, []);

  // useEffect(() => {
  //   if (auth.token) {
  //     if (auth.user.role === 'admin') {
  //       getData('user', auth.token).then((res) => {
  //         if (res.err)
  //           return dispatch({type: 'NOTIFY', payload: {error: res.err}});
  //         dispatch({type: 'ADD_USERS', payload: res.users});
  //       });
  //     }
  //   } else {
  //     dispatch({type: 'ADD_USERS', payload: []});
  //   }
  // }, [auth.token]);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
