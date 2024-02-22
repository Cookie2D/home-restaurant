import { Link } from 'react-router-dom'
import ThemeSwitcherComponent from '../ThemeSwitcher/ThemeSwitcher'

export default function Header() {
	return (
		<header className='flex items-center py-4'>
			<div>Logo</div>
			<div className='grow text-center'>
				<div>
					<NavigationLink to='/recomendation'>Recomendation</NavigationLink>
					<NavigationLink to='/recipes'>Recipes</NavigationLink>
					<NavigationLink to='/fridge'>Fridge</NavigationLink>
				</div>
			</div>

			<ThemeSwitcherComponent />
		</header>
	)
}

interface NavigationLinkProps {
	to: string
	children: React.ReactNode
}

function NavigationLink({ to, children }: NavigationLinkProps) {
	return <Link to={to} className='p-4 group hover:underline'>
		{children}
	</Link>
}