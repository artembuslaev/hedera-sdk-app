// import { Client } from '@hashgraph/sdk';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import './TestSuites.css';

interface ISuite {
    id: string;
    title: string;
    description: string;
}

const testSuites: ISuite[] = [{
    id: "AccountCreateTransaction",
    title: "Create Account",
    description: "Create Hedera Account"
}, {
    id: "AccountBalanceQuery",
    title: "Get Account Balance",
    description: "Get Hedera Account Balance"
}, {
    id: "TokenCreateTransaction",
    title: "Create Token",
    description: "Create Hedera Token"
}, {
    id: "TokenMintTransaction",
    title: "Mint Token",
    description: "Mint Hedera Token"
}]

export const TestSuites = React.forwardRef((props, ref) => {
    const [test, setTest] = useState({} as any);
    const [testStarted, setTestStarted] = useState(false);
    let tempState: any = useRef({});

    // useEffect(() => {
    //     (window as any).electron.subscribeTests((testId: string, result: boolean, error?: Error) => {
    //         tempState.current[testId] = result;
    //         setTest(Object.assign({}, tempState.current));
    //         if (error) {
    //             console.log(error);
    //         }
    //     });
    // }, [])

    // useImperativeHandle(ref, () => ({
    //     async callTests(accountId: any, key: any) {
    //         if (!testStarted) {
    //             setTestStarted(true);
    //         }
    //         tempState.current = {}
    //         setTest(tempState.current);
    //         setTimeout(() => (window as any).electron.startTests(accountId, key, testSuites.map(suite => suite.id)), 1000);
    //     }
    // }));

    return (
        <div className="test-suites">
            { testStarted ? testSuites.map((suite, index) => 
                test[suite.id] !== undefined ? <div key={suite.id} className={"test-suite " + (test[suite.id] ? 'complete' :'error')}>
                    <div className="test-suite-info">
                        <h3 className="title">{suite.title}</h3>
                        <p className="desc">{suite.description}</p>
                    </div>
                </div> : '') : 
                testSuites.map((suite, index) => 
                <div key={index} className="test-suite">
                    <div className="test-suite-info">
                        <h3 className="title">{suite.title}</h3>
                        <p className="desc">{suite.description}</p>
                    </div>
                </div>)
            }
            {/* {test[1] ? (
                <div className="test-suite">
                    <div className="test-suite-info">
                        <h3 className="title">Create Account</h3>
                        <p className="desc">Hedera account will be created</p>
                    </div>
                </div>
            ) : (
                ''
            )}
            {test[2] ? (
                <div className="test-suite">
                    <div className="test-suite-info">
                        <h3 className="title">Create Token</h3>
                        <p className="desc">Hedera token will be created</p>
                    </div>
                </div>
            ) : (
                ''
            )}
            {test[3] ? (
                <div className="test-suite">
                    <div className="test-suite-info">
                        <h3 className="title">Transfer Token</h3>
                        <p className="desc">Token will be transfered from one account to another</p>
                    </div>
                </div>
            ) : (
                ''
            )}
            {test[4] ? (
                <div className="test-suite">
                    <div className="test-suite-info">
                        <h3 className="title">Mint Token</h3>
                        <p className="desc">Mint Token Transaction</p>
                    </div>
                </div>
            ) : (
                ''
            )} */}
        </div>
    );
});