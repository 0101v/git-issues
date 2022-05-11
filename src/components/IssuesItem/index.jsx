import React from 'react';

import { addIssuesElem } from '../../actions';

import { useDispatch } from 'react-redux'

import { Wrapper, PIssues, PDate, Block, Text, CommentsBlock, Count } from './style';

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
      <CommentsBlock>
        <svg aria-hidden="true" height="12" viewBox="0 0 16 16" version="1.1" width="12" data-view-component="true">
          <path d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"></path>
        </svg>
        <Count>{el.node.comments.edges.length}</Count>
      </CommentsBlock>
      <Block>
        <Text>{el.node.author.login}</Text>
        <Text>{el.node.state}</Text>
      </Block>
    </Wrapper>     
  )
}
