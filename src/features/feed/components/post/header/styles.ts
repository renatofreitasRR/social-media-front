import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  time{
    font-size: 0.875rem;
    color: ${props => props.theme.color400}
  }
`;

export const Author = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
        box-sizing: initial;
        width: 3rem;
        height: 3rem;
        border-radius: 8px;
        border: 4px solid ${props => props.theme.color700};
        outline: 2px solid ${props => props.theme.color400};
    }

    div{
        display: flex;
        flex-direction: column;

        strong{
            display: block;
            color: ${props => props.theme.color100};
            line-height: 1.6rem;
        }

        span{
            display: block;
            color: ${props => props.theme.color400};
            font-size: 0.875rem;
            line-height: 1.6rem;
        }
    }
`;