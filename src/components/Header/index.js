import React, { useContext } from "react";
import { Link } from "react-router-dom";

import tmdbImg from "../../images/tmdb.svg";
import { Wrapper, Content, TMDBLogoImg } from "./Header.styles";
// Context
import { Context } from "../../context";

const Header = () => {
    const [user] = useContext(Context);
    console.log(user);

    return (
    <Wrapper>
        <Content>
            <Link to="/">
                <TMDBLogoImg src={tmdbImg} alt="tmdb-logo" />
            </Link>
            {user ? (
                <span>Welcome {user.username}</span>
            ) : (
                <Link to="/login">
                    <span>Log in</span>
                </Link>
            )}
        </Content>
    </Wrapper>
)}

export default Header;