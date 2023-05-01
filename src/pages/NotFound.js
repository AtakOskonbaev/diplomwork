import rickroll from "../assets/rickroll-qr-code.png";

export default function NotFound() {
  return (
    <div className="NotFound">
      <h1>404</h1>
      <img src={rickroll} alt="rickroll-qr-code"/>
    </div>
  );
}