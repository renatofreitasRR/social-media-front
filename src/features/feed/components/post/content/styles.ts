import styled from 'styled-components';

export const Container = styled.div`
    line-height: 1.6;
    color: ${props => props.theme.color300};
    margin-top: 1.5rem;

    p {
        margin-top: 1rem;
    }

    a{
        margin-top: 1rem;
        font-weight: bold;
        color: ${props => props.theme.primary};
        text-decoration: none;

        :hover{
            color: ${props => props.theme.primaryLight};
        }
    }
`;