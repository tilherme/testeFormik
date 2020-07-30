import styled from 'styled-components';
export const FormStyled = styled.div`
width: 100px;
margin-left:500px;
margin-top: 80px;
`
export const Btn = styled.button`
    position:absolute;
    top: 58%;
    left:52%;
    background:#0C002B;
    transform: translate(-52%,-52%);
    color: #fff;
    padding:12px 30px;
    border: none;
    font-size:20px;
    letter-spacing:uppercase;
    box-shadow: 0 20px 50px rgba(0,0,0.5);




&:before{
    content: '';
    position:absolute;
    top: 2px;
    left:2px;
    bottom: 2px;
    width:50%;
    background: rgba(255,255,255,0.05);
}
`

export const Container = styled.div`
position:absolute;
height:300px;
width:600px;
top:60px;
left:calc(50% - 300px);
display:flex;

`;
export const Card = styled.div`
display: flex;
height: 3.5px;
width:140px;
position:relative;
bottom: 10px;
background:#17141d;
border-radius:10px;
box-shadow:-1rem 0 3rem #000;
transition:0.4s ease-out;
position:relative;
margin-left:120px;
top: 10px;

&:not(:first-child) {
    margin-left: 20px;
}
&:hover {
    transform:translateY(-20px);
    transition: 0.4s ease-out;
}
&:hover ~& {
    position:relative;
    left:0px;
    transition: 0.5s ease-out;
}
`;


export const Title = styled.a`
color:#000;
font-weight:500;
position:absolute;
left: 20px;
top:-20px;

`
export const Bar = styled.div`
position:absolute;
top: 10px;
left: 10px;
height:5px;
width:150px;
`
