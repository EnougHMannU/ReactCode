import "../cssfiles/Datatable.css";
import { useState, useEffect } from "react";
import Cmodal from './Cmodal';
import Ctable from './Ctable';

export default function Cdatatable() {

    const [panel, setPanel] = useState(false);
    const [list, setList] = useState([]);
    const [editdata, setEditdata] = useState(null);

    const [name2, setName2] = useState('');
    const [price2, setPrice2] = useState('');

    const API = "https://nodecode-1-a6dl.onrender.com";

    useEffect(() => {
        getdata();
    }, []);

    // ✅ GET API
    function getdata() {
        fetch(`${API}/getcdata`)
            .then(res => res.json())
            .then(result => setList(result.data))
            .catch(err => console.log(err));
    }

    // ✅ DELETE
    function deletedata(item) {
        fetch(`${API}/deletecdata/${item.name}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(() => getdata())
            .catch(err => console.log(err));
    }

    // ✅ SAVE (POST + PUT)
    function save() {
        let item = {
            name: name2,
            price: price2
        };

        if (editdata) {
            // UPDATE
            fetch(`${API}/putcdata/${name2}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(item)
            })
                .then(res => res.json())
                .then(() => {
                    setPanel(false);
                    alert("COURSE UPDATED SUCCESSFULLY");
                    getdata();
                });
        } else {
            // ADD
            fetch(`${API}/postcdata`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(item)
            })
                .then(res => res.json())
                .then(() => {
                    setPanel(false);
                    alert("COURSE ADDED SUCCESSFULLY");
                    getdata();
                });
        }
    }

    // ✅ ADD COURSE
    function addcourse() {
        setName2('');
        setPrice2('');
        setEditdata(false);
        setPanel(true);
    }

    // ✅ EDIT COURSE
    function handleedit(course) {
        setName2(course.name);
        setPrice2(course.price);
        setEditdata(true);
        setPanel(true);
    }

    return (
        <div>
            <div className="table-container">

                <button onClick={addcourse} className="show-panel-btn">
                    Add Course
                </button>

                <Ctable
                    lister={list}
                    deletedata={deletedata}
                    handleedit={handleedit}
                />

                <Cmodal
                    panelor={panel}
                    setPanel={setPanel}
                    save={save}
                    editdata={editdata}
                    name2={name2}
                    age2={price2}
                    setName1={setName2}
                    setAge1={setPrice2}
                />

            </div>
        </div>
    );
}