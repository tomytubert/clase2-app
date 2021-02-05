import {Links} from "../../components/Links/Links"

export function Navbar({logo, title, links}) {
    //console.log("Links",links)
    return(
        <nav>
                <img src={logo.src} alt={logo.alt} />
                <p>{title}</p>
                <Links links={links} />
        </nav>
        
    )
}