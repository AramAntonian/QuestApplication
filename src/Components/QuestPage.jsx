import { Link } from "react-router-dom";
import "../style/QuestPage.css";

function QuestPage({ num, userName }) {
  if (num === "1") {
    return (
      <div id="list">
        <Link to={`/${userName.firstName}`}>
          <button>Back to Museums</button>{" "}
        </Link>
        <br />
        <Link to={`/${userName.firstName}/CharentsMuseum/firstLevel`}>
          <button
            style={{
              "backgroundColor": userName.Levels.firstMuseum.lvl1
                ? "green"
                : "red",
            }}
          >
            1
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/CharentsMuseum/secondLevel`}>
          <button
            style={{
              "backgroundColor": userName.Levels.firstMuseum.lvl2
                ? "green"
                : "red",
            }}
          >
            2
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/CharentsMuseum/thirdLevel`}>
          <button
            style={{
              "backgroundColor": userName.Levels.firstMuseum.lvl3
                ? "green"
                : "red",
            }}
          >
            3
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/CharentsMuseum/forthLevel`}>
          <button
            style={{
              "backgroundColor": userName.Levels.firstMuseum.lvl4
                ? "green"
                : "red",
            }}
          >
            4
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/CharentsMuseum/fifthLevel`}>
          <button
            style={{
              "backgroundColor": userName.Levels.firstMuseum.lvl5
                ? "green"
                : "red",
            }}
          >
            5
          </button>
        </Link>
      </div>
    );
  }
  if (num === "2") {
    return (
      <div id="list">
        <Link to={`/${userName.firstName}`}>
          <button>Back to Museums</button>{" "}
        </Link>
        <br />
        <Link to={`/${userName.firstName}/TumanyanMuseum/firstLevel`}>
          <button
            style={{
              "backgroundColor": userName.Levels.secondMuseum.lvl1
                ? "green"
                : "red",
            }}
          >
            1
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/TumanyanMuseum/secondLevel`}>
          <button
            style={{
              "backgroundColor": userName.Levels.secondMuseum.lvl2
                ? "green"
                : "red",
            }}
          >
            2
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/TumanyanMuseum/thirdLevel`}>
          <button
            style={{
              "backgroundColor": userName.Levels.secondMuseum.lvl3
                ? "green"
                : "red",
            }}
          >
            3
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/TumanyanMuseum/forthLevel`}>
          <button
            style={{
              "backgroundColor": userName.Levels.secondMuseum.lvl4
                ? "green"
                : "red",
            }}
          >
            4
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/TumanyanMuseum/fifthLevel`}>
          <button
            style={{
              "backgroundColor": userName.Levels.secondMuseum.lvl5
                ? "green"
                : "red",
            }}
          >
            5
          </button>
        </Link>
      </div>
    );
  }
  if (num === "3") {
    return (
      <div id="list">
        <Link to={`/${userName.firstName}`}>
          <button>Back to Museums</button>{" "}
        </Link>
        <br />
        <Link to={`/${userName.firstName}/IsahakyanMuseum/firstLevel`}>
          <button
            style={{
              "backgroundColor": userName.Levels.thirdMuseum.lvl1
                ? "green"
                : "red",
            }}
          >
            1
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/IsahakyanMuseum/secondLevel`}>
          <button
            style={{
              "backgroundColor": userName.Levels.thirdMuseum.lvl2
                ? "green"
                : "red",
            }}
          >
            2
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/IsahakyanMuseum/thirdLevel`}>
          <button
            style={{
              "backgroundColor": userName.Levels.thirdMuseum.lvl3
                ? "green"
                : "red",
            }}
          >
            3
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/IsahakyanMuseum/forthLevel`}>
          <button
            style={{
              "backgroundColor": userName.Levels.thirdMuseum.lvl4
                ? "green"
                : "red",
            }}
          >
            4
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/IsahakyanMuseum/fifthLevel`}>
          <button
            style={{
              "backgroundColor": userName.Levels.thirdMuseum.lvl5
                ? "green"
                : "red",
            }}
          >
            5
          </button>
        </Link>
      </div>
    );
  }
  if (num === "4") {
    return (
      <div id="list">
        <Link to={`/${userName.firstName}`}>
          <button>Back to Museums</button>{" "}
        </Link>
        <br />
        <Link to={`/${userName.firstName}/KomitasMuseum/firstLevel`}>
          <button
            style={{
              "backgroundColor": userName.Levels.forthMuseum.lvl1
                ? "green"
                : "red",
            }}
          >
            1
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/KomitasMuseum/secondLevel`}>
          <button
            style={{
              "backgroundColor": userName.Levels.forthMuseum.lvl2
                ? "green"
                : "red",
            }}
          >
            2
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/KomitasMuseum/thirdLevel`}>
          <button
            style={{
              "backgroundColor": userName.Levels.forthMuseum.lvl3
                ? "green"
                : "red",
            }}
          >
            3
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/KomitasMuseum/forthLevel`}>
          <button
            style={{
              "backgroundColor": userName.Levels.forthMuseum.lvl4
                ? "green"
                : "red",
            }}
          >
            4
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/KomitasMuseum/fifthLevel`}>
          <button
            style={{
              "backgroundColor": userName.Levels.forthMuseum.lvl5
                ? "green"
                : "red",
            }}
          >
            5
          </button>
        </Link>
      </div>
    );
  }
}
export default QuestPage;
