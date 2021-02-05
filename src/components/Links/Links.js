export const Links = (props) => {
    console.log("Props Links", props);
    return ( 
        <ul>
            {props.links.map((item, idx)=> <li key={idx}><a href={item.to}>{item.label}</a></li>)}
        </ul>
);
}
