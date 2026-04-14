type PropsType = {
    children: React.ReactNode
}

const Nav = ({children} : PropsType) => {
    return (
        <nav className="flex gap-2 text-[20px]">
            {children}
        </nav>
    )
}
export default Nav