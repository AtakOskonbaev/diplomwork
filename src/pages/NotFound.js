import rickroll from "../assets/rickroll-qr-code.png";

export default function NotFound() {
  return (
    <div className="NotFound">
      <h1>This page does not exist</h1>
      <img src={rickroll} alt="rickroll-qr-code"/>
    </div>
  );
}