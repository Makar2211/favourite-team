import { useAppSelector } from '@/store/store'
import Image from 'next/image'
const FavouriteButton = ({ id }: { id: number }) => {
	const favouriteUsers = useAppSelector(state => state.favourite.favouriteUsers)
	const isActiveFavourite = favouriteUsers.some((user) => user.id === id)

	return (
		<Image className={`card-favourite-img ${isActiveFavourite ? 'active' : ''}`} src="/heart.svg" width={16} height={14} alt="heart" />
	)
}

export default FavouriteButton