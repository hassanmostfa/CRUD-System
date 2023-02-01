import React, { Component } from 'react'
import CourseForm from './Components/CourseForm';
import CourseList from './Components/CourseList';
class App extends Component {
  state = {
    courses : [
      {name : "HTML"} ,
      {name : "CSS"},
      {name : "JAVASCRIPT"},
    ] ,
    current : "" ,
  }
  //Update Course
  updateCourse = (e) => {
    this.setState({
      current : e.target.value
    })
  }
  //Add Course
  addCourse = (e) => {
    e.preventDefault() ;
    if (e.target.name.value === ""){
      return false
    }else {
    let current = this.state.current ;
    let courses = this.state.courses ;
    courses.push({name:current});
    this.setState({
      courses : courses ,
      current : "" ,
    })  
  }
    }
    
  //Delete Course
  deleteCourse = (index) => {
    let courses = this.state.courses ;
    courses.splice(index , 1)
    this.setState({
      courses : courses ,
    })  
  }
  //Edit Course 
  editCourse = (index , value)=>{
    let courses = this.state.courses ;
    let course = courses[index] ;
    course["name"] = value ;
    this.setState({
      courses
    })
  }
  render() {
    const {courses} = this.state ;
    const coursesList = courses.map((course , index) => <CourseList courses={this.state.courses} details={course} key={index} delete={this.deleteCourse} index={index} Edit={this.editCourse} /> )
    return (
      
      <section className='App'>
        Crud App
        <CourseForm current={this.state.current} update = {this.updateCourse} addCourse={this.addCourse}/>
        <ul>{coursesList}</ul>
      </section>
    )
  }
}
export default App ;