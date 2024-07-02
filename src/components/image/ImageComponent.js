export const ImageComponent=()=>{

    return(
        <img 
        src="https://e1.pxfuel.com/desktop-wallpaper/235/216/desktop-wallpaper-hinata-hyuga-naruto-spring-mood-sakura-blossom.jpg"
        width={700}
        height={500}
        alt="Hinata"/>
    );
};

export const ImageComponent1=()=>{
    return(
    <img
    src="https://hindi.news24online.com/wp-content/uploads/2023/11/sh-12.jpg"
    width={700}
    height={500}
    alt="muskaan"
    />
    );
};

export const ImageComponentData = (prop) =>{
    const{ src,width,height,alt}=prop
   
    return(
        
        <img src={src} width={width} height={height} alt={alt}/>
    )
}