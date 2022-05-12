import React from 'react';

import { ViewComponent, Wrapper, Title, Body, Date, Block, Author, ST } from './style';

import { AddComments } from '../AddComments';

import { useSelector } from "react-redux";

import { Comments } from '../Comments';

import { useQuery } from '@apollo/client';

import { ISSUES_QUERY_COMMENTS } from '../../graphql/queries/issuesComments';

export const ViewIssues = ({ owner, name }) => {
  const id = useSelector(state=>state);
   
  const { loading, error, data } = useQuery(ISSUES_QUERY_COMMENTS, {
    variables: {
      owner: owner,
      name: name,
    },
    pollInterval: 500,
  });

  let ussuesQwestion;
  if (typeof id == 'number') ussuesQwestion = data?.repository.issues.edges.filter(el => +el.node.number === id)[0].node;
  const comments = ussuesQwestion?.comments.edges;

  if (!ussuesQwestion?.title) return null;
  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <ViewComponent>
      <Wrapper>
        <Title>{ussuesQwestion.title}</Title>
        <Body>{ussuesQwestion.body}</Body>
        <Date>{ussuesQwestion.createdAt.split(/[A-Z]/g).join(' ')}</Date>
        <Block>
          <Author>{ussuesQwestion.author.login}</Author>
          <ST>{ussuesQwestion.state}</ST>
        </Block>
      {!!comments.length && <Comments comments={comments} />}
      </Wrapper>
      <AddComments owner={owner} name={name}/>
    </ViewComponent>  
    
  );
}
