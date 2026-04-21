import { NavLink, Outlet } from "react-router-dom";
import Header from "../layout/header/Header";
import Nav from "../layout/header/nav/Nav";

const SimpleLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header>
        <Nav>
          <NavLink to={"/"}>сохранить</NavLink>
          <NavLink to={"/"}>главная</NavLink>
          <NavLink to={"/"}>главная</NavLink>
        </Nav>
      </Header>
      <Outlet />
    </div>
  );
};

export default SimpleLayout;
