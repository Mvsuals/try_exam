const UserList = ({ users}) => {
    return ( 
        <div className="user-list">
            {users.map(user => (
                <div className="user-preview" key={user.id}>
                    <h2 >{user.email}</h2>
                </div>
            ))}
        </div>
     );
}
 
export default UserList;