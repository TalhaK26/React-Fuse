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
				id: 'environment-component',
				title: 'Environment',
				translate: 'Environment',
				type: 'item',
				icon: 'whatshot',
				url: '/environment'
			},
			{
				id: 'apps-component',
				title: 'Apps',
				translate: 'Apps',
				type: 'item',
				icon: 'whatshot',
				url: '/apps'
			},
			{
				id: 'project-component',
				title: 'Project',
				translate: 'Project',
				type: 'item',
				icon: 'whatshot',
				url: '/project'
			},
		]
	}
];

export default navigationConfig;
