import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Tmodal(props){
    return(
        <div>
            <Modal show={props.panelor} onHide={() => props.setPanel(false)} centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        {props.editdata ? "Edit Teacher record" : "Add Teacher record"}
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div>
                                        <label>NAME</label><input type="text" value={props.name3} onChange={(e)=>props.setName3(e.target.value)} placeholder='name here'></input>
                                    </div>
                                    <div>
                                        <label>EXPERIENCE</label><input type="text" value={props.experience3} onChange={(e)=>props.setExperience3(e.target.value)} placeholder='experience here'></input>
                                    </div>
                                    <div>
                                        <label>ADDRESS</label><input type="text" value={props.address3} onChange={(e)=>props.setAddress3(e.target.value)} placeholder='address here'></input>
                                    </div>
                                    <div>
                                        <label>SUBJECT</label><input type="text" value={props.subject3} onChange={(e)=>props.setSubject3(e.target.value)} placeholder='subject here'></input>
                                    </div>
                                    <div>
                                        <label>SALARY</label><input type="text" value={props.salary3} onChange={(e)=>props.setSalary3(e.target.value)} placeholder='salary here'></input>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={props.save}>save</Button>
                                    <Button onClick={()=>props.setPanel(false)}>cancel</Button>
                                </Modal.Footer>
                            </Modal>
        </div>
    )
}