import React from 'react';

import { Wrapper, PIssues, PDate, Block, Text } from './style'

export const IssuesItem = ({ el, setId, id }) => {

  const onClick = () => {
    setId(el.node.number);
  }

  return (
        <Wrapper onClick={onClick} theme={el.node.number === id ? '#f8f8ff' : 'white'}>
          <PIssues>{el.node.title}</PIssues>
          <PDate>{el.node.createdAt.split(/[A-Z]/g).join(' ')}</PDate>
          <Block>
            <Text>{el.node.author.login}</Text>
            <Text>{el.node.state}</Text>
          </Block>
        </Wrapper>     
  )
}
