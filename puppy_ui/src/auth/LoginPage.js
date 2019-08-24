import React from "react";
import styled from "styled-components";
import { Card } from "antd";
import { LoginForm } from "./LoginForm";

const CardGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  width: 23%;
`;

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { history } = this.props;
    return (
      <CardGrid>
        <StyledCard title="Please Login">
          <LoginForm history={history}/>
        </StyledCard>
      </CardGrid>
    );
  }
}
