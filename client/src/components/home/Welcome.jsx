import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

const Welcome = () => {

    const {
        username
    } = useContext(AuthContext)

    return (
      <div>
            <h1>{username}</h1>
            <h1>{username}</h1>
            <h1>{username}</h1>
            <h1>{username}</h1>
            <h1>{username}</h1>
            <h1>{username}</h1>
            <h1>{username}</h1>
            <h1>{username}</h1>
            <h1>{username}</h1>

      </div>
    );
};

export default Welcome;