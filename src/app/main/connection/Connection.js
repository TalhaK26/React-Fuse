import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import Datatable from '../../shared-components/Datatable';

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 }
};
const useStyles = makeStyles(theme => ({
	root: {}
}));

function Connection() {
	
	return (
		<div className="w-full">
			<motion.div variants={item} className="widget w-full p-16 pb-48">
				<h2>Connection</h2>
				<Datatable />
			</motion.div>
		</div>
	);
}

export default Connection;
