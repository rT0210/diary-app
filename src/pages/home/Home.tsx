import Button from "../../components/button/Button"
import Container from "../../components/container/Container"

const Home = () => {
    return (
        <section className="bg-amber-200 min-h-screen">
            <Container direction="flex-col">
                <h1 className="mx-auto font-bold text-[20px]">Главная страница</h1>
                <Button isLink toLink="/addNewDay">Записать день</Button>
            </Container>
        </section>
    )
}
export default Home