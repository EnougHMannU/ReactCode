// import React from "react";
import { useState } from "react";

export default function Student(props){
    const[name,setName]=useState("MannU");
    const[course,setCourse]=useState("BCA");

    // function show(){
    //     alert("name is:"+props.name+"course is:"+props.course);
    // }
    return(
        <div>
            <h1>My name is:{props.name}</h1>
            <h1>My course is:{props.course}</h1>
            {/* <button onClick={()=>show()}>Show name</button> */}
        </div>
    )

}