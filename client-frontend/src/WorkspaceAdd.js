import React, {useState} from 'react'



const WorkspaceAdd = ({onAddWorkspace}) => {

  const [addWorkspace, setAddWorkspace] = useState({
    name: "",
    address: ""
  })

  function handleSubmit(e) {
    e.preventDefault()

    fetch("http://localhost:9292/workspaces", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: addWorkspace.name,
        address: addWorkspace.address,
      }),
    })
      .then((r) => r.json())
      .then((newWorkspace) => {
        onAddWorkspace(newWorkspace);
        setAddWorkspace("");
      });
  }

  console.log(addWorkspace)


  return (

    <div>
        
      <form onSubmit={handleSubmit}>
        Name: 
          <input
          type="text"
          name="name"
          autoComplete="off"
          value={addWorkspace.name}
          onChange={(e) => setAddWorkspace(e.target.value)}
        />
        Address: 
          <input
          type="text"
          name="address"
          autoComplete="off"
          value={addWorkspace.address}
          onChange={(e) => setAddWorkspace(e.target.value)}
        />


      <button type="submit">Send</button>

    </form>


    </div>
  
    )
}

export default WorkspaceAdd