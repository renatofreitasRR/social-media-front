import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;
    
    img{
        box-sizing: initial;
        width: 3rem;
        height: 3rem;
        border-radius: 8px;
    }
`;

export const CommentBox = styled.div`
    flex: 1;
  
`;

export const CommentFooter = styled.div`
    margin-top: 1rem;

    button{
        background: transparent;
        border: 0;
        color: ${props => props.theme.color400};

        display: flex;
        align-items: center;
        cursor: pointer;

        :hover{
            color: ${props => props.theme.primary};
        }

        svg{
            margin-right: 0.5rem;
        }

        span{
            margin-left: 0.5rem;
        }
    }
`;

export const CommentContent = styled.div`
    background: ${props => props.theme.color600};
    border-radius: 8px;
    padding: 1rem;

    header{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        button{
            line-height: 0;
            cursor: pointer;
            background: transparent;
            border: 0;
            color: ${props => props.theme.color400};

            :hover{
                color: ${props => props.theme.danger}
            }
        }
    }

    p{
        margin-top: 1rem;
        color: ${props => props.theme.primary}
    }
`;


export const Author = styled.div`
    display: flex;
    flex-direction: column;

    strong{
        font-size: 0.875rem;
        line-height: 1.6;
        color: ${props => props.theme.white}
    }

    time{
        font-size: 0.75rem;
        line-height: 1.6;
        color: ${props => props.theme.color400}
    }
`;