import React from 'react';
import styled from 'styled-components';

const EditPost = () => {
  return (
    <EditPostContainer>
      <Label>제목</Label>
      <Input type="text" placeholder="제목" />
      <Label>내용</Label>
      <Textarea placeholder="내용"></Textarea>
      <ButtonContainer>
        <SaveButton>저장</SaveButton>
        <CancelButton>취소</CancelButton>
      </ButtonContainer>
    </EditPostContainer>
  );
};

const EditPostContainer = styled.div`
  position: absolute;
  width: 1200px;
  height: 50px;
  left: 360px;
  top: 193px;
  background: #EEEEEE;
  border-radius: 4px;
  padding: 20px;
`;

const Label = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-size: 18px;
  line-height: 25px;
  color: #343434;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #CCCCCC;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #CCCCCC;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SaveButton = styled.button`
  padding: 10px 20px;
  background: #3D8AFF;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 15px;
  line-height: 20px;
  cursor: pointer;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  background: #FF4646;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 15px;
  line-height: 20px;
  cursor: pointer;
`;

export default EditPost;
