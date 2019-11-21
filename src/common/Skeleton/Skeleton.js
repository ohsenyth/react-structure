import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '100%',
    margin: theme.spacing(2),
  },
  media: {
    height: 300,
  },
}));

function Media() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        title={
            <Skeleton height={6} width="80%" />
        }
        subheader={
            <Skeleton height={6} width="40%" />
        }
      />
      <Skeleton variant="rect" className={classes.media} />

      <CardContent>
        <React.Fragment>
            <Skeleton height={6} />
            <Skeleton height={6} width="80%" />
          </React.Fragment>
      </CardContent>
    </Card>
  );
}

export default function Loading() {
  return (
    <div>
      <Media />
    </div>
  );
}