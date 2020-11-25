import React from 'react'

type FooterProps = {
    content: string
}

const Footer : React.FC<FooterProps>= ({content}) => {

    return <footer className="footer">
            <div className="content has-text-centered has-text-grey-light">
                <p>{content}</p>
                <p>Content from <a href="https://developer.marvel.com" >Marvel API</a></p>
                <a href="https://bulma.io/made-with-bulma/">
                        <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24" />
                </a>
            </div>
    </footer>
}

export default Footer