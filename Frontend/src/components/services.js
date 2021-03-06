/**
 * Services Section: this section will display Leda Litricin's available services,
 * and will include a button that will send the user to the contact section.
 */

import React from 'react';   //import react
import 'bootstrap/dist/css/bootstrap.min.css'; //import default boostrap CSS for the Button, and Jumbotron
import {Jumbotron,Button} from 'react-bootstrap' // Import Button and Jumbotron from react-bootstrap
import '../styles/servicesStyle.css'; // import CSS Style for this page

//when the contact button is clicked at the bottom of the services page, the user will be scrolled down to the contact section
const scrollContact = () =>{
    window.scrollTo({top: 10000, behavior: 'smooth'});
 };

const Services = () => {
    return(
        <Jumbotron id="Jtron2">

                    <h1 id="AboutTitle">Services</h1>

                    <p id ='sTXT'> My Field of work includes DESIGN - CONSTRUCTION - EQUIPMENT, for all types of living spaces / interiors, as well as different needs of clients within these areas; </p>
                    <p id ='sTXT'> You bought an apartment in an old building and you want to completely adapt and transform it into the home of your dreams? Do you own a property that you want to improve in a short period of time and rent / sell as well as possible? You bought an apartment in a new building and want to equip it - for you or for rent? Do you want to renovate / refresh only one part of the apartment ?. I am ready to respond to your every need and implement the process fully and in accordance with your needs and budget; from the idea and the project, to the execution and equipping, and the delivery of "key in hand".</p>
                    <p id ='sTXT'> From the services you can contract independently only Design (making the Interior Design with all the information and drawings needed to perform the work, as well as the definition of complete furniture, lighting and other necessary equipment). In this case, you find the contractors (individual craftsmen or contractors) who are further responsible for the implementation of the project during the construction and equipping phase.</p>
                    <p id ='sTXT'> You can entrust me with all three phases, Design - Execution - Equipping, I will stay with you until the end of the project - until the key is handed over. In that case, the whole process of organizing masters and works as well as daily professional quality control of works, installation and delivery are my job, obligation and responsibility. The phase of performing works and equipping with fixed furniture, I organize and conduct with a group of proven masters, who over time have proven themselves in terms of harmonious cooperation, quality of work, optimal price and compliance with all agreements and deadlines.</p>
                    <p><Button id="contactB" variant="primary" onClick={scrollContact}>Contact</Button></p>
        </Jumbotron>
    )
}
    
export default Services