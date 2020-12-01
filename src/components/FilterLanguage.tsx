import React from 'react'
import styled from 'styled-components'


const Content = styled.div`
    visibility: hidden;
    width: 15vw;
    height: auto;
    position: absolute;
    max-height: 45vh;
    font-size: 1.8rem;
    border-radius: 1.5rem;
    border: solid .03rem #004c5e;
    margin-top: 6%;

    ul {
        list-style: none;
        margin: 3%;
    }

    &::before {
        content: "";
        left: 0;
        right: 0;
        position: absolute;
    }
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 16vw;
    text-align: center;
    color:#124c56;
    cursor: pointer;
    align-items: center;

    &:hover{
        border-bottom: solid 0.4rem #004c5e;

        ${Content} {
            visibility: visible;
            position: relative;
        }
    }
`
const Filter = styled.span`
    font-size: 2.4rem;
`

function FilterLanguage() {
    return (
        <Wrapper>
            <Filter> Languages </Filter>
            <Content>
                <ul>
                    <li>hola</li>
                    <li>hola</li>
                    <li>hola</li>
                    <li>hola</li>
                </ul>
            </Content>
        </Wrapper>
    )
}

export default FilterLanguage;