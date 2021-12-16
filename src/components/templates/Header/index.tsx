import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import * as S from "./styles";

function Header() {
  const [path, setPath] = useState<string>();
  const location = useLocation();

  useEffect(() => {
    location.pathname.slice(1) !== ""
      ? setPath(location.pathname.slice(1))
      : setPath("today");
  }, [location]);

  return (
    <S.HeaderDiv className={path}>
      <Link to="/all">ALL</Link>
      <Link to="/">TODAY</Link>
      <Link to="/conclued">COMPLETED</Link>
    </S.HeaderDiv>
  );
}

export { Header };
