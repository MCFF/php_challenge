import React, { useState, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min";
import Edit from "../Components/Edit";
import Delete from "../Components/Delete";

export default function ContactDetailsView(props) {
  console.log(props);

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="border border-secondary rounded-3 d-flex flex-column align-items-center mt-5 w-25 p-5 shadow p-3 mb-5 bg-body rounded">
        <div>
          <img src={props.contactInfo.avatar} />
        </div>
        <div>
          <p>
            <span>
              {props.contactInfo.first_name} {props.contactInfo.last_name}
            </span>
          </p>
          <p>
            <span>{props.contactInfo.email}</span>
          </p>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-info me-2"
              onClick={props.onEdit}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger ms-2"
              onClick={props.onDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      {props.isEditing ? (
        <Edit
          onClose={props.onCloseEditing}
          onChangeName={props.onChangeName}
          nameValue={props.nameValue}
          onChangeLastName={props.onChangeLastName}
          lastNameValue={props.lastNameValue}
          onChangeEmail={props.onChangeEmail}
          emailValue={props.emailValue}
          saveHandler={props.saveHandler}
          saveHandler={props.saveHandler}
        />
      ) : null}
      {props.isDeleting ? (
        <Delete
          onClose={props.onCloseDeleting}
          deleteHandler={props.deleteHandler}
        />
      ) : null}
    </div>
  );
}
