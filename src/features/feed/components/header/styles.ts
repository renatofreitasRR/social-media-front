import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   justify-content: center;
   height: 80px;
   background-color: ${props => props.theme.color700};
   padding: 1.25rem 0;
`;

export const Title = styled.strong`
    color: ${props => props.theme.white};
    font-size: 25px;
    font-weight: 700;
`;

