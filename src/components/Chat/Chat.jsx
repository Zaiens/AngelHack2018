import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import avatarBot from "./cara mono.png"

import './Chat.css'

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    this.setState({ steps });
  }

  render() {
    const { steps } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Nombre</td>
              <td>{steps.name.value}</td>
            </tr>
            <tr>
              <td>Rut</td>
              <td>{steps.rut.value}</td>
            </tr>
            <tr>
              <td>Genero</td>
              <td>{steps.gender.value}</td>
            </tr>
            <tr>
              <td>Edad</td>
              <td>{steps.age.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class Chat extends Component {
  render() {
    return (
      <div className="Chat">
        <ChatBot
          hideHeader={true}
          width="100%"
          botAvatar={avatarBot}
          steps={[
            {
              id: '1',
              message: '¿Cuál es tu nombre?',
              trigger: 'name',
            },
            {
              id: 'name',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Hola {previousValue}! Bienvenido a BCI. ¿Cuál es tu rut?',
              trigger: 'rut',
            },
            {
              id: 'rut',
              user: true,
              trigger: '4',
            },
            {
              id: '4',
              message: '¿Cuál es tu dirección de correo electronico?',
              trigger: 'email',
            },
            {
              id: 'email',
              user:true,
              trigger: 5,
            },
            {
              id: '5',
              message: '¿Cuál es tu genero?',
              trigger: 'gender'
            },
            {
              id: 'gender',
              options: [
                { value: 'Masculino', label: 'Masculino', trigger: '6' },
                { value: 'Femenino', label: 'Femenino', trigger: '6' },
                { value: 'Otro', label: 'Otro', trigger: '6' },
              ],
            },
            {
              id: '6',
              message: '¿Cual es tu edad?',
              trigger: 'age',
            },
            {
              id: 'age',
              user: true,
              trigger: '7',
              validator: (value) => {
                if (isNaN(value)) {
                  return 'value must be a number';
                } else if (value < 0) {
                  return 'value must be positive';
                } else if (value > 120) {
                  return `${value}? Come on!`;
                }

                return true;
              },
            },
            {
              id: '7',
              message: 'Listo! Revisa tus respuestas',
              trigger: 'review',
            },
            {
              id: 'review',
              component: <Review />,
              asMessage: true,
              trigger: 'update',
            },
            {
              id: 'update',
              message: '¿Esta todo bien?',
              trigger: 'update-question',
            },
            {
              id: 'update-question',
              options: [
                { value: 'Si', label: 'Si', trigger: 'end-message' },
                { value: 'No', label: 'No', trigger: 'update-yes' },
              ],
            },
            {
              id: 'update-yes',
              message: 'What field would you like to update?',
              trigger: 'update-fields',
            },
            {
              id: 'update-fields',
              options: [
                { value: 'name', label: 'Name', trigger: 'update-name' },
                { value: 'gender', label: 'Gender', trigger: 'update-gender' },
                { value: 'age', label: 'Age', trigger: 'update-age' },
              ],
            },
            {
              id: 'update-name',
              update: 'name',
              trigger: '7',
            },
            {
              id: 'update-gender',
              update: 'gender',
              trigger: '7',
            },
            {
              id: 'update-age',
              update: 'age',
              trigger: '7',
            },
            {
              id: 'end-message',
              message: 'Hemos enviado los datos!',
              end: true,
            },
          ]}
        />
      </div>
    );
  }
}

export default Chat;