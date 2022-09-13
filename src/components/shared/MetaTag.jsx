import React from 'react'

const MetaTag = ({
    title,
    description
}) => {
  return (
    <head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="keywords" content="Reactjs, web development, road map, frontend, backend, javascript, python, typescript, ux design, UI/UX, flutter, dev ops, Nextjs, Vue, Nodejs, C++, carbon, javascript projects, python projects"/>
    </head>
  )
}

export default MetaTag