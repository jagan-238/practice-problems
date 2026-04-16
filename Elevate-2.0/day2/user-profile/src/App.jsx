import { useState, useEffect } from "react";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUser = () => {
    setLoading(true);
    setError("");

    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        setError("Something went wrong!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h2>User Profile</h2>

     
      {loading && <p>Loading...</p>}

      
      {error && (
        <div>
          <p>{error}</p>
          <button onClick={fetchUser}>Retry</button>
        </div>
      )}

    
      {user && !loading && !error && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
        </div>
      )}
    </div>
  );
}