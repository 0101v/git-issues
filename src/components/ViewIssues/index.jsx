import React from 'react';

import { ViewComponent, Wrapper, Title, Body, Date, Block, Author, ST } from './style';

import { useSelector } from "react-redux";

import { Comments } from '../Comments';

import { AddComments } from '../AddComments';

export const ViewIssues = () => {
  const data = useSelector(state=>state);
  console.log(data)
  if (!data?.title) return null;
  return (
    <ViewComponent>
      <Wrapper>
        <Title>{data.title}</Title>
        <Body>{data.body}</Body>
        <Date>{data.createdAt.split(/[A-Z]/g).join(' ')}</Date>
        <Block>
          <Author>{data.author.login}</Author>
          <ST>{data.state}</ST>
        </Block>
      <Comments />
      </Wrapper>
      <AddComments />
    </ViewComponent>  
    
  );
}
