import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Cmodal(props){
    return(
        <div>
            <Modal show={props.panelor} onHide={() => props.setPanel(false)} centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        {props.editdata ? "Edit Student" : "Add Student"}
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div>
                                        <label>ID</label><input type="text" value={props.id1} onChange={(e)=>props.setId1(e.target.value)} placeholder='id here'></input>
                                    </div>
                                    <div>
                                        <label>NAME</label><input type="text" value={props.name1} onChange={(e)=>props.setName1(e.target.value)} placeholder='name here'></input>
                                    </div>
                                    <div>
                                        <label>AGE</label><input type="text" value={props.age1} onChange={(e)=>props.setAge1(e.target.value)} placeholder='age here'></input>
                                    </div>
                                    <div>
                                        <label>ADDRESS</label><input type="text" value={props.address1} onChange={(e)=>props.setAddress1(e.target.value)} placeholder='address here'></input>
                                    </div>
                                    <div>
                                        <label>ROLLNO</label><input type="text" value={props.rollno1} onChange={(e)=>props.setRollno1(e.target.value)} placeholder='rollno here'></input>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={props.save}>save</Button>
                                    <Button onClick={()=>props.setPanel(false)}>cancel</Button>
                                </Modal.Footer>
                            </Modal>
        </div>
    );
}