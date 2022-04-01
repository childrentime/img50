import { Upload, Image, message } from "antd";
import Style from "./style.module.css";
import retangle from "../../../assets/images/retangle.png";
import UploadProcess from "./Process";
import { useEffect, useRef, useState } from "react";
import { RcFile } from "antd/lib/upload";
const { Dragger } = Upload;
const UploadImage = () => {
  const dragRef = useRef<HTMLDivElement>(null);
  const [dragEnter, setDragEnter] = useState("white");
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [file, setFile] = useState<RcFile>();
  const props = {
    name: "file",
    showUploadList: false,
    accept: ".png,.jpg",
    beforeUpload: (file: RcFile) => {
      setDragEnter("white");
      setFile(file);
      setUploadSuccess(true);
      message.info("upload success");
      return false;
    },
  };

  useEffect(() => {
    dragRef.current!.addEventListener(
      "dragenter",
      () => {
        setUploadSuccess(false);
        setDragEnter("rgb(151, 203, 243)");
      },
      false
    );
  }, []);
  return (
    <div className={Style.container}>
      <Dragger
        {...props}
        className={Style.dragger}
        style={{ backgroundColor: dragEnter }}
      >
        <div
          ref={dragRef}
          onClick={() => {
            setUploadSuccess(false);
          }}
        >
          <p className="ant-upload-drag-icon">
            <Image src={retangle} preview={false} width={200} />
          </p>
          <div className={Style.head}>
            <div>
              <span>Drag&drop</span>
              <span className={Style.title}>images</span>
            </div>
            <div>
              or
              <span className={Style.description}>browse files</span>
              on your computer
            </div>
          </div>

          <p className={Style.foot}>JPG or PNG. Max Size 5MB or 2000x2000</p>
        </div>
      </Dragger>
      {uploadSuccess && <UploadProcess file={file!} />}
    </div>
  );
};

export default UploadImage;
