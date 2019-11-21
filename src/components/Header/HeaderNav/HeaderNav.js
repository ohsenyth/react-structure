import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import LinkMat from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import './HeaderNav.scss';
import Dialog from '@material-ui/core/Dialog';
import ProjectForm from '../../Project/ProjectForm/ProjectForm';

class HeaderNav extends React.Component  {
  // var preventDefault = event => event.preventDefault();
  state = {
        open: false
    };
    openDialog() {
      console.log('hi');
        this.setState({ open: true });
    }

  render() {
    return (
      <div class="wrapper">
        <Typography>
          <Link to="/projects" className="Menu">
            <span>Projects</span>
          </Link>
          <Link to="/products" className="Menu">
            <span>Products</span>
          </Link>
          <Button onClick={this.openDialog.bind(this)} className="Menu">
            <span className="add-project">Add A Project</span>
          </Button>
          {/* <LinkMat href="#" onClick={preventDefault} className="Menu">
            <span className="add-project">Add A Project</span>
          </LinkMat> */}
        </Typography>
        <Dialog open={this.state.open} onEnter={console.log('Hey.')}>
          <ProjectForm></ProjectForm>           
        </Dialog>
      </div>
  );
  }

  
}

export default HeaderNav;