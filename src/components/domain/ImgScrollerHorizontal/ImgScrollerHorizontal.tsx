import { useEffect, useRef, useState } from 'react';
import styles from './ImgScrollerHorizontal.module.css';
import { ImgScrollerHorizontalProps } from './ImgScrollerHorizontal.props';

export function ImgScrollerHorizontal({
	images,
	current = 0,
}: ImgScrollerHorizontalProps) {
	const [currImg, setCurrImg] = useState(current);
	const [width, setWidth] = useState(0);

	const refImg = useRef<HTMLImageElement>(null);

	useEffect(() => {
		if (refImg.current) {
			setWidth(refImg.current.offsetWidth);
		}
	}, [currImg, refImg.current]);

	const setNext = () => {
		setCurrImg((curr) => (curr + 1) % images.length);
	};

	const setPrev = () => {
		setCurrImg((curr) => (curr - 1 + images.length) % images.length);
	};

	return (
		<div className={styles.container}>
			<div className={styles.img}>
				<div
					className={styles['img-container']}
					style={{
						left: `${-width * currImg}px`,
					}}
				>
					{images.map((el, index) => {
						if (index == currImg) {
							return (
								<div ref={refImg} key={index}>
									{el}
								</div>
							);
						}
						return <div key={index}>{el}</div>;
					})}
				</div>
			</div>
			<div className={styles.actions}>
				<button
					onClick={() => {
						setPrev();
					}}
					className={styles.back}
				>
					<img src='/forward_black.svg' alt='back arrow'></img>
				</button>
				<button
					onClick={() => {
						setNext();
					}}
					className={styles.forward}
				>
					<img src='/forward_black.svg' alt='forward arrow'></img>
				</button>
			</div>
		</div>
	);
}
