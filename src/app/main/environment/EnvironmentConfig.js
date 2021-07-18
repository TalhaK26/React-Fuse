import Environment from './Environment';

const EnvironmentConfig = {
	settings: {
		layout: {
            config: {}
		}
	},
	routes: [
		{
			path: '/environment',
			component: Environment
		},
	]
};

export default EnvironmentConfig;