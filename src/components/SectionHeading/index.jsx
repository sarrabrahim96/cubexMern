import React from 'react'
import parse from 'html-react-parser';
import Button from '../Button'
import Spacing from '../Spacing'
import Div from '../Div';

export default function SectionHeading({title, subtitle, btnLink, btnText, variant, children}) {
  return (
    <Div className={variant ? `cs-section_heading ${variant}` : `cs-section_heading cs-style1`}>
      <h4 className="cs-section_subtitle">{parse(subtitle)}</h4>
      <h5 className="cs-section_title">{parse(title)}</h5>
      {children}
      {btnText && (
        <>
          <Spacing lg='45' md='20'/>
          <Button btnLink={btnLink} btnText={btnText}/>
        </>
      )}
    </Div>
  )
}
