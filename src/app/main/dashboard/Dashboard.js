import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import withReducer from 'app/store/withReducer';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Datatable from '../../shared-components/Datatable';
import PageHeader from '../../shared-components/PageHeader';

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 }
};

const useStyles = makeStyles(theme => ({
	root: {}
}));

function Dashboard() {
	const dispatch = useDispatch();
	
	return (
		<div className="w-full">
			<motion.div variants={item} className="w-full p-16 pb-48">
				<PageHeader />
				<Datatable />
			</motion.div>
		</div>
	);
}

export default Dashboard;
