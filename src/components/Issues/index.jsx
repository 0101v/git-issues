import React from 'react';
import { useQuery } from '@apollo/client';


import { ISSUES_QUERY } from '../../graphql/queries/issues';

export const Issues = ({owner = 'sebastien-plutniak', name = 'archeofrag'}) => {
  
  const { loading, error, data } = useQuery(ISSUES_QUERY, {
    variables: {
      owner: owner,
      name: name,
      last: 20,
      first: 0
    }
  });
  console.log(data)

  

  if (error) {
    return <h1>Error Data ...</h1>;
  }

  return (
    
      <h1>123</h1>
    
  );
}
