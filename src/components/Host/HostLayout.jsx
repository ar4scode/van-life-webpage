import { Outlet } from "react-router";
import Header from "../Header";
import HostNavbar from "./HostNavbar";

const HostLayout = () => {
  return (
    <>
      <Header />
      <HostNavbar />
      <Outlet /> 
    </>
  )
}

export default HostLayout;
