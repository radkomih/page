import React from 'react'

const Experience = (props) => {
  const projects = props.projects.map((item) => {
    return (<li><i className="fa-li fa fa-check"></i>{item}</li>)
  })

  const responsibilities = props.responsibilities.map((item) => {
    return (<li><i className="fa-li fa fa-check"></i>{item}</li>)
  })

  return (
    <>
      <div class="w-100">
        <h2 className="mb-5">{props.id}</h2>
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">{props.title}</h3>
            <div className="subheading mb-3">{props.company}</div>
            <p>{props.description}</p>

            <strong>Projects</strong>
            <ul className="fa-ul mb-0">{projects}</ul>

            <br></br>
            <strong>Responsibilities</strong>
            <ul className="fa-ul mb-0">{responsibilities}</ul>

            <br></br>
            <strong>Tech Stack</strong>
            <ul className="fa-ul mb-0">
              <li>
                <i className="fa-li fa fa-check"></i>
                {props.stack}
              </li>
            </ul>
          </div>
          <div className="resume-date text-md-left">
            <span className="text-primary">{props.period}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience
