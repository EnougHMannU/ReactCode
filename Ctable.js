import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
export default function Ctable(props) {
    return(
        <>
        <Table className="datatable-table" striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID.</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Address</th>
                                    <th>Roll no</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.lister.map((studentlist)=>(
                                
                                <tr key={studentlist.id}>
                                    <td>{studentlist.id}</td>
                                    <td>{studentlist.name}</td>
                                    <td>{studentlist.age}</td>
                                    <td>{studentlist.address}</td>
                                    <td>{studentlist.rollno}</td>
                                    <td><Button onClick={()=>props.handleedit(studentlist)}>edit</Button> 
                                    <Button onClick={()=>props.deletedata(studentlist)}>Delete</Button>
                                    </td>
                                </tr>
                                ))
                                }
                            </tbody>
                        </Table>
        </>
    );
}