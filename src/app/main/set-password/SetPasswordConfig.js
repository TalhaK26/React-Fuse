import SetPassword from './SetPassword';

const SetPasswordConfig = {
	settings: {
		layout: {
            config: {
				navbar: {
					display: false
				},
				toolbar: {
					display: false
				},
				footer: {
					display: false
				},
				leftSidePanel: {
					display: false
				},
				rightSidePanel: {
					display: false
				}
			}
		}
	},
	routes: [
		{
			path: '/set-password',
			component: SetPassword
		},
	]
};

export default SetPasswordConfig;