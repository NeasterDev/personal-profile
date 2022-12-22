import { BaseSyntheticEvent, ChangeEvent, MouseEvent  } from "react";

export const Nav = () => {
	return (
		<header id="myHeader">
			<div id="nav-logo">NICHOLAS EASTER</div>
			<nav>
				<button className="hamburger">
					<div className="bar"></div>
				</button>
				<ul className="nav-links">
					<li>
						<a>
							<span className="nav-text">About</span>
						</a>
					</li>
					<li>
						<a>
							<span className="nav-text">Projects</span>
						</a>
					</li>
					<li>
						<a>
							<span className="nav-text">Contact</span>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};
