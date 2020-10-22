import React, { Component } from "react"

class About extends Component {
  render() {
    if (this.props.data) {
      var profilepic = this.props.data.image
      var resumeDownload = this.props.data.resumedownload
      var email = this.props.data.email
      var phone = this.props.data.phone
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Jakub Kubisiowski Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>           
              I have 7 years of hands-on experience in creating web applications, APIs and server side services. 
              I possess a broad knowledge of the Microsoft technology stack including  <span className="white">C#, ASP.NET Core, ASP.NET Web API.</span>{" "}
              I work with popular frontend frameworks such as <span className="white">React and Angular</span> in order to create modern web applications. 
              I am familiar with <span className="white">cloud-based solutions</span> (Microsoft Azure) as many of my projects utilizes cloud services. 
              While working mostly in industrial area I have learned how to deliver critical software systems that need to be <span className="white">highly available, secure and fast.</span>
            <br/>
            <br/>
              I am not only an engineer but also a consultant willing to work closely with my clients. 
              I focus on analysis and good understanding of the customer’s business to help finding the most valuable solution to business problems.             
              I have been working as a project leader being responsible for both <span className="white">leading the development team and the deliveries</span>
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>              
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
