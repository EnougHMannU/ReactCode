import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Cmodal(props){
    return(
        <div>
            <Modal show={props.panelor} onHide={() => props.setPanel(false)} centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        {props.editdata ? "Edit Course" : "Add Course"}
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div>
                                        <label>NAME</label><input type="text" value={props.name2} onChange={(e)=>props.setName1(e.target.value)} placeholder='name here'></input>
                                    </div>
                                    <div>
                                        <label>PRICE</label><input type="text" value={props.age2} onChange={(e)=>props.setAge1(e.target.value)} placeholder='price here'></input>
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