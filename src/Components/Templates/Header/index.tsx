import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HeaderDiv } from "./styles";

function Header() {
    const [ path, setPath ] = useState<string>();
    const location = useLocation();

    useEffect( () => {
        location.pathname.slice(1) !== ''
        ? setPath(location.pathname.slice(1))
        : setPath('today')
    }, [ location ])

    return (
        <HeaderDiv className={path}>
            <Link to="/all">ALL</Link>
            <Link to="/">TODAY</Link>
            <Link to="/conclued">COMPLETED</Link>
        </HeaderDiv>
    )
}


export { Header };