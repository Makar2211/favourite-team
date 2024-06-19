"use client"
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BackButton = () => {
	const isMedia679 = useMediaQuery(679)
	return (
		<Link href='/'>
			{
				isMedia679 ? <Image src='/back-mobile.png' width={7} height={14} alt='back' /> : <span className='main-section-header-nav-button'>Назад</span>
			}
		</Link>
	)
}

export default BackButton