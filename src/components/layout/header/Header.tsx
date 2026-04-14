import { NavLink } from "react-router-dom";
import Logo from "./logo/Logo";
import Nav from "./nav/Nav";
import Container from "../../container/Container";

const Header = () => {
  return (
    <header className="bg-red-500">
      <Container justify="justify-between" height="h-20" align="items-center" py="px-4">
        <Logo />
        <Nav>
          <NavLink to={"/"}>главная</NavLink>
          <NavLink to={"/"}>главная</NavLink>
          <NavLink to={"/"}>главная</NavLink>
        </Nav>
      </Container>
    </header>
  );
};
export default Header;
