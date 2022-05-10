import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import GlobalStyles from "../globalStyles";

import { ISSUES_QUERY } from '../graphql/queries/issues';

import { DialogGit } from '../components/Dialog';
import { Issues } from '../components/Issues';

const App = () => {
  const [state, setState] = useState({owner: '', name: ''})

  const addRepository = (owner, name) => {
    setState({owner, name})
  }

  console.log(state)
  
  return (
    <>
      <GlobalStyles />
      <DialogGit addRepository={addRepository}/>
      { state.owner && <Issues owner={state.owner} name={state.name}/>}
    </>
  );
}

export default App;