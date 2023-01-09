import React, { useEffect } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MyProfile = () => {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [post, setPost] = useState({
    type_post: "",
    title: "",
    description: "",
    summ: 0,
    percent: 0,
    currency: "",
    term_of_conditions: 0,
    status: true,
    user: 0
  })
  const [inputValues, setInputValues] = useState({
    user: null,
    country: "",
    city: "",
    language: "",
    age: 0,
    gender: "",
    username: "",
    email: ""
  });

  const putInfo = async (id, props) => {
    await axios.put(`http://lala34.pythonanywhere.com/info/${id}/`, props)
  }

  const postPost = async (props) => {
    await axios.post(`http://lala34.pythonanywhere.com/post/`, props)
  }

  const getUserInfo = async () => {
    const { auth_token } = JSON.parse(localStorage.getItem("tokenAuth"));
    const { data } = await axios.get(
      "http://lala34.pythonanywhere.com/profile",
      {
        headers: {
          Authorization: `Token ${auth_token}`,
        },
      }
    );
    setInputValues({...inputValues, user: data.id })
    setPost({...post, user: data.id })
    setUser(data);
  };
  console.log(post);

  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <>
      {user?.info_data.city != null ? (
        <section style={{ backgroundColor: "#292a2" }}>
          <MDBContainer className="py-5">
            <MDBRow className="adaptiv__block">
              <MDBCol lg="4">
                <MDBCard className="mb-4">
                  <MDBCardBody className="adaptiv__block text-center">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: "150px" }}
                      fluid
                    />
                    <p className="text-muted mb-1">
                      {user?.username}, {user?.info_data?.age} years
                    </p>
                    <p className="text-muted mb-4">
                      {user?.info_data?.country}, {user?.info_data?.city}{" "}
                    </p>
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
                        <MDBCardText className="text-muted">
                          {user?.username}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {user?.email}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText> Language</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {user?.info_data?.language}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Country</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {user?.info_data?.country}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>City</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {user?.info_data?.city}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="profil__btn-cont">
            <button onClick={handleOpen} className="profil__btn">
              
              Добавить Заявку
            </button>
          </div>
          <Modal
            className='Auth-form-ant'
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div>
              <div className="Auth-form-container">
                <form className="Auth-form">
                  <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Добавить Заявку</h3>
                    <div className="form-group mt-3">
                      <label style={{ fontSize: "20px" }}>Тип Поста</label>
                      <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                          Тип поста
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() =>
                          setPost({
                            ...post,
                            type_post: "Giving",
                          })
                        }>
                          Giving
                          </Dropdown.Item>
                          <Dropdown.Item 
                          onClick={() =>
                            setPost({
                              ...post,
                              type_post: "Taking",
                            })
                          }
                          >
                          Taking
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ fontSize: "20px" }}>Название</label>
                      <input

                        onChange={(e) =>
                          setPost({
                            ...post,
                            title: e.target.value,
                          })
                        }
                        type="text"
                        className="form-control mt-1"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ fontSize: "20px" }}>Описание</label>
                      <input
                        onChange={(e) =>
                          setPost({
                            ...post,
                            description: e.target.value,
                          })
                        }
                        type="text"
                        className="form-control mt-1"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ fontSize: "20px" }}>Сумма</label>
                      <input
                        onChange={(e) =>
                          setPost({
                            ...post,
                            summ: e.target.value,
                          })
                        }
                        type="number"
                        className="form-control mt-1"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ fontSize: "20px" }}>Валюта</label>
                      <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                          Валюта
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() =>
                          setPost({
                            ...post,
                            currency: "EUR",
                          })
                        }>
                          Евро
                          </Dropdown.Item>
                          <Dropdown.Item 
                          onClick={() =>
                            setPost({
                              ...post,
                              currency: "RUB",
                            })
                          }
                          >
                            Рубль
                          </Dropdown.Item>
                          <Dropdown.Item 
                          onClick={() =>
                            setPost({
                              ...post,
                              currency: "US",
                            })
                          }
                          >
                            Доллар
                          </Dropdown.Item>
                          <Dropdown.Item 
                          onClick={() =>
                            setPost({
                              ...post,
                              currency: "KZ ",
                            })
                          }
                          >
                            Тенге
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ fontSize: "20px" }}>Процент %</label>
                      <input
                        onChange={(e) =>
                          setPost({
                            ...post,
                            percent: e.target.value,
                          })
                        }
                        type="number"
                        className="form-control mt-1"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ fontSize: "20px" }}>Срок</label>
                      <input
                        onChange={(e) =>
                          setPost({
                            ...post,
                            percent: e.target.value,
                          })
                        }
                        type="number"
                        className="form-control mt-1"
                        required
                      />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                    <button onClick={(e) => {postPost(post); e.preventDefault()}}  type="submit" className="btn btn-primary">
                    Submit
                  </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Modal>
        </section>
      ) : (
        <>
          <div className="profil__cnt">
            <div className="profil__card">
              <div>
                Добавь информацию о себе, чтобы другуие люди понимали кто ты.{" "}
              </div>
              <button onClick={handleOpen} className="profil__btn">
                Добавить инфу
              </button>
            </div>
          </div>

          <Modal
            className='Auth-form-ant'
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div>
              <div className="Auth-form-container">
                <form className="Auth-form">
                  <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Добавь информацию</h3>
                    <div className="form-group mt-3">
                      <label style={{ fontSize: "20px" }}>Твой Username</label>
                      <input
                        onChange={(e) =>
                          setInputValues({
                            ...inputValues,
                            username: e.target.value,
                          })
                        }
                        type="text"
                        className="form-control mt-1"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ fontSize: "20px" }}>Твой Email</label>
                      <input
                        onChange={(e) =>
                          setInputValues({
                            ...inputValues,
                            email: e.target.value,
                          })
                        }
                        type="text"
                        className="form-control mt-1"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ fontSize: "20px" }}>Твоя Страна</label>
                      <input
                        onChange={(e) =>
                          setInputValues({
                            ...inputValues,
                            country: e.target.value,
                          })
                        }
                        type="text"
                        className="form-control mt-1"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ fontSize: "20px" }}>Твой город</label>
                      <input
                        onChange={(e) =>
                          setInputValues({
                            ...inputValues,
                            city: e.target.value,
                          })
                        }
                        type="text"
                        className="form-control mt-1"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ fontSize: "20px" }}>Возраст</label>
                      <input
                        onChange={(e) =>
                          setInputValues({
                            ...inputValues,
                            age: e.target.value,
                          })
                        }
                        type="number"
                        className="form-control mt-1"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ fontSize: "20px" }}>Язык</label>
                      <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                          Language
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() =>
                          setInputValues({
                            ...inputValues,
                            language: "English",
                          })
                        }>
                          English
                          </Dropdown.Item>
                          <Dropdown.Item 
                          onClick={() =>
                            setInputValues({
                              ...inputValues,
                              language: "Russian",
                            })
                          }
                          >
                          Russian 
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="form-group mt-3">
                      <label style={{ fontSize: "20px" }}>Пол</label>
                      <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                          Пол
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            onClick={() =>
                            setInputValues({
                              ...inputValues,
                              gender: "Male",
                            })
                          }
                          >
                            Мужчина
                          </Dropdown.Item>
                          <Dropdown.Item 
                          onClick={() =>
                            setInputValues({
                              ...inputValues,
                              gender: "Female",
                            })
                          }
                          >
                            Женщина
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                      <button onClick={(e) => {putInfo(inputValues.user, inputValues); e.preventDefault()}}  type="submit" className="btn btn-primary">
                    Submit
                  </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default MyProfile;
