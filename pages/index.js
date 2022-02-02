import { useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home() {
	const [screenShotUrl, setScreenShotUrl] = useState("");
	const [url, setUrl] = useState("");

	const getImageEl = async () => {
		const resp = await axios.post("/api/getImage", {
			url: url,
		});

		const responseUrl = /'(.+)'/.exec(resp.data.name);
		setScreenShotUrl(responseUrl[1]);
	};

	const handleOnGenerate = () => {
    console.log(screenShotUrl)
		getImageEl();
	};

	const setInputUrl = (e) => {
		setUrl(e.target.value);
	};

	return (
		<div className={styles.main}>
			<input
				type="text"
				onChange={setInputUrl}
				value={url}
				placeholder="Enter a valid Url or paste Url that begins with http(s)://"
			></input>
			<button onClick={handleOnGenerate}>Generate Snapshot</button>
			<div className={styles.imageWrapper}>
				{screenShotUrl ? <img src={screenShotUrl} alt="screenshot" /> : null}
			</div>
		</div>
	);
}
