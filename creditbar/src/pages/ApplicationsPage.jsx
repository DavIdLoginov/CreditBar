import React from "react";
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
import Table from "react-bootstrap/Table";

const ApplicationsPage = () => {
  const items = [
    {
      id: 0,
      type_post: "Giving",
      title: "",
      description: "lkjlkj",
      summ: 4848,
      percent: "7876",
      currency: "EUR",
      datetime: " 67890-098",
      term_of_conditions: 98798,
      status: true,
      user: "Antoni",
    },
    {
      id: 1,
      type_post: "Giving",
      title: "Anton",
      description: "lkjlkj",
      summ: 4848,
      percent: "7876",
      currency: "EUR",
      datetime: " 67890-098",
      term_of_conditions: 98798,
      status: true,
      user: "Antoni",
    },
    {
      id: 2,
      type_post: "Giving",
      title: "Anton",
      description: "lkjlkj",
      summ: 4848,
      percent: "7876",
      currency: "EUR",
      datetime: " 67890-098",
      term_of_conditions: 98798,
      status: true,
      user: "Antoni",
    },
    // {
    //   id: 3,
    //   type_post: "Giving",
    //   title: 'Anton',
    //   description: "lkjlkj",
    //   summ: 4848,
    //   percent: '7876',
    //   currency: 'EUR',
    //   datetime:" 67890-098",
    //   term_of_conditions: 98798,
    //   status: true,
    //   user: "Antoni",
    // },
    // {
    //   id: 4,
    //   type_post: "Giving",
    //   title: 'Anton',
    //   description: "lkjlkj",
    //   summ: 4848,
    //   percent: '7876',
    //   currency: 'EUR',
    //   datetime:" 67890-098",
    //   term_of_conditions: 98798,
    //   status: true,
    //   user: "Antoni",
    // },
    // {
    //   id: 5,
    //   type_post: "Giving",
    //   title: 'Anton',
    //   description: "lkjlkj",
    //   summ: 4848,
    //   percent: '7876',
    //   currency: 'EUR',
    //   datetime:" 67890-098",
    //   term_of_conditions: 98798,
    //   status: true,
    //   user: "Vdvdvd",
    // },
  ];

  return (
    <div className="applications">
      {items.map((item) => (
        // <Card style={{ width: '18rem' }}>
        //   <Card.Body>
        //     <Card.Title>{item.title}</Card.Title>
        //     <Card.Subtitle className="mb-2 text-muted">{item.type_post}</Card.Subtitle>
        //     <Card.Text>
        //       {item.description}
        //     </Card.Text>
        //     <Card.Text>
        //       {item.summ} {item.currency}
        //     </Card.Text>
        //     <Card.Link href="#">Одобрить</Card.Link>
        //     <Card.Link href="#">{item.user}</Card.Link>
        //   </Card.Body>
        // </Card>
        // <Card className="mb-2" style={{ width: '18rem' }} bg="dark">
        //   <Card.Body>
        //     <Card.Title>{item.title}</Card.Title>
        //     <Card.Text>
        //       {item.description}
        //     </Card.Text>
        //   </Card.Body>
        //   <ListGroup className="list-group-flush">
        //     <ListGroup.Item>{item.summ} {item.currency}</ListGroup.Item>
        //     <ListGroup.Item>{item.percent}%</ListGroup.Item>
        //     <ListGroup.Item>{item.datetime}</ListGroup.Item>
        //   </ListGroup>
        //   <Card.Body>
        //     <Card.Link href="#">Одобрить</Card.Link>
        //     <Card.Link href="#">{item.user}</Card.Link>
        //   </Card.Body>
        // </Card>
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
              <td>Data:</td>
              <td>{item.datetime}</td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>{item.description}</td>
            </tr>
            <button>Одобрить</button>
          <a href="">{item.user}</a>
          </tbody>
        </Table>
      ))}
    </div>
  );
};

export default ApplicationsPage;
