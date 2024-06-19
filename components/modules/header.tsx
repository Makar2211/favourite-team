import { useMediaQuery } from '@/hooks/useMediaQuery';
import LogOutButton from './../elements/logOutButton';

const Header = () => {
	return (
		<header className='main-section-header'>
			<div className='container'>
				<nav className="main-section-header-nav">
					<LogOutButton />
				</nav>
				<h1 className='main-section-header-title'>Наша команда</h1>
				<span className='main-section-header-text'>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. </span>
			</div>
		</header>
	)
}

export default Header