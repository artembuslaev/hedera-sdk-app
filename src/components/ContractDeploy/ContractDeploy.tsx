// import { Client } from '@hashgraph/sdk';
import React, { useRef, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { solidity } from '@replit/codemirror-lang-solidity'
import './ContractDeploy.css'
import styled from 'styled-components'

const solidityPreset = `pragma solidity >=0.4.22 <0.6.0;
pragma solidity ^0.5.6 ;
contract Ballot {

    struct Voter {
        uint weight;
        bool voted;
        uint8 vote;
        address delegate;
    }
    struct Proposal {
        uint voteCount;
    }

    address chairperson;
    mapping(address => Voter) voters;
    Proposal[] proposals;

    /// Create a new ballot with $(_numProposals) different proposals.
    constructor(uint8 _numProposals) public {
        chairperson = msg.sender;
        voters[chairperson].weight = 1;
        proposals.length = _numProposals;
    }

    /// Give $(toVoter) the right to vote on this ballot.
    /// May only be called by $(chairperson).
    function giveRightToVote(address toVoter) public {
        if (msg.sender != chairperson || voters[toVoter].voted) return;
        voters[toVoter].weight = 1;
    }

    /// Delegate your vote to the voter $(to).
    function delegate(address to) public {
        Voter storage sender = voters[msg.sender]; // assigns reference
        if (sender.voted) return;
        while (voters[to].delegate != address(0) && voters[to].delegate != msg.sender)
            to = voters[to].delegate;
        if (to == msg.sender) return;
        sender.voted = true;
        sender.delegate = to;
        Voter storage delegateTo = voters[to];
        if (delegateTo.voted)
            proposals[delegateTo.vote].voteCount += sender.weight;
        else
            delegateTo.weight += sender.weight;
    }

    /// Give a single vote to proposal $(toProposal).
    function vote(uint8 toProposal) public {
        Voter storage sender = voters[msg.sender];
        if (sender.voted || toProposal >= proposals.length) return;
        sender.voted = true;
        sender.vote = toProposal;
        proposals[toProposal].voteCount += sender.weight;
    }

    function winningProposal() public view returns (uint8 _winningProposal) {
        uint256 winningVoteCount = 0;
        for (uint8 prop = 0; prop < proposals.length; prop++) 
            if (proposals[prop].voteCount> winningVoteCount) {
                winningVoteCount = proposals[prop].voteCount;
                _winningProposal = prop;
            }
      }
  }

`

const DeployContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  position: relative;
`

const MirrorWrapper = styled.div`
  flex: 1;
  position: relative;
  max-height: 100%;
  max-width: 100%;
  overflow: auto;
`

export function ContractDeploy (props: any) {
const [code, setCode] = useState(solidityPreset)
//   const onChange = React.useCallback((value, viewUpdate) => {
//     setCode(value);
//   }, [])
  return (
    <DeployContainer>
      <MirrorWrapper>
        <CodeMirror
          value={solidityPreset}
          minWidth='500px'
          minHeight='500px'
          extensions={[solidity]}
          onChange={setCode}
        />
      </MirrorWrapper>
      <button onClick={props.deploy(code)}>Deploy</button>
    </DeployContainer>
  )
}
