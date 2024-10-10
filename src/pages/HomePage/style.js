import styled from "styled-components";
import Buttoncomponent from "../../components/Buttoncomponent/Buttoncomponent";

export const WrapperTypeProduct = styled.div`
display: flex;
align-items: center;
gap: 24px;
justify-content: flex-start;
height: 44px;
`

export const WrapperButtonMore = styled(Buttoncomponent)`
&: hover {
    color: #fff;
    background: rgb(13, 92, 182);
    span{
        color: #fff;
    }
}
width: 100%;
text-align: center;
`

export const WrapperProducts = styled.div`
display: flex;
gap: 14px;
margin-top: 20px;
flex-wrap: wrap;
`