import React from 'react'

const SkillSet = (props) => {
  return (
    <>
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="resume-content">
        <h3 className="mb-0">{props.title}</h3>
        <div className="subheading mb-3">
          {props.subtitle}
          {props.children}
        </div>
      </div>
    </div>
    </>
  )
}

export default SkillSet
