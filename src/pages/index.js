import React from "react"

import Header from "./../components/header"
import About from "./../components/about"
import Timeline from "./../components/timeline"
import Resume from "./../components/resume"
import Footer from "./../components/footer"

import profilepic from "./../images/profilepic.jpg"
import imageGit from "./../images/tech/git.png"
import imageAngular from "./../images/tech/angular.png"
import imageAspnet from "./../images/tech/aspnet.png"
import imageAzure from "./../images/tech/azure.png"
import imageCsharp from "./../images/tech/csharp.png"
import imageJavascript from "./../images/tech/javascript.png"
import imageNetCore from "./../images/tech/netcore.png"
import imageReact from "./../images/tech/react.png"
import SEO from "./../components/seo"

const data = {
  main: {
    name: "Jakub Kubisiowski",
    image: profilepic,
    bio:
      "I've been working with .NET technologies for over 5 years creating web applications and server-side services. I've gained knowledge in Microsoft technologies such as ASP.NET Web API, ASP.NET Core or Azure Cloud and popular front-end frameworks e.g. Angular and React. While working mostly in industrial area I have learned how to deliver critical software systems that need to be highly available, secure and fast.",
    contactmessage:
      "Here is where you should write your message to readers to have them get in contact with you.",
    email: "jakub.kubisiowski@gmail.com",
    phone: "+48 725 273 015",
    website: "http://www.jakubkubisiowski.pl",
    resumedownload:
      "https://drive.google.com/open?id=15RHRcuLYN_SHgicNFg9yORWrQZ2nQxVH",
    social: [
      {
        name: "facebook",
        url: "https://www.facebook.com/jakub.kubisiowski",
        className: "fa fa-facebook",
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/jakub-kubisiowski-10b457b0/",
        className: "fa fa-linkedin",
      },
      {
        name: "github",
        url: "https://github.com/jkubisiowski",
        className: "fa fa-github",
      },
    ],
  },
  resume: {
    skillmessage: "These are my favorite technologies and tools",
    skills: [
      {
        name: "C#",
        description:
          "My primary programming language and I've used it it almost every project I ever made including web applications (backend), services, desktop applications and console application.",
        image: imageCsharp,
      },
      {
        name: "ASP.NET",
        description:
          "My favorite backend framework for web applications. I use both ASP.NET MVC and ASP.NET Web Api as well as ASP.NET Core which I find very convenient to use.",
        image: imageAspnet,
      },
      {
        name: ".NET Core",
        description:
          "It's basically .NET but more flexible, faster, more convienient to use and runs on Linux/MacOS. I like the job Microsoft has done here and started to use it as soon as version 1.0 was released.",
        image: imageNetCore,
      },
      {
        name: "Azure",
        description:
          "Azure gives me a possibility to easily deploy the application an monitor its health. I am familiar with all standard services such as App Service, SQL Server, Cosmos DB, Application Insight, load balancers and private networks. I also use Azure DevOps to configure CI/CD",
        image: imageAzure,
      },
      {
        name: "Javascript",
        description:
          "It's probably hard to develop any web application without Javascript. However I come from the .NET world so in any new project I would rather go with strongly-typed TypeScript.",
        image: imageJavascript,
      },
      {
        name: "React",
        description:
          "Curently it is my first choice framework for creating web applications. I'm especially willing to develop more projects using React and Redux",
        image: imageReact,
      },

      {
        name: "Angular",
        description:
          "I have used Angular to write many SPA production applications. ",
        image: imageAngular,
      },
      {
        name: "Git",
        description:
          "I have worked with a team that wasn't using git. Once. It won't happen again.",
        image: imageGit,
      },
    ],
  },
}

const IndexPage = () => (
  <>
    <SEO title="Jakub Kubisiowski - Full stack developer" lang="en" description="Jakub Kubisiowski's personal website inclduing profile, projects description and resume" />
    <Header data={data.main} />
    <About data={data.main} />
    <Timeline />
    <Resume data={data.resume} />
    <Footer data={data.main} />
  </>
)

export default IndexPage
