import { HeaderProps } from './Header.props';
import cn from 'classnames';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header({ className }: HeaderProps) {
	return (
		<header className={cn(className, styles.header)}>
			<img className={styles.logo} alt='логотип' src='/logo.svg' />
			<nav className={styles.navigation}>
				<NavLink
					to={'/'}
					className={({ isActive }) =>
						cn(styles.link, {
							[styles.active]: isActive,
						})
					}
				>
					Блок 1
				</NavLink>

				<NavLink
					to={'/hut'}
					className={({ isActive }) =>
						cn(styles.link, {
							[styles.active]: isActive,
						})
					}
				>
					Блок 2
				</NavLink>

				<NavLink
					to={'/area'}
					className={({ isActive }) =>
						cn(styles.link, {
							[styles.active]: isActive,
						})
					}
				>
					Блок 3
				</NavLink>

				<NavLink
					to={'/booking'}
					className={({ isActive }) =>
						cn(styles.link, {
							[styles.active]: isActive,
						})
					}
				>
					Блок 4
				</NavLink>

				<NavLink
					to={'/about'}
					className={({ isActive }) =>
						cn(styles.link, {
							[styles.active]: isActive,
						})
					}
				>
					Блок 5
				</NavLink>

				<NavLink
					to={'/faq'}
					className={({ isActive }) =>
						cn(styles.link, {
							[styles.active]: isActive,
						})
					}
				>
					Блок 6
				</NavLink>
			</nav>
		</header>
	);
}

export default Header;
