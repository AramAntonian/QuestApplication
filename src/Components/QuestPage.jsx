import { ArrowBackIos } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../style/QuestPage.css";

function QuestPage({ num, userName }) {
  if (num === "1") {
    return (
      <div className="list">
        <Link to={`/${userName.firstName}`}>
          <ArrowBackIos />
        </Link>
        <br />
        <Link to={`/${userName.firstName}/CharentsMuseum/firstLevel`}>
          <div className="btn-container">
            <Button
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: userName.Levels.firstMuseum.lvl1
                  ? "green"
                  : "red",
              }}
            >
              1
            </Button>
          </div>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/CharentsMuseum/secondLevel`}>
          <div className="btn-container">
            <Button
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: userName.Levels.firstMuseum.lvl2
                  ? "green"
                  : "red",
              }}
            >
              2
            </Button>
          </div>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/CharentsMuseum/thirdLevel`}>
          <div className="btn-container">
            <Button
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: userName.Levels.firstMuseum.lvl3
                  ? "green"
                  : "red",
              }}
            >
              3
            </Button>
          </div>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/CharentsMuseum/forthLevel`}>
          <div className="btn-container">
            <Button
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: userName.Levels.firstMuseum.lvl4
                  ? "green"
                  : "red",
              }}
            >
              4
            </Button>
          </div>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/CharentsMuseum/fifthLevel`}>
          <div className="btn-container">
            <Button
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: userName.Levels.firstMuseum.lvl5
                  ? "green"
                  : "red",
              }}
            >
              5
            </Button>
          </div>
        </Link>
      </div>
    );
  }
  if (num === "2") {
    return (
      <div className="list">
        <Link to={`/${userName.firstName}`}>
          <ArrowBackIos />
        </Link>
        <br />
        <Link to={`/${userName.firstName}/TumanyanMuseum/firstLevel`}>
          <div className="btn-container">
            <Button
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: userName.Levels.secondMuseum.lvl1
                  ? "green"
                  : "red",
              }}
            >
              1
            </Button>
          </div>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/TumanyanMuseum/secondLevel`}>
          <div className="btn-container">
            <Button
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: userName.Levels.secondMuseum.lvl2
                  ? "green"
                  : "red",
              }}
            >
              2
            </Button>
          </div>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/TumanyanMuseum/thirdLevel`}>
          <div className="btn-container">
            <Button
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: userName.Levels.secondMuseum.lvl3
                  ? "green"
                  : "red",
              }}
            >
              3
            </Button>
          </div>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/TumanyanMuseum/forthLevel`}>
          <div className="btn-container">
            <Button
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: userName.Levels.secondMuseum.lvl4
                  ? "green"
                  : "red",
              }}
            >
              4
            </Button>
          </div>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/TumanyanMuseum/fifthLevel`}>
          <div className="btn-container">
            <Button
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: userName.Levels.secondMuseum.lvl5
                  ? "green"
                  : "red",
              }}
            >
              5
            </Button>
          </div>
        </Link>
      </div>
    );
  }
  if (num === "3") {
    return (
      <div className="list">
        <Link to={`/${userName.firstName}`}>
          <ArrowBackIos />
        </Link>
        <br />
        <Link to={`/${userName.firstName}/IsahakyanMuseum/firstLevel`}>
          <div className="btn-container">
            <Button
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: userName.Levels.thirdMuseum.lvl1
                  ? "green"
                  : "red",
              }}
            >
              1
            </Button>
          </div>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/IsahakyanMuseum/secondLevel`}>
          <div className="btn-container">
            <Button
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: userName.Levels.thirdMuseum.lvl2
                  ? "green"
                  : "red",
              }}
            >
              2
            </Button>
          </div>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/IsahakyanMuseum/thirdLevel`}>
          <div className="btn-container">
            <Button
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: userName.Levels.thirdMuseum.lvl3
                  ? "green"
                  : "red",
              }}
            >
              3
            </Button>
          </div>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/IsahakyanMuseum/forthLevel`}>
          <div className="btn-container">
            <Button
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: userName.Levels.thirdMuseum.lvl4
                  ? "green"
                  : "red",
              }}
            >
              4
            </Button>
          </div>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/IsahakyanMuseum/fifthLevel`}>
          <div className="btn-container">
            <Button
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: userName.Levels.thirdMuseum.lvl5
                  ? "green"
                  : "red",
              }}
            >
              5
            </Button>
          </div>
        </Link>
      </div>
    );
  }
  if (num === "4") {
    return (
      <div className="list">
        <Link to={`/${userName.firstName}`}>
          <ArrowBackIos />
        </Link>
        <br />
        <Link to={`/${userName.firstName}/KomitasMuseum/firstLevel`}>
          <div className="btn-container">
            <Button
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: userName.Levels.forthMuseum.lvl1
                  ? "green"
                  : "red",
              }}
            >
              1
            </Button>
          </div>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/KomitasMuseum/secondLevel`}>
          <div className="btn-container">
            <Button
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: userName.Levels.forthMuseum.lvl2
                  ? "green"
                  : "red",
              }}
            >
              2
            </Button>
          </div>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/KomitasMuseum/thirdLevel`}>
          <div className="btn-container">
            <Button
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: userName.Levels.forthMuseum.lvl3
                  ? "green"
                  : "red",
              }}
            >
              3
            </Button>
          </div>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/KomitasMuseum/forthLevel`}>
          <div className="btn-container">
            <Button
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: userName.Levels.forthMuseum.lvl4
                  ? "green"
                  : "red",
              }}
            >
              4
            </Button>
          </div>
        </Link>
        <br />
        <Link to={`/${userName.firstName}/KomitasMuseum/fifthLevel`}>
          <div className="btn-container">
            <Button
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: userName.Levels.forthMuseum.lvl5
                  ? "green"
                  : "red",
              }}
            >
              5
            </Button>
          </div>
        </Link>
      </div>
    );
  }
}
export default QuestPage;
