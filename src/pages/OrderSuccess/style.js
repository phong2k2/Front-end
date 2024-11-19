import { Radio } from "antd";
import styled from "styled-components";

export const WrapperStyleHeader = styled.div`
background: rgb(255,255,255);
padding: 9px 16px;
border-radius: 4px;
display: flex;
align-items: center:
span {
    color: rgb(36,36,36);
    font-weight: 400;
    font-size: 13px;
}
`
export const WrapperValue = styled.div`
background: rgb(240, 248, 255);
border: 1px solid rgb(194, 255, 255);
padding: 10px;
width: fit-content;
border-radius: 6px;
margin-top: 6px;

`

export const WrapperContainer = styled.div`
width: 100%;
`
export const WrapperListOrder = styled.div`

`
export const WrapperItemOrder = styled.div`
display: flex;
align-items: center;
padding: 9px 16px;
background: #fff;
margin-top: 12px;
justify-content: center;
`
export const WrapperPriceDiscount = styled.span`
color: #999;
font-size: 12px;
text-decoration: line-through;
margin-left: 4px;    
`
export const WrapperCountOrder = styled.div`
display: flex;
align-items: center;
width:84px;
border: 1px solid #ccc;
border-radius: 4px;
`
export const WrapperRight = styled.div`
width: 320px;
margin-left: 20px;
display: flex;
flex-direction: column;
gap: 10px;
align-items: center;
`
export const WrapperInfo = styled.div`
padding: 17px 20px;
border-bottom: 1px solid #f5f5f5;
background: #fff;
border-top-right-radius: 6px;
border-top-left-radius: 6px;
width: 100%
`

export const WrapperItemOrderInfo = styled.div`
padding: 17px 20px;
border-bottom: 1px solid #f5f5f5;
background: #fff;
border-top-right-radius: 6px;
border-top-left-radius: 6px;
width: 100%;
display: flex;
justify-content: center;
`


export const WrapperTotal = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
padding: 17px 20px;
background: #fff;
border-top-right-radius: 6px;
border-top-left-radius: 6px;
`
export const WrapperRadio = styled(Radio.Group)`
margin-top: 6px;
  display: flex;
  flex-direction: column; 
  gap: 10px; 
  width: 500px;
  padding: 16px; 
  border: 1px solid #87CEEB; 
  border-radius: 4px; 
  background-color: rgb(240, 248, 255); 
  height: 100px;
  justify-content: center;
  font-weight: normal;
`
export const Label = styled.span`
color: #000;
font-size: 12px;
font-weight: bold;

`