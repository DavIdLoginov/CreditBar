import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const ApplicationsPage = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const { data } = await axios.get('http://lala34.pythonanywhere.com/post')
    setPosts(data);
  }

  const getDate = (date) => {
    const newDate = new Date(date)
    return `${newDate.getFullYear()} ${newDate.getMonth()} ${newDate.getDay()} ${newDate.getHours()}:${newDate.getMinutes()}`
  }
  useEffect(() => {
    getPosts();
  }, [])

  return (
    <div className="applications">
      {posts.map((item) => (
        <Table style={{maxWidth: "500px"}} striped bordered hover variant="dark">
          <tbody>
            <tr>
              <td>Title:</td>
              <td>{item.title}</td>
            </tr>
            <tr>
              <td>Summ:</td>
              <td>{item.summ} {item.currency}</td>
            </tr>
            <tr>
              <td>Percent:</td>
              <td>{item.percent}%</td>
            </tr>
            <tr>
              <td>Date:</td>
              <td>{getDate(item.datetime)}</td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>{item.description}</td>
            </tr>
            <button>Одобрить</button>
            <Link to={'/user/' + item.id}>{item.user}</Link>
          </tbody>
        </Table>
      ))}
    </div>
  );
};

export default ApplicationsPage;
