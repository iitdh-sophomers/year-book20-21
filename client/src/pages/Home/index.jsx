import React from "react";

import picture from "../../components/Cards/avatar.png";
import Header from "../../components/Header";
import { url } from '../../shared/pdfURL';
import "./styles.css";

const Home = () => {
	return (
		<div>
			<Header active={1} />
			<div className="homepage__container" fluid="md">
				<div className="homepage__description ">
					<p>
						Welcome to the{" "}
						<span className="heading gradient-text">YearBook Website </span>{" "}
						made by 2020-21 Batch of IIT Dharwad <br />
						<span className="dark-text homepage__description-overview">
							This is also availabe in PDF and can be accessed through the{" "}
							<span className="gradient-text">
								Download as PDF
							</span>{" "}
							above or by clicking{" "}
							<a href={url} className="a gradient-text">
								here
							</a>
						</span>
					</p>
				</div>
				<div className="homepage__image-container">
					<div className="container"></div>
					<img src={picture} alt="avtar" />
				</div>
			</div>
		</div>
	);
};

export default Home;
