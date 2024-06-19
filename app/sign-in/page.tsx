'use client';
import { loginUser } from '@/actions/userAcrions';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

const SignUp = () => {
	const router = useRouter();
	const [showPassword, setShowPassword] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const result = await loginUser(formData);

		if (result?.success) {
			router.push('/');
		} else {
			setErrorMessage(result?.error || 'Unknown error occurred');
		}
	}

	return (
		<div className='sign-up'>
			<h2 className='sign-up-title'>Вход</h2>
			<form onSubmit={handleSubmit} className='sign-up-form'>
				<label className='sign-up-form-field'>
					<span>Электронная почта</span>
					<input type="text" name="email" placeholder='example@mail.ru' required />
				</label>
				<label className='sign-up-form-field'>
					<span>Пароль</span>
					<input type={showPassword ? 'text' : "password"} name="password" placeholder='******' required />
					<Image src='/password-eye.png' width={20} height={14} alt="password-eye" onClick={() => setShowPassword(!showPassword)} />
				</label>
				{errorMessage && (
					<div className="sign-up-form-error">
						{errorMessage}
					</div>
				)}
				<button className='sign-up-form-btn' type='submit'>Войти</button>
			</form>
			<div className="sign-up-change">
				<span>Ещё нет аккаунта?</span>
				<Link href='/sign-up'>Зарегистрироваться</Link>
			</div>
		</div>
	)
}

export default SignUp