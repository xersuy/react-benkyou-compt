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
            <Route path="/hello" element={<HelloPage />} />
            <Route path="/bye" element={<ByePage />} />
            <Route path="/warn" element={<WarnPage />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </MultiProvider>
  );
}

export default App;

{
  /* <Route path="/" element={<App />}> */
}
{
  /* <Route index element={<Home />} /> */
}
{
  /* <Route path="teams" element={<Teams />}> */
}
{
  /* <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} /> */
}
