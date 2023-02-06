import React, { Component } from "react";

// class based component - App
class App extends Component {
  //js object
  state = {
    name: "alex",
    age: 25,
    employees: [
      {
        name: "alex",
        age: 20,
        designation: "developer",
        salary: 900890,
      },
      {
        name: "alina",
        age: 24,
        designation: "testing",
        salary: 890890,
      },
      {
        name: "harry",
        age: 29,
        designation: "manager",
        salary: 9090900,
      },
    ],
  };

  handleClick = () => {
    //to update state
    //this is referring to App
    this.setState({
      name: "alina",
    });
  };

  //   whenever a state changes, render method is called (re-rendering)
  render() {
    return (
      //jsx: syntax extension of javascript
      //   this will refer to App
      <div>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <button onClick={this.handleClick}>Update</button>

        <h2>Employee Data</h2>
        {this.state.employees.map((item) => {
          return (
            <div>
              {item.name} {item.age} {item.designation}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

// in html
{
  /* <button onclick="handleClick()"></button> */
}

// rcc -> class based
// rsc -> function based

// console.log(this); //window

//this keyword

//reconcialation process
//diffing algorithm

//array of objects
// let employees = [
//   {
//     name: "alex",
//     age: 20,
//     designation: "developer",
//     salary: 900890,
//   },
//   {
//     name: "alina",
//     age: 24,
//     designation: "testing",
//     salary: 890890,
//   },
//   {
//     name: "harry",
//     age: 29,
//     designation: "manager",
//     salary: 9090900,
//   },
// ];

// let arr = [90, 80, 10]; //array of number

// let color = ["pink", "red", "black"]; //array of strings

// ES6
// let const
// array helper function: map, filter, reduce, some, every, find, forEach
// rest operator, spread operator
// class, inheritance
// object literal enhancement: destructuring and restructuring of array & objects
// callback
// promises

let arr = [90, 80, 10, 100]; //array of number

let result = arr.map((e, i) => {
  console.log(e); // 90 80 10 100
  console.log(i); // 0 1 2 3
  return e * 2;
});

//result: [180, 160, 20, 200]


//responsive css design