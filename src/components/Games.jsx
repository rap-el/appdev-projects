// Games.jsx
import { Link } from 'react-router-dom';

const games = [
    { id: 1, name: 'Honkai StarRail', description: 'Honkai: Star Rail is a new HoYoverse space fantasy RPG. Hop aboard the Astral Express and experience the galaxy\'s infinite wonders filled with adventure and thrills. Players will meet new companions across various worlds and maybe even run into some familiar faces.', imageUrl: 'hahasr.jpeg', 
    reviews: ['the penacony story is so great, i think this game is not stingy like genshin',
     '1.0-1.6: 太空歌剧题材类的娱乐作品一直是我的心头好。谁不想征服星辰大海呢？崩铁作为一款正统JRPG很好的贯彻了剧情为上的原则，太空站雅利洛仙舟的故事都引入入胜。这次的传说任务做得尤为出色，它不再以个人为主体，而是放眼于文明。同行任务讲述的是一个又一个那个地方有别于主线任务的故事，让你产生对各个',
      'The turn-based combat is uninspired, the world looks boring, this is like a homage but just takes the worst parts of 90s/00s JRPGs. Best thing about the game was the start screen.',
       'ts a gacha game, and worst a game that came from the devs of Genshin. So, yeah, I was surprised at the quality of the game, if you like RPGs you should definitely try this, specially if you like story-driven narratives',
        '八月正午的陽光 都沒你耀眼'] },
    { id: 2, name: 'Genshin Impact', description: 'Genshin Impact is a 2020 action role-playing video game produced by MiHoYo/HoYoverse. The game features an anime-style open world environment and an action-based battle system using elemental magic and character-switching.', imageUrl: 'URL_to_image', reviews: ['Amazing game!', 'Beautiful world!', 'Fun characters!', 'Great combat system!', 'Enjoyable quests!'] },
    { id: 3, name: 'Mobile Legends', description: 'Mobile Legends: Bang Bang is a multiplayer online battle arena (MOBA) game designed for mobile phones. The game is free-to-play and is only monetized through in-game purchases like characters and skins. Each player can control a selectable character, called a Hero, with unique abilities and traits.', imageUrl: 'URL_to_image', reviews: ['Fun and competitive!', 'Great heroes!', 'Strategic gameplay!', 'Addictive!', 'Good graphics!'] },
    { id: 4, name: 'Class of 09', description: 'After her father commits suicide, a sociopathic girl enrolls into a new American high school in the late 2000s, intending to manipulate and bully her fellow students for status.', imageUrl: 'URL_to_image', reviews: ['Interesting story!', 'Unique characters!', 'Good dialogue!', 'Emotional!', 'Well-paced!'] },
    { id: 5, name: 'Pokemon Black', description: 'A young Pokémon Trainer sets out to explore the Unova region and become the Pokémon League champion. Along the way, they must battle the nefarious Team Plasma.', imageUrl: 'URL_to_image', reviews: ['Classic Pokémon!', 'Great adventure!', 'Challenging battles!', 'Nostalgic!', 'Fun gameplay!'] }
];

export default function Games() {
    return (
        <>
            <h1>Games List:</h1>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        <Link to={`/games/${game.id}`} state={{ game }}>
                            <img src={game.imageUrl} alt={game.name} style={{ width: '100px', height: '100px' }} />
                            <strong>{game.name}</strong>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

