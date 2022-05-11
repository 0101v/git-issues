import React from 'react';

import { addIssuesElem } from '../../actions';

import { useDispatch } from 'react-redux'

import { Wrapper, PIssues, PDate, Block, Text } from './style';

export const IssuesItem = ({ el, id, setElem }) => {
  
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(addIssuesElem(el.node));
    setElem(el.node)
  }

  return (
    <Wrapper onClick={onClick} theme={el.node.number === id ? 'gray' : 'white'}>
      <PIssues>{el.node.title}</PIssues>
      <PDate>{el.node.createdAt.split(/[A-Z]/g).join(' ')}</PDate>
      <Block>
        <Text>{el.node.author.login}</Text>
        <Text>{el.node.state}</Text>
      </Block>
    </Wrapper>     
  )
}
