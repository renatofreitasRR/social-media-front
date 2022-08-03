import styled from 'styled-components';

export const Container = styled.article`
    background-color: ${props => props.theme.color700};
    border-radius: 8px;
    padding: 2.5rem;

    & + &{
        margin-top: 2rem;
    }
`;