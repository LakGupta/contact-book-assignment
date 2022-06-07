import React from "react";
import "./EditDetails.css";
import Modal from "../Modal";
import { useState } from "react";

export default function EditDetails(props) {

  const[newName, setNewName] = useState(props.formDetails.name)
  const nameChangeHandler = (event) => {
      setNewName(event.target.value);
  }
  const[newEmail, setNewEmail] = useState(props.formDetails.email)
  const emailChangeHandler = (event) => {
      setNewEmail(event.target.value);
}
  const[newPhone, setNewPhone] = useState(props.formDetails.phone)
  const phoneChangeHandler = (event) => {
      setNewPhone(event.target.value);
  }
  const[newWebsite, setNewWebsite] = useState(props.formDetails.website)
  const websiteChangeHandler = (event) => {
      setNewWebsite(event.target.value);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onClose();
    const editedData = {
      name: newName,
      email: newEmail,
      phone: newPhone,
      website: newWebsite,
      id: props.formDetails.id,
    
    };

    props.newContactDetails(editedData);
  }
  return (
    <Modal onClose={props.onClose} onSubmit={formSubmitHandler}>
      <div className="edit-header">
        <div class="ant-modal-header">
          <div class="ant-modal-title" id="rcDialogTitle0">
            Basic Modal
          </div>
        </div>
      </div>
      <form className="form-container">
        <div className="email-area row mb-4">
          <label htmlFor="inputName" className="col-4 col-sm-4 col-xs-12 form-label">
            Name:
          </label>
          <input
            type="text"
            className="col-8 col-xs-12 col-sm-8 form-control"
            id="inputName"
            defaultValue={props.formDetails.name}
            onChange={nameChangeHandler}
            aria-describedby="emailHelp"
          ></input>
        </div>
        <div className="email-area row mb-4">
          <label htmlFor="exampleInputEmail1" className="col col-sm-4 col-xs-12 form-label form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control col col-xs-12 col-sm-8"
            defaultValue={props.formDetails.email}
            onChange={emailChangeHandler}

            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
        </div>
        <div className="email-area row mb-4">
          <label htmlFor="exampleInputEmail1" className="col col-sm-4 col-xs-12 form-label form-label">
            Phone:
          </label>
          <input
            type="email"
            className="form-control col col-xs-12 col-sm-8"
            defaultValue={props.formDetails.phone}
            onChange={phoneChangeHandler}

            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
        </div>
        <div className="email-area row mb-4">
          <label htmlFor="exampleInputEmail1" className="col col-sm-4 col-xs-12 form-label form-label">
            Website:
          </label>
          <input
            type="email"
            className="form-control col col-xs-12 col-sm-8"
            id="exampleInputEmail1"
            defaultValue={props.formDetails.website}
            onChange={websiteChangeHandler}

            aria-describedby="emailHelp"
          ></input>
        </div>
      </form>
      <div class="ant-modal-footer">
        <div>
          <button onClick={props.onClose} type="button" class="ant-btn">
            <span>Cancel</span>
          </button>
          <button type="submit"  onClick={formSubmitHandler} class="ant-btn ant-btn-primary">
            <span>OK</span>
          </button>
        </div>
      </div>
    </Modal>
  );
}
