import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function Ttable(props){
    return(
        <>
            <Table className="datatable-table" striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Experience</th>
                                    <th>Address</th>
                                    <th>Subject</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.lister.map((teacherlist)=>(
                                
                                <tr key={teacherlist.name}>
                                    <td>{teacherlist.name}</td>
                                    <td>{teacherlist.experience}</td>
                                    <td>{teacherlist.address}</td>
                                    <td>{teacherlist.subject}</td>
                                    <td>{teacherlist.salary}</td>
                                    <td><Button onClick={()=>props.handleedit(teacherlist)}>edit</Button> 
                                    <Button onClick={()=>props.deletedata(teacherlist)}>Delete</Button>
                                    </td>
                                </tr>
                                ))
                                }
                            </tbody>
                        </Table>
        </>
    )
}