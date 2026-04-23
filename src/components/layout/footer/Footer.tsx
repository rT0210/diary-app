import Container from "../../container/Container";

const Footer = () => {
  return (
    <footer className="h-20 bg-red-500 p-4">
      <Container align="items-center" height="h-full" justify="justify-between">
        <p className="font-bold">developer calendar</p>
        <p className="font-bold">2026</p>
      </Container>
    </footer>
  );
};
export default Footer;
