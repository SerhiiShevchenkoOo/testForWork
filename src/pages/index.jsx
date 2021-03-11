import React, { useState } from 'react'
import Header from '@/components/header'
import '@/index.css'
import 'tailwindcss/tailwind.css'
import { Context } from '@/components/Context'
import Main from '@/components/main'
export default function Src() {
	const [field, setField] = useState([])
	return (
		<Context.Provider
			value={{
				initialField: [field, setField],
			}}>
			<>
				{/* <Header /> */}
				<Main />
			</>
		</Context.Provider>
	)
}
