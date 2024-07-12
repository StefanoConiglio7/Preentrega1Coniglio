
import logo from "../../assets/react.svg"

function CardWidget({ cartCount }) {
  return (
    <a className="nav-link" href="#">

      <img src={logo} />
      {cartCount}
    </a>
  );
}

export default CardWidget
