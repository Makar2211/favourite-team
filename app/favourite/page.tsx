"use client"

import Header from '@/components/modules/header'
import { useAppDispatch, useAppSelector } from '@/store/store'
import Image from 'next/image'
import Link from 'next/link'
import { IUser } from '../../types/user'
import { removeUsersFromFavouritePage } from '@/store/Slices/favouriteUserSlice'
import { useEffect, useState } from 'react'

const Favourite = () => {
	const dispatch = useAppDispatch()
	const favouriteUsers = useAppSelector(state => state.favourite.favouriteUsers)

	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	const removeFavouriteUsers = (id: number) => {
		dispatch(removeUsersFromFavouritePage(id))
	}
	return (
		<>

			{
				isClient && (
					<section className='favourite'>

						<Header />
						<div className='container'>
							<div className="favourite-desc">
								<h2 className='title'>Ваши избранные пользователи</h2>
								{
									favouriteUsers.length === 0 ? (
										<div className='favourite-no-users'>
											<h3 className='favourite-no-users-title'>Список избранных пользователей пуст</h3>
										</div>
									) : (
										<div className='main-section-cards container'>
											{favouriteUsers.map((user: IUser) => (
												<div key={user.id} className='card'>
													<Link className='card-link' href={`/user/${user.id}`}>
														<Image className='card-link-image' width={124} height={124} src={user.avatar} alt={user.first_name} />
													</Link>
													<h2 className='card-name'>{user.first_name} {user.last_name}</h2>
													<div onClick={() => removeFavouriteUsers(user.id)} className='card-favourite'>
														<Image className={`card-favourite-img active`} src="/heart.svg" width={16} height={14} alt="heart" />
													</div>
												</div>
											))}
										</div>

									)
								}
							</div>

						</div>

					</section>
				)
			}</>

	)
}

export default Favourite