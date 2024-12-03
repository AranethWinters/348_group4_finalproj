import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="navbar">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Our Games</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Sign in</a></li>
            <li><a href="#">Register</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
