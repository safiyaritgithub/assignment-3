import React from "react";

const ContactCard =(props)=>{
const {id,name,email}=props.contact


  return(
    <div className="flex justify-between">
      <i class="fa-solid fa-circle-user relative left-20 mt-4 text-2xl "></i>
      <div className="border p-2 w-11/12  ">
       <div className="ml-8">{name}</div>
        <div className="ml-8">{email}</div>
      </div>
      <i class="fa-solid fa-trash text-red-500 relative right-24 mt-6" onClick={()=>
        props.clickHandler(id)
      }></i>
    </div>
  )

}
export default ContactCard