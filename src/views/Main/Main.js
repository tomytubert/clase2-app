import { Navbar } from "../../components/Navbar/Navbar";
import { Hero } from "../../components/Hero/Hero";
import { Body } from "../../components/Body/Body";
import { Footer } from "../../components/Footer/Footer";

export function Main({navbar, hero, body, footer}) {
    return(
        <main>
            <Navbar {...navbar} />
            <Hero {...hero} />
            <Body {...body} />
            <Footer {...footer} />
        </main>
    )
} 