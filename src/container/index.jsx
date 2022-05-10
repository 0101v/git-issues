import { useState } from 'react';

import { DialogGit } from '../components/Dialog';
import { Issues } from '../components/Issues';

import { Wrapper } from './style';

export const Container = () => {
  const [state, setState] = useState({owner: '', name: ''})

  const addRepository = (owner, name) => {
    setState({owner, name})
  }

  console.log(state)
  
  return (
    <Wrapper>
      <DialogGit addRepository={addRepository}/>
      { state.owner && <Issues owner={state.owner} name={state.name}/>}
      <div>asdasd</div>
    </Wrapper>
  );
}
