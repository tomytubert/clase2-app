export function Developers(props){
    console.log("Developers props",props);
    return(
        <div>
            {props.developers.map((item,idx) =>         
                <div>
                    <h3>{item.name}</h3>
                    <img src={item.developerImg.src} alt={item.developerImg.alt} />
                    <p>{item.description}</p>
                </div>
        )}
        </div>
);
}