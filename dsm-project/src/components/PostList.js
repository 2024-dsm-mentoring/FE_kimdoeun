import React from 'react';
import styled from 'styled-components';

const PostList = () => {
  return (
    <PostListContainer>
      {/* 게시글 목록 */}
    </PostListContainer>
  );
};

const PostListContainer = styled.div`
  position: absolute;
  width: 88px;
  height: 28px;
  left: 360px;
  top: 67px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 18px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #999999;
`;

export default PostList;
