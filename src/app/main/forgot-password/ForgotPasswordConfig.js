import ForgotPassword from './ForgotPassword';

const ForgotPasswordConfig = {
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
			path: '/forgot-password',
			component: ForgotPassword
		},
	]
};

export default ForgotPasswordConfig;