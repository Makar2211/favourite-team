"use server"
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function createUser(formData: FormData) {
	const { email, password } = Object.fromEntries(formData) as { email: string, password: string };

	try {
		const response = await fetch('https://reqres.in/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		});

		const data = await response.json();

		if (!response.ok) {
			return { success: false, error: data.error || 'Failed to create user' };
		}

		cookies().set('token', data.token);
		revalidatePath('/');
		return { success: true, error: null };
	} catch (error: any) {
		return { success: false, error: error.message || 'An unexpected error occurred' };
	}
}



export async function loginUser(formData: FormData) {
	const { email, password } = Object.fromEntries(formData) as { email: string, password: string };

	try {
		const response = await fetch('https://reqres.in/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		});

		const data = await response.json();

		if (!response.ok) {
			return { success: false, error: data.error || 'Failed to create user' };
		}

		cookies().set('token', data.token);
		revalidatePath('/');
		return { success: true, error: null };
	} catch (error: any) {
		return { success: false, error: error.message || 'An unexpected error occurred' };
	}
}