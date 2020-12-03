import styled from 'styled-components';

const desktop = `@media (min-width: 1024px)`;
const tablet = `@media (min-width: 600px)`;

export const ContainerFilters = styled.section`
    width: 60vw;
    height: 50px;
    /* border-bottom: solid 0.2rem #004c5e; */
    margin: auto;
    display: flex;
    justify-content: space-between;
`;
export const ContainerDisplay = styled.main`
    width: 40vw;
    height: 45vh;
    overflow-y: scroll;
    margin: auto;
    text-align: center;

    p {
        font-size: 4rem;
    }

    a {
        text-decoration: none;
        font-size: 1rem;
        display: block;
        font-size: 0.3rem;
        font-style: normal;
        color: #0d2338;

        &:hover {
            font-size: 3.4rem;
            color: #70a32d;
        }

        ${tablet} {
            font-size: 2rem;
        }

        ${desktop} {
            font-size: 3rem;
        }
    }
`;