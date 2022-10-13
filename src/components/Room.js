import "./room.css";

function Room(props) {
  return (
    <div className={`room ${props.state ? "lit" : "dark"} `}>
      <p>Light On or Off ?</p>
      <button onClick={props.handleClick}>
        switch {props.state === false ? "on" + " 💡" : "off" + " ☽"}
      </button>
    </div>
  );
}

export default Room;
