import React, { useState, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min";
import edit from "../Assets/edit.png";
import trash from "../Assets/trash.png";
import menu from "../Assets/menu.png";
import Edit from "../Components/Edit";
import Delete from "../Components/Delete";
import { Link } from "react-router-dom";

export default function ContactListView(props) {
  return (
    <div>
      <ul className="d-inline-flex p-2 bd-highlight justify-content-between list-unstyled w-100">
        {props.contacts.map((contact) => {
          return (
            <li key={contact.id} className="shadow-sm p-0 bg-body rounded">
              <div className="card" style={{ width: "10rem" }}>
                <Link
                  to={`/details/${contact.id}`}
                  className="text-body text-decoration-none"
                >
                  <img
                    src={contact.avatar}
                    className="card-img-top position-relative"
                  />
                </Link>
                <div className="card-body">
                  <Link
                    to={`/details/${contact.id}`}
                    className="text-body text-decoration-none"
                  >
                    <p className="card-text">
                      {contact.first_name} {contact.last_name}
                    </p>
                    <p className="card-text">{contact.email}</p>
                  </Link>
                  <div className="dropdown position-absolute top-0 end-0">
                    <div data-bs-toggle="dropdown">
                      <img src={menu} style={{ width: "15px" }} />
                    </div>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a
                          className="dropdown-item"
                          onClick={() => {
                            props.onEdit(contact.id);
                          }}
                        >
                          <img src={edit} style={{ width: "20px" }} />
                          <span>Edit</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          onClick={() => {
                            props.onDelete(contact.id);
                          }}
                        >
                          <img src={trash} style={{ width: "20px" }} />
                          <span>Delete</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
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
