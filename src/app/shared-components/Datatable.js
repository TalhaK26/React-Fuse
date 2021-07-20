import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';

const columns = [
    { id: 'actions', label: 'Actions', minWidth: 170, align: 'center', },
    { id: 'Provider', label: 'Provider', minWidth: 170, align: 'center', },
    {
      id: 'name',
      label: 'Name',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'connectionType',
      label: 'Connection Type',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'status',
      label: 'Status',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toFixed(2),
    },
    {
        id: 'createdBy',
        label: 'Created By',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toFixed(2),
      },
      {
        id: 'createdAt',
        label: 'Created At',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toFixed(2),
      },
      {
        id: 'updatedBy',
        label: 'Updated By',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toFixed(2),
      },
      {
        id: 'updatedAt',
        label: 'Updated At',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toFixed(2),
      },
  ];
  
function createData(actions, Provider, name, connectionType, status, createdBy, createdAt, updatedBy, updatedAt) {
    const density = name / connectionType;
    return { actions, Provider, name, connectionType, status, createdBy, createdAt, updatedBy, updatedAt };
}
  
const rows = [
    createData('United States', 'US', 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263),
    createData('United States', 'US', 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263),
    createData('United States', 'US', 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263),
    createData('United States', 'US', 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263),
    createData('United States', 'US', 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263),
    createData('United States', 'US', 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263),
    createData('United States', 'US', 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263),
    createData('United States', 'US', 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263),
    createData('United States', 'US', 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263),
    createData('United States', 'US', 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263),
    createData('United States', 'US', 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263),
    createData('United States', 'US', 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263),
    createData('United States', 'US', 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263),
    createData('United States', 'US', 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263),
    createData('United States', 'US', 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263),
    createData('United States', 'US', 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263),
    createData('United States', 'US', 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263),
    createData('United States', 'US', 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263),
    createData('United States', 'US', 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263),
    createData('United States', 'US', 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263),
    createData('United States', 'US', 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263, 1324171354, 3287263),
];
  
const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
    btnActions: {
        margin: '0px 5px',
        cursor: 'pointer',
    },
    inputField: {
        padding: '10px 14px',
    },
    inputFieldMargin: {
        margin: '10px 0 10px 0'
    }
});

function Datatable() {

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
	
    return (
		<Paper className={clsx(classes.root)}>
        <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                {columns.map((column) => {
                    console.log('columns', columns)
                    return <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                        > {column.label}
                        { column.id !== "actions" && 
                            <TextField
                                className={clsx(classes.inputFieldMargin)}
                                type="text"
                                variant="outlined"
                                InputProps={{
                                    inputProps: {
                                        className: classes.inputField,
                                    }
                                }}
                        />}
                    </TableCell>
                })}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                            const value = row[column.id];
                            return (
                            <TableCell key={column.id} align={column.align}>
                                {column.id === 'actions' ? 
                                    <>
                                        <EditOutlinedIcon className={classes.btnActions} />
                                        <DeleteForeverOutlinedIcon className={classes.btnActions} />
                                    </> :
                                    <>
                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                    </> 
                                }
                            </TableCell>
                            );
                        })}
                        </TableRow>
                    );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </Paper>
	);
}

export default Datatable;
