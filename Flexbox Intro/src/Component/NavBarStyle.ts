import styled from "styled-components";

const Heading = styled.div`
  $color-primary: #010221;
  $color-secondary: #B7BF99;
  $color-tertiary: #C43302;

  background-color: #010221;
  border-color: #B7BF99;
  color: #C43302;
  span{
    color: #eee;
    &:hover{
      font-size: 200%;
      color: #B7BF99;
    }
  }
`

export default Heading;