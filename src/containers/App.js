import React, { Component, Fragment } from 'react';
import Aux from './hoc/Aux'
import WithClass from './hoc/WithClass'
import withClassFunction from './hoc/withClassFunction'
import cssClasses from './App.css';
import Person from '../components/Persons/Person/Person'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import AuthContext from './context/auth-context'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${props => props.showButton ? cssClasses.red: cssClasses.green }; 
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  margin: 10px;
  &:hover {
    background-color: ${props => props.showButton ? '#ff00007d': 'lightgreen' }; 
    color: black;
  }
`
class App extends Component {
  constructor(){
    console.log("[App JS] constructor");
    super()
    this.state = {
      people: [
        {name: 'Prat1' , age: 21, id: 'qwer111' },
        {name: 'Prat2' , age: 22, id: 'qwer222' },
        {name: 'Prat3' , age: 23, id: 'qwer333' },
      ],
      desc: 'Add state description here',
      showPerson: false,
      changePersonCounter: 0,
      authenticated: false
    }
  }

  loginHandler = () => {
    // console.log(this.state)
    this.setState({authenticated: true })
  }


  static getDerivedStateFromProps = (props, state) => {
    console.log("[App JS] getDerivedStateFromProps");
    return null
  }
  
  static componentDidMount = () => {
    console.log("[App JS] componentDidMount");
  }
  // state = {
  //   people: [
  //     {name: 'Prat1' , age: 21, id: 'qwer111' },
  //     {name: 'Prat2' , age: 22, id: 'qwer222' },
  //     {name: 'Prat3' , age: 23, id: 'qwer333' },
  //   ],
  //   desc: 'Add state description here',
  //   showPerson: false
  // }

  switchNameHandler = () => {
    // 16:5  warning  Do not mutate state directly. Use setState()  react/no-direct-mutation-state
    // this.state.people = [
    //   {name: 'Prat1' , age: 21 },
    //   {name: 'Prat2' , age: 22 },
    //   {name: 'Prat3' , age: 23 }
    //   ]

      this.setState(
        {people: 
          [
            {name: 'Prat11' , age: 21 },
            {name: 'Prat22' , age: 22 },
            {name: 'Prat33' , age: 23 }
          ]
        }
      );
    
  }

  switchNameHandlerWithParams = (firstName) => {
    this.setState(
      {people: 
        [
          {name: firstName , age: 21 },
          {name: 'Prat22' , age: 22 },
          {name: 'Prat33' , age: 23 }
        ]
      }
    );
  }

  changeFieldHandler = (event) => {
    this.setState(
      {
        people: 
        [
          {name: 'Prat1' , age: 21 },
          {name: event.target.value , age: 22 },
          {name: 'Prat3' , age: 23 },
        ]
      }
    )
  }

  changeFieldHandlerNew = (event, id) => {
    const personIndex = this.state.people.findIndex((person) => {
      return person.id === id
    })
    const persons = [...this.state.people]  
    const person = {...this.state.people[personIndex]}

    person.name = event.target.value   
    persons[personIndex] = person

    this.setState((prevState, props) => 
      {
        console.log('this.state.changePersonCounter ---',prevState.changePersonCounter)
        return {
          people: persons, 
          changePersonCounter: prevState.changePersonCounter + 1 
        }

      }  
    )
  }

  togglePersonHandler = () => {
    this.setState({showPerson: !this.state.showPerson})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.people
    // Create a copy instead of modifying original : Way 1
    // const persons = this.state.people.slice()
    
    // Create a copy instead of modifying original : ES6 way : Way 2
    const persons = [...this.state.people]
    persons.splice(personIndex, 1)
    this.setState({people: persons})
  }



  render() {
    // const myButtonStyle = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   margin: '10px',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }
    console.log("[App Js] render");

    let personDiv = null
    // const classes = ['green', 'bold'].join(' ')
    const classes = []
    if(this.state.people.length <= 3 )
    {
      classes.push(cssClasses.green)
    } 
    if(this.state.people.length <= 2 )
    {
      classes.pop(cssClasses.green)
      classes.push(cssClasses.red)
    }
    if(this.state.people.length <= 1 )
    {
      classes.push(cssClasses.bold)
    } 

    if(this.state.showPerson){
      // myButtonStyle.backgroundColor = 'red'
      // myButtonStyle[':hover'] = {
      //   backgroundColor: 'salmon'
      // }
      
      
      personDiv = (
      <div>
        <p>1. Passing through static props n changeNameText from field value</p>
        <div>

            // console.log(this.state.people);
            <Persons 
                people={this.state.people} 
                changed={this.changeFieldHandlerNew}
                isAuthenticated={this.state.authenticated}
                 />
        </div>
        {/* <Person name='John' age='23' />
        <Person name='Ron' age='27' />
        <Person name='Sen' age='34' /> */}

        {/* <p>2. Passing through state props</p>
        { this.state.people[0] ? 
        <Person name={this.state.people[0].name} 
          age={this.state.people[0].age}
          key="key00" />
        : <div>No People[0]</div>
        }  
        <p>3. Two way data binding. The changeFieldHandler is enabled for below Person only</p>
        { this.state.people[1] ? 
        <Person 
            name={this.state.people[1].name} 
            age={this.state.people[1].age}
            key="key11"
            changed={this.changeFieldHandler} />
            : <div>No People[1]</div>
        }

        <p>4. Switch Name handler enabled</p>
        { this.state.people[2] ? 
        <Person 
            name={this.state.people[2].name} 
            age={this.state.people[2].age}
            key="key22"
            myChildClick={this.switchNameHandler}  
        />
        : <div>No People[2]</div>
        }  
        <p>5. Passing params in function switchNameHandlerWithParams</p>
        <StyledButton 
          key="key1"
          showButton={this.state.showPerson}
          onClick={this.switchNameHandlerWithParams.bind(this,'PratFirstName')}>
          Change1
        </StyledButton>

        <StyledButton
          key="key2"
          showButton={this.state.showPerson}
          onClick={() => this.switchNameHandlerWithParams('PratFirstName')}>
          Change2
        </StyledButton>

        <p>6.  Delete this Person after click</p>       
        <div>
          {
            this.state.people.map( (person, personIndex) => {
              console.log(classes)
              console.log('classes -------------------')
              
              return( 
                <Person 
                  name={person.name} 
                  age={person.age} 
                  key={person.id}
                  style={classes.join(' ')}
                  myChildClick={() => this.deletePersonHandler(personIndex)} />
                  )})
          }
        </div> */}
      </div>
      )
    }
    return (
      // its same as React.Fragment but here we import Fragment so we can 
      // use it as below ..css from classes is not getting applied here
      <Aux>
        {/* { this.state.showCockpit ? */}
        <AuthContext.Provider value={
          {
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}>

        <Cockpit 
          showPerson={this.state.showPerson}
          switchNameHandler={this.switchNameHandler}
          togglePersonHandler={this.togglePersonHandler}
          // login={this.loginHandler}
        /> 
        {/* } */}
        {personDiv}
        </AuthContext.Provider>
    
      </Aux>
    );
  }
}

export default withClassFunction(App, cssClasses.containerClass);
