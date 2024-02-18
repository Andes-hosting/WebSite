import minecraft from "../src/img/minecraft_logo.png"
import ark from "../src/img/ark_logo.png"
import palworld from "../src/img/palworld_logo.png"

const games = {
    minecraft: {
        logo:  <img src={minecraft} alt="Minecraft logo"/>,
        plans: [
            { name: 'BEDROCK', ram: "1 GB", price: "$2000", storage: 4, recomendedPlyers: 6 },
            { name: 'JAVA VANILLA', ram: "2 GB", price: "$4000", storage: 4, recomendedPlyers: 5 },
            { name: 'CON MODS', ram: "5 GB", price: "$9450", storage: 6, recomendedPlyers: 4 },
            { name: 'PERSONALIZADO', ram: '', price: '∞', storage: '∞', recomendedPlyers: '∞' },
        ]
    },

    ark: {
        logo: <img src={ark} alt="Ark logo"/>,
        plans: [
            { name: 'BRONCE', ram: "13 GB", price: "$19500", storage: 4, recomendedPlyers: 4 },
            { name: 'PLATA', ram: "15 GB", price: "$22900", storage: 8, recomendedPlyers: 10 },
            { name: 'ORO', ram: "20 GB", price: "$29100", storage: 10, recomendedPlyers: 19 },
            { name: 'PERSONALIZADO', ram: '', price: '∞', storage: '∞', recomendedPlyers: '∞' },
        ]
    },
    
    palworld: {
        logo: <img src={palworld} alt="Palworld logo"/>,
        plans: [
            { name: 'BRONCE', ram: "13 GB", price: "$13600", storage: 8, recomendedPlyers: 4 },
            { name: 'PLATA', ram: "15 GB", price: "$30400", storage: 8, recomendedPlyers: 10 },
            { name: 'ORO', ram: "20 GB", price: "$48800", storage: 12, recomendedPlyers: 16 },
            { name: 'PERSONALIZADO', ram: '', price: '∞', storage: '∞', recomendedPlyers: '∞' },
        ]
    },
}

export default games