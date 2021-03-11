import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import taskService from "../../../../services/taskService";
import * as taskAction from "../../actions/taskAction";
import "./style.css";

const TaskList = (props) => {
  // const [listTask, setListTask] = useState([]);
  // useEffect(() => {
  //   taskService
  //     .getTasks()
  //     .then((response) => {
  //       setListTask(response.data);
  //     })
  //     .catch(() => {
  //       console.log("Lỗi hệ thống");
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const { list } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(taskAction.getTasks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdate = () => {

  }

  const handleDelete = (id) => {
    dispatch(taskAction.remove(id))
  }

  return (
    <div>
      <h6 className="mt-5">List Task</h6>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!!list &&
            list.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    className="mr-3"
                    title="Đánh dấu là đã hoàn thành"
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.dueDate}</td>
                <td>
                  <button className="btn btn-info">Thêm bước</button>
                  <button className="btn btn-warning" onClick={handleUpdate}>Sửa</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Xóa</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* {!!list &&
        list.map((item) => (
          <div key={item.id} className="d-flex align-items-center taskItem">
            <input
              type="checkbox"
              className="mr-3"
              title="Đánh dấu là đã hoàn thành"
            />
            <div>{item.title}</div>
            <div>{item.dueDate}</div>
          </div>
        ))} */}
    </div>
  );
};

export default TaskList;
