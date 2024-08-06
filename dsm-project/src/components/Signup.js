import React from 'react';
import styled from 'styled-components';

const Signup = () => {
  return (
    <SignupContainer>
      <SignupForm>
        <FormTitle>회원 가입</FormTitle>
        <FormField>
          <Label htmlFor="username">사용자 이름</Label>
          <Input type="text" id="username" placeholder="사용자 이름" />
        </FormField>
        <FormField>
          <Label htmlFor="email">이메일</Label>
          <Input type="email" id="email" placeholder="이메일" />
        </FormField>
        <FormField>
          <Label htmlFor="password">비밀번호</Label>
          <Input type="password" id="password" placeholder="비밀번호" />
        </FormField>
        <FormField>
          <Label htmlFor="confirmPassword">비밀번호 확인</Label>
          <Input type="password" id="confirmPassword" placeholder="비밀번호 확인" />
        </FormField>
        <SubmitButton type="submit">가입하기</SubmitButton>
      </SignupForm>
    </SignupContainer>
  );
};

const SignupContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 40px;
  background: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h1`
  font-family: 'Noto Sans', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: #121212;
  margin-bottom: 24px;
  text-align: center;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  color: #343434;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  color: #343434;
  border: 1px solid #CCCCCC;
  border-radius: 4px;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #3D8AFF;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #2D6FDB;
  }
`;

export default Signup;
