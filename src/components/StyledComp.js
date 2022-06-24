import { Component } from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  width:100px;
  height:100px;
  padding: 1em;
  border-radius: 10px;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const NavBar = styled.section`
  padding: 1em;
  background: red;
`;

const Row = styled.section`
  display: flex;
`;
const Column = styled.section`
  ${(props) =>
    props.flex &&
    css`
      flex: ${props.flex};
    `}
`;

const Wrapper = styled.section`
  padding: 1em;

  ${(props) =>
    props.rect &&
    css`
      border-radius: 10px;
      background: papayawhip;
    `}
`;

export default class StyledComp extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <>
        <Wrapper>
          <Wrapper>
            <Wrapper rect>
              <Title>Navbar</Title>
            </Wrapper>
          </Wrapper>
          <Row>
            <Column flex="30%">
              <Wrapper>
                <Wrapper rect>
                  <Title>Sidebar</Title>
                </Wrapper>
              </Wrapper>
            </Column>
            <Column flex="70%">
              <Wrapper>
                <Wrapper rect>
                  <Title> {this.state.count}</Title>
                </Wrapper>
              </Wrapper>
            </Column>
          </Row>
          <center>
            <Button
              onClick={() => this.setState({ count: this.state.count + 1 })}
            >
              <Title>+</Title>
            </Button>
            <Button
              onClick={() => this.setState({ count: this.state.count - 1 })}
            >
              <Title>-</Title>
            </Button>
          </center>
        </Wrapper>
      </>
    );
  }
}
