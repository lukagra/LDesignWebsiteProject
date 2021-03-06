// header
// Handles html elements and functions for the header:
// - When a section button is pressed, auto scroll to that section
// - When a language is selected, change page to that language

import React from 'react' // Imports react framework
import { Link } from 'react-scroll'// Imports Link from react


import '../styles/headerStyle.css' // Imports styling

// When called, scroll to the top
const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };

 // When called, scroll to about section
 const scrollAbout = () =>{
    let docHeight = document.documentElement.scrollHeight;
    window.scrollTo({top: docHeight*0.111, behavior: 'smooth'});
 };

 // When called, scroll to services section
 const scrollServices = () =>{
    let docHeight = document.documentElement.scrollHeight;
    window.scrollTo({top: docHeight*0.245, behavior: 'smooth'});
 };

 // When called, scroll to projects section
 const scrollProjects = () =>{
    let docHeight = document.documentElement.scrollHeight;
    window.scrollTo({top: docHeight*0.46, behavior: 'smooth'});
 };

 // When called, scroll to process section
 const scrollProcess = () =>{
    let docHeight = document.documentElement.scrollHeight;
    window.scrollTo({top: docHeight*0.66, behavior: 'smooth'});
 };

 // When called, scroll to contact section
 const scrollContact = () =>{
    let docHeight = document.documentElement.scrollHeight;
    window.scrollTo({top: docHeight, behavior: 'smooth'});
 };


 // Renders header elements
 export default class redirectEN extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           ready: false //when the website has finished building this will be set to true, used for redirects.
        }
    }

    componentDidMount(){
        this.ready = true; //sets to true after website is built
    }

    //redirects user to Serbian version of the website when clicked
    redirectEN = () => {
        if (this.ready===true){
          window.location.replace("http://localhost:8000/en/");
        }
      }

    render() {
            return (
                <header id='Header' >
                    <h1 id= "clientTitle" onClick={scrollTop}>
                        L E D A     L I T R I C I N
                    </h1>
                    <ul>
                        <li class = "heade">
                            <Link onClick={scrollTop} >
                                POCETAK
                            </Link>
                        </li>
                        <li class = "heade" id = "meni">
                            <Link onClick={scrollAbout}>
                                O MENI
                            </Link>
                        </li>
                        <li class = "heade">
                            <Link onClick={scrollServices}>
                                SE BAVIM
                            </Link>
                        </li>
                        <li class = "heade">
                            <Link onClick={scrollProjects}>
                                PROJEKTI
                            </Link>
                        </li>
                        <li class = "heade">
                            <Link onClick={scrollProcess}>
                                O PROCESU
                            </Link>
                        </li>
                        <li class = "heade">
                            <Link onClick={scrollContact}>
                                KONTACT
                            </Link>
                        </li>
                        <li class="languageSelect">
                            <Link onClick={this.redirectEN}>
                                EN
                            </Link>
                        </li>
                        <li  class="languageSelect" id="ignoreLS">
                            |
                        </li>
                        <li  class="languageSelect">
                            SR
                        </li>
                    </ul>
                </header>
         )
    }
  }



