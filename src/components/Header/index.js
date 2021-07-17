import React from "react";

import tmdbImg from "../../images/tmdb.svg";
import { Wrapper, Content, TMDBLogoImg } from "./Header.styles";

const Header = () => (
    <Wrapper>
        <Content>
            <TMDBLogoImg src={tmdbImg} alt="tmdb-logo" />
        </Content>
    </Wrapper>
)

export default Header;