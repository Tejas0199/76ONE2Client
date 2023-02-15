import EditUserInfo from "./EditUserInfo";
import Loading from "./Loading";
const { useEffect,useState } = require("react")



const UserGrid = () => {
    const [allUsers,setAllUsers] = useState([]);
    const [editUserIndex,setEditUserIndex] = useState(null); 
    const [isDisplayEditModel,setIsDisplayEditModel] = useState(false);
    const [getLatestData,setGetLatestData] = useState(false);
    const [isProcessing,setisProcessing] = useState(false);
    useEffect(() => {
        setisProcessing(true);
        fetch('http://127.0.0.7:4500/users')
        .then( res => res.json())
        .then( data => {
            setisProcessing(false);
            setAllUsers(data.users)
        })
        .catch(console.log)
    },[getLatestData])
    return <>
    {isDisplayEditModel && <EditUserInfo 
    userData={allUsers[editUserIndex]} 
    setGetLatestData={setGetLatestData}
    setIsDisplayEditModel={setIsDisplayEditModel}/>}
    <div className="user-grid">
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
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                   allUsers.length > 0 && allUsers.map( (user,index) => {
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
                            <td> <i class="fa fa-plus" onClick={() => {
                                setIsDisplayEditModel(true)
                                setEditUserIndex(index);
                            }}></i><i className="fa fa-trash"></i></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        {
           isProcessing && <Loading/>
        }
    </div>
    </>
}

export default UserGrid;