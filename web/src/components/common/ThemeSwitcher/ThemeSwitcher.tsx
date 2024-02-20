import { useEffect, useState } from 'react';

const ThemeSwitcherComponent = () => {
	const [dark, setDark] = useState(localStorage.theme === 'dark');

	useEffect(() => {
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			document.documentElement.classList.add('dark')
			localStorage.theme = 'dark'
			setDark(true)
		} else {
			document.documentElement.classList.remove('dark')
			localStorage.theme = 'light'
			setDark(false)
		}
	}, [])

	const toggleTheme = (active: boolean) => {
		if (localStorage.theme === 'light') {
			document.documentElement.classList.add("dark");
			localStorage.theme = 'dark'
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.theme = 'light'
		}
		setDark(active);
	};

	return (
		<div onClick={() => toggleTheme(dark)}>
			{/*<DarkModeSwitch
				checked={dark}
				onChange={toggleTheme}
				size={24}
				moonColor='#c2c2c2'
				sunColor='#374151'
			/>*/}
			switch
		</div>
	);
};

export default ThemeSwitcherComponent;
