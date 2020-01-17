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
              I have been working with{" "}
              <span className="white">.NET technologies for over 6 years</span>{" "}
              creating web applications and server-side services. I have gained
              knowledge in Microsoft technologies such as{" "}
              <span className="white"> ASP.NET Web API, ASP.NET Core</span> and{" "}
              <span className="white"> Azure Cloud </span> and frontend
              frameworks like <span className="white">Angular</span> and{" "}
              <span className="white">React</span>.
              <br />
              <br />
              While working mostly in industrial area I have learned how to
              deliver critical software systems that need to be{" "}
              <span className="white">
                highly available, secure and fast.
              </span>{" "}
              On the other hand working as a consultant taught me
              <span className="white">
                {" "}
                close cooperation with the client
              </span>{" "}
              as well as{" "}
              <span className="white">understanding the business</span>
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
              <div className="columns download">
                <p>
                  <a
                    href={resumeDownload}
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-download" />
                    Download Resume
                  </a>
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
