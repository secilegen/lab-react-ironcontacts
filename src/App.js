import './App.css';
import contactList from './contacts.json'
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(contactList.slice(0,5))

  const deleteContact = contactId => { 
    const filteredContacts = contacts.filter(contact =>{
      return contact.id !== contactId
    })
    setContacts(filteredContacts)
  }

  //filter out the ones who are already on the display - come back to this
  const addRandomContact = () =>{
    const randomContact = contactList[Math.floor(Math.random()*contactList.length)]
    const newContactList = [randomContact, ...contacts]
    setContacts(newContactList)
  }

  const sortPopular = () =>{
    const sortedByPopularity = [...contacts]
    sortedByPopularity.sort((a,b)=>{
      if (a.popularity<b.popularity){
        return 1
      }
      else if (a.popularity>b.popularity){
        return -1
      }
    })
    setContacts(sortedByPopularity)
  }

  const sortName = () => {
    const sortedByName = [...contacts]
    sortedByName.sort((a,b)=>{
      if (a.name<b.name){
        return -1
      }
      else if (a.name>b.name){
        return 1
      }
    })
    setContacts(sortedByName)
  }
  
  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={()=>{addRandomContact()}}>Add Random Contact</button>
      <button onClick={()=>{sortPopular()}}>Sort by popularity</button>
      <button onClick={()=>{sortName()}}>Sort by name</button>

      <table>
        <tr>  
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>
        
        
          { contacts.map(contact=> (
             <tr key={contact.id}> 
            <td><img src={contact.pictureUrl}></img></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar && <p>YES</p>}</td>
            <td>{contact.wonEmmy && <p>YES</p>}</td>
           <td><button onClick={()=> deleteContact(contact.id)}>Delete</button></td>
            </tr>

            
            ))}
        
        
      </table>
    </div>
  );
}

export default App;
