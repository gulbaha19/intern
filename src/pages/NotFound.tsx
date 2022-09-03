import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <img src={"https://i.stack.imgur.com/6M513.png"} />
        <p style={{ textAlign: "center" }}>
          <Link to="/users">Go to Home </Link>
        </p>
      </div>
    );
  }
}
export default NotFound;
