import React, { useEffect } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const MyProfile = () => {
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getUserInfo = async () => {
    const { auth_token } = JSON.parse(localStorage.getItem('tokenAuth'));
    const { data } = await axios.get('http://lala34.pythonanywhere.com/profile', {
      headers: {
        Authorization: `Token ${auth_token}`
      }
    });
    setUser(data)
  }

  useEffect(() => {
    getUserInfo();
  }, [])
  return (
    <div>
      <section style={{ backgroundColor: '#292a2' }}>
      <MDBContainer className="py-5">

        <MDBRow className='adaptiv__block'>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="adaptiv__block text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">{user?.username}, {user?.info_data?.age} years</p>
                <p className="text-muted mb-4">{user?.info_data?.country}, {user?.info_data?.city} </p>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>UserName</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user?.username}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user?.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>  Language</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user?.info_data?.language}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Country</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user?.info_data?.country}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>City</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user?.info_data?.city}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className='profil__btn-cont'>
        <button onClick={handleOpen} className='profil__btn'> Добавить Заявку</button>
      </div>
    </section>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
      <div></div>
    </Modal>
    </div>
  );
};

export default MyProfile;