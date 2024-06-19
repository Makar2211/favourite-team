import Header from '@/components/modules/header';
import Users from '@/components/modules/users';

async function fetchUsers(page = 1) {
	const res = await fetch(`https://reqres.in/api/users?page=${page}`);
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
}

export default async function Home() {
	const users = await fetchUsers()
	return (
		<main className='main-section'>
			<Header />
			<Users users={users.data} />
		</main>
	);
}