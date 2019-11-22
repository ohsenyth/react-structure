import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import './ProjectForm.scss';

class ProjectForm extends React.Component {
  // [open, setOpen] = React.useState(false);
  state = {
        email: '',
    }

  handleClickOpen = () => {
    // setOpen(true);
  };

  handleClose = () => {
    // setOpen(false);
  };

  handleChange = (event) => {
        const email = event.target.value;
        this.setState({ email });
    };
 
  handleSubmit = () => {
        // your submit logic
    };

  render() {
    const { email } = this.state;
    return (
    <div>
    <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
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
          <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={email}
                    validators={['required']}
                    errorMessages={['Project name is required.']}
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
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      {/* </Dialog> */}
      </ValidatorForm>
    </div>
  );
  }
}

export default ProjectForm;