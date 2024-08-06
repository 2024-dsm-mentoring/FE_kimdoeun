import styled from 'styled-components';

const Header = styled.div`
  position: absolute;
  width: 88px;
  height: 28px;
  left: 360px;
  top: 67px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #999999;
`;

const Title = styled.div`
  position: absolute;
  width: 126px;
  height: 28px;
  left: 508px;
  top: 67px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #555555;
`;

const Arrow = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 468px;
  top: 71px;
  background: #999999;
`;

export { Header, Title, Arrow };
