import Administration from './Administration';

const AdministrationConfig = {
	settings: {
		layout: {
            config: {}
		}
	},
	routes: [
		{
			path: '/administration',
			component: Administration
		},
	]
};

export default AdministrationConfig;