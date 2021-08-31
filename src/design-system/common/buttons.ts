export const normal = `
font-size:.9rem;
width:120px;

padding:3px;
border-radius:5px;
color: white;
border:none;
cursor: pointer;

&:hover {
  transform: translateY(-0.3rem);

}
`;

export const fill = `

font-size:.9rem;
width:120px;
padding:3px;
border-radius:5px;
color: white;
border:none;
cursor: pointer;

&:hover {
  transform: translateY(-0.3rem);

}

`;

export const jump = `

@-webkit-keyframes bounce {
  0% {
transform: scale(1,1) translate(0px, 0px);
}

30%{
transform: scale(1,0.8) translate(0px, 10px); 
}

75%{
transform: scale(1,1.1) translate(0px, -25px); 
}

100% {
transform: scale(1,1) translate(0px, 0px);
}
}

.bounce {
text-align:center;
margin:0 auto;
margin-top:100px;
height:20px;
width:150px;
padding:20px;  
background:tomato;
-webkit-animation: bounce 0.75s infinite;
}

`;
