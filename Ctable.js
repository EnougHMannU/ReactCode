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
                                    <th>Email</th>
                                    <th>Course</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.lister.map((studentlist)=>(
                                
                                <tr key={studentlist.id}>
                                    <td>{studentlist.id}</td>
                                    <td>{studentlist.name}</td>
                                    <td>{studentlist.email}</td>
                                    <td>{studentlist.course}</td>
                                    <td>{studentlist.status}</td>
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