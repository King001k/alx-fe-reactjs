import React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <UserProfile name="Kingsley" age={24} bio="Front-end developer and tech enthusiast." />
      <UserProfile name="Ada" age={22} bio="UI/UX Designer who loves minimalism." />
    </main>
  );
}

export default MainContent;

