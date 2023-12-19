//primero hemos de exportar nuestra funcion con un export
import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard' 

export function App () {
  const [name, setName] = useState('midudev')
  //const midudev = { isFollowing: true, userName: 'midudev'}
  //con los tres puntos pasamos cada uno de las propiedades como si fuese una prop.
  //{...midudev}
  return (
    <section>
      <TwitterFollowCard initialIsFollowing userName={name} >
        Miguel Angel Duran
      </TwitterFollowCard>

      <TwitterFollowCard initialIsFollowing={false} userName="Pollo">
        Pablo Hernandez
      </TwitterFollowCard> 
      
      <TwitterFollowCard initialIsFollowing={true} userName="elonmusk">
        Elon Musk
      </TwitterFollowCard>

    </section>
    
    
  )
}
