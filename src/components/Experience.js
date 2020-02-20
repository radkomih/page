import React from 'react'

const Experience = (props) => {
  const projects = props.projects.map((item, index) => {
    if (typeof item === 'string') {
      return (
        <li key={`project-${index}`}>
          <i className="fa-li fa fa-check"></i>
          {item}
        </li>
      )
    }

    const { name, text, description, url } = item
    const label = name || text || url

    return (
      <li key={`project-${index}`}>
        <i className="fa-li fa fa-check"></i>
        {url ? (
          <a className="project-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in new tab)`}>
            {label}
          </a>
        ) : (
          label
        )}
        {description ? ` - ${description}` : null}
      </li>
    )
  })

  const responsibilities = props.responsibilities.map((item, index) => {
    return (
      <li key={`responsibility-${index}`}>
        <i className="fa-li fa fa-check"></i>
        {item}
      </li>
    )
  })

  return (
    <>
      <div className="w-100">
        {props.id && <h2 className="mb-5">{props.id}</h2>}
        <article className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">{props.title}</h3>
            <div className="subheading mb-3">{props.company}</div>
            <p>{props.description}</p>

            <strong>Projects</strong>
            <ul className="fa-ul mb-0" aria-label="Project list">{projects}</ul>

            <br></br>
            <strong>Responsibilities</strong>
            <ul className="fa-ul mb-0" aria-label="Responsibilities list">{responsibilities}</ul>

            <br></br>
            <strong>Tech Stack</strong>
            <ul className="fa-ul mb-0" aria-label="Technology stack">
              <li>
                <i className="fa-li fa fa-check"></i>
                {props.stack}
              </li>
            </ul>
          </div>
          <div className="resume-date text-md-left">
            <time className="text-primary" dateTime={props.period}>{props.period}</time>
          </div>
        </article>
      </div>
    </>
  )
}

export default Experience
