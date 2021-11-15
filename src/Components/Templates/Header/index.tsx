import { Link } from "react-router-dom";
import { HeaderDiv } from "./styles";

function Header() {
    return (
        <HeaderDiv>
            <Link to="/all">ALL</Link>
            <Link to="/">TODAY</Link>
            <Link to="/conclued">COMPLETED</Link>
        </HeaderDiv>
    )
}


export { Header };