import { TextField, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Levels.css";

function Levels({ num, userName }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [answr, setAnswr] = useState("");

  navigator.geolocation.getCurrentPosition(showPosition);
  function showPosition(position) {
    setLatitude(Math.floor(position.coords.latitude * 1000) / 1000);
    setLongitude(Math.floor(position.coords.longitude * 1000) / 1000);
  }

  function checkAnswr(answr, rightAnswer = "") {
    if (answr === rightAnswer) {
      alert("OK");
    }
  }

  console.log(latitude, longitude, userName.Levels.firstMuseum.lvl1);

  if (num === "1.1" && !userName.Levels.firstMuseum.lvl1)
    //&& latitude===40.182&&longitude===44.509
    return (
      <div className="quiz-container">
        <button>
          <Link to={`/${userName}/CharentsMuseum`}>Back to levels</Link>
        </button>
        <h1>1</h1>
        <h2>When was the Yeghishe Charents House-Museum founded?</h2>
        <form>
          <TextField
            value={answr}
            onChange={(e) => {
              setAnswr(e.target.value);
            }}
            id="outlined-basic"
            label="Answer"
            variant="outlined"
          />
          <br />
          <Button
            type="submit"
            variant="contained"
            color="inherit"
            onClick={() => checkAnswr(answr, "1964")}
          >
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
        <Link to={`/${userName.firstName}/CharentsMuseum`}>Back to levels</Link>
        <h1>3</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/CharentsMuseum/forthLevel`}>
          Next Level
        </Link>
        <br />
        <Link to={`/${userName.firstName}/CharentsMuseum/secondLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "1.4")
    return (
      <div>
        <Link to={`/${userName.firstName}/CharentsMuseum`}>Back to levels</Link>
        <h1>4</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/CharentsMuseum/fifthLevel`}>
          Next Level
        </Link>
        <br />
        <Link to={`/${userName.firstName}/CharentsMuseum/thirdLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "1.5")
    return (
      <div>
        <Link to={`/${userName.firstName}/CharentsMuseum`}>Back to levels</Link>
        <h1>5</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <p>Next Level</p>
        <br />
        <Link to={`/${userName.firstName}/CharentsMuseum/forthLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "2.1")
    return (
      <div>
        <Link to={`/${userName.firstName}/TumanyanMuseum`}>Back to levels</Link>
        <h1>1</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/TumanyanMuseum/secondLevel`}>
          Next Level
        </Link>
        <p>Previous Level</p>
      </div>
    );
  if (num === "2.2")
    return (
      <div>
        <Link to={`/${userName.firstName}/TumanyanMuseum`}>Back to levels</Link>
        <h1>2</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/TumanyanMuseum/thirdLevel`}>
          Next Level
        </Link>
        <br />
        <Link to={`/${userName.firstName}/TumanyanMuseum/firstLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "2.3")
    return (
      <div>
        <Link to={`/${userName.firstName}/TumanyanMuseum`}>Back to levels</Link>
        <h1>3</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/TumanyanMuseum/forthLevel`}>
          Next Level
        </Link>
        <br />
        <Link to={`/${userName.firstName}/TumanyanMuseum/secondLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "2.4")
    return (
      <div>
        <Link to={`/${userName.firstName}/TumanyanMuseum`}>Back to levels</Link>
        <h1>4</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/TumanyanMuseum/fifthLevel`}>
          Next Level
        </Link>
        <br />
        <Link to={`/${userName.firstName}/TumanyanMuseum/thirdLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "2.5")
    return (
      <div>
        <Link to={`/${userName.firstName}/TumanyanMuseum`}>Back to levels</Link>
        <h1>5</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <p>Next Level</p>
        <br />
        <Link to={`/${userName.firstName}/TumanyanMuseum/forthLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "3.1")
    return (
      <div>
        <Link to={`/${userName.firstName}/IsahakyanMuseum`}>
          Back to levels
        </Link>
        <h1>1</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/IsahakyanMuseum/secondLevel`}>
          Next Level
        </Link>
        <p>Previous Level</p>
      </div>
    );
  if (num === "3.2")
    return (
      <div>
        <Link to={`/${userName.firstName}/IsahakyanMuseum`}>
          Back to levels
        </Link>
        <h1>2</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/IsahakyanMuseum/thirdLevel`}>
          Next Level
        </Link>
        <br />
        <Link to={`/${userName.firstName}/IsahakyanMuseum/firstLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "3.3")
    return (
      <div>
        <Link to={`/${userName.firstName}/IsahakyanMuseum`}>
          Back to levels
        </Link>
        <h1>3</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/IsahakyanMuseum/forthLevel`}>
          Next Level
        </Link>
        <br />
        <Link to={`/${userName.firstName}/IsahakyanMuseum/secondLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "3.4")
    return (
      <div>
        <Link to={`/${userName.firstName}/IsahakyanMuseum`}>
          Back to levels
        </Link>
        <h1>4</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/IsahakyanMuseum/fifthLevel`}>
          Next Level
        </Link>
        <br />
        <Link to={`/${userName.firstName}/IsahakyanMuseum/thirdLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "3.5")
    return (
      <div>
        <Link to={`/${userName.firstName}/IsahakyanMuseum`}>
          Back to levels
        </Link>
        <h1>5</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <p>Next Level</p>
        <br />
        <Link to={`/${userName.firstName}/IsahakyanMuseum/forthLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "4.1")
    return (
      <div className="quiz-container">
        >
        <button>
          <Link to={`/${userName.firstName}/KomitasMuseum`}>
            Back to levels
          </Link>
        </button>
        <h1>1</h1>
        <h2>When was the Toumanyan House-Museum founded?</h2>
        <TextField id="outlined-basic" label="Answer" variant="outlined" />
        <br />
        {/* <p>1964</p> */}
        {/* <h1>Hint</h1> */}
        <button>
          <Link to={`/${userName.firstName}/KomitasMuseum/secondLevel`}>
            Next Level
          </Link>
        </button>
      </div>
    );
  if (num === "4.2")
    return (
      <div>
        <Link to={`/${userName.firstName}/KomitasMuseum`}>Back to levels</Link>
        <h1>2</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/KomitasMuseum/thirdLevel`}>
          Next Level
        </Link>
        <br />
        <Link to={`/${userName.firstName}/KomitasMuseum/firstLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "4.3")
    return (
      <div>
        <Link to={`/${userName.firstName}/KomitasMuseum`}>Back to levels</Link>
        <h1>3</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/KomitasMuseum/forthLevel`}>
          Next Level
        </Link>
        <br />
        <Link to={`/${userName.firstName}/KomitasMuseum/secondLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "4.4")
    return (
      <div>
        <Link to={`/${userName.firstName}/KomitasMuseum`}>Back to levels</Link>
        <h1>4</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/KomitasMuseum/fifthLevel`}>
          Next Level
        </Link>
        <br />
        <Link to={`/${userName.firstName}/KomitasMuseum/thirdLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "4.5")
    return (
      <div>
        <Link to={`/${userName.firstName}/KomitasMuseum`}>Back to levels</Link>
        <h1>5</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <p>Next Level</p>
        <br />
        <Link to={`/${userName.firstName}/KomitasMuseum/forthLevel`}>
          Previous Level
        </Link>
      </div>
    );
}

export default Levels;
