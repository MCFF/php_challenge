import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ContactListViewModel from "../ViewModel/ContactListViewModel";
import ContactListView from "../View/ContactListView";
import ContactDetailsView from "../View/ContactDetailsView";

export default function ContactDetails(props) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactInfo, setContctInfo] = useState({
    avatar: "",
    first_name: "",
    last_name: "",
    email: "",
  });
  const [editingContact, setEditingContact] = useState(false);
  const [deletingContact, setDeletingContact] = useState(false);

  const { id } = useParams();

  const onSave = (id) => {
    fetch(`https://reqres.in/api/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        lastName: lastName,
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      const json = await response.json();
      setContctInfo({
        ...contactInfo,
        first_name: name,
        last_name: lastName,
        email: email,
      });
      setEditingContact(false);
    });
  };

  const onDelete = () => {
    fetch(`https://reqres.in/api/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      const status = response.status;
      if (status === 204) {
        props.history.goBack();
      }
    });
  };

  const editHandler = (v) => {
    setEditingContact(true);
  };

  const closeEditingHandler = () => {
    setEditingContact(false);
  };

  const deleteHandler = () => {
    setDeletingContact(true);
  };

  const closeDeletingHandler = () => {
    setDeletingContact(false);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const getContact = () => {
    fetch(`https://reqres.in/api/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      const json = await response.json();
      if (json) {
        setContctInfo(json.data);
      }
      console.log(json.data);
    });
  };

  useEffect(() => {
    getContact();
  }, []);

  return (
    <ContactDetailsView
      contactInfo={contactInfo}
      onEdit={editHandler}
      isEditing={editingContact}
      onCloseEditing={closeEditingHandler}
      onDelete={deleteHandler}
      isDeleting={deletingContact}
      onCloseDeleting={closeDeletingHandler}
      onChangeName={onChangeName}
      nameValue={name}
      onChangeLastName={onChangeLastName}
      lastNameValue={lastName}
      onChangeEmail={onChangeEmail}
      emailValue={email}
      saveHandler={onSave}
      deleteHandler={onDelete}
    />
  );
}
