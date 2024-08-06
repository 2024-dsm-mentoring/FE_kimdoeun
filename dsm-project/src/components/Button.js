import styled from 'styled-components';

const Button = styled.button`
  width: 56px;
  height: 20px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: ${props => props.primary ? '#FFFFFF' : '#3D8AFF'};
  background: ${props => props.primary ? '#3D8AFF' : '#FFFFFF'};
  border: 1px solid ${props => props.primary ? '#3D8AFF' : '#FF4646'};
  border-radius: 5px;
`;

export default Button;
