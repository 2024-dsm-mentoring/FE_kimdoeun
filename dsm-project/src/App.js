import React from 'react';
import Login from './components/Login';
import Header from './components/Button';
import Container from './components/Container';
import Signup from './components/Signup';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import EditPost from './components/EditPost';
import styled from 'styled-components';

function App() {
  return (
    <AppContainer>
      <Login>
        
      </Login>
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
