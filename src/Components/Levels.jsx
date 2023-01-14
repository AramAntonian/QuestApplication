import React from "react";
import { Link } from "react-router-dom";
import "../style/Levels.css";

function Levels({ num, userName }) {
  navigator.geolocation.getCurrentPosition(showPosition);
  function showPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
  }

  if (num === "1.1")
    return (
      <div>
        <Link to={`/${userName.firstName}/firstMuseum`}>Back to levels</Link>
        <h1>1</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/firstMuseum/secondLevel`}>
          Next Level
        </Link>
        <p>Previous Level</p>
      </div>
    );
  if (num === "1.2")
    return (
      <div>
        <Link to={`/${userName.firstName}/firstMuseum`}>Back to levels</Link>
        <h1>2</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/firstMuseum/thirdLevel`}>
          Next Level
        </Link>
        <br />
        <Link to={`/${userName.firstName}/firstMuseum/firstLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "1.3")
    return (
      <div>
        <Link to={`/${userName}/firstMuseum`}>Back to levels</Link>
        <h1>3</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/firstMuseum/forthLevel`}>Next Level</Link>
        <br />
        <Link to={`/${userName}/firstMuseum/secondLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "1.4")
    return (
      <div>
        <Link to={`/${userName}/firstMuseum`}>Back to levels</Link>
        <h1>4</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/firstMuseum/fifthLevel`}>Next Level</Link>
        <br />
        <Link to={`/${userName}/firstMuseum/thirdLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "1.5")
    return (
      <div>
        <Link to={`/${userName}/firstMuseum`}>Back to levels</Link>
        <h1>5</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <p>Next Level</p>
        <br />
        <Link to={`/${userName}/firstMuseum/forthLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "2.1")
    return (
      <div>
        <Link to={`/${userName}/secondMuseum`}>Back to levels</Link>
        <h1>1</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/secondMuseum/secondLevel`}>Next Level</Link>
        <p>Previous Level</p>
      </div>
    );
  if (num === "2.2")
    return (
      <div>
        <Link to={`/${userName}/secondMuseum`}>Back to levels</Link>
        <h1>2</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/secondMuseum/thirdLevel`}>Next Level</Link>
        <br />
        <Link to={`/${userName}/secondMuseum/firstLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "2.3")
    return (
      <div>
        <Link to={`/${userName}/secondMuseum`}>Back to levels</Link>
        <h1>3</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/secondMuseum/forthLevel`}>Next Level</Link>
        <br />
        <Link to={`/${userName}/secondMuseum/secondLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "2.4")
    return (
      <div>
        <Link to={`/${userName}/secondMuseum`}>Back to levels</Link>
        <h1>4</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/secondMuseum/fifthLevel`}>Next Level</Link>
        <br />
        <Link to={`/${userName}/secondMuseum/thirdLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "2.5")
    return (
      <div>
        <Link to={`/${userName}/secondMuseum`}>Back to levels</Link>
        <h1>5</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <p>Next Level</p>
        <br />
        <Link to={`/${userName}/secondMuseum/forthLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "3.1")
    return (
      <div>
        <Link to={`/${userName}/thirdMuseum`}>Back to levels</Link>
        <h1>1</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/thirdMuseum/secondLevel`}>Next Level</Link>
        <p>Previous Level</p>
      </div>
    );
  if (num === "3.2")
    return (
      <div>
        <Link to={`/${userName}/thirdMuseum`}>Back to levels</Link>
        <h1>2</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/thirdMuseum/thirdLevel`}>Next Level</Link>
        <br />
        <Link to={`/${userName}/thirdMuseum/firstLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "3.3")
    return (
      <div>
        <Link to={`/${userName}/thirdMuseum`}>Back to levels</Link>
        <h1>3</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/thirdMuseum/forthLevel`}>Next Level</Link>
        <br />
        <Link to={`/${userName}/thirdMuseum/secondLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "3.4")
    return (
      <div>
        <Link to={`/${userName}/thirdMuseum`}>Back to levels</Link>
        <h1>4</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/thirdMuseum/fifthLevel`}>Next Level</Link>
        <br />
        <Link to={`/${userName}/thirdMuseum/thirdLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "3.5")
    return (
      <div>
        <Link to={`/${userName}/thirdMuseum`}>Back to levels</Link>
        <h1>5</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <p>Next Level</p>
        <br />
        <Link to={`/${userName}/thirdMuseum/forthLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "4.1")
    return (
      <div>
        <Link to={`/${userName}/forthMuseum`}>Back to levels</Link>
        <h1>1</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/forthMuseum/secondLevel`}>Next Level</Link>
        <p>Previous Level</p>
      </div>
    );
  if (num === "4.2")
    return (
      <div>
        <Link to={`/${userName}/forthMuseum`}>Back to levels</Link>
        <h1>2</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/forthMuseum/thirdLevel`}>Next Level</Link>
        <br />
        <Link to={`/${userName}/forthMuseum/firstLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "4.3")
    return (
      <div>
        <Link to={`/${userName}/forthMuseum`}>Back to levels</Link>
        <h1>3</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/forthMuseum/forthLevel`}>Next Level</Link>
        <br />
        <Link to={`/${userName}/forthMuseum/secondLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "4.4")
    return (
      <div>
        <Link to={`/${userName}/forthMuseum`}>Back to levels</Link>
        <h1>4</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName}/forthMuseum/fifthLevel`}>Next Level</Link>
        <br />
        <Link to={`/${userName}/forthMuseum/thirdLevel`}>Previous Level</Link>
      </div>
    );
  if (num === "4.5")
    return (
      <div>
        <Link to={`/${userName}/forthMuseum`}>Back to levels</Link>
        <h1>5</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <p>Next Level</p>
        <br />
        <Link to={`/${userName}/forthMuseum/forthLevel`}>Previous Level</Link>
      </div>
    );
}

export default Levels;
