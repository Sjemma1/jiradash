import Dashboard from 'client/components/Dashboard';
import OngoingProjects from 'client/components/OngoingProjects';
import HotProjects from 'client/components/HotProjects';
import LockedProjects from 'client/components/LockedProjects';
import FridgedProjects from 'client/components/FridgedProjects';
import MyProjects from 'client/components/MyProjects';
import Employees from 'client/components/Employees';
import Logout from 'client/components/Logout';

export default function getRoutes() {
	return [
		{
			path: '/',
			component: Dashboard,
			defaultRoute: '/',
			indexRoute: { component: HotProjects },
			childRoutes: [
				{path: 'ongoing',	component: OngoingProjects},
				{path: 'locked',	component: LockedProjects},
				{path: 'fridged',	component: FridgedProjects},
				{path: 'employees',	component: Employees},
				{path: 'me',	component: MyProjects},
			],
		},
		{
			path: '/logout',
			component: Logout,
		},
	];
}
