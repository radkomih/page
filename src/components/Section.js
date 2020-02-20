import React from 'react'

const Section = (props) => {
  let title = ''
  if (!props.hideTitle) { title = <h2 className="mb-5">{props.title}</h2> }

  return (
    <>
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id={props.title}
      >
        <div class="w-100">
          {title}
          {props.children}
        </div>
      </section>

      <hr className="m-0" />
    </>
  )
}

export default Section
