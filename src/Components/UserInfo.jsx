import { Link } from "react-router-dom";
import "../style/UserInfo.css";

function UserInfo({ userName }) {
  return (
    <div>
      <h1>
        {userName.firstName} {userName.lastName}
      </h1>
      <h2>Points:{userName.points}</h2>
      <h3>Levels list:</h3>
      <table>
        <tr>
          <th>
            <Link to="/firstMuseum">Museum 1</Link>
          </th>
          <td
            style={{
              "background-color": userName.Levels.firstMuseum.lvl1
                ? "green"
                : "red",
            }}
          >
            Level 1
            {userName.Levels.firstMuseum.lvl1 ? ` Passed` : ` Not passed`}
          </td>
          <td
            style={{
              "background-color": userName.Levels.firstMuseum.lvl2
                ? "green"
                : "red",
            }}
          >
            Level 2
            {userName.Levels.firstMuseum.lvl2 ? ` Passed` : ` Not passed`}
          </td>
          <td
            style={{
              "background-color": userName.Levels.firstMuseum.lvl3
                ? "green"
                : "red",
            }}
          >
            Level 3
            {userName.Levels.firstMuseum.lvl3 ? ` Passed` : ` Not passed`}
          </td>
          <td
            style={{
              "background-color": userName.Levels.firstMuseum.lvl4
                ? "green"
                : "red",
            }}
          >
            Level 4
            {userName.Levels.firstMuseum.lvl4 ? ` Passed` : ` Not passed`}
          </td>
          <td
            style={{
              "background-color": userName.Levels.firstMuseum.lvl5
                ? "green"
                : "red",
            }}
          >
            Level 5
            {userName.Levels.firstMuseum.lvl5 ? ` Passed` : ` Not passed`}
          </td>
        </tr>
        <tr>
          <th>
            <Link to="/secondMuseum">Museum 2</Link>
          </th>
          <td
            style={{
              "background-color": userName.Levels.secondMuseum.lvl1
                ? "green"
                : "red",
            }}
          >
            Level 1
            {userName.Levels.secondMuseum.lvl1 ? ` Passed` : ` Not passed`}
          </td>
          <td
            style={{
              "background-color": userName.Levels.secondMuseum.lvl2
                ? "green"
                : "red",
            }}
          >
            Level 2
            {userName.Levels.secondMuseum.lvl2 ? ` Passed` : ` Not passed`}
          </td>
          <td
            style={{
              "background-color": userName.Levels.secondMuseum.lvl3
                ? "green"
                : "red",
            }}
          >
            Level 3
            {userName.Levels.secondMuseum.lvl3 ? ` Passed` : ` Not passed`}
          </td>
          <td
            style={{
              "background-color": userName.Levels.secondMuseum.lvl4
                ? "green"
                : "red",
            }}
          >
            Level 4
            {userName.Levels.secondMuseum.lvl4 ? ` Passed` : ` Not passed`}
          </td>
          <td
            style={{
              "background-color": userName.Levels.secondMuseum.lvl5
                ? "green"
                : "red",
            }}
          >
            Level 5
            {userName.Levels.secondMuseum.lvl5 ? ` Passed` : ` Not passed`}
          </td>
        </tr>
        <tr>
          <th>
            <Link to="/thirdMuseum">Museum 3</Link>
          </th>
          <td
            style={{
              "background-color": userName.Levels.thirdMuseum.lvl1
                ? "green"
                : "red",
            }}
          >
            Level 1
            {userName.Levels.thirdMuseum.lvl1 ? ` Passed` : ` Not passed`}
          </td>
          <td
            style={{
              "background-color": userName.Levels.thirdMuseum.lvl2
                ? "green"
                : "red",
            }}
          >
            Level 2
            {userName.Levels.thirdMuseum.lvl2 ? ` Passed` : ` Not passed`}
          </td>
          <td
            style={{
              "background-color": userName.Levels.thirdMuseum.lvl3
                ? "green"
                : "red",
            }}
          >
            Level 3
            {userName.Levels.thirdMuseum.lvl3 ? ` Passed` : ` Not passed`}
          </td>
          <td
            style={{
              "background-color": userName.Levels.thirdMuseum.lvl4
                ? "green"
                : "red",
            }}
          >
            Level 4
            {userName.Levels.thirdMuseum.lvl4 ? ` Passed` : ` Not passed`}
          </td>
          <td
            style={{
              "background-color": userName.Levels.thirdMuseum.lvl5
                ? "green"
                : "red",
            }}
          >
            Level 5
            {userName.Levels.thirdMuseum.lvl5 ? ` Passed` : ` Not passed`}
          </td>
        </tr>
        <tr>
          <th>
            <Link to="/forthMuseum">Museum 4</Link>
          </th>
          <td
            style={{
              "background-color": userName.Levels.forthMuseum.lvl1
                ? "green"
                : "red",
            }}
          >
            Level 1
            {userName.Levels.forthMuseum.lvl1 ? ` Passed` : ` Not passed`}
          </td>
          <td
            style={{
              "background-color": userName.Levels.forthMuseum.lvl2
                ? "green"
                : "red",
            }}
          >
            Level 2
            {userName.Levels.forthMuseum.lvl2 ? ` Passed` : ` Not passed`}
          </td>
          <td
            style={{
              "background-color": userName.Levels.forthMuseum.lvl3
                ? "green"
                : "red",
            }}
          >
            Level 3
            {userName.Levels.forthMuseum.lvl3 ? ` Passed` : ` Not passed`}
          </td>
          <td
            style={{
              "background-color": userName.Levels.forthMuseum.lvl4
                ? "green"
                : "red",
            }}
          >
            Level 4
            {userName.Levels.forthMuseum.lvl4 ? ` Passed` : ` Not passed`}
          </td>
          <td
            style={{
              "background-color": userName.Levels.forthMuseum.lvl5
                ? "green"
                : "red",
            }}
          >
            Level 5
            {userName.Levels.forthMuseum.lvl5 ? ` Passed` : ` Not passed`}
          </td>
        </tr>
      </table>
      <Link to="/">sign out</Link>
      <br />
      {userName.password !== "" ? (
        <Link to={`/${userName.firstName}/changePassword`}>
          Change password
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}
export default UserInfo;
