import React from "react";
import { useState } from "react";
import "./IndividualContact.css";
import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HeartOutlined,
  EditOutlined,
  DeleteOutlined,
  HeartFilled,
} from "@ant-design/icons";

export default function IndividualContactRow(props) {
  const [ifLiked, setIfLiked] = useState(false);
  const clickHandler = () => {
    setIfLiked(!ifLiked);
  };

  
  return (
    <div className=" col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 col-3">
      <div className="container-test">
        <div className="body-image">
          <img
            src={`https://avatars.dicebear.com/v2/avataaars/${props.username}.svg?options[mood][]=happy`}
          ></img>
        </div>
        <div className="body-content">
          <h3>{props.name}</h3>
          <div className="d-flex flex-row">
            <MailOutlined style={{ fontSize: "18px", height: "26px" }} />
            <p>{props.email}</p>
          </div>
          <div className="d-flex flex-row">
            <PhoneOutlined style={{ fontSize: "18px", height: "26px" }} />
            <p>{props.phone}</p>
          </div>
          <div className="d-flex flex-row">
            <GlobalOutlined style={{ fontSize: "18px", height: "26px" }} />
            <p>{  `http://${props.website}`}</p>
          </div>
        </div>
        <ul className="body-actions">
          <li>
            <button onClick={clickHandler}>
              {ifLiked && <HeartFilled style={{ color: "red", fontSize: "20px" }}></HeartFilled>}
              {!ifLiked && (
                <HeartOutlined style={{ color: "red", fontSize: "20px" }} />
              )}{" "}
            </button>
          </li>

          <li>
            <button>
              {" "}
              <EditOutlined onClick={(e) => props.onShow(props) } style={{ fontSize: "20px" }}></EditOutlined>
            </button>
          </li>

          <li>
            <button>
              {" "}
              <DeleteOutlined onClick={ (e) => props.onDelete(props.id)} style={{ fontSize: "20px" }}></DeleteOutlined>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
