import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './ProjectForm.scss';

export default function ProjectForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"> */}
        <DialogTitle id="form-dialog-title">Add Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a project, kindly input the needed information below.
          </DialogContentText>
          <TextField
            autoFocus
            margin="normal"
            id="projectName"
            label="Project Name"
            type="projectName"
            fullWidth
          />
          <TextField
            autoFocus
            margin="normal"
            id="description"
            label="Description"
            type="description"
            fullWidth
          />
        </DialogContent>
        <DialogActions className="Actions">
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      {/* </Dialog> */}
    </div>
  );
}