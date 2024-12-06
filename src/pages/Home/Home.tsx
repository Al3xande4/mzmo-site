import { Heading } from '../../components/ui/Heading/Heading';
import styles from './Home.module.css';
import { ImgScrollerHorizontal } from '../../components/domain/ImgScrollerHorizontal/ImgScrollerHorizontal';

const images = [
	<img className={styles['scroll-img']} src='/model (1).jpg'></img>,
	<img className={styles['scroll-img']} src='/model (2).jpg'></img>,
	<img className={styles['scroll-img']} src='/model (3).jpg'></img>,
	<img className={styles['scroll-img']} src='/model (4).jpg'></img>,
	<img className={styles['scroll-img']} src='/model (5).jpg'></img>,
];

function HomePage() {
	return (
		<div className={styles.page}>
			<section className={styles.preview}>
				<Heading className={styles.title}>Заголовок</Heading>
				<ImgScrollerHorizontal current={1} images={images} />
			</section>
		</div>
	);
}

export default HomePage;
