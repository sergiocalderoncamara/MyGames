import React from "react";

export default function Author (props) {
    return (
        <>
        {(() => {
                    if (!props.author || props.author == null) {
                        return(
                            <>
                            unknown
                            <img src="notfound.jpg" alt="foto" /> 
                            </>
                        )
                    } else if (!props.author.username || props.author.username == null) {
                        return (
                            <>
                            unknown
                            <img src={props.author.photo.url} alt={props.author.photo.filename} />
                            </>
                        )
                    } else {
                        return (
                            <>
                            {props.author.username}
                            <img src={props.author.photo.url} alt={props.author.photo.filename} />
                            </>
                        )
                    }
                })()}        
        </>
    );
}