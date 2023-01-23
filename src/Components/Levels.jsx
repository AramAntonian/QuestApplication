import { TextField, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Levels.css";

function Levels({ num, userName }) {
  const [latitude,setLatitude] = useState
  const [longitude,setLongitude] = useState

  navigator.geolocation.getCurrentPosition(showPosition);
  function showPosition(position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }
  // const [answr,setAnswr] = useState 
console.log(latitude,longitude)

//  const handleInput = event =>{
//   setAnswr(event.target.value)
//  }

  if (num === "1.1")
    return (
      <div id="question">
        <button>
          <Link to={`/${userName}/CharentsMuseum`}>Back to levels</Link>
        </button>
        <h1>1</h1>
        <h2>When was the Yeghishe Charents House-Museum founded?</h2>
        <form>
        <TextField id="outlined-basic" label="Answer" variant="outlined" />
        <br />
        <Button type="submit" variant="contained" color="inherit">
          Submit answer
        </Button>
        </form>
        <br />
        {/* <p>1964</p> */}
        {/* <h1>Hint</h1> */}
        <button>
          <Link to={`/${userName}/CharentsMuseum/secondLevel`}>Next Level</Link>
        </button>
      </div>
    );
  if (num === "1.2")
    return (
      <div>
        <Link to={`/${userName.firstName}/CharentsMuseum`}>Back to levels</Link>
        <h1>2</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/CharentsMuseum/thirdLevel`}>
          Next Level
        </Link>
        <br />
        <Link to={`/${userName.firstName}/CharentsMuseum/firstLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "1.3")
    return (
      <div>
        <Link to={`/${userName}/CharentsMuseum`}>Back to levels</Link>
        <h1>3</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/CharentsMuseum/forthLevel`}>Next Level</Link>
        <br />
        <Link to={`/${userName}/CharentsMuseum/secondLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "1.4")
    return (
      <div>
        <Link to={`/${userName}/CharentsMuseum`}>Back to levels</Link>
        <h1>4</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/CharentsMuseum/fifthLevel`}>Next Level</Link>
        <br />
        <Link to={`/${userName}/CharentsMuseum/thirdLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "1.5")
    return (
      <div>
        <Link to={`/${userName}/CharentsMuseum`}>Back to levels</Link>
        <h1>5</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <p>Next Level</p>
        <br />
        <Link to={`/${userName}/CharentsMuseum/forthLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "2.1")
    return (
      <div>
        <Link to={`/${userName}/TumanyanMuseum`}>Back to levels</Link>
        <h1>1</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/TumanyanMuseum/secondLevel`}>Next Level</Link>
        <p>Previous Level</p>
      </div>
    );
  if (num === "2.2")
    return (
      <div>
        <Link to={`/${userName}/TumanyanMuseum`}>Back to levels</Link>
        <h1>2</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/TumanyanMuseum/thirdLevel`}>Next Level</Link>
        <br />
        <Link to={`/${userName}/TumanyanMuseum/firstLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "2.3")
    return (
      <div>
        <Link to={`/${userName}/TumanyanMuseum`}>Back to levels</Link>
        <h1>3</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/TumanyanMuseum/forthLevel`}>Next Level</Link>
        <br />
        <Link to={`/${userName}/TumanyanMuseum/secondLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "2.4")
    return (
      <div>
        <Link to={`/${userName}/TumanyanMuseum`}>Back to levels</Link>
        <h1>4</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/TumanyanMuseum/fifthLevel`}>Next Level</Link>
        <br />
        <Link to={`/${userName}/TumanyanMuseum/thirdLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "2.5")
    return (
      <div>
        <Link to={`/${userName}/TumanyanMuseum`}>Back to levels</Link>
        <h1>5</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <p>Next Level</p>
        <br />
        <Link to={`/${userName}/TumanyanMuseum/forthLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "3.1")
    return (
      <div>
        <Link to={`/${userName}/IsahakyanMuseum`}>Back to levels</Link>
        <h1>1</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/IsahakyanMuseum/secondLevel`}>Next Level</Link>
        <p>Previous Level</p>
      </div>
    );
  if (num === "3.2")
    return (
      <div>
        <Link to={`/${userName}/IsahakyanMuseum`}>Back to levels</Link>
        <h1>2</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/IsahakyanMuseum/thirdLevel`}>Next Level</Link>
        <br />
        <Link to={`/${userName}/IsahakyanMuseum/firstLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "3.3")
    return (
      <div>
        <Link to={`/${userName}/IsahakyanMuseum`}>Back to levels</Link>
        <h1>3</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/IsahakyanMuseum/forthLevel`}>Next Level</Link>
        <br />
        <Link to={`/${userName}/IsahakyanMuseum/secondLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "3.4")
    return (
      <div>
        <Link to={`/${userName}/IsahakyanMuseum`}>Back to levels</Link>
        <h1>4</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/IsahakyanMuseum/fifthLevel`}>Next Level</Link>
        <br />
        <Link to={`/${userName}/IsahakyanMuseum/thirdLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "3.5")
    return (
      <div>
        <Link to={`/${userName}/IsahakyanMuseum`}>Back to levels</Link>
        <h1>5</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <p>Next Level</p>
        <br />
        <Link to={`/${userName}/IsahakyanMuseum/forthLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "4.1")
    return (
      <div id="question">
        <button>
          <Link to={`/${userName}/KomitasMuseum`}>Back to levels</Link>
        </button>
        <h1>1</h1>
        <h2>When was the Toumanyan House-Museum founded?</h2>
        <TextField id="outlined-basic" label="Answer" variant="outlined" />
        <br />
        {/* <p>1964</p> */}
        {/* <h1>Hint</h1> */}
        <button>
          <Link to={`/${userName}/KomitasMuseum/secondLevel`}>Next Level</Link>
        </button>
      </div>
    );
  if (num === "4.2")
    return (
      <div>
        <Link to={`/${userName}/KomitasMuseum`}>Back to levels</Link>
        <h1>2</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/KomitasMuseum/thirdLevel`}>Next Level</Link>
        <br />
        <Link to={`/${userName}/KomitasMuseum/firstLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "4.3")
    return (
      <div>
        <Link to={`/${userName}/KomitasMuseum`}>Back to levels</Link>
        <h1>3</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/KomitasMuseum/forthLevel`}>Next Level</Link>
        <br />
        <Link to={`/${userName}/KomitasMuseum/secondLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "4.4")
    return (
      <div>
        <Link to={`/${userName}/KomitasMuseum`}>Back to levels</Link>
        <h1>4</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/KomitasMuseum/fifthLevel`}>Next Level</Link>
        <br />
        <Link to={`/${userName}/KomitasMuseum/thirdLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "4.5")
    return (
      <div>
        <Link to={`/${userName}/KomitasMuseum`}>Back to levels</Link>
        <h1>5</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <p>Next Level</p>
        <br />
        <Link to={`/${userName}/KomitasMuseum/forthLevel`}>Previous Level</Link>
      </div>
    );
}

export default Levels;
