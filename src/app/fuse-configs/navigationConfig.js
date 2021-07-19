import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id: 'applications',
		title: 'Applications',
		translate: 'APPLICATIONS',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'dashboard-component',
				title: 'Dashboard',
				translate: 'Dashboard',
				type: 'item',
				icon: 'whatshot',
				url: '/dashboard'
			},
			{
				id: 'quick-start-component',
				title: 'Quick Start',
				translate: 'Quick Start',
				type: 'item',
				icon: 'whatshot',
				url: '/quick-start'
			},
			{
				id: 'connection-component',
				title: 'Connection',
				translate: 'Connection',
				type: 'item',
				icon: 'whatshot',
				url: '/connection'
			},
			{
				id: 'administration-component',
				title: 'Administration',
				translate: 'Administration',
				type: 'item',
				icon: 'whatshot',
				url: '/administration'
			},
		]
	}
];

export default navigationConfig;
