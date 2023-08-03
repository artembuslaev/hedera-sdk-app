import React, { useRef, useState } from 'react'
import './AccountInput.css'

import hederaLogo from '../../../assets/hedera-logo.png'
import acc from '../../../assets/account.svg'
import pass from '../../../assets/pass.svg'

export function AccountInput(props: any) {
  const [account, setAccount] = useState('')
  const [key, setKey] = useState('')

  return (
    <form className="account-form">
      <img src={hederaLogo} className="hedera-logo"></img>
      <div className="account-form-group">
        <img className="account-form-icon" src={acc} />
        <input
          type="text"
          className="account-form-input"
          placeholder=" "
          value={account}
          onInput={(e: any) => setAccount(e.target.value)}
        ></input>
        <label className="account-form-label">Account Identifier</label>
      </div>
      <div className="account-form-group">
        <img className="account-form-icon" src={pass} />
        <input
          type="password"
          className="account-form-input"
          placeholder=" "
          value={key}
          onInput={(e: any) => setKey(e.target.value)}
        ></input>
        <label className="account-form-label">Account Private Key</label>
      </div>
      <button
        type="button"
        className="start-test-btn"
        onClick={props.callTests(account, key)}
      >
        Start Tests
      </button>
    </form>
  )
}
