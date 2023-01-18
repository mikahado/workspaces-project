import React, {useState} from 'react'


const WorkspaceAdd = ({onAddWorkspace}) => {

  const [addWorkspace, setAddWorkspace] = useState({
    title: "",
    address: ""
  })


  function handleSubmit(e) {
    e.preventDefault()

    const newSpace = {
      title: addWorkspace.title,
      address: addWorkspace.address
    }

    fetch("http://localhost:9292/workspaces", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSpace),
    })
      .then((r) => r.json())
      .then((newWorkspace) => {
        onAddWorkspace(newWorkspace);
        setAddWorkspace("");
      });
  }

  const handleChange = (e) => {
    setAddWorkspace({
    ...addWorkspace, [e.target.name]: e.target.value
    })
  }

  console.log(addWorkspace)


  return (

    <div>
        
      <form onSubmit={handleSubmit}>
        Name: 
          <input
          type="text"
          name="title"
          autoComplete="off"
          value={addWorkspace.title}
          onChange={handleChange}
        />
        <br />
        <br />
        Address: 
          <input
          type="text"
          name="address"
          autoComplete="off"
          value={addWorkspace.address}
          onChange={handleChange}
        />


      <button type="submit">Send</button>

    </form>


    </div>
  
    )
}

export default WorkspaceAdd