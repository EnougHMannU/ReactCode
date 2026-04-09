import { useState, useEffect} from "react";
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function Trial(){
    const[list,setList]=useState([]);
    const[panel,setPanel]=useState(false);
    const[flag,setFlag]=useState(null);

    const[name1,setName1]=useState("");
    const[price1,setPrice1]=useState("");
    const[image1,setImage1]=useState("");
    const[brand1,setBrand1]=useState("");

    let API ="https://testapi-4-4qfr.onrender.com/products";
    useEffect(()=>{
        getdata();
    },[])

    function getdata(){
        fetch(`${API}`)
        .then(response=> response.json())
        .then(result=> setList(result))
        .catch(error => console.error(error));
    }

    function deletedata(item){
        let optionapi={
            method:"DELETE",
            headers:{ "Content-Type":"application/json"},
            body:''
        }
        fetch(`${API}/${item._id}`,optionapi)
        .then(response=> response.json())
        .then(result=>{ 
            alert("DELETED SUCCESFULLY")
            getdata();})
        .catch(error => console.error(error));
    }

    function cancel(){
        setPanel(false);
    }

    function addmore(){
        setName1("");
        setPrice1("");
        setImage1("");
        setBrand1("");
        setFlag(false);
        setPanel(true);
    }

    function handleedit(studentlist){
        setName1(studentlist.name);
        setPrice1(studentlist.price);
        setImage1(studentlist.image);
        setBrand1(studentlist.brand);
        setFlag(studentlist._id);
        setPanel(true);
    }
    
    function save(){
        let item={
            name:name1,
            price:Number(price1),
            image:image1,
            brand:brand1
        }
        if(flag)
        {
            let optionapi={
                method:"PUT",
                headers:{ "Content-Type": "application/json" },
                body:JSON.stringify(item)
            }
                fetch(`${API}/${flag}`,optionapi)
                .then(response => response.json())
                .then(() => {setPanel(false); alert("RECORD UPDATED SUCCESSFULLY"); getdata(); })
        }
        else{
            let optionapi={
                method:"POST",
                headers:{ "Content-Type": "application/json" },
                body:JSON.stringify(item)
            }
                fetch(`${API}`,optionapi)
                .then(response => response.json())
                .then(() => {setPanel(false); alert("RECORD SAVED SUCCESSFULLY"); getdata(); })
        }
        
    }
    return(
        <div>
            <div><Button onClick={addmore}>ADD MORE</Button></div>
            <div><Table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>IMAGE</th>
                        <th>BRAND</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    { list.map((studentlist)=>(
                    <tr key={studentlist._id}>
                        <td>{studentlist.name}</td>
                        <td>{studentlist.price}</td>
                        <td>{studentlist.image}</td>
                        <td>{studentlist.brand}</td>
                        <td><Button onClick={()=>handleedit(studentlist)}>edit</Button> <Button onClick={()=>deletedata(studentlist)}>delete</Button></td>
                    </tr>
                )) }
                </tbody>
            </Table></div>
            <div>
                <Modal show={panel} onHide={() => setPanel(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>ADD MORE DATA PANEL</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <div><label>NAME</label><input type="text" value={name1} placeholder="enter name" onChange={(e)=>setName1(e.target.value)}></input></div>
                            <div><label>PRICE</label><input type="text" value={price1} placeholder="price here" onChange={(e)=>setPrice1(e.target.value)}></input></div>
                            <div><label>IMAGE</label><input type="text" value={image1} placeholder="image here" onChange={(e)=>setImage1(e.target.value)}></input></div>
                            <div><label>BRAND</label><input type="text" value={brand1} placeholder="brand here" onChange={(e)=>setBrand1(e.target.value)}></input></div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={save}>save</Button>
                        <Button onClick={cancel}>cancel</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}