import React from 'react';
import '../css/footer.css';
import BlockContent from '@sanity/block-content-to-react';
import useFooter from '../hooks/useFooter';

export default function Footer() {
	let footer = useFooter();
	if (!footer) {
		return null;
	}

	return (
		<section className='footer-wrapper'>
			<img
				className='footer-banner'
				src='/images/footer-banner.png'
				alt='Footer Banner'
			/>
			<div className='footer-container'>
				{footer.columns.map((col) => {
					return (
						<div className='footer-col' key={col._id}>
							<BlockContent blocks={col.content}></BlockContent>
						</div>
					);
				})}
			</div>
		</section>
	);
}