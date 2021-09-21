// import logo from './logo.svg';
import './App.css'; 
import {useState} from 'react'

function App() {
  // here we use two useStates. One is to know the status of what is being typed in the input
  //Next state is the store the list as an array like structure
  const [todos,setTodos]= useState([])//Empty array is given as default
  const [todo,setTodo]=useState('')  
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>                {/* ["tin","egg","dog","frog"]-todos*/}
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e)=>{setTodo(e.target.value); }} type="text" placeholder="🖊️ Add item..." />
         {/* e.target.value gives us the value which is being typed in the input
         That value is given to the function setTodo.This changes the state of variable todo.And this todo is displayed 
         For further understanding add console.log(todo) after the setTodo function in onchange*/}
        <i onClick={()=>{setTodos([...todos,{id:Date.now(),text: todo, status:false}]); }} className="fas fa-plus"></i>
        {/* In the above step, we are considering each task as an element in the array. So every new task
        should be added to the array.For that we use spread operator so that the new task gets added along with the 
        previous ones. If any doubt still persist feel free to add console.log(todos) near the setTodos function .
        Earlier the setTodos function was like this->setTodos([...todos,todo]); }} Here inorder to understand the value
        and status of the checkbox we needed a value and status attribute.So we changed the todo into an object having 
        text and status */}
        
      </div>
      <div className="todos">
        {/* contents under this should be dynamically added.So we add a map function to add all those recnty added task as box in the front end */}
          {todos.map((obj)=>{   /// Passed as string at first then after adding the status function passed as an object
               return(
                <div className="todo">
                  <div className="left">
                    <input onChange={(e)=>{ /*For a change happening on the checkbox this function is called*/
                         console.log(e.target.value)     /*We check print the status of that particular function */
                         console.log(obj) //That object which is being passed in the map function
                         setTodos(todos.filter(obj2=>{   //We filter the array/objects and we check for that obj having same id as the one which is clicked 
                           if(obj2.id===obj.id){
                             obj2.status=e.target.checked 
                           }return obj2
                         }))
                    }}
                    value={obj.status} type="checkbox" name="" id="" />     {/*Inorder to change the status of the task
                      we are tracking that particular task using an id which is a date.*/}
                                                             
                    <p>{obj.text}</p>      {/* As passed value is an object */}
                  </div>

                  <div className="right">
                    <i  className="fas fa-times" onClick={()=>{
                            // if (obj.id===del.id){
                            //     //  setTodos(todos.splice(del.id))
                                // console.log("Hello");
                                // console.log(obj.status)
                                // var index= todos.indexOf(obj)
                                // setTodos(todos.splice(index,1))
                                setTodos(todos.filter(e=>{
                                  return (e.id!==obj.id)
                                }))
                                console.log(todos);
                            // }
                            
                    }}></i>
                  </div>
                </div>
               )
              
          } )}
              {todos.map((obj)=>{
                   if (obj.status){
                     return(<h1> {obj.text}</h1>)
                   }
                   return null
               })} 
             
        
        
      </div>
    </div>
  );
}

export default App;
