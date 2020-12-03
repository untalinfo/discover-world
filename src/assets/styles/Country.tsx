import styled from 'styled-components';

const desktop = `@media (min-width: 1024px)`;
const tablet = `@media (min-width: 600px)`;

export const ContainerHeader = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 95vw;
    height: auto;

    a {
        text-decoration: none;
        color: #70a32d;
    }
`
export const ButtonBack = styled.div`
    width: 4.1rem;
    height: 4.1rem;
    justify-self: flex-start;
    font-size: 3.8rem;
`
export const ContainerInfoCountry = styled.main`
    width:70vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2% auto;

    ${desktop} {
        flex-wrap: nowrap;
    }
`
export const Information = styled.section`
    width:50%;
    height:100%;
    color: #0d2338;

    span {
        font-size: 1.8rem;
        font-style: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

        ${tablet} {
            font-size: 3.0rem;
        }

        ${desktop} {
            font-size: 7rem;
        }
    }

    ul {
        list-style: none;
        margin-left: 8%;
        font-size: 1rem;

        ${tablet} {
            font-size: 1.5rem;
        }

        ${desktop} {
            font-size: 2rem;
        }
    }

    li {
        margin: 2% 0;
    }
`
export const Flag = styled.section`
    width:50%;
    height:auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 5rem;

    ${tablet} {
            font-size: 10rem;
        }

        ${desktop} {
            font-size: 20rem;
        }
`