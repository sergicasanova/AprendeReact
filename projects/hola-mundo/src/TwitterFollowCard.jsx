import { useState } from "react";
//este import permite añadir cierta funcionalidad, tener algun tipo de funcionalidad...
export function TwitterFollowCard ({ children, userName, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const imageSrc = `https://unavatar.io/${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button isFollowing' 
        : 'tw-followCard-button'
    //const addAt = (userName) => `@${userName}`
    //las props deben ser inmutables

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        //en react se utilizan className para nombrar parametros
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
        <img 
        className='tw-followCard-avatar'
        alt="Avatar de Sergi" 
        src={imageSrc}/>
        <div className='tw-followCard-info'>
        <strong>{children}</strong>
            <span className='tw-followCard-infoUserName'>
            @{userName}
            </span>
        </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                {text}
                <span className="tw-followCard-stopFollow">Dejar de seguir</span>
            </button>
        </aside>

        </article>
    )
}