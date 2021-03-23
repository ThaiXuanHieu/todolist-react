import "./style.css";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
const SideBar = (props) => {
  return (
    <ul className="sidebar mt-3">
      <li>
        <div className="sidebar-item">
          <Link to="/task" className="sidebar-link">
            <Icon style={{ color: "#767678" }}>home</Icon> <span>Task</span>
          </Link>
        </div>
      </li>
      <li>
        <div className="sidebar-item">
          <Link to="/myday" className="sidebar-link">
            <Icon style={{ color: "#767678" }}>search</Icon>
            <span>My day</span>
          </Link>
        </div>
      </li>
      <li>
        <div className="sidebar-item">
          <Link to="/important" className="sidebar-link">
            <Icon style={{ color: "#767678" }}>star</Icon>{" "}
            <span>Important</span>
          </Link>
        </div>
      </li>
      <li>
        <div className="sidebar-item">
          <Link to="/planned" className="sidebar-link">
            <Icon style={{ color: "#767678" }}>date_range</Icon>{" "}
            <span>Planned</span>
          </Link>
        </div>
      </li>
    </ul>
  );
};

export default SideBar;
