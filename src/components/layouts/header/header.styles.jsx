import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const OptionLink = styled(Link)` 
    padding: 10px 10px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`
