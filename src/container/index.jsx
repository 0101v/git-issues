import { useState } from 'react';

import { DialogGit } from '../components/Dialog';
import { Issues } from '../components/Issues';
import { ViewIssues } from '../components/ViewIssues';

import { Wrapper } from './style';

export const Container = () => {
  const [state, setState] = useState({owner: '', name: ''})

  const addRepository = (owner, name) => {
    setState({owner, name})
  }
  
  return (
    <Wrapper>
      <DialogGit addRepository={addRepository}/>
      { state.owner && <Issues owner={state.owner} name={state.name} />}
      { state.owner && <ViewIssues owner={state.owner} name={state.name}/>}
    </Wrapper>
  );
}
