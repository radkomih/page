import React from 'react'

const Education = (props) => {
  return (
    <>
      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">{props.place}</h3>
          <div className="subheading mb-3">{props.degrees}</div>
        </div>
        <div className="resume-date text-md-left">
          <span className="text-primary">{props.period}</span>
        </div>
      </div>
    </>
  )
}

export default Education
