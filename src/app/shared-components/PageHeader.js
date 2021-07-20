import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import clsx from 'clsx';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 }
};

const useStyles = makeStyles(theme => ({
	root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '20px 0px',
    },
    textContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    iconWrapper: {
        padding: '20px',
        backgroundColor: '#f7f6f1',
        boxShadow: '0px 0px 10px 5px #cfc8ff8a',
        marginRight: '30px',
    },
    test1: {
        flexDirection: 'column !important',
    },
    test2: {
        width: '100% !important',
        marginTop: '20px !important',
    },
    test3: {
        width: '100% !important',
    },
}));

function PageHeader() {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:600px)');

	return (
		<div className={clsx(classes.root, "w-full", `${matches ? classes.test1 : ''}`)}>
            <div className={clsx(classes.textContainer)}>
                <div className={classes.iconWrapper}><DashboardOutlinedIcon /></div>
                <div>
                    <h2>Dashboard</h2>
                    <p>Dashboard are apps and database that you can use to send data through your pipeline.</p>
                </div>
            </div>
            <div className={clsx(`${matches ? classes.test2 : ''}`)}>
                <Button
                    variant="outlined"
                    color="primary"
                    className={clsx(classes.button, `${matches ? classes.test3 : ''}`)}
                    startIcon={<AddIcon />}
                >
                    Add
                </Button>
            </div>
        </div>
    );
}

export default PageHeader;
