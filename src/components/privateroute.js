import { Navigate, Outlet } from "react-router-dom";


export const PrivateUser = () => {
  return <>{!JSON.parse(localStorage.getItem('role') === 'user')  ? <Navigate to="/" />:<Outlet/> }</>;
};

export const Privateadmin = () => {
  //jika role admin maka akan diarahkan ke halaman incoming
  return <>{!JSON.parse(localStorage.getItem("role")  === "admin") ? <Navigate to="/incoming" /> : <Outlet/> }</>;

}