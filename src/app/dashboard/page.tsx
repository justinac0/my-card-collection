"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const users = await response.json();
    
      setUsers(users);
    }
  
    fetchUsers();
  }, []);

  const conditional_render_users = () => {
    if (users) {
      return (
        <>
        </>
      );
    }

    return <></>;
  }

  return (
    <main>
      <h1>Dashboard</h1>
      
      <p>{conditional_render_users()}</p>
    </main>
  );
}