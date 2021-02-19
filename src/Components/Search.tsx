import React, {FormEvent, FormEventHandler, useCallback, useState} from "react";
import './Search.css';


export default function Search() {
	return (
		<div className="search-box-container">
			<form action="/search" target="/search" method="GET">
				<input id="search-bar" placeholder="Keywords" name="q"/>
			</form>
		</div>
	);
}
