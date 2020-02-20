import React from 'react'

const Section = (props) => {
  let title = ''
  if (!props.hideTitle) { title = <h2 className="mb-5" id={`${props.title}-heading`}>{props.title}</h2> }

  return (
    <>
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id={props.title}
        aria-labelledby={props.hideTitle ? undefined : `${props.title}-heading`}
      >
        <div className="w-100">
          {title}
          {props.children}
        </div>
      </section>

      <hr className="m-0" />
    </>
  )
}

export default Section
