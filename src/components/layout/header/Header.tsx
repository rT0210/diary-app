import Logo from "./logo/Logo";
import Container from "../../container/Container";

type PropsType = {
  bg?: string,
  children: React.ReactNode
}

const Header = ({bg = "bg-white", children} : PropsType) => {
  return (
    <header className={`${bg}`}>
      <Container justify="justify-between" height="h-20" align="items-center" py="px-4">
        <Logo />
        {children}
      </Container>
    </header>
  );
};
export default Header;
