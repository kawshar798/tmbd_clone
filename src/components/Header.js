import React from 'react';
import styled from 'styled-components';

import RMDBLogo from "./images/reactMovie_logo.png";
import TMDBLogo from "./images/tmdb_logo.svg";
import {StyledRMDBLogo,StyledHeader,StyledTMDBLogo} from "./styles/StyledHeader";

const Header = () => {
    return (
        <StyledHeader>
        <div className="header-content">
            <StyledRMDBLogo src={RMDBLogo} alt="Logo" />
            <StyledTMDBLogo src={TMDBLogo} alt="Logo" />
            
        </div>
        </StyledHeader>
    );
};

export default Header;