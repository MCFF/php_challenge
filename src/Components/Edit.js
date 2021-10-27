import React from "react";
import ReactDom from "react-dom";

export default function Actions(props) {
  return ReactDom.createPortal(
    <section className="bg-black bg-opacity-50 position-fixed w-100 h-100 top-0 d-inline-flex justify-content-center align-items-center">
      <div className="bg-white w-50 d-flex flex-column align-items-center rounded-3 p-2">
        <div className="d-flex w-100 flex-row justify-content-end">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={props.onClose}
          ></button>
        </div>
        <div className="d-flex flex-column">
          <h1 className="mt-5">Edit contact</h1>
          <input
            type="text"
            placeholder="Name"
            className="mt-3"
            onChange={props.onChangeName}
            value={props.nameValue}
          />
          <input
            type="text"
            placeholder="Last name"
            className="mt-3"
            onChange={props.onChangeLastName}
            value={props.lastNameValue}
          />
          <input
            type="text"
            placeholder="Email"
            className="mt-3"
            onChange={props.onChangeEmail}
            value={props.emailValue}
          />
          <button
            type="button"
            className="btn btn-success mt-5 mb-5"
            onClick={props.saveHandler}
          >
            Save
          </button>
        </div>
      </div>
    </section>,
    document.getElementById("actions")
  );
}
