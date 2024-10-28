import "./layout2"

export default function Contact() {
    return (
      <div>
      
      <div id="header1">
        <h1 id="ContactHeading">Contact Us</h1>
        </div>


        <ul> 
          <li id="ContactPara">
           For more details, Please contact us: 
          </li>
        </ul>


      <div id="ContactForm">

        <form action="backend.ts">

       
        <div id="fname">

        <label htmlFor="fname">First Name: </label>
        <input type="text" name="fname" id="fname" placeholder="Enter Your First Name" />
        </div>

        <div id="sname">

        <label htmlFor="lname">Last Name: </label>
        <input type="text" name="lname" id="lname" placeholder="Enter Your Last Name" />
        </div>

        <div id="email">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" placeholder="Enter Your Email"/>
        </div>

        <div id="date">
          <label htmlFor="date">Date: </label>
          <input type="date" name="date" id="date" />
        </div>

        <div id="message">
          <label htmlFor="message">Message: </label>
          <input type="text" name="message" id="message"/>
        </div>


        <div id="rs">
          
        <div id="reset">
          <label htmlFor="reset">Reset: </label>
          <input type="reset" name="reset" id="reset" value="Reset Now" />
        </div>

        <div id="submit">
          <label htmlFor="submit">Submit: </label>
          <input type="submit" name="submit" id="submit" value="Submit Now" />
        </div>

        </div>

        </form>
      </div>
      
      </div>
    );
  }