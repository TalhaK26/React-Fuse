import Project from './Project';

const ProjectConfig = {
	settings: {
		layout: {
            config: {}
		}
	},
	routes: [
		{
			path: '/project',
			component: Project
		},
	]
};

export default ProjectConfig;