import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function Ctable(props){
    return(
        <>
            <Table className="datatable-table" striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.lister.map((courselist)=>(
                                
                                <tr key={courselist.name}>
                                    <td>{courselist.name}</td>
                                    <td>{courselist.price}</td>
                                    <td><Button onClick={()=>props.handleedit(courselist)}>edit</Button> 
                                    <Button onClick={()=>props.deletedata(courselist)}>Delete</Button>
                                    </td>
                                </tr>
                                ))
                                }
                            </tbody>
                        </Table>
        </>
    )
}