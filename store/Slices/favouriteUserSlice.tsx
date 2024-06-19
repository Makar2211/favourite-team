import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface UserProps {
	id: number
	email: string
	first_name: string
	last_name: string
	avatar: string
}
interface favouriteUser {
	favouriteUsers: UserProps[]
}

let usersLs

if (typeof window !== 'undefined') {
	usersLs = localStorage?.getItem('favouriteUser')
}

const initialState: favouriteUser = {
	favouriteUsers: usersLs ? JSON.parse(usersLs) : [],
}

export const favouriteUserSlice = createSlice({
	name: 'favouriteUsers',
	initialState,
	reducers: {
		addAndRemoveFavouriteUsers: (state, action: PayloadAction<UserProps>) => {
			const findUser = state.favouriteUsers.find((obj) => obj.id === action.payload.id);
			if (findUser) {
				state.favouriteUsers = state.favouriteUsers.filter((item) => item.id !== action.payload.id);

			} else {
				state.favouriteUsers.push({
					...action.payload,
				});

			}
			localStorage.setItem("favouriteUser", JSON.stringify(state.favouriteUsers));
		},
		removeUsersFromFavouritePage: (state, action: PayloadAction<number>) => {
			state.favouriteUsers = state.favouriteUsers.filter((user) => user.id !== action.payload);

			localStorage.setItem("favouriteUser", JSON.stringify(state.favouriteUsers));
		}
	},
})

// Action creators are generated for each case reducer function
export const { addAndRemoveFavouriteUsers, removeUsersFromFavouritePage } = favouriteUserSlice.actions

export default favouriteUserSlice.reducer