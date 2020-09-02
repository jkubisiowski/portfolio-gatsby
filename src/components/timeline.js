import React, { Component } from "react"
import { VerticalTimeline } from "react-vertical-timeline-component"
import { VerticalTimelineElement } from "react-vertical-timeline-component"
import WorkIcon from "material-ui-icons/Work"
import "react-vertical-timeline-component/style.min.css"
import imageLos from "../images/portfolio/los.png"
import imageNt from "../images/portfolio/nationaltheatret.png"
import imageBilbo from "../images/portfolio/bilbo.png"
import imageNeseser from "../images/portfolio/neseser.png"

export default class Timeline extends Component {
  render() {
    return (
      <section id="portfolio">
        <VerticalTimeline layout="1-column" animate={false}>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              LOS | CMS and electrical energy e-commerce
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Forte_ Digital
            </h4>
            <div className="container">
              <span className="badge">C#</span>
              <span className="badge">ASP.NET MVC</span>              
              <span className="badge">EPiServer</span>
              <span className="badge">Azure</span>
              <span className="badge">React</span>
            </div>
            <p className="project-description">
              LOS is one of the biggest electrical energy providers in Norway. The project consists of the CMS where editors put the marketing content and selling platform where users can buy the energy for their houses.
            </p>
            <img src={imageLos} alt="nationaltheatret" />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Oslo National Theater | CMS and ticketing system (Development)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Forte_ Digital
            </h4>
            <div className="container">
              <span className="badge">C#</span>
              <span className="badge">ASP.NET MVC</span>
              <span className="badge">Tessitura</span>
              <span className="badge">EPiServer</span>
              <span className="badge">Azure</span>
              <span className="badge">React</span>
            </div>
            <p className="project-description">
            The Nationaltheatret project consists of a CMS and a ticketing system. It is strongly integrated with Tessitura, the key software used in the arts and culture industry. The main challenge was to design a reliable and friendly checkout process that offers top-notch user experience when buying tickets online.
            </p>
            <img src={imageNt} alt="nationaltheatret" />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
            Bilbo | Social Platform for books sharing
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Own project</h4>
            <div className="container">
              <span className="badge">C#</span>
              <span className="badge">ASP.NET Core</span>
              <span className="badge">EF Core</span>
              <span className="badge">Azure</span>
              <span className="badge">MongoDB</span>
              <span className="badge">Angular</span>
            </div>
            <p className="project-description">
              Bilbo is a web application that helps people share books. Users
              make friends similar as in Facebook and add their books to virtual
              library. Then they borrow books from their friends and the
              application keeps track of exchange process.
            </p>
            <img src={imageBilbo} alt="bilbo" />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Manufacturing executing system (MES)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Abis</h4>
            <div className="container">
              <span className="badge">C#</span>
              <span className="badge">ASP.NET Core</span>
              <span className="badge">EF Core</span>
              <span className="badge">SQL Server</span>
              <span className="badge">RabbitMQ</span>
              <span className="badge">Angular</span>
              <span className="badge">Electron</span>
            </div>
            <p className="project-description">
              Distributed system for production execution for 3 plants involving
              production planning, production reporting, maintenance and devices
              integration. As it provides critical services for production it
              has to be fast, reliable and be up 24h. MES is strongly integrated
              with SAP including exchange data about orders, warehouse,
              production results and more.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Overall Equipment Effectiveness (OEE) monitoring system
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Abis</h4>
            <div className="container">
              <span className="badge">C#</span>
              <span className="badge">ASP.NET Web Api</span>
              <span className="badge">EF</span>
              <span className="badge">SQL Server</span>
              <span className="badge">Angular</span>
            </div>
            <p className="project-description">
              Complete industrial solution monitoring the effectiveness of the
              machines including Overall Equipment Effectiveness (OEE) and other
              key performance indicators. It keeps track of all the machines
              continuously checking it status, number of produced details,
              scraps and alarms. Processed data are preseneted to plant workers
              as a web application.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Pedestrian detection using convolutional neural networks
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Master thesis
            </h4>
            <div className="container">
              <span className="badge">Deep learning</span>
              <span className="badge">GPU computing</span>
              <span className="badge">Python</span>
            </div>
            <p className="project-description">
              Vision system that can analyze an image and detect pedestrians. It
              uses deep convolutional neural networks as primary algorithm and
              was trained on large datasets using GPU computing power.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Distributied quality control and measurement system
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Abis</h4>
            <div className="container">
              <span className="badge">C#</span>
              <span className="badge">WPF</span>
              <span className="badge">EF</span>
              <span className="badge">SQL Server</span>
            </div>
            <p className="project-description">
              Industrial system that enables plant workers gather all quality
              control related parameters and measurements. It is connected with
              physical measuring devices so all results are automatically
              captured. It is also integrated with higher levels systems like
              SAP to provide all information of orders, details history and
              other important data.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              NESESER - Computer network monitoring system
            </h3>
            <h4 className="vertical-timeline-element-subtitle">MNS Lab</h4>
            <div className="container">
              <span className="badge">Ruby on rails</span>
              <span className="badge">Angular</span>
              <span className="badge">Redis</span>
              <span className="badge">Docker</span>
              <span className="badge">InfluxDB</span>
            </div>
            <p className="project-description">
              Monitoring system that helps Internet Service Providers manage
              their networks. It connects to routers and managed switches via
              different protocols and checks device's health, status and other
              important parameters. The web application presents the real time
              overview of the network as well as charts and network topology
              map.
            </p>
            <img src={imageNeseser} alt="neseser" />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Vision system client application for quality control
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Abis</h4>
            <div className="container">
              <span className="badge">C#</span>
              <span className="badge">Win forms</span>
              <span className="badge">SQL Server</span>
            </div>
            <p className="project-description">
              Industrial application that displays the quality control result of
              newly created product. It shows the plant operator any flaws that
              were detected by the vision system so the product can be
              classified as OK or NOT OK. It is fully integrated with PLC
              controllers and cameras so the process can be run automatically.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    )
  }
}
