import { BaseSyntheticEvent, ChangeEvent, MouseEvent  } from "react";

export const Nav = () => {

  // const onHamburgerClick = (e: MouseEvent<HTMLButtonElement>): void => {
  //   const target = e.target as HTMLButtonElement;
  //   target.classList.toggle("active");
  // }

  return (
    <header>
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
