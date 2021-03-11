import React, { useState } from 'react';

import {
  Button, Form, Header, Message, Segment
} from 'semantic-ui-react';

const Login = () => {
  const [prova, setProva] = useState(false);

  return (
    <main style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'
    }}
    >
      <div style={{ minWidth: '40%' }}>
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input fluid icon="user" iconPosition="left" placeholder="E-mail address" />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message info>
          New to us?
          {' '}
          <a href="#c">Sign Up</a>
        </Message>
      </div>
    </main>
  );
};
export default Login;
