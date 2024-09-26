//showing json objects using tables of boostrap
import Table from 'react-bootstrap/Table';

function Test12() {
    const data = [
        { name: 'Vikas Kansal', mobile: 9501010979, email: 'inbox.kansal@gmail.com' },
        { name: 'Param Kansal', mobile: 9417472915, email: 'inbox.param05@gmail.com' },
        { name: 'Karanveer', mobile: 9876543210, email: 'karan.kansal@gmail.com' },
        { name: 'Kavya Kansal', mobile: 9501010985, email: 'kavya.kansal@gmail.com' },
    ]
    return (
        <div>
            <Table striped bordered hover variant="dark" size="sm">
            <tbody>
                {
                    data.map((row) =>
                        <tr>
                            <td>{row.name}</td>
                            <td>{row.mobile}</td>
                            <td>{row.email}</td>
                        </tr>
                    )
                }
            </tbody>
            </Table>
        </div>
    )
}

export default Test12;