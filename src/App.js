import React, { Component } from 'react';
import './App.css';
import { Route ,Routes} from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import UserPage from './pages/userPage/userPage';
import { auth,createUserProfile } from './firebase/firebase.util';

class App extends Component {
  constructor(){
    super()
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth=null
  componentDidMount(){
   this.unsubscribeFromAuth=  auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef=await createUserProfile(userAuth)
        userRef.onSnapshot(snapShopt=>{
          this.setState({
            currentUser:{
              id:snapShopt.id,
              ...snapShopt.data()

            }
          })
          console.log(this.state)
        })
       
      }
      this.setState({currentUser:userAuth})
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){

    return (
      <div >
      <Header currentUser={this.state.currentUser} />
      <Routes>
      <Route exact path='/' element={<Homepage />} />
      <Route exact path='/shop' element={<ShopPage />} />
      <Route exact path='/signin' element={<UserPage  />} />

      </Routes>
    </div>
  );
}
}

export default App;
