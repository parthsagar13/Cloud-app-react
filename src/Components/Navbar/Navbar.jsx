import { Nav } from "./Styled-Navbar";
import "./navbar.css";
import { Link } from "react-router-dom";


export default function Navbar() {

  return (
    <>
      <Nav >
        <section id="top" style={{ backgroundColor: "white" }}>
          <div
            style={{ display: "flex", flexDirection: "column", border: "none", backgroundColor: 'white' }}
          >
            <div
              style={{ display: "flex", flexDirection: "row", border: "none", alignItems: "center", backgroundColor: 'white' }}
            >
              <div
                style={{
                  gap: "0.2rem",
                  border: "none",
                  backgroundColor: 'white',
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50" marginTop="10px">
                  <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                </svg>
                <Link to="/">
                  <img src="https://kalamandir.online/static/media/mshologo.76560c8d62f32f65a75d.PNG" alt="logo" width="130"/>
                </Link>
              </div>
              <svg stroke="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-red-500" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" fill="red" ></path></svg>
              {/* <Link to={"/checkout/cart"}> */}
              <Link>
                <p id="cart" style={{marginLeft: "25px"}}>
                  <svg stroke="currentColor" stroke-width="0" viewBox="0 0 576 512" class="ml-5 text-[#9f2089]" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" fill="#862d5b"></path></svg>
                </p>
              </Link>
            </div>
            <div style={{ margin: '0 1rem', padding: '0.9rem', backgroundColor: 'white' }} >
              <svg
                width="20"
                height="20"
                className="DFW_E nT46U VETef"
                viewBox="0 0 32 32"
                version="1.1"
                aria-hidden="false"
              >
                <path d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path>
              </svg>
              <form action="">
                <input
                  type="text"
                  placeholder="Search Sarees, Kurti Cosmetics etc..."
                />
              </form>
            </div>
          </div>
        </section>
      </Nav>
    </>
  );
}
