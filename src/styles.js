import styled from 'styled-components';
export const Forn = styled.div`
width:100px;
position:absolute;
top: 14%;
left: 40%;
`
export const Btn = styled.button`
    position:absolute;
    top: 120%;
    left:130%;
    background:#00799B;
    transform: translate(-52%,-52%);
    color: #fff;
    padding:12px 30px;
    border: none;
    font-size:20px;
    letter-spacing:uppercase;
    box-shadow: 0 20px 50px rgba(0,0,0.5);
    width:110px;
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
width:40px;
position:relative;
bottom: 10px;
background:#C7531E;
border-radius:10px;
box-shadow:-1rem 0 3rem #000;
transition:0.4s ease-out;
position:relative;
margin-left:120px;
top: 10px;
&:nth-child(2){
   width :18%;

}
&:nth-child(1){
   width :23%;
}

&:not(:first-child) {
    margin-left: 25px;
}
&:hover {
    transform:translateY(-20px);
    transition: 0.5s ease-out;
}
&:hover ~& {
    position:relative;
    left:10px;
    transition: 0.5s ease-out;
}

`;


export const Title = styled.a`
color:#000;
font-weight:500;
position:absolute;
left: 20px;
text-align:center;
top:-20px;

`
export const Bar = styled.div`
position:absolute;
top: 10px;
left: 10px;
height:5px;
width:150px;
`
