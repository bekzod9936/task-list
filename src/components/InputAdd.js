import React from 'react';
import { Container, Row, Table , Progress } from 'reactstrap';
import {nanoid }from  'nanoid';
import { FaCheckSquare, FaEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";

class InputAdd extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      tasks: [] ,
      checks: [],
      percent: 0,
      select: -1,
      userName: '',
      btnText: 'Add',
      btnColor: 'btn btn-primary w-100',
      defaultInput: '',
      warnText: 'The task is successfully added !!!',
      warnColor: 'text-center d-none bg-success text-white'
    };
  }
   focusInput = () => {
    this.inputRef.current.focus()
  }
  
  componentDidMount() {
    if (JSON.parse(localStorage.getItem('username')) === null){
     setTimeout(() => {
       this.setState({
         userName: prompt('What is your name ?', 'User')
       });
       localStorage.setItem('username', JSON.stringify(this.state.userName))
     }, 1000);
    } else{
      this.setState({
        userName: JSON.parse(localStorage.getItem('username'))
      });
      if (JSON.parse(localStorage.getItem('tasks')).length > 0){
        setTimeout(() => {
          alert(`Hello ${this.state.userName} !!!
You have some tasks .`)
        }, 1000);
      }
    }  
    if (JSON.parse(localStorage.getItem('tasks')) !== null){
      this.setState({
        tasks: JSON.parse(localStorage.getItem('tasks')),
        checks: JSON.parse(localStorage.getItem('ch')),
        percent: (this.state.checks.length * 100) / (this.state.tasks.length + this.state.checks.length)
      }); 
    } 
  }
  render() {
    let { tasks, checks , percent }= this.state;
    const getToDoTask=(event)=>{
        event.preventDefault();
       if(this.state.defaultInput !== ''){
         let a = tasks.filter((val) => { return val.task === this.state.defaultInput });
         a[0].task = event.target.task.value;
         tasks=tasks.map((val)=>{
           if (val.task === this.state.defaultInput){
             return a 
           }else{
             return val
           }
         })
         this.setState({
           defaultInput: '',
           btnText: 'Add',
           btnColor: 'btn btn-primary w-100',
           warnText: 'The task is successfully updated !!!',
           warnColor: 'text-center bg-success text-white'
         });
         setTimeout(() => {
           this.setState({
             warnText: 'The task is successfully added !!!',
             warnColor: 'text-center d-none bg-success text-white'
           })
         }, 2000);
       } else{
         if(event.target.task.value === ''){
           this.setState({
             warnText: 'Please fill space !!!',
             warnColor: 'text-center bg-danger text-white'
           })
           setTimeout(() => {
             this.setState({
               warnText: 'The task is successfully added !!!',
               warnColor: 'text-center d-none bg-success text-white'
             })
           }, 2000);
         }else{
           const taskObject = {
             task: event.target.task.value,
             keytask: nanoid()
           }
           tasks.push(taskObject)
           this.setState({
             warnColor: 'text-center bg-success text-white'
           })
           setTimeout(() => {
             this.setState({
               warnColor: 'text-center d-none bg-success text-white'
             })
           }, 2000);
         }
         
       }
       localStorage.setItem('tasks' , JSON.stringify(tasks))
        event.target.reset();
        this.setState({
          tasks : tasks
        })
       percent = (checks.length * 100) / (tasks.length + checks.length);
      this.setState({
        percent: percent
      });
    }
     const checkedTask=(event) =>{
       if (event.target.checked){
         for (let i = 0; i < tasks.length; i++) {
           if(event.target.value === tasks[i].task){
             checks.push(tasks.splice(i, 1)[0]);
           }
         }
     } 
       localStorage.setItem('tasks', JSON.stringify(tasks));
       localStorage.setItem('ch', JSON.stringify(checks));
       this.setState({
         tasks: tasks,
         checks: checks
       })
       percent = (checks.length * 100) / (tasks.length + checks.length );
       this.setState({
         percent: percent
       });
    }
    const deleteTask=(id)=>{
      checks=checks.filter((check) =>{
        return check.keytask !==id ;
      })
      localStorage.setItem('ch', JSON.stringify(checks));
      this.setState({
        checks: checks
      });
      this.setState({
        warnText : 'The task is successfully deleted !!!' ,
        warnColor: 'bg-success text-center text-white ',
      });
      setTimeout(() => {
        this.setState({
          warnText: 'The task is successfully added !!!',
          warnColor: 'text-center d-none bg-success text-white'
        })
      }, 2000);
      if (checks.length === 0) {
        this.setState({
          percent: 0
        });
      } else {
        percent = (checks.length * 100) / (tasks.length + checks.length);
        this.setState({
          percent: percent
        }); }
    }
    const editFun=(key)=>{
      let a=tasks.filter((val) =>{return val.keytask === key});      
         this.setState({
           defaultInput: a[0].task,
           btnText: 'Update',
           btnColor: 'btn btn-warning text-white w-100'
         })
      this.focusInput();
    }
    return (
      <div className="pt-5 ">
        <Container className="bg-white card">
          <Row>
            <div className="col-12 pt-2"><h6>Username: {this.state.userName}</h6></div>
          </Row>
          <Row >
            <div className='col-12 col-lg-8 offset-lg-2'><div className={this.state.warnColor}>{this.state.warnText}</div></div>
            <div className="col-12 col-lg-8 offset-lg-2 my-3">
                <form onSubmit={getToDoTask}>
                  <Row>
                    <div className="col-10">
                    <input defaultValue={this.state.defaultInput} ref={this.inputRef}  type="text" name="task" className="form-control" placeholder="Enter your task ...." />
                    </div>
                  <div className="col-2 ">
                    <button type="submit" className={this.state.btnColor}>{this.state.btnText}</button>
                    </div>
                </Row>
                </form>
            </div>
            <div className="col-12 col-lg-8 offset-lg-2 my-3">
              <Progress value={percent} >{percent}%</Progress>
            </div>
          </Row>
          <Row >
            <div className="col-6 overflow-auto">
                <Table striped className="text-center" >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th >Tasks</th>
                      <th className="text-center"><FaCheckSquare /></th>
                      <th><FaEdit /></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      tasks.map((item, index) => {
                        return <tr key={item.keytask} ><td>{index + 1}</td>
                          <td>{item.task}</td>
                          <td ><input type="checkbox" onChange={checkedTask} value={item.task} /></td>
                          <td><button className="btn btn-warning text-white" onClick={() => { editFun(item.keytask) }  }>Edit</button></td>
                        </tr>
                      })
                    }
                  </tbody>
                </Table>
              </div>
            <div className="col-6 overflow-auto">
                <Table striped className="text-center">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th >Done tasks</th>
                      <th className="text-center"><RiDeleteBin2Fill /></th>
                    </tr>
                  </thead>
                  <tbody>
                   {
                        checks.map((val , i) =>{
                       return <tr key={val.keytask}>
                         <td>{i + 1}</td>
                         <td>{val.task}</td>
                         <td className="text-center"><button className="btn btn-danger" onClick={()=>{deleteTask(val.keytask)}} >Delete</button></td>
                       </tr>
                     })
                   }
                  </tbody>
                </Table>
            </div>  
          </Row>
        </Container>
      </div>
    );
  }
}

export default InputAdd



