import Connection from './Connection';

const ConnectionConfig = {
	settings: {
		layout: {
            config: {}
		}
	},
	routes: [
		{
			path: '/connection',
			component: Connection
		},
	]
};

export default ConnectionConfig;