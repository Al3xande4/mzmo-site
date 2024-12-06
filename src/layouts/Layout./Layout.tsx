import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import styles from './Layout.module.css';
import { Wrapper } from '../../components/ui/Wrapper/Wrapper';

export function Layout({}) {
	return (
		<Wrapper>
			<div className={styles.layout}>
				<Header />
				<main>
					<Wrapper>
						<Outlet />
					</Wrapper>
				</main>
				<footer className={styles.footer}></footer>
			</div>
		</Wrapper>
	);
}
