"use server"
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function handleLogOut() {

	try {
		const token = cookies().delete("token");
		if (!token) {
			revalidatePath('/')
		}
	} catch (error: any) {
		console.log(error.message);
	} finally {
		redirect('/sign-up')
	}
};