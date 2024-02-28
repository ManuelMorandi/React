import { useState } from 'react';

export default function ContactList(){
  const [contacts, setContacts] = useState([]);
  const [id, setId] = useState(0);
  const [editing, setEditing] = useState(-1);
  
  const listData = contacts.map(contact =>
    <ContactCard key={contact.id} person={contact} deleteContact={deleteContact} editMode={enterEdit}/>  
  )

  function add(name, address){
    const contact = {id: id, name: name, address: address};
    setId(id + 1);
    setContacts([...contacts, contact]);
  }

  function enterEdit(id){
    setEditing(id);
  }

  function editContact(name, address){
    const contact = {id: editing, name: name, address: address};
    let index = contacts.findIndex(c => c.id == contact.id);
    contacts[index] = contact;
    setContacts(contacts);
    setEditing(-1);
  }

  function deleteContact(id){
    let index = contacts.findIndex((contact) => contact.id == id);
    let newContacts = [];
    for(let i = 0; i < contacts.length; i++)
      if(contacts[i].id != id)
        newContacts.push(contacts[i]);
    setContacts(newContacts);
  }

  if(editing != -1) {
    let index = contacts.findIndex((contact) => contact.id == editing);
    let contact = contacts[index];
    return(
      <>
        <EditContact contact={contact} editContact={editContact}/>
        <ul>{listData}</ul>
      </>
    )
  } else {
    return(
      <>
        <AddContact addContact={add}/>
        <ul>{listData}</ul>
      </>
    )
  }
}

function AddContact({addContact}){
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  function add(){
    addContact(name, address);
  }

  return(
    <>
      <h1>Add contact</h1>
      <label>
        Name:
        <input onChange={e => setName(e.target.value)}></input>
      </label>
      <label>
        Address:
        <input onChange={e => setAddress(e.target.value)}></input>
      </label>
      <button onClick={add}>Add</button>
    </>
  )
}

function EditContact({contact, editContact}){
  const [name, setName] = useState(contact.name);
  const [address, setAddress] = useState(contact.address);

  function edit(){
    editContact(name, address);
  }

  return(
    <>
      <h1>Edit contact</h1>
      <label>
        Name:
        <input value={name} onChange={e => setName(e.target.value)}></input>
      </label>
      <label>
        Address:
        <input value={address} onChange={e => setAddress(e.target.value)}></input>
      </label>
      <button onClick={edit}>Submit</button>
    </>
  )
}

function ContactCard({ person, deleteContact, editMode }){
  function editContact(){
    editMode(person.id);
  }

  function deletePerson(){
    deleteContact(person.id);
  }

  return(
    <>
      <h1>{person.name}</h1>
      <h3>{person.address}</h3>
      <br />
      <button onClick={editContact}>Edit</button>
      <button onClick={deletePerson}>Delete</button>
    </>
  )
}