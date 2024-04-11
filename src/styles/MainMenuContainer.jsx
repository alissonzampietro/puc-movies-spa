import styled from "styled-components";

export const MainMenuContainer = styled.nav`
    ul {
        list-style: none;
        padding: 0;

        li {
            display: inline;
            margin: 0 5px;
            padding: 10px 20px;
            border: 1px solid #11acb8;
            border-radius: 2px 2px 2px 2px;
            transition: 200ms ease-out;

            &:hover {
                background-color: #11acb8;
                color: white;
                padding: 20px 30px;
                cursor: pointer;
                border-radius: 10px;
                font-weight: bold;
            }
        }
    }
`