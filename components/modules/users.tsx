"use client"
import Image from 'next/image'
import Link from 'next/link'
import { IUser } from '@/types/user'
import { addAndRemoveFavouriteUsers } from '@/store/Slices/favouriteUserSlice'
import { useAppDispatch } from '@/store/store'
import FavouriteButton from '../elements/favouriteButton'

const Users = ({ users }: { users: IUser[] }) => {
	const dispatch = useAppDispatch();

	const handleOnFavourite = (user: IUser) => {
		dispatch(addAndRemoveFavouriteUsers(user));
	};

	return (
		<section className='container'>
			<div className="link-container">
				<Link href='/favourite' className="favourite-link">Понравившееся</Link>
			</div>

			<div className='main-section-cards container'>

				{users.map((user: IUser) => (
					<div key={user.id} className='card'>
						<Link className='card-link' href={`/user/${user.id}`}>
							<Image className='card-link-image' width={124} height={124} src={user.avatar} alt={user.first_name} />
						</Link>
						<h2 className='card-name'>{user.first_name} {user.last_name}</h2>
						<div onClick={() => handleOnFavourite(user)} className='card-favourite'>
							<FavouriteButton id={user.id} />
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Users