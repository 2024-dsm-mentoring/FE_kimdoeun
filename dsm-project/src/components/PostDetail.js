import React from 'react';
import styled from 'styled-components';

const PostDetail = () => {
  return (
    <PostDetailContainer>
      <PostTitle>
        {/* 게시글 제목 */}
      </PostTitle>
      <PostContent>
        {/* 게시글 내용 */}
      </PostContent>
    </PostDetailContainer>
  );
};

const PostDetailContainer = styled.div`
  position: absolute;
  width: 1200px;
  left: 360px;
  top: 353px;
`;

const PostTitle = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-size: 30px;
  line-height: 42px;
  color: #121212;
  margin-bottom: 16px;
`;

const PostContent = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  line-height: 26px;
  color: #343434;
  width: 1200px;
  height: 78px;
`;

export default PostDetail;
