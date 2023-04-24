import "./Auth.css";
import { useContext } from "react";
import { signIn, signOff } from "../../firebase";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import Orders from "../../pages/Orders";

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {!user ? <button onClick={signIn}>Sign in</button> : null}
      {user ? <span><Link to="/orders">{user.displayName}</Link></span> : null}
      {user ? <button onClick={signOff}>Sign out</button> : null}
    </div>
  );
}