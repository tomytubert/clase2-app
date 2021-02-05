export function Hero({title,subtitle,img}){
    return(
        <header>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img src={img.src} alt={img.alt} />
        </header>
    );
}
