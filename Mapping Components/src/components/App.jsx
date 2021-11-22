import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact)
{
  return <Card 
  key = {contact.id}
  name = {contact.name}
  email = {contact.email} 
  tel = {contact.tel} 
  img = {contact.imgURL}/>
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img = "https://media-exp1.licdn.com/dms/image/C4D03AQGnfc3RqhGmdA/profile-displayphoto-shrink_200_200/0/1633511208414?e=1640217600&v=beta&t=2n4G2Sj4JS3tAaHFVRnFyWlhkPmMKFGxpm6tv60bsa0"/>
      {contacts.map(createCard)}


     {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
