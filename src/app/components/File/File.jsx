import { useDispatch } from "react-redux";
import "./style.css";
import { Link } from "react-router-dom";
import { formatTypeFile } from "../../utils/fileHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as taskAction from "../../actions/taskAction";

const File = (props) => {
  const { taskId, files } = props;
  const dispatch = useDispatch();
  const handleUploadFile = (e) => {
    dispatch(taskAction.addFile(taskId, e.target.files[0]));
  };

  return (
    <div className="section">
      <div title="Thêm tệp">
        <label className="btn-upload-file m-0" htmlFor="file-upload">
          <FontAwesomeIcon icon="paperclip" />
          <span className="title-btn">Thêm tệp</span>
        </label>
        <input
          type="file"
          id="file-upload"
          accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.presentationml.presentation"
          style={{ display: "none" }}
          onChange={handleUploadFile}
        />
      </div>
      <div className="list-file">
        {files &&
          files.map((item) => (
            <Link key={item.id} className="file-item" to={item.path}>
              <div className="file-thumbnail">
                <div className="file-extension">
                  {item.type.slice(0, 3).toUpperCase()}
                </div>
              </div>
              <div className="file-detail">
                <p className="file-name">{item.name}</p>
                <div className="file-info">
                  <span className="file-size">{item.size}</span>
                  <span className="file-type">{formatTypeFile(item.type)}</span>
                </div>
              </div>
              <button className="btn-deleteFile">
                <FontAwesomeIcon icon="times" />
              </button>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default File;
