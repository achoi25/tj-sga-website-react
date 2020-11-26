import React from 'react';
import imageUrl from '../imageUrl';
import BlockContent from '@sanity/block-content-to-react';
import { Link } from 'react-router-dom';

export default function ArticleRow({
	article,
}: {
	article: SGA.ArticleDocument;
}) {
	let thumbUrl: string | null = null;
	if (article.thumbnail) {
		thumbUrl = imageUrl(article.thumbnail).url();
	}

	const slug = (s: string) => {
		return s.toLowerCase().replaceAll(' ', '-');
	};

	return (
		<div className='row'>
			<div className='article-row-thumbnail'>
				{thumbUrl ? (
					<img className='mb-4' src={thumbUrl} alt={article.title} />
				) : null}
			</div>
			<div className='article-row-content'>
				<Link to={'/news/' + article._id + '/' + slug(article.title)}>
					<h3>{article.title}</h3>
				</Link>
				<i className='text-sm'>
					{article.publish_date} - {article.author || 'No author'}
				</i>
				<br />
				<BlockContent blocks={article.content} />
			</div>
		</div>
	);
}
