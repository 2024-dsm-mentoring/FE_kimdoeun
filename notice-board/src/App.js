import React from 'react';
import PostList from './components/PostList.js';
import PostDetail from './components/PostDetail';
import EditPost from './components/EditPost';

function App() {
  return (
    <AppContainer>
      <PostList />
      <PostDetail />
      <EditPost />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  position: relative;
  width: 1920px;
  height: 1080px;
  background: #FFFFFF;
`;

export default App;
