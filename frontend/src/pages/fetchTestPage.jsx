import { useEffect, useState } from "react"; 
import UserList from "../components/page-exclusive/user-list";

const FetchTestPage = () => {
    const [users, setUsers] = useState(null)

    useEffect(() => {
        fetch('http://127.0.0.1:3000/user')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setUsers(data);
        })
    }, [])

    return (
        <div>
            <h1>Fetch Test</h1>
            {users && <UserList users={users}/>}
        </div>
     );
}
 
export default FetchTestPage;