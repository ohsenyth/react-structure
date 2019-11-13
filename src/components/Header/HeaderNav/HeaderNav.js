/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import './HeaderNav.scss';

class HeaderNav extends React.Component {
    render() {
        var preventDefault = event => event.preventDefault();
        return (
            <Typography>
              <Link href="#" onClick={preventDefault} className="Menu">
                <span>Projects</span>
              </Link>
              <Link href="#" onClick={preventDefault} className="Menu">
              <span>Products</span>
              </Link>
              <Link href="#" onClick={preventDefault} className="Menu">
              <span className="add-project">Add A Project</span>
              </Link>
            </Typography>
        );
    }
}

export default HeaderNav;