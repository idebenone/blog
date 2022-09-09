import React from 'react'
import { useParams } from 'react-router-dom'

const generatepage = (pageName) => {
    const component = () => require(`./pages/${pageName}`).default

    try {
        return React.createElement(component());
    } catch (err) {
        return "404 | Page Not Found"
    }
}



const PageRender = () => {
    const { page, id } = useParams()
    let pageName = ''

    if (id) {
        pageName = `${page}/[id]`
    } else {
        pageName = `${page}`
    }
    return generatepage(pageName);
}

export default PageRender