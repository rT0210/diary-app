import { NavLink, Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Nav from "./header/nav/Nav";

const Layout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header>
        <Nav>
          <NavLink to={"/"}>#заглушка</NavLink>
        </Nav>
      </Header>
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
