import {Link} from 'react-router-dom'
const games = [
    {id:1, name:'hsr',description:'gud'},
    {id:1, name:'co9',description:'gud'},
    {id:1, name:'league',description:'gud'},
    {id:1, name:'agargarweg',description:'gud'}
]
export default function Games(){
    return(
        <>
        <h1>Games List: </h1>
        <ul>
            {games.map((game)=>(
                <li key = {game.id}>
                    <Link to = 
                    {`/games/${game.id}`} state=
                    {{game}}>
                        <strong>{game.name} - {game.description}</strong>
                    </Link>
                        
                </li>
            ))}
        </ul>
        </>
    )
}