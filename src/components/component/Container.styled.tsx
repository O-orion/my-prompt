import styled from "styled-components";
import ContainerProps from "../../models/ContainerProps";

const Container = styled.div<ContainerProps>`
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'none'};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: ${(props) => props.color ? props.color : "#fff"};
    margin: ${(props) => props.margin ? props.margin : 0};
    padding: ${(props) => props.padding ? props.padding : 0};
`

export default Container;