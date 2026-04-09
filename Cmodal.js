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
                                        <label>EMAIL</label><input type="email" value={props.email1} onChange={(e)=>props.setEmail1(e.target.value)} placeholder='email here'></input>
                                    </div>
                                    <div>
                                        <label>COURSE</label><input type="text" value={props.course1} onChange={(e)=>props.setCourse1(e.target.value)} placeholder='course here'></input>
                                    </div>
                                    <div>
                                        <label>STATUS</label><input type="text" value={props.status1} onChange={(e)=>props.setStatus1(e.target.value)} placeholder='status here'></input>
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