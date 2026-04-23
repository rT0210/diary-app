import type { CSSProperties } from "react"

type PropsType = {
    children: React.ReactNode,
    text: string,
    className?: string,
    style?: CSSProperties
    onClick?: () => void
}

const TypographyItem = ({children, text, className, onClick, style} : PropsType) => {
    return (
        <div className="flex justify-between items-center">
          <p className="font-bold max-[440px]:text-[6px] text-[10px] md:text[16px] lg:text-[20px]">{text}</p>
          <div className={className} onClick={onClick} style={style}>
            {children}
          </div>
        </div>
    )
}
export default TypographyItem