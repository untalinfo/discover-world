import React from 'react'
import styled from 'styled-components'


const Content = styled.div`
    visibility: hidden;
    width: 15vw;
    height: auto;
    position: absolute;
    max-height: 40vh;
    font-size: 1.8rem;
    border-radius: 1.5rem;
    border: solid 0.3rem #004c5e;
    margin-top: 10%;
    background-color:rgba(57, 200, 236, 0.938);
    overflow-y: scroll;

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
    position: relative;

    &:hover{
        height: 20vh;

        ${Content} {
            visibility: visible;
            position: relative;
        }

        p {
            border-bottom: solid 0.4rem #004c5e;
            width: 16vw;
        }
    }

    p {
        font-size: 2.4rem;
    }
`
interface IProps {
    name: string
    options: []
    onSelect: Function
}



function Filter(props: IProps) {

    const options = () => {
        const { name, options, onSelect } = props;

        return options.map((option: { name: string }, index: number) => {
            return <li key={index} onClick={() => onSelect(name.toLowerCase(), option.name)} >{option.name}</li>
        })
    }
    return (
        <Wrapper>
            <p> {props.name} ⋮ </p>
            <Content>
                <ul>
                    {options()}
                </ul>
            </Content>
        </Wrapper>
    )
}

export default Filter;