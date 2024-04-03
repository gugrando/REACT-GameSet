/* eslint-disable react/jsx-key */
import './App.css'
import Header from './components/Header'
import Section from './components/Section'
import ListItems from './components/ListItem'

const gameListData = [
  {
    href : "https://www.twitch.tv/directory/game/League%20of%20Legends",
    src : "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt : "Imagem do jogo League of Legends",
  },
  {
    href : "https://www.twitch.tv/directory/game/VALORANT",
    src : "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt : "Imagem do jogo Valorant",
  },
  {
    href : "https://www.twitch.tv/directory/game/Minecraft",
    src : "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt : "Imagem do jogo Minecraft",
  },
  {
    href : "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    src : "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt : "Imagem do jogo TFT",
  },
]
const channelListData = [
  { 
    href : "https://www.twitch.tv/maykbrito",
    src : "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt : "Imagem de Mayk Brito" ,
  },
  {
    href : "https://www.twitch.tv/alanzoka",
    src : "https://static-cdn.jtvnw.net/jtv_user_pictures/64d44235-1dee-4bca-95da-bee1ee96eea3-profile_image-300x300.png",
    alt : "Imagem de Alanzoka" ,
  },
  {
    href : "https://www.twitch.tv/cellbit",
    src : "https://static-cdn.jtvnw.net/jtv_user_pictures/0595cdd0-65a7-4fa3-996d-323cf3a54be1-profile_image-300x300.png",
    alt : "Imagem de Cellbit" , 
  },
]

function App() {
  return (
    <>
    <Header /> 
    <main>
      <Section className="games-list" title="Meus Jogos" subtitle="Os games que eu mais curto jogar">
        {
          gameListData.map((item)=>{
            return(
              <ListItems
                href={item.href}
                src={item.src}
                alt={item.alt}
              />
            )
          })
        }
      </Section>

      <Section className="channel-list" title="Canais e Streamers" subtitle="Lista de canais e transmissões que não perco">
        {
          channelListData.map((item)=>{
            return(
              <ListItems
                href={item.href}
                src={item.src}
                alt={item.alt}
              />  
            )
          })
        }
      </Section>
    </main>
    </>
  )
}

export default App