import Style from "./style.module.css";
import { Image, Progress } from "antd";
import { useEffect, useMemo, useState } from "react";
import { RcFile } from "antd/lib/upload";
import {
  DownloadOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";

const UploadProcess = (props: { file: RcFile }) => {
  const { file } = props;
  const url = URL.createObjectURL(file);
  const [time, setTime] = useState<ReturnType<typeof setTimeout>>();
  const [percent, setPercent] = useState(1);
  const [play, setPlay] = useState(true);
  const remaining = useMemo(() => {
    return ~~((100 - percent) * Math.random());
  }, [percent]);

  useEffect(() => {
    const timeout = setInterval(() => {
      const random = ~~Math.abs(Math.random() * 10);
      setPercent((percent) => {
        const newPercent = random + percent;
        if (newPercent >= 100) {
          clearInterval(timeout);
          return 100;
        } else {
          return newPercent;
        }
      });
    }, 100);
    setTime(timeout);
  }, []);
  return (
    <div className={Style.process}>
      <div className={Style.pLeft}>
        <div className={Style.mask}>
          <Image src={url} preview={false} width={100} style={{ height: 60 }} />
          {percent === 100 && <div className={Style.cover}>Done</div>}
        </div>
        <div className={Style.imgText}>{file.name}</div>
      </div>
      <div className={Style.pRight}>
        <div className={Style.uploadText}>
          <h3 className={Style.h3}>
            {percent !== 100 ? "Uploading" : "Download"}
          </h3>
          <div className={Style.uploadIcon}>
            {percent === 100 ? (
              <DownloadOutlined
                className={Style.icon}
                onClick={() => {
                  const element = document.createElement("a");
                  element.download = file.name;
                  element.target = "_blank";
                  element.href = url;
                  element.click();
                }}
              />
            ) : play ? (
              <PauseCircleOutlined
                className={Style.icon}
                onClick={() => {
                  setPlay(false);
                  if (time) {
                    clearInterval(time);
                  }
                }}
              />
            ) : (
              <PlayCircleOutlined
                className={Style.icon}
                onClick={() => {
                  setPlay(true);
                  const timeout = setInterval(() => {
                    const random = ~~Math.abs(Math.random() * 10);
                    setPercent((percent) => {
                      const newPercent = random + percent;
                      if (newPercent >= 100) {
                        clearInterval(timeout);
                        return 100;
                      } else {
                        return newPercent;
                      }
                    });
                  }, 1000);
                  setTime(timeout);
                }}
              />
            )}
          </div>
        </div>
        {percent !== 100 ? (
          <div>{`${percent}% · ${remaining} Seconds remaining`}</div>
        ) : (
          <div>{`${percent}% · transform completed`}</div>
        )}

        <Progress
          percent={percent}
          strokeColor={{
            "0%": "#133570",
            "100%": "#87d068",
          }}
        />
      </div>
    </div>
  );
};

export default UploadProcess;
