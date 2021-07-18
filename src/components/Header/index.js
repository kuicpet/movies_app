import React from "react";
import { Link } from "react-router-dom";

import tmdbImg from "../../images/tmdb.svg";
import { Wrapper, Content, TMDBLogoImg } from "./Header.styles";

const Header = () => (
    <Wrapper>
        <Content>
            <Link to="/">
                <TMDBLogoImg src={tmdbImg} alt="tmdb-logo" />
            </Link>
        </Content>
    </Wrapper>
)

export default Header;