import "../cssfiles/Datatable.css";
import { useState, useEffect } from "react";
import Tmodal from "./Tmodal";
import Ttable from "./Ttable";

export default function Tdatatable() {

    const [panel, setPanel] = useState(false);
    const [list, setList] = useState([]);
    const [editdata, setEditdata] = useState(null);

    const [name3, setName3] = useState('');
    const [experience3, setExperience3] = useState('');
    const [address3, setAddress3] = useState('');
    const [subject3, setSubject3] = useState('');
    const [salary3, setSalary3] = useState('');

    const API = "https://nodecode-1-a6dl.onrender.com";

    useEffect(() => {
        getdata();
    }, []);

    // ✅ GET DATA
    function getdata() {
        fetch(`${API}/gettdata`)
            .then(res => res.json())
            .then(result => setList(result.data))
            .catch(err => console.log(err));
    }

    // ✅ DELETE
    function deletedata(item) {
        fetch(`${API}/deletetdata/${item.name}`, {
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
            name: name3,
            experience: experience3,
            address: address3,
            subject: subject3,
            salary: salary3
        };

        if (editdata) {
            // UPDATE
            fetch(`${API}/puttdata/${name3}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(item)
            })
                .then(res => res.json())
                .then(() => {
                    setPanel(false);
                    alert("TEACHER UPDATED SUCCESSFULLY");
                    getdata();
                });

        } else {
            // ADD
            fetch(`${API}/posttdata`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(item)
            })
                .then(res => res.json())
                .then(() => {
                    setPanel(false);
                    alert("TEACHER ADDED SUCCESSFULLY");
                    getdata();
                });
        }
    }

    // ✅ ADD
    function addteacher() {
        setName3('');
        setExperience3('');
        setAddress3('');
        setSubject3('');
        setSalary3('');
        setEditdata(false);
        setPanel(true);
    }

    // ✅ EDIT
    function handleedit(teacher) {
        setName3(teacher.name);
        setExperience3(teacher.experience);
        setAddress3(teacher.address);
        setSubject3(teacher.subject);
        setSalary3(teacher.salary);
        setEditdata(true);
        setPanel(true);
    }

    return (
        <div>
            <div className="table-container">

                <button onClick={addteacher} className="show-panel-btn">
                    Add Teacher
                </button>

                <Ttable
                    lister={list}
                    deletedata={deletedata}
                    handleedit={handleedit}
                />

                <Tmodal
                    panelor={panel}
                    setPanel={setPanel}
                    save={save}
                    editdata={editdata}

                    name3={name3}
                    setName3={setName3}

                    experience3={experience3}
                    setExperience3={setExperience3}

                    address3={address3}
                    setAddress3={setAddress3}

                    subject3={subject3}
                    setSubject3={setSubject3}

                    salary3={salary3}
                    setSalary3={setSalary3}
                />

            </div>
        </div>
    );
}