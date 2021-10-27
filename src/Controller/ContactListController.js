import React, { useState, useEffect } from "react";
import ContactListViewModel from "../ViewModel/ContactListViewModel";
import ContactListView from "../View/ContactListView";

export default function ContactList() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactList, setContactList] = useState([]);
  const [editingContact, setEditingContact] = useState(false);
  const [deletingContact, setDeletingContact] = useState(false);
  const [editingId, setEditingId] = useState(0);
  const [deletingId, setDeletingId] = useState(0);

  const onSave = () => {
    fetch(`https://reqres.in/api/users/${editingId}`, {
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

      const contacts = contactList.map((contact) => {
        console.log(contact.id + " id " + editingId);
        if (contact.id == editingId) {
          console.log("entra");
          contact = {
            ...contact,
            first_name: name,
            last_name: lastName,
            email: email,
          };
        }
        return contact;
      });

      setContactList(contacts);
      setEditingContact(false);
    });
  };

  const onDelete = () => {
    console.log(deletingId);
    fetch(`https://reqres.in/api/users/${deletingId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      const status = response.status;
      if (status === 204) {
        setDeletingContact(false);
        const contacts = contactList.filter(
          (contact) => contact.id != deletingId
        );

        setContactList(contacts);
      }
    });
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

  const editHandler = (id) => {
    setEditingId(id);
    setEditingContact(true);
  };

  const closeEditingHandler = () => {
    setEditingContact(false);
  };

  const deleteHandler = (id) => {
    setDeletingId(id);
    setDeletingContact(true);
  };

  const closeDeletingHandler = () => {
    setDeletingContact(false);
  };

  const getList = () => {
    fetch("https://reqres.in/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      const json = await response.json();
      setContactList(json.data);
    });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <ContactListView
      contacts={contactList}
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
