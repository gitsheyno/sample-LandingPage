import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #ebfbff;
    padding:40px 0px;
    h1{
        color: ${({ theme }) => theme.colors.h1};
        &:hover{
        background-color: ${({ theme }) => theme.colors.header};
    }
    }    
` 

export const Nav = styled.nav`
display: flex;

width:100%;
align-items: center;
justify-content: space-between;
margin-bottom: 40px;

@media (max-width: ${({ theme }) => theme.mobile}){
    flex-direction: column;
}
`

export const Logo = styled.img`
@media (max-width: ${({ theme }) => theme.mobile}){
    margin-bottom: 40px;
}

`
export const Image = styled.img`
width: 375px;
margin-left:40px;
@media (max-width: ${({ theme }) => theme.mobile}){
    margin:40px 0 30px 0; 
}
`
