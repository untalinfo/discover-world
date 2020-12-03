import React from 'react'
import { Content, Wrapper } from '../assets/styles/Filter'

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