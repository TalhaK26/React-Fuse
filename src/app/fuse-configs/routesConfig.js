import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import ExampleConfig from 'app/main/example/ExampleConfig';
import LoginConfig from 'app/main/login/LoginConfig';
import RegisterConfig from 'app/main/register/RegisterConfig';
import ForgotPasswordConfig from 'app/main/forgot-password/ForgotPasswordConfig';
import SetPasswordConfig from 'app/main/set-password/SetPasswordConfig';
import DashboardConfig from 'app/main/dashboard/DashboardConfig';
import AppsConfig from 'app/main/apps/AppsConfig';
import EnvironmentConfig from 'app/main/environment/EnvironmentConfig';
import ProjectConfig from 'app/main/project/ProjectConfig';
import QuickStartConfig from 'app/main/quick-start/QuickStartConfig';

const routeConfigs = [
	// ExampleConfig,
	ForgotPasswordConfig, 
	LoginConfig,
	SetPasswordConfig,
	RegisterConfig,
	DashboardConfig,
	AppsConfig,
	EnvironmentConfig,
	ProjectConfig,
	QuickStartConfig
];

const routes = [
	// if you want to make whole app auth protected by default change defaultAuth for example:
	// ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
	// The individual route configs which has auth option won't be overridden.
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/login" />
	}
];

export default routes;
