import { Button, Input, Radio, RadioChangeEvent } from "antd";
import { useState } from "react";
import Style from "./style.module.css";

const { TextArea } = Input;
const Contact = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className={Style.container}>
      <div className={Style.title}>Contact us</div>
      <div className={Style.radios}>
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>Contact Us</Radio>
          <Radio value={2}>Request a feature</Radio>
          <Radio value={3}>Complaint</Radio>
        </Radio.Group>
      </div>
      <div className={Style.form}>
        <div className={Style.inputs}>
          <Input placeholder="Email" size="large" />
          <div className={Style.blank}></div>
          <Input placeholder="name" size="large" />
        </div>
        <div className={Style.message}>
          <TextArea
            placeholder="Message"
            autoSize={{ minRows: 5, maxRows: 5 }}
          />
        </div>
        <div className={Style.button}>
          <Button
            style={{
              backgroundColor: "#224279 ",
              borderColor: "#224279 ",
              color: "white",
            }}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
