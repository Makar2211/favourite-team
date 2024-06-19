"use client"
import { handleLogOut } from '@/helpers/handleLogOut'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Image from 'next/image'

const LogOutButton = () => {

	const isMedia679 = useMediaQuery(679)
	return (
		<>
			{
				isMedia679 ? <Image src='/log-out-mobile.png' alt='logout' width={18} height={18} /> : (
					<button onClick={() => handleLogOut()} className={`${isMedia679 ? "" : 'main-section-header-nav-button'} `}>
						Выход
					</button>
				)
			}
		</>

	)
}

export default LogOutButton