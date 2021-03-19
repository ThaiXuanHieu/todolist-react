import "./style.css";
import Icon from "@material-ui/core/Icon";
const SideBar = (props) => {
  return (
    <ul className="sidebar mt-3">
      <li>
        <div className="sidebar-item">
          <Icon style={{color:"#767678"}}>home</Icon> <span>Task</span>
        </div>
      </li>
      <li>
        <div className="sidebar-item">
          <Icon style={{color:"#767678"}}>search</Icon>
          <span>My day</span>
        </div>
      </li>
      <li>
        <div className="sidebar-item">
          <Icon style={{color:"#767678"}}>star</Icon> <span>Important</span>
        </div>
      </li>
      <li>
        <div className="sidebar-item">
          <Icon style={{color:"#767678"}}>date_range</Icon> <span>Planned</span>
        </div>
      </li>
    </ul>
  );
};

export default SideBar;
