import { useState } from 'react';
import MobileMenu from './components/MobileMenu';
import TopBar from './components/Topbar';
import Form from './components/section/Form';
import styled from 'styled-components';
import Product from './components/section/Product';
import Profile from './components/section/Profile';
import Skill from './components/section/Skill';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SMainContaner>
      <TopBar setIsOpen={setIsOpen} />
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Profile id='profile' />
      <Skill id='skill' />
      <Product id='product' />
      <Form id='form' />
    </SMainContaner>
  );
}

const SMainContaner = styled.div`
  width: 100%;
`;

export default App;
