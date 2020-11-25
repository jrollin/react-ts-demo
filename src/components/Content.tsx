import React from 'react'


type Props = {
    title: string
}

const Content : React.FC<Props> = ({title}) => {
    return <section className="container"> 
        <h1>{title}</h1>
    </section>
}

export default Content