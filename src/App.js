import { useState } from 'react';
import MobileMenu from './components/MobileMenu';
import TopBar from './components/Topbar';
import Form from './components/section/Form';
import styled from 'styled-components';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SMainContaner>
      <TopBar setIsOpen={setIsOpen} />
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Form />
    </SMainContaner>
  );
}

const SMainContaner = styled.div`
  width: 100%;
`;

export default App;
