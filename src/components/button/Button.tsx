import { Link } from "react-router-dom";

type PropsType = {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  bg?: string;
  isLink?: boolean;
  toLink?: string;
  radius?: string;
  textColor?: string,
  border?: string,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
};

const Button = ({ children, width, bg, isLink, toLink, radius, height, textColor, onClick, border }: PropsType) => {
  return (
    <>
      {isLink && toLink ? (
        <Link to={toLink}>
          <button onClick={onClick} className={`${width} ${bg} ${radius} ${height} ${textColor} ${border}`}>{children}</button>
        </Link>
      ) : (
        <button onClick={onClick} className={`${width} ${bg} ${radius} ${height} ${textColor} ${border}`}>{children}</button>
      )}
    </>
  );
};

export default Button;
