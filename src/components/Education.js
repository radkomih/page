import React from 'react'

const Education = (props) => {
  return (
    <>
      <article className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">{props.place}</h3>
          <div className="subheading mb-3">{props.degrees}</div>
        </div>
        <div className="resume-date text-md-left">
          <time className="text-primary" dateTime={props.period}>{props.period}</time>
        </div>
      </article>
    </>
  )
}

export default Education
