import React, { useRef } from 'react';
import './App.css';
import { AccountInput } from './components/AccountInput/AccountInput';
import { TestSuites } from './components/TestSuites/TestSuites';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  const testSuites = useRef<any>();
  const callTests = (accountId: any, key: any) => {
    return function () {
      if (testSuites.current) {
        testSuites.current.callTests(accountId, key);
      }
    }    
  }
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <AccountInput callTests={callTests}></AccountInput>
      <TestSuites ref={testSuites}></TestSuites>
    </div>
  );
}

export default App;
