import styled from 'styled-components';

export const Container = styled.aside`
    background: ${props => props.theme.color700};
    color: ${props => props.theme.white};
    border-radius: 8px;
    overflow: hidden;

    img {
        width: 100%;
        height: 72px;
        object-fit: cover;
    }
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        box-sizing: initial;
        width: 3rem;
        height: 3rem;
        border-radius: 8px;
        border: 4px solid ${props => props.theme.color700};
        outline: 2px solid ${props => props.theme.color400};
        margin-top: -2rem;
    }

    strong{
        margin-top: 1rem;
        color: ${props => props.theme.color100};
        line-height: 1.6;
    }

    span{
        font-size: 0.875rem;
        color: ${props => props.theme.color400};
        line-height: 1.6;
    }
`;

export const Footer = styled.footer`
    border-top: 1px solid ${props => props.theme.color600};
    margin-top: 1.5rem;
    padding: 1.5rem;

    a {
        text-decoration: none;
        background: transparent;
        color: ${props => props.theme.primary};
        border: 1px solid ${props => props.theme.primary};
        border-radius: 8px;
        height: 50px;
        padding: 0 1.5rem;
        font-weight: bold;
        display: block;

        display: flex;
        align-items: center;
        justify-content: center;

        gap: 0.75rem;

        transition: color 0.2s, background-color 0.2s;

        :hover{
            background-color: ${props => props.theme.primary};
            color: ${props => props.theme.white}
        }
    }

`;



