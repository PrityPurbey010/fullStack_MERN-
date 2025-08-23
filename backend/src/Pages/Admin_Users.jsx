import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { tr } from "zod/locales";
// import { response } from "express";

 export const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const {AuthorizationToken} = useAuth();
    const getAllUsersData = async() => {
        try {
            const response = await fetch("http://localhost:3000/api/admin/users", {
              method: "GET",
              headers:{
                Authorization: AuthorizationToken,
              },
   });
             const data = await response.json();
              console.log("Fetched users:", data);
              setUsers(data.users || []);
        } catch (error) {
               console.error("Error fetching users:", error);
                 setError("Failed to load users.");
            
        }
        finally {
      setLoading(false);
    }
    }

    useEffect(() =>{
        getAllUsersData();
    }, []);
    
      if (loading) return <p>Loading users...</p>;
       if (error) return <p>{error}</p>;

    return (
        <>

        <section className="admin-users-section">
            <div className="container">
                <h1>Admin Users Data</h1>
            </div>
            <div className="container admin-users">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                     <tbody>
               {Array.isArray(users) &&
               users.map((curUsers,index) => {
                   return <>
                   <tr key={index}>
                    <td>{curUsers.username}</td>
                    <td>{curUsers.email}</td>
                    <td>{curUsers.phone}</td>
                    <td>Edit</td>
                    <td>Delete</td>
                   </tr>
                   </>
           })}
                    </tbody>
                </table>
            </div>
        </section>
    
    </>
    )
};