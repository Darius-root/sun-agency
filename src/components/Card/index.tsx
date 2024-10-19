import CardProps from "@/types";
import styled from 'styled-components';
const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
`;
const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
`

function Card({ label, title, picture }: CardProps) {
     return (
       <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
          <CardLabel>{label}</CardLabel> 
          <CardImage src={picture} alt="freelance" />    
               <span>{title}</span>
       </div>
     )
   }
export default Card