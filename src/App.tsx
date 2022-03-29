import React from 'react';
import MultiProvider from 'another-multi-provider';
import HelloPage from '~/pages/HelloPage';
import Wrapper from '~/components/common/Wrapper';
import { CommonModalProvider } from './contexts/commonModal';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ByePage from './pages/ByePage';
import WarnPage from './pages/WarnPage';

function App() {
  return (
    <MultiProvider providers={[CommonModalProvider]}>
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HelloPage />} />
            <Route path="/bye" element={<ByePage />} />
            <Route path="/warn" element={<WarnPage />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </MultiProvider>
  );
}

export default App;
