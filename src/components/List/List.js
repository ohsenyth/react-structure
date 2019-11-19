import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';

import './List.scss';

const columns = [
  { id: 'name', label: 'Project Name', minWidth: 170 },
  { id: 'code', label: 'Project Description', minWidth: 100 },
  {
    id: 'population',
    label: 'Created Date',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'size',
    label: ' ',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(),
  },
];

// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

// const rows = [
//   createData('Project A', 'This is a description', '2019/10/15 15:00',),
//   createData('Project B', 'Description B', '2019/10/16 12:00'),
//   createData('Project A', 'This is a description', '2019/10/15 15:00'),
//   createData('Project B', 'Description B', '2019/10/16 12:00'),
//   createData('Project A', 'This is a description', '2019/10/15 15:00'),
//   createData('Project B', 'Description B', '2019/10/16 12:00'),
//   createData('Project A', 'This is a description', '2019/10/15 15:00'),
//   createData('Project B', 'Description B', '2019/10/16 12:00'),
//   createData('Project A', 'This is a description', '2019/10/15 15:00'),
//   createData('Project B', 'Description B', '2019/10/16 12:00'),
// ];

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '5rem',
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
});

// type Props = {
//   foo: number,
//   bar?: string,
// };

export default function List(props) {
  console.log(props);
  List.defaultProps = {
    foo: 43,
  };

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

// if (props.items) {
//   return (
//     <ul>
//       {
//         props.items.map(product => (
//           <li key={product.id}>
//             {product.name}
//           </li>
//         ))
//       }
//     </ul>
//   )
// }

if (props.items) {  
  return (
    <Paper className="root">
      <div className={classes.tableWrapper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell>
                  &nbsp;
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.items.map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                  <TableCell>
                  <VisibilityIcon /> <EditIcon /> <DeleteIcon />
              </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={props.items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'previous page',
        }}
        nextIconButtonProps={{
          'aria-label': 'next page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
}