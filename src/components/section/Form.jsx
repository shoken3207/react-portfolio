import React, { useState } from 'react';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';
import { Button } from '@mui/material';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [concat, setConcat] = useState('');

  const handleChange = (e, setFunc) => {
    e.preventDefault();
    setFunc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    if (!name || !email || !concat) return;
  };

  const handleClear = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setName('');
    setEmail('');
    setConcat('');
  };
  return (
    <SContainer>
      <div></div>
      <SContent>
        <SSectionTitle>お問い合わせ</SSectionTitle>
        <SSectionDesc>
          このサイトについて質問や疑問点がありましたら、下記フォームをご利用ください。
        </SSectionDesc>
        <SForm onSubmit={(e) => handleSubmit(e)}>
          <SInput
            onChange={(e) => handleChange(e, setName)}
            require
            type='text'
            placeholder='名前を入力'
            vaule='aaa'
          />
          <SInput
            onChange={(e) => handleChange(e, setEmail)}
            require
            type='email'
            placeholder='メールアドレスを入力'
            vaule={email}
          />
          <STextArea
            onChange={(e) => handleChange(e, setConcat)}
            placeholder='問い合わせ内容を入力'
            require
            type='text'
            rows='8'
            cols='30'
            vaule={concat}
          />
          <SButtonGroup>
            <Button
              onClick={(e) => handleClear(e)}
              disabled={!name && !email && !concat}
              variant='contained'
              color='error'
              size='large'
              startIcon={<ClearIcon />}
            >
              取り消す
            </Button>
            <Button
              onClick={(e) => handleSubmit(e)}
              disabled={!name || !email || !concat}
              variant='contained'
              color='primary'
              size='large'
              startIcon={<SendIcon />}
            >
              送信する
            </Button>
          </SButtonGroup>
        </SForm>
      </SContent>
    </SContainer>
  );
};

const SContainer = styled.div`
  width: 100;
  height: 100vh;
  background-image: linear-gradient(
    90deg,
    rgba(226, 207, 255, 1),
    rgba(251, 253, 191, 1)
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SContent = styled.div`
  width: 90%;
  max-width: 550px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 2.8rem;
`;

const SSectionTitle = styled.h2`
  width: 100%;
  color: #424242;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 550;
`;

const SSectionDesc = styled.p`
  font-size: 0.9rem;
  color: #403e3e;
`;

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

const SInput = styled.input`
  padding: 0.7rem;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 10px;
`;

const STextArea = styled.textarea`
  padding: 0.7rem;
  font-size: 1rem;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 10px;
`;

const SButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1.5rem;
  align-items: center;
`;

export default Form;
