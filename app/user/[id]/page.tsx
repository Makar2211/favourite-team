import Link from 'next/link'
import LogOutButton from './../../../components/elements/logOutButton';
import Image from 'next/image';
import { IUser } from '@/types/user';
import { Metadata } from 'next';
import BackButton from '@/components/elements/backButton';

export async function generateStaticParams() {
	const user = await fetch('https://reqres.in/api/users?page=2').then((res) => res.json())

	return user.data.map((user: IUser) => ({
		slug: user.id,
	}))
}

export async function generateMetadata({
	params,
}: {
	params: { id: string };
}): Promise<Metadata> {
	const user = await fetch(`https://reqres.in/api/users/${params.id}`).then((res) => res.json())

	return {
		title: user?.data?.first_name,
		description: user?.data?.email,
	};
}

const UserFullPage = async ({ params }: { params: { id: string } }) => {
	async function getUser() {
		try {
			const response = await fetch(`https://reqres.in/api/users/${params.id}`);

			if (response.ok) {
				const data = await response.json()
				return data;
			}
		} catch (error) {
			console.log('Не удалось получить пользователя', error);
		}
	}

	const user = await getUser()


	return (
		<section className='user-full-page'>

			<div className="user-full-page-header">
				<div className='container'>
					<nav className='nav'>
						<div className="nav-left">
							<BackButton />
						</div>

						<LogOutButton />
					</nav>
					<div className='info'>
						<Image className='info-avatar' src={user?.data?.avatar} width={187} height={187} alt={user?.data?.first_name} />
						<div className='info-user'>
							<h2 className='info-user-name'>{user?.data?.first_name} {user?.data?.last_name}</h2>
							<span className='info-user-role'>Партнер</span>
						</div>
					</div>
				</div>

			</div>

			<div className="user-full-page-content container">
				<div className='user-full-page-content-text'>
					<p>Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты.
					</p>
					<span />
					<p>
						В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно.
					</p>
					<span />
					<p>Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.</p>
				</div>
				<div className='user-full-page-content-contacts'>
					<div className="info">

						<Image src='/tel.png' width={24} height={24} alt='phone' />
						<span>+49 999 999 999</span>
					</div>
					<div className="info">

						<Image src='/email.png' width={24} height={24} alt='phone' />
						<span>{user?.data?.email}</span>
					</div>
				</div>
			</div>


		</section>
	)
}

export default UserFullPage