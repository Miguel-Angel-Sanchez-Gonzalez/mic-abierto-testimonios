import './App.css';
import Testimonio from './componentes/Testimonio.js'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>

      
        <h1>Leyendas del Freestyle</h1>
        <Testimonio 
        nombre ='Mauricio Hernández González'
        nombreRapero = 'aczino'
        pais='México'
        aka='ACZINO'
        rima='"Yo sí soy un engreído, un presumido, un crecido, sí un maldito mal nacido, pero hay algo que no pueden negar del Aczino: '
        punchline='¡que es el mejor maldito freestylero que se ha parido!"'
        imagen='aczino'
        />


        <Testimonio 
        nombre ='Valentín Oliva'
        nombreRapero = 'wosito'
        pais='Argentina'
        aka='WOS'
        rima='"En este campo de batalla, bro, no es complicado,
        la gente grita fuerte pero en el barrio están callados. '
        punchline='Porque la calle no perdona y se hace respetar,
        yo no sé si gané, pero sé que lo intenté de verdad."'
        imagen='wos'
        />


        <Testimonio 
        nombre ='Sergio Castro Gisbert'
        nombreRapero = 'chuty'
        pais='España'
        aka='CHUTY'
        rima='“Hablas de la droga, yo soy como la droga excelente, '
        punchline ='porque acabo contigo y soy adictivo para la gente”'
        imagen='chuty'
        />
      </div>
    </div>
  );
}

export default App;
