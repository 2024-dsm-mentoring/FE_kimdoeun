import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  position: relative;
  width: 1920px;
  height: 1080px;
  background: #FFFFFF;
`;

const FormContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  left: 760px;
  top: 340px;
  background: #EEEEEE;
  border-radius: 4px;
  padding: 20px;
`;

const Title = styled.h1`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 42px;
  color: #121212;
  text-align: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 0 10px;
  font-family: 'Noto Sans';
  font-size: 16px;
  line-height: 26px;
  border: 1px solid #CCCCCC;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
  background: #3D8AFF;
  border: none;
  border-radius: 5px;
`;

const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <Title>로그인</Title>
        <Input type="text" placeholder="아이디" />
        <Input type="password" placeholder="비밀번호" />
        <Button>로그인</Button>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
