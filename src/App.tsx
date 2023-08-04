import React, { useRef, useState } from 'react'
import './App.css'
import { AccountInput } from './components/AccountInput/AccountInput'
import { TestSuites } from './components/TestSuites/TestSuites'
import { ContractDeploy } from './components/ContractDeploy/ContractDeploy'
import { GlobalStyle } from './styles/GlobalStyle'

function App() {
  const testSuites = useRef<any>()
  const callTests = (accountId: any, key: any) => {
    return function () {
      if (testSuites.current) {
        testSuites.current.callTests(accountId, key)
      }
    }
  }

  const accountState = useState('')
  const keyState = useState('')

  const deployContract = (code: string) => {
    return function () {
      window.Main.sendMessage('deploy', {
        code,
        accountId: accountState[0],
        key: keyState[0],
      })
    }
  }
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <AccountInput
        accountState={accountState}
        keyState={keyState}
      ></AccountInput>
      {/* <TestSuites ref={testSuites}></TestSuites> */}
      <ContractDeploy deploy={deployContract}></ContractDeploy>
    </div>
  )
}

export default App
