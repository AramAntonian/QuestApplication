import { Link } from "react-router-dom";
import "../style/QuestPage.css";

function QuestPage({ num, userName }) {
  if (num === "1") {
    return (
      <div>
        <Link to={`/${userName.firstName}`}>
          <button>Back to Museums</button>{" "}
        </Link>
        <br />
        <Link to={`/${userName.firstName}/firstMuseum/firstLevel`}>
          <button
            style={{
              "background-color": userName.Levels.firstMuseum.lvl1
                ? "green"
                : "red",
            }}
          >
            1
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/firstMuseum/secondLevel`}>
          <button
            style={{
              "background-color": userName.Levels.firstMuseum.lvl2
                ? "green"
                : "red",
            }}
          >
            2
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/firstMuseum/thirdLevel`}>
          <button
            style={{
              "background-color": userName.Levels.firstMuseum.lvl3
                ? "green"
                : "red",
            }}
          >
            3
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/firstMuseum/forthLevel`}>
          <button
            style={{
              "background-color": userName.Levels.firstMuseum.lvl4
                ? "green"
                : "red",
            }}
          >
            4
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/firstMuseum/fifthLevel`}>
          <button
            style={{
              "background-color": userName.Levels.firstMuseum.lvl5
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
      <div>
        <Link to={`/${userName.firstName}`}>
          <button>Back to Museums</button>{" "}
        </Link>
        <br />
        <Link to={`/${userName.firstName}/z/firstLevel`}>
          <button
            style={{
              "background-color": userName.Levels.secondMuseum.lvl1
                ? "green"
                : "red",
            }}
          >
            1
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/secondMuseum/secondLevel`}>
          <button
            style={{
              "background-color": userName.Levels.secondMuseum.lvl2
                ? "green"
                : "red",
            }}
          >
            2
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/secondMuseum/thirdLevel`}>
          <button
            style={{
              "background-color": userName.Levels.secondMuseum.lvl3
                ? "green"
                : "red",
            }}
          >
            3
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/secondMuseum/forthLevel`}>
          <button
            style={{
              "background-color": userName.Levels.secondMuseum.lvl4
                ? "green"
                : "red",
            }}
          >
            4
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/secondMuseum/fifthLevel`}>
          <button
            style={{
              "background-color": userName.Levels.secondMuseum.lvl5
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
      <div>
        <Link to={`/${userName.firstName}`}>
          <button>Back to Museums</button>{" "}
        </Link>
        <br />
        <Link to={`/${userName.firstName}/thirdMuseum/firstLevel`}>
          <button
            style={{
              "background-color": userName.Levels.thirdMuseum.lvl1
                ? "green"
                : "red",
            }}
          >
            1
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/thirdMuseum/secondLevel`}>
          <button
            style={{
              "background-color": userName.Levels.thirdMuseum.lvl2
                ? "green"
                : "red",
            }}
          >
            2
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/thirdMuseum/thirdLevel`}>
          <button
            style={{
              "background-color": userName.Levels.thirdMuseum.lvl3
                ? "green"
                : "red",
            }}
          >
            3
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/thirdMuseum/forthLevel`}>
          <button
            style={{
              "background-color": userName.Levels.thirdMuseum.lvl4
                ? "green"
                : "red",
            }}
          >
            4
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/thirdMuseum/fifthLevel`}>
          <button
            style={{
              "background-color": userName.Levels.thirdMuseum.lvl5
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
      <div>
        <Link to={`/${userName.firstName}`}>
          <button>Back to Museums</button>{" "}
        </Link>
        <br />
        <Link to={`/${userName.firstName}/forthMuseum/firstLevel`}>
          <button
            style={{
              "background-color": userName.Levels.forthMuseum.lvl1
                ? "green"
                : "red",
            }}
          >
            1
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/forthMuseum/secondLevel`}>
          <button
            style={{
              "background-color": userName.Levels.forthMuseum.lvl2
                ? "green"
                : "red",
            }}
          >
            2
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/forthMuseum/thirdLevel`}>
          <button
            style={{
              "background-color": userName.Levels.forthMuseum.lvl3
                ? "green"
                : "red",
            }}
          >
            3
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/forthMuseum/forthLevel`}>
          <button
            style={{
              "background-color": userName.Levels.forthMuseum.lvl4
                ? "green"
                : "red",
            }}
          >
            4
          </button>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/forthMuseum/fifthLevel`}>
          <button
            style={{
              "background-color": userName.Levels.forthMuseum.lvl5
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
