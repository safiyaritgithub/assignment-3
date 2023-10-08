import React from "react";

class AddContact extends React.Component{
state={
  name:"",
  email:"",
};

add=(e)=>{
  e.preventDefault()
  if(this.state.name ==="" && this.state.email ===""){
    alert("All the fields are mandatory!")
    return
  }
this.props.addContactHandler(this.state)
this.setState({name:"",email:""})
}

  render(){
    return(
      <div>
        <h2 className="text-2xl font-medium p-2">Add contact</h2>
        <form onSubmit={this.add}>
          <div className="ml-3 flex flex-col ">
            <label className="font-medium">Name</label>
            <input type="text" name="name" placeholder="Name" value={this.state.name} className="border p-2" onChange={(e)=>{
              this.setState({name:e.target.value})
            }}   />
          </div>
          <div className=" ml-3 flex flex-col">
            <label className="font-medium">Email</label>
            <input type="text" name="email" placeholder="Email" value={this.state.email} className="border p-2" onChange={(e)=>{
              this.setState({email:e.target.value})
            }} />
          </div>
          <button className="border px-2 py-1 w-16 bg-blue-500 text-white rounded-md ml-3 mt-2 font-medium"> Add</button>

        </form>
      </div>
    )
  }

}


export default AddContact