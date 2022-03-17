import React from 'react';

import HelloPage from '~/pages/HelloPage'
import Wrapper from '~/components/common/Wrapper';
import MultiProvider from './contexts/multiProvider';

function App() {
  console.log('!!!')
  console.log('!!!')
  console.log('!!!')
  return (

<MultiProvider 
    providers={[
    ]}> 
  

    <Wrapper>
     

      <HelloPage />
    </Wrapper>

</MultiProvider>

  );
}

export default App;
