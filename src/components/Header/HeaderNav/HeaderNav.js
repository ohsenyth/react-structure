import React from 'react';
import { Link } from 'react-router-dom';
import LinkMat from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import './HeaderNav.scss';

export default function HeaderNav() {
  var preventDefault = event => event.preventDefault();
  return (
      <Typography>
        <Link to="/projects" className="Menu">
          <span>Projects</span>
        </Link>
        <Link to="/products" className="Menu">
          <span>Products</span>
        </Link>
        <LinkMat href="#" onClick={preventDefault} className="Menu">
          <span className="add-project">Add A Project</span>
        </LinkMat>
      </Typography>
  );
}