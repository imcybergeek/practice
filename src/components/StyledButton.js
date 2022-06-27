import React from "react";
import styled from "styled-components";

export default class StyledButton extends React.Component {
  render() {
    const StyledBtn = styled.button`
      background-color: #04aa6d;
      color: #ffffff;
      border-color: #04aa6d;
      font-size: 18px;
      font-family: "Source Sans Pro", sans-serif;
      padding-left: 19px;
      padding-right: 19px;
      border: 1px solid #cccccc;
      border-top-color: rgb(204, 204, 204);
      border-right-color: rgb(204, 204, 204);
      border-bottom-color: rgb(204, 204, 204);
      border-left-color: rgb(204, 204, 204);
      border-radius: 5px;
    `;

    return <StyledBtn>Click</StyledBtn>;
  }
}
