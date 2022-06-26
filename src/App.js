import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';

const data = [
  {id: 1, name: "Parque Recreativo Los Chorros", ubication: "Parque Los Chorros, CA 1W, San Salvador", rating: 5, category: "Parque Acuatico"},
  {id: 2, name: "Parque Recreativo Los Chorros", ubication: "Parque Los Chorros, CA 1W, San Salvador", rating: 5, category: "Parque Acuatico"},
  {id: 3, name: "Parque Recreativo Los Chorros", ubication: "Parque Los Chorros, CA 1W, San Salvador", rating: 5, category: "Parque Acuatico"},
  {id: 4, name: "Parque Recreativo Los Chorros", ubication: "Parque Los Chorros, CA 1W, San Salvador", rating: 5, category: "Parque Acuatico"},
  {id: 5, name: "Parque Recreativo Los Chorros", ubication: "Parque Los Chorros, CA 1W, San Salvador", rating: 5, category: "Parque Acuatico"},
  {id: 6, name: "Parque Recreativo Los Chorros", ubication: "Parque Los Chorros, CA 1W, San Salvador", rating: 5, category: "Parque Acuatico"},
  {id: 7, name: "Parque Recreativo Los Chorros", ubication: "Parque Los Chorros, CA 1W, San Salvador", rating: 5, category: "Parque Acuatico"}
]

class App extends React.Component {
  state={
    data: data
  }
  render(){
    return(
    <>
    <Container>
    <br />
    <Button color='primary'>Inserte nuevo lugar turistico</Button>
    <br/> <br/>

    <Table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Ubicacion</th>
          <th>Rating</th>
          <th>Categoria</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(item => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.ubication}</td>
            <td>{item.rating}</td>
            <td>{item.category}</td>
            <td>
              <Button color='primary'>Editar</Button> {"  "}
              <Button color='danger'>Eliminar</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  
  </Container>


  <Modal>
    <ModalHeader>
      <div>
        <h3>Insertar Datos</h3>
      </div>
    </ModalHeader>

    <ModalBody>
      <FormGroup>
        <label>Id</label>
        <input type='text' className='form-control' readOnly  />
      </FormGroup>

      <FormGroup>
        <label>Nombre</label>
        <input type='text' className='form-control' name='name' />
      </FormGroup>

      <FormGroup>
        <label>Ubicacion</label>  
        <input type='text' className='form-control' name="ubication" />
      </FormGroup>

      <FormGroup>
        <label>Rating</label>
        <input type='text' className='form-control' name="rating" />
      </FormGroup>

      <FormGroup>
        <label>Categoria</label>
        <input type='text' className='form-control' name="category" />
      </FormGroup>
    </ModalBody>

    <ModalFooter>
      <Button color='primary'>Guardar</Button>
      <Button color='danger'>Cancelar</Button>
    </ModalFooter>

  </Modal>


      </>)
  }
}

export default App;
