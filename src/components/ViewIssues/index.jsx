import React from 'react';

import { Wrapper, Title, Body, Date, Block, Author, ST } from './style';

import { useSelector } from "react-redux";

export const ViewIssues = () => {
  const data = useSelector(state=>state);
  if (!data?.title) return null;
  return (
    <Wrapper>
      <Title>{data.title}</Title>
      <Body>{data.body}</Body>
      <Date>{data.createdAt.split(/[A-Z]/g).join(' ')}</Date>
      <Block>
        <Author>{data.author.login}</Author>
        <ST>{data.state}</ST>
      </Block>
    </Wrapper>    
  );
}
