const { useEffect,useState } = require("react")



const UserGrid = () => {
    const [allUsers,setAllUsers] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.7:4500/users')
        .then( res => res.json())
        .then( data => setAllUsers(data.users))
        .catch(console.log)
    },[])
    return <div className="user-grid">
        <table className="table table-secondary">
            <thead>
                <tr>
                    <th>SLNO</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>phone</th>
                    <th>Father Name</th>
                    <th>Adhaar No</th>
                    <th>Date of B</th>
                    <th>Course</th>
                    <th>Subject</th>
                    <th>Gender</th>
                    <th>Parement adsress</th>
                </tr>
            </thead>
            <tbody>
                {
                    allUsers.map( (user,index) => {
                        return <tr key={index}>
                            <td>{index + 1 || '--'}</td>
                            <td>{user.fname || '--'}</td>
                            <td>{user.lname || '--'}</td>
                            <td>{user.phone || '--'}</td>
                            <td>{user.fathername || '--'}</td>
                            <td>{user.aadhar || '--'}</td>
                            <td>{user.dob || '--'}</td>
                            <td>{user.course || '--'}</td>
                            <td>{user.subject || '--'}</td>
                            <td>{user.gender || '--'}</td>
                            <td>{user.permaddress || '--'}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
}

export default UserGrid;