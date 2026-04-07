// a tutorial to show how to use 'useEffect' with 'axios';
import { useState, useEffect } from "react";
import axios from "axios";

export default function Data() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );
        setItems(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul style={{ listStyleType: "none" }}>
      {items.map((item) => (
        <li
          style={{
            border: "1px solid white",
            marginTop: "10px",
            width: "250px",
          }}
          key={item.id}>
          {" "}
          <p>Name: {item.name} </p>
          <p> City: {item.address.city} </p>
          <p> Company: {item.company.name} </p>
        </li>
      ))}
    </ul>
  );
}
