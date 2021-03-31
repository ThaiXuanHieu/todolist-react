import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const File = (props) => {
  return (
    <div className="section">
      <div title="Add File">
        <label className="btn-upload-file" htmlFor="file-upload">
          <FontAwesomeIcon icon="paperclip" />
          <span className="title-btn">Thêm tệp</span>
        </label>
        <input type="file" id="file-upload" style={{ display: "none" }} />
      </div>
      <div className="list-file">
        <div className="file-item">
          <div className="file-thumbnail">
            <div className="file-extension">PDF</div>
          </div>
          <div className="file-detail">
            <p className="file-name">Tên tệp.pdf</p>
            <div className="file-info">
              <span className="file-size">22.5KB</span>
              <span className="file-type">PDF</span>
            </div>
          </div>
          <button className="btn-deleteFile">
            <FontAwesomeIcon icon="times" />
          </button>
        </div>
        <div className="file-item">
          <div className="file-thumbnail">
            <div className="file-extension">DOC</div>
          </div>
          <div className="file-detail">
            <p className="file-name">Tên tệp.docx</p>
            <div className="file-info">
              <span className="file-size">22.5KB</span>
              <span className="file-type">Word</span>
            </div>
          </div>
          <button className="btn-deleteFile">
            <FontAwesomeIcon icon="times" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default File;
