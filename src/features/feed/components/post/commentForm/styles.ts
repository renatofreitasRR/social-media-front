import styled from 'styled-components';

export const Container = styled.form`
    width: 100%;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid ${props => props.theme.color600};

    strong{
        line-height: 1.6rem;
        color:  ${props => props.theme.color100};
    }

    textarea{
        width: 100%;
        background: ${props => props.theme.color900};
        border: 1px solid ${props => props.theme.color900};
        resize: none;
        height: 6rem;
        padding: 1rem;
        border-radius: 8px;
        color: ${props => props.theme.color100};
        line-height: 1.4rem;
        margin-top: 1rem;

        :focus{
            outline: transparent;
            box-shadow:  0 0 0 2px ${props => props.theme.primary};
            border: 1px solid ${props => props.theme.primary};
        }
    }

    footer{
        visibility: hidden;
        max-height: 0;

    }
    
    :focus-within footer{
        visibility: visible;
        max-height: none;
    }

    button{
        cursor: pointer;
        padding: 1rem 1.5rem;
        margin-top: 1rem;
        border-radius: 8px;
        border: 0;
        background: ${props => props.theme.primary};
        color: ${props => props.theme.white};
        font-weight: bold;

        transition: background-color 0.1s;

        :hover{
            background: ${props => props.theme.primaryLight};
        }
    }
`;