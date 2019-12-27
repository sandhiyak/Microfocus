import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const styles = {
    facebookBtn: {
      backgroundColor: 'rgb(51, 89, 157)'
    },
    form: {
      textAlign: 'center'
    }
  }
  class Login extends React.Component {
    constructor(){
        super();
        this.state = {
         email: '',password: ''
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    } 
    handleOnSubmit = (e) => {
      e.preventDefault();
      var data = JSON.parse(localStorage.getItem('data'))
      try{
        for(var i=0;i<data.length;i++){
            if((data[i]['email']===(this.state.email)) && data[i]['password']===(this.state.password))
            {
                ReactDOM.render(
                    <Form children={ <Listing /> } />,
                    document.getElementById('root')
                  );
                  return;
            }
            else
            {
                  alert("Username or Password Miss match");
            }

        }
      }catch(d){
          alert("Username or Password Miss match");

      }
     
    };
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }
      
    handleSingUp = (e) => {
        ReactDOM.render(
            <Form children={ <Reg /> } />,
            document.getElementById('root')
          );
          
    };
    render() {
            return (
                <div>
                    <div>
                        <form className='form' style={styles.form} onSubmit={this.handleOnSubmit}>
                            <h4>LOGIN</h4>
                            <div className='form-group row'>
                            <input className='input' name="email" type='email' value={this.state.email}  onChange={this.handleChange} placeholder='UserName' required/>
                            </div>
                            <div className='form-group row'>
                            <input className='input' name="password" type='password' placeholder='Password' value={this.state.password}  onChange={this.handleChange} required/>
                            </div>
                            <div className='form-group row'>
                            <button className='button' type='submit'>LOGIN</button>
                            </div>
                            <br />
                            <div className='form-group row'>
                            <button className='button' type='button' onClick={this.handleSingUp}>NEW REGISTER</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
       
  }
  // LIST OF DOCUMENTS OF A PARTICULAR USER
 class Listing extends React.Component{
   handleSingUp = (e) => {
        ReactDOM.render(
            <Form children={ <Wel /> } />,
            document.getElementById('root')
          );
          
    };
       render()
       {
          return(
            <div>
            <h1><center>LIST OF DOCUMENTS</center></h1>
            <br />
            <button className="button" type="submit" onClick={this.handleSingUp}>CREATE NEW DOCUMENT</button>
            </div>
          )
       }
 }
  //TEXT DOCUMENT CREATION
  class Wel extends React.Component {
    constructor(){
      super();
      this.state = {
       title: '',content: ''
          
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
 
    handleOnSubmit = (e) => {
      e.preventDefault();
      var datas = []
          try{
              datas = localStorage.getItem("data")
  
              if(JSON.parse(datas)[0]['title'] !== ""){
                  datas =  JSON.parse(datas)
                  datas[datas.length] = this.state
              }
              if(JSON.parse(datas)[0]['contents'] !== ""){
                datas =  JSON.parse(datas)
                datas[datas.length] = this.state
            }
  
          }catch(d){
              datas = []
              datas[0] =  (this.state)
          }
          localStorage.setItem("data",JSON.stringify(datas))
           
    ReactDOM.render(
      <Form children={ <Listing /> } />,
      document.getElementById('root')
    );
    };
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }
    
    
      render(){
           const mystyle={
             height: "80px",
              width: "100px",
               color: "white",
          backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
            }
            const txtstyle={
              width:"700px",
               backgroundColor:'rgb(204,255,255)',
              margin:"8px",
            }
        return(
          <form className='form' onSubmit={this.handleOnSubmit}>
          <div>
           <input type="text" name='title' placeholder="title" style={txtstyle} value={this.state.title}  onChange={this.handleChange} required />
           <br />
           </div>
           <div>
          <textarea rows="45" cols="100" name='contents' placeholder="content" style={txtstyle}   />
          <br />
          <div class="w3-bar">
               <input type="submit" value="SAVE" style={mystyle}/>
               <input type="button" value="CANCEL" style={mystyle}/>
         </div>
        </div>
        </form>
        )
      }
  }
// REGISTER DETAILS STARTS FROM HERE
  class Reg extends React.Component {
   constructor(){
       super();
       this.state = {
        f_name: '',l_name: '',email: '',password: '',c_password: ''
           
       };
       this.handleChange = this.handleChange.bind(this);
       this.handleOnSubmit = this.handleOnSubmit.bind(this);
   }
  handleOnSubmit = (e) => {
    e.preventDefault();
    var datas = []
    if(this.state.password===(this.state.c_password)){
        try{
          //JSON formated datas
            datas = localStorage.getItem("data")

          if(JSON.parse(datas)[0]['f_name'] !== ""){
                datas =  JSON.parse(datas)
                datas[datas.length] = this.state
           } 

        }catch(d){
           datas = []
           datas[0] =  (this.state)
       } 
        localStorage.setItem("data",JSON.stringify(datas))
         
  ReactDOM.render(
    <Form children={ <Login /> } />,
    document.getElementById('root')
  );
  
    }else{
    //this.setState({['password']: ''});
    //this.setState({['c_password']: ''});
        alert("Password Miss Match");
    }

  };
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  
  render() {
          return(

            <div>
            <form className='form' style={styles.form} onSubmit={this.handleOnSubmit}>
                <h4>REGISTER DETAILS</h4>
                <div className='form-group row'>
                <input className='input' name="f_name" type='text' placeholder='First Name' value={this.state.f_name}  onChange={this.handleChange} required/>
                </div>
                <div className='form-group row'>
                <input className='input' name="l_name" type='text' placeholder='Last Name' value={this.state.l_name}  onChange={this.handleChange} required/>
                </div>
             
                <div className='form-group row'>
                <input className='input' name="email" type='email' placeholder='Email' value={this.state.email}  onChange={this.handleChange} required/>
                </div>
                <div className='form-group row'>
                <input className='input' name="password" type='password' placeholder='Password' value={this.state.password}  onChange={this.handleChange} required/>
                </div>
                <div className='form-group row'>
                <input className='input' name="c_password" type='password' placeholder='Confirm Password' value={this.state.c_password}  onChange={this.handleChange} required/>
                </div>
                <div className='form-group row'>
                <button className='button' type='submit'>SAVE</button>
                </div>
            </form>
        </div>
          )
      }
  
  }
  
  class Form extends React.Component {
    render () {
      const {children} = this.props
      return (
        <div >
          {children}
        </div>
      )
    }
  }
  ReactDOM.render(
    <Form children={ <Login /> } />,
    document.getElementById('root')
  );
  
serviceWorker.unregister();
