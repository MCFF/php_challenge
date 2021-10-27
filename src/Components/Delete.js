import React from "react";
import ReactDom from "react-dom";

export default function Delete(props) {
  return ReactDom.createPortal(
    <section className="bg-black bg-opacity-50 position-fixed w-100 h-100 top-0 d-inline-flex justify-content-center align-items-center">
      <div className="bg-white w-50 d-flex flex-column align-items-center rounded-3 p-2">
        <h3>Do you really want to delete this contact?</h3>
        <div className="mt-5">
          <button className="btn btn-danger me-2" onClick={props.deleteHandler}>
            Accept
          </button>
          <button className="btn btn-light ms-2" onClick={props.onClose}>
            Cancel
          </button>
        </div>
      </div>
    </section>,
    document.getElementById("actions")
  );
}
