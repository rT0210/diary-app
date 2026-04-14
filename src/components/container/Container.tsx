type PropsType = {
    children: React.ReactNode,
    bg?: string,
    py?: string,
    height?: string,
    justify?: string,
    align?: string,
    direction?: string
}

const Container = ({children, bg, py, height, align, justify, direction} : PropsType) => {
    return (
        <div className={`max-w-7xl mx-auto flex ${bg} ${py} ${height} ${align} ${justify} ${direction}`}>
            {children}
        </div>
    )
}

export default Container