// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
import "../cssfiles/Datatable.css";
// import Studentdata from './Studentdata.js';
import { useState, useEffect} from "react";
// import Modal from 'react-bootstrap/Modal';
import Cmodal from './Smodal';
// import ClassComponent from './ClassComponent.js';
import Ctable from './Stable';

export default function Sdatatable (){
    const[panel,setPanel]=useState(false)
    const[list,setList]=useState([]);
    const[editdata,setEditdata]=useState(null);

    const[id1,setId1]=useState('');
    const[name1,setName1]=useState('');
    const[age1,setAge1]=useState('');
    const[address1,setAddress1]=useState('');
    const[rollno1,setRollno1]=useState('');

    // const API = "https://nodeapi-1-jguo.onrender.com";
    const API="https://nodecode-1-a6dl.onrender.com";
    useEffect(()=>{
        getdata();
    },[])

    // function updatedata(student){
    //     setEditdata(student);
    //     setPanel(true);
    // }

    
    //get api
      function getdata(){
        fetch(`${API}/getsdata`)
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
        fetch(`${API}/deletesdata/${item.name}`,optionapi)
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
          age:age1,
          address:address1,
          rollno:rollno1
        }
        if(editdata)
        {
            fetch(`${API}/putsdata/${name1}`,{
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
            fetch(`${API}/postsdata`,{
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
        setAge1("");
        setAddress1("");
        setRollno1("");
        setEditdata(false);
        setPanel(true);
    }
    function handleedit(studentlist){
        setId1(studentlist.id);
        setName1(studentlist.name);
        setAge1(studentlist.age);
        setAddress1(studentlist.address);
        setRollno1(studentlist.rollno);
        setEditdata(true);
        setPanel(true);
    }

    
    return(
        <div>
            
            <div className='table-container'>
                <button onClick={addstudent} className="show-panel-btn">Add Student</button>

                        <Ctable lister={list} deletedata={deletedata} handleedit={handleedit}/>
                        
                        <div>
                            <Cmodal panelor={panel} setPanel={setPanel} save={save} editdata={editdata} setId1={setId1} setName1={setName1} setAge1={setAge1} setAddress1={setAddress1} setRollno1={setRollno1} id1={id1} name1={name1} age1={age1} address1={address1} rollno1={rollno1} />
                        </div>
            </div>
        </div>
    );
}