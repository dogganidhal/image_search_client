import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
// @ts-ignore
import Gallery from 'react-grid-gallery';
import './Search.css';

interface Image {
	id: string;
	original_url: string;
	original_landing_url: string;
	author_profile_url: string;
	author: string;
	title: string;
	original_size: number;
	original_md_5: string;
	thumbnail_300k_url: string;
}

function useQuery() {
	return new URLSearchParams(useLocation().search);
}


export default function SearchResult() {
	const query = useQuery();
	const [images, setImages] = useState([]);

	useEffect(() => {
		const joinedQuery = query.get("q")?.split(" ").join(",") || "";
		if (joinedQuery.length > 0) {
			console.log({joinedQuery});
			fetch(`http://localhost:8080/search/keywords/${joinedQuery}?size=100`)
				.then(response => {
					response.json()
						.then(data => setImages(data.items.map((image: Image) => ({
							src: image.original_url,
							thumbnail: image.thumbnail_300k_url,
							thumbnailWidth: 300,
							thumbnailHeight: 300,
							caption: image.title
						}))))
						// .catch(err => alert(err))
				})
				.catch(err => alert(err))
		}
	}, []);

	return (
		<div>
			<div>
				<form action="/search" target="/search" method="GET">
					<input id="search-bar" placeholder="Keywords" name="q" defaultValue={query.get("q") || ""}/>
				</form>
			</div>
			<div>
				<Gallery images={images}/>
			</div>
		</div>
	);
}
