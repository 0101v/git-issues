import { useState } from 'react';

// import { Modal, Grid  } from '@mui/material';
import { 
  Button, TextField, Box, 
  FormControl, Dialog, DialogContent
} from '@mui/material';

export const DialogGit = ({ addRepository }) => {
  const [open, setOpen] = useState(true);
  const [owner, setOwner] = useState('sebastien-plutniak');
  const [name, setName] = useState('archeofrag');

  const onClick = (e) => {
    e.preventDefault();

    if (owner.trim() && name.trim()) {
    addRepository(owner, name);
    setOpen(false)
    }
  }

  return (
    <Dialog
        open={open}
      >
        <DialogContent> 
          <Box
            noValidate
            autoComplete="off"
            component="form"
            overflowY= 'none'
            width= '270px'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 0,
              textShadow: 'none'             
            }}
          >
            <FormControl sx={{ m: 1}} >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="text"
                label="Enter Repository Owner"
                name="text"
                value={owner}

                onChange={(e) => setOwner(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="text"
                label="Enter Repository Name"
                name="text"
                value={name}

                onChange={(e) => setName(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={onClick}
              >
                Save
              </Button> 
            </FormControl>
          </Box>
        </DialogContent>
    </Dialog>
  );
}
