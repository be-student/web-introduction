import Link from "next/link";

function NavigationBar() {
  return (
    <div
      style={{ width: "100%", display: "flex", justifyContent: "space-around" }}
    >
      <Link href="/">
        <img
          width={60}
          height={60}
          src="https://icons-for-free.com/iconfiles/png/512/avatar+human+man+profile+icon-1320085876716628234.png"
          alt="profile"
        ></img>
      </Link>
      <Link href="/movie">
        <img
          width={60}
          height={60}
          src="https://cdn-icons-png.flaticon.com/512/2790/2790961.png"
          alt="movie"
        ></img>
      </Link>
      <Link href="/guestbook">
        <img
          width={60}
          height={60}
          src="https://cdn-icons-png.flaticon.com/512/43/43078.png"
          alt="guestbook"
          style={{ marginBottom: "5px" }}
        ></img>
      </Link>
    </div>
  );
}
export default NavigationBar;
