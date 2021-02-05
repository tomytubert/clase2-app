import {Links} from "../../components/Links/Links"
import{Contact} from "../../components/Footer/Contact/Contact"
export function Footer({contact,links}){
    return(
        <footer>
            <Links links={links} />
            <Contact {...contact}/>
        </footer>
    );
}