import { useState } from 'react';

import { Wrapper } from './style';

import { useSelector } from "react-redux";

import { ADDCOMMENTS } from '../../graphql/mutations/addComment'
import { ISSUE_ID } from '../../graphql/queries/issueId'

import { useMutation, useQuery } from '@apollo/client';

import { 
  Button, TextField, Box, 
  FormControl
} from '@mui/material';

export const AddComments = ({ owner, name }) => {
  const id = useSelector(state=>state);
  
  const { data } = useQuery(ISSUE_ID, {
    variables: {
      owner: owner,
      name: name,
      number: Number(id)
    }
  });
  
  const [state, setState] = useState('');
  const [addTodo, { loading, error }] = useMutation(ADDCOMMENTS);
  
  const onClick = () => {
    
    addTodo({
      variables: {
        subjectId: data.repository.issue.id,
        clientMutationId: '',
        body: state
        } 
    });
    setState('');
  }

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <Wrapper>
      <Box
            Validate
            autoComplete="off"
            component="form"
            overflowY= 'none'
            
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 0,
              textShadow: 'none'             
            }}
          >
            <FormControl sx={{ m: 5}}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="text"
                label="Enter Comments"
                name="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={onClick}
              >
                Add Comments
              </Button> 
            </FormControl>
          </Box>
    </Wrapper>    
  );
}
