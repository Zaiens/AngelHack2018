import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import avatarBot from "./cara mono.png";



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

    if(this.props.short==='true'){
      return (
        <div style={{ width: '100%' }}>
          <h3>Información Personal</h3>
          <table>
            <tbody>
              <tr>
                <td>Nombre:</td>
                <td>GERARDO ZUNIGA</td>
              </tr>
              <tr>
                <td>Rut:</td>
                <td>18.049.469-5</td>
              </tr>
              <tr>
                <td>Genero:</td>
                <td>Masculino</td>
              </tr>
              <tr>
                <td>Edad:</td>
                <td>26</td>
              </tr>
              <tr>
                <td>Estado Civil:</td>
                <td>Soltero</td>
              </tr>
              <tr>
                <td>Dirección:</td>
                <td>Calle 125 #956, Peñalolen</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
    return (
      <div style={{ width: '100%' }}>
        <h3>Resumen</h3>
        <table>
          <tbody>
            <tr>
              <td>Nombre:</td>
              <td>GERARDO ZUNIGA</td>
            </tr>
            <tr>
              <td>Rut:</td>
              <td>18.049.469-5</td>
            </tr>
            <tr>
              <td>Genero:</td>
              <td>Masculino</td>
            </tr>
            <tr>
              <td>Edad:</td>
              <td>26</td>
            </tr>
            <tr>
              <td>Estado Civil:</td>
              <td>Soltero</td>
            </tr>
            <tr>
              <td>Dirección:</td>
              <td>Calle 125 #956, Peñalolen</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{steps.email.value}</td>
            </tr>
            <tr>
              <td>Estudios:</td>
              <td>{steps.study.value} {(steps.study.value==='Sin estudio')?'':steps['est-comp'].value}</td>
            </tr>
            <tr>
              <td>Emprendimiento:</td>
              <td>{steps.empr.value}</td>
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

class GetName extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    this.setState({ steps });
  }

  componentDidMount(){
    /* fetch('https://polar-headland-76617.herokuapp.com/obtener/nombre/180494685')
      .then((response)=>response.json())
      .then(data=>{
        console.log(data)
        console.log(this.props.step)
        this.props.step.value = data
        this.props.triggerNextStep
      }) */

      
      this.props.triggerNextStep({value: 'GERARDO ZUNIGA'})
  }

  render() {
    const { steps } = this.state;
    return (
      <div></div>
    );
  }
}

GetName.propTypes = {
  steps: PropTypes.object,
};

GetName.defaultProps = {
  steps: undefined,
};

class End extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    this.setState({ steps });
  }

  componentDidMount(){
    /* fetch('https://polar-headland-76617.herokuapp.com/obtener/nombre/180494685')
      .then((response)=>response.json())
      .then(data=>{
        console.log(data)
        console.log(this.props.step)
        this.props.step.value = data
        this.props.triggerNextStep
      }) */

      
      this.props.triggerNextStep({value: 'GERARDO ZUNIGA'})
  }

  render() {
    const { steps } = this.state;
    return (
      <div className="End">
        <a href="#">Revisa tus productos AQUÍ</a>
      </div>
    );
  }
}

End.propTypes = {
  steps: PropTypes.object,
};

End.defaultProps = {
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
          contentStyle={{
            "background-color": "rgb(223, 247, 235, 0.2)",
            "overflow-y": "auto",
            "height": "600px"
          }}
          bubbleStyle={{
            "background-color": "rgb(223, 247, 235)", 
            "color": "black", 
            "font-size": "18px", 
          }}
          bubbleOptionStyle={{
            "background-color": "rgb(223, 247, 235)", 
            "color": "black", 
            "font-size": "15px", 
            "font-family": "verdana"
          }}
          inputStyle={{
            "border-radius":"10px",
          }}
          steps={[
            {
              id: '1',
              message: 'Hola! Bienvido a BCI. Ingresa tu RUT para comenzar',
              trigger: 'rut',
            },
            {
              id: 'rut',
              user: true,
              trigger: (value, steps)=>{
                console.log(value)
                console.log(steps)
                return 'name'
              },
            },
            {
              id: 'name',
              component: <GetName />,
              asMessage: true,
              waitAction: true,
              replace: true,
              trigger: '2'
            },
            {
              id: '2',
              message: ({ previousValue, steps })=>{
                return `${steps.name.value}, te haré unas preguntas para ver si tienes algun producto preaprobado`
              },
              trigger: '3'
            },
            {
              id: '3',
              component: <Review short='true'/>,
              asMessage: true,
              trigger: 'update-info',
            },
            {
              id: 'update-info',
              message: '¿Es la información correcta?',
              trigger: 'update-info-question',
            },
            {
              id: 'update-info-question',
              options: [
                { value: 'Si', label: 'Si', trigger: '4' },
                { value: 'No', label: 'No', trigger: 'update-yes' },
              ],
            },
            {
              id: '4',
              message: '¿Cuál es tu dirección de correo electronico?',
              trigger: 'email',
            },
            {
              id: 'email',
              user:true,
              trigger: '5',
            },
            {
              id: '5',
              message: '¿Cuantos hijos tienes?',
              trigger: 'children',
            },
            {
              id: 'children',
              options: [
                { value: '0', label: '0', trigger: '6' },
                { value: '1', label: '1', trigger: '6' },
                { value: '2 o más', label: '2 o más', trigger: '6' },
              ],
            },
            {
              id: '6',
              message: '¿Cuál es su nivel de estudio?',
              trigger: 'study',
            },
            {
              id: 'study',
              options: [
                { value: 'Básica', label: 'Ed. Básica', trigger: 'est-comp' },
                { value: 'Media', label: 'Ed. Media', trigger: 'est-comp' },
                { value: 'Técnico', label: 'Técnico', trigger: 'est-comp' },
                { value: 'Universitaria', label: 'Universitaria', trigger: 'est-comp' },
                { value: 'Postgrado', label: 'Postgrado', trigger: 'est-comp' },
                { value: 'Sin estudio', label: 'Sin estudio', trigger: '7' },
              ],
            },
            {
              id: 'est-comp',
              options: [
                { value: 'Completa', label: 'Completa', trigger: '7' },
                { value: 'Incompleta', label: 'Incompleta', trigger: '7' },
              ],
            },
            {
              id: '7',
              message: 'En el corto plazo, ¿Le gustaria tener un emprendimiento?',
              trigger: 'empr',
            },
            {
              id: 'empr',
              options: [
                { value: 'Si', label: 'Si', trigger: 'pre-end' },
                { value: 'Ya tiene', label: 'Ya tengo uno', trigger: 'pre-end' },
                { value: 'No', label: 'No', trigger: 'pre-end' },
              ],
            },
            {
              id: 'pre-end',
              message: 'Listo! Revisa tus respuestas',
              trigger: 'review',
            },
            {
              id: 'review',
              component: <Review short='false'/>,
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
              message: '¿Cual campo quieres actualizar?',
              trigger: 'update-fields',
            },
            {
              id: 'update-fields',
              options: [
                { value: 'name', label: 'Nombre', trigger: 'update-name' },
                { value: 'gender', label: 'Genero', trigger: 'update-gender' },
                { value: 'age', label: 'Edad', trigger: 'update-age' },
              ],
            },
            {
              id: 'update-name',
              update: 'name',
              trigger: 'review',
            },
            {
              id: 'update-gender',
              update: 'gender',
              trigger: 'review',
            },
            {
              id: 'update-age',
              update: 'age',
              trigger: 'review',
            },
            {
              id: 'end-message',
              message: 'Hemos enviado los datos!',
              trigger: 'end',
            },
            {
              id: 'end',
              component: <End/>,
              asMessage: false,
              end: true,
            },
          ]}
        />
      </div>
    );
  }
}

export default Chat;