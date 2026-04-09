// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
import "./cssfiles/Datatable.css";
// import Studentdata from './Studentdata.js';
import { useState, useEffect} from "react";
// import Modal from 'react-bootstrap/Modal';
import Cmodal from './Cmodal';
// import ClassComponent from './ClassComponent.js';
import Ctable from './Ctable';

export default function Datatable (){
    const[panel,setPanel]=useState(false)
    const[list,setList]=useState([]);
    const[editdata,setEditdata]=useState(null);

    const[id1,setId1]=useState('');
    const[name1,setName1]=useState('');
    const[email1,setEmail1]=useState('');
    const[course1,setCourse1]=useState('');
    const[status1,setStatus1]=useState('');

    // const API = "https://nodeapi-1-jguo.onrender.com";
    const API="http://localhost:8080";
    useEffect(()=>{
        getdata();
    },[])

    // function updatedata(student){
    //     setEditdata(student);
    //     setPanel(true);
    // }

    
    //get api
      function getdata(){
        fetch(`${API}/getreact`)
        .then(response => response.json())
        .then(result => setList(result.data))
        .catch(error => console.error(error));
    }

    //delete api
    function deletedata(item){
        console.log(item);
        let optionapi = 
        {
            method: "DELETE",
             headers:{ "Content-Type":"application/json"},
             body:'' 
        }
        fetch(`${API}/deletereact/${item.id}`,optionapi)
            .then(response => response.json())
            .then(result => {console.log(result);
                getdata(); })
            .catch(error => console.error(error));
        }

        //post api
    function save()
    {
        
        let item = {
          id:Number(id1),
          name: name1,
          email:email1,
          course:course1,
          status:status1
        }
        if(editdata)
        {
            fetch(`${API}/putreact/${id1}`,{
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(item)
            })
                .then(response => response.json())
                .then(() => {
                    setPanel(false);
                    alert("RECORD UPDATED SUCCESSFULLY");
                    getdata(); })
        }
        else 
        {
            fetch(`${API}/postreact`,{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(item)
            })
            .then(response => response.json())
            .then(() => {
                    setPanel(false);
                    alert("RECORD SAVED SUCCESSFULLY");
                    getdata();
                });
        }
    }


    // function togglepanel(){
    //     setPanel(!panel)
    // }

    function addstudent(){
        setId1("");
        setName1("");
        setEmail1("");
        setCourse1("");
        setStatus1("");
        setEditdata(false);
        setPanel(true);
    }
    function handleedit(studentlist){
        setId1(studentlist.id);
        setName1(studentlist.name);
        setEmail1(studentlist.email);
        setCourse1(studentlist.course);
        setStatus1(studentlist.status);
        setEditdata(true);
        setPanel(true);
    }

    
    return(
        <div>
            
            <div className='table-container'>
                <button onClick={addstudent} className="show-panel-btn">Add student</button>

                        <Ctable lister={list} deletedata={deletedata} handleedit={handleedit}/>
                        
                        <div>
                            <Cmodal panelor={panel} setPanel={setPanel} save={save} editdata={editdata} setId1={setId1} setName1={setName1} setEmail1={setEmail1} setCourse1={setCourse1} setStatus1={setStatus1} id1={id1} name1={name1} email1={email1} course1={course1} status1={status1} />
                        </div>
            </div>
        </div>
    );
}