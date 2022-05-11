import { useState } from 'react';
import { useQuery } from '@apollo/client';

import { ISSUES_QUERY } from '../../graphql/queries/issues';

import { IssuesItem } from '../IssuesItem';

import { Wrapper } from './style';

export const Issues = ({ owner, name }) => {

  const [elem, setElem] = useState();

  const { error, data } = useQuery(ISSUES_QUERY, {
    variables: {
      owner: owner,
      name: name,
      last: 50,
      first: 0
    }
  });
    

  if (error) {
    return <h1>Error Data ...</h1>;
  }

  return (
    <Wrapper>
      <h1>{owner}</h1>
      {data && data != null && data.repository.issues.edges.map(el => (
        <IssuesItem el={el} key={el.node.number} id={elem?.number} setElem={setElem}/>
        )
      )}
    </Wrapper>    
  );
}
