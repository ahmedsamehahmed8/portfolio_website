
import './App.css'
import  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';

// my import

import My_home from './componensts/my_home/my_home.jsx';
import My_nav from './componensts/my_nav/my_nav.jsx';
import My_about from './componensts/my_about/my_about.jsx';
import My_team from './componensts/my_team/my_team.jsx';
import My_service from './componensts/my_service/my_service.jsx';
import My_portfolio from './componensts/my_portfolio/my_portfolio.jsx';
import My_contact from './componensts/my_contact/my_contact.jsx'


function App() {
  let home =useRef()
  let about =useRef()
  let team =useRef()
  let service =useRef()
  let portfolio =useRef()
  let contact =useRef()

  return  (
    <> 
    <My_nav className="bg-white sticky-top" />
        <My_home ref= {home} />
      <div className='bk continer '>
    
        <My_about ref={about} />
        <My_team  ref={team}/>
        <My_service ref={service}/>
        <My_portfolio ref={portfolio}/>
        <My_contact ref={contact}/>
          <div className='row'> 
            <div className='col'>
              <footer className='text-center text-white h6 p-4 ' >Copyright © 2084 Company Name</footer>
            </div>
          </div>
        </div>
        
  </>
  )
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmBNy3HtODv0_d7Xx8IhsG5wCG7ctpoX8",
  authDomain: "project1-a152d.firebaseapp.com",
  projectId: "project1-a152d",
  storageBucket: "project1-a152d.appspot.com",
  messagingSenderId: "1039927433634",
  appId: "1:1039927433634:web:dda54888332b047f787afb",
  measurementId: "G-F39FKWE4YZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default App
