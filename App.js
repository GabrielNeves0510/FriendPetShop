import React, { useState } from 'react';

import './App.css';

function App() {
  document.title='FriendPetShop';
  const [cachorrosPequenos, setCachorrosPequenos] = useState('0');
  const [cachorrosGrandes, setCachorrosGrandes] = useState('0');
  
  const mudarValoresPequenos = (event) => {
    setCachorrosPequenos(parseInt(event.target.value));
  };
  
  const mudarValorGrandes = (event) => {
    setCachorrosGrandes(parseInt(event.target.value));
  };
  const [fimDeSemana, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!fimDeSemana);
  };
  const [melhorPetshop, setMelhorPetshop] = useState('');

  function calculo() {
    /*Meu Canino Feliz */
    let ValorMeuCaninoFelizGrandes = cachorrosGrandes * 40;
    let ValorMeuCaninoFelizPequenos = cachorrosPequenos * 20;
    let ValorTotalMeuCaninoFeliz = ValorMeuCaninoFelizGrandes + ValorMeuCaninoFelizPequenos;
  
    /* Vai Rex*/
    let ValorVaiRexGrandes = cachorrosGrandes * 50;
    let ValorVaiRexPequenos = cachorrosPequenos * 15;
    
    /* ChowChangas */
    const ValorChowChangasGrandes = cachorrosGrandes * 45;
    const ValorChowChangasPequenos = cachorrosPequenos * 30;
    const ValorTotalChowChangas = ValorChowChangasGrandes + ValorChowChangasPequenos;
    
    if (fimDeSemana) {
      ValorTotalMeuCaninoFeliz *= 1.2;
      ValorVaiRexGrandes = cachorrosGrandes*55;
      ValorVaiRexPequenos =cachorrosPequenos*20;
    }
    const ValorTotalVaiRex= ValorVaiRexGrandes+ValorVaiRexPequenos;

    const distanciaMeuCaninoFeliz = 2;
    const distanciaVaiRex = 1.7;
    const distanciaChowChangas = 0.8;

    if (ValorTotalMeuCaninoFeliz < ValorTotalVaiRex && ValorTotalMeuCaninoFeliz < ValorTotalChowChangas) {
      setMelhorPetshop(`Meu Canino Feliz (Preço: R$${ValorTotalMeuCaninoFeliz},00)`);
    } else if (ValorTotalVaiRex < ValorTotalMeuCaninoFeliz && ValorTotalVaiRex < ValorTotalChowChangas) {
      setMelhorPetshop(`Vai Rex (Preço: R$${ValorTotalVaiRex},00)`);
    } else {
      setMelhorPetshop(`ChowChangas (Preço: R$${ValorTotalChowChangas},00)`);
    }
  };
    

  return (
    <div className='App'>
      <div id='corpo'>
        <div className='titulo'>
        <h2>FriendPetShop</h2>
        </div>
        <div className='elementos'>
      <div id='FimDeSemana'>
        <ul>
          <li>
       <p> Será em um final de semana?</p>
       </li>  
       </ul>
      <label className="custom-checkbox">
        <input
          type="checkbox"
          checked={fimDeSemana}
          onChange={handleCheckboxChange}
          />
        <span className="checkmark"></span>
        </label>
    </div>

        <div className='cachorrosPequenos'>
        <ul>
          <li>
        <label htmlFor="pequenos">Cachorros Pequenos:</label>
        
        <input
          type="number"
          id="pequenos"
          name="pequenos"
          value={cachorrosPequenos}
          onChange={mudarValoresPequenos}
          />
          </li>
        </ul>
          </div>
          
          <div className='cachorrosGrandes'>
          <ul>
          <li>
        <label htmlFor="grandes">Cachorros Grandes:</label>
        <input
          type="number"
          id="grandes"
          name="grandes"
          value={cachorrosGrandes}
          onChange={mudarValorGrandes}
        />
        </li>
        </ul>
        </div>
        <button className="button" role="button" onClick={calculo}>Calcular</button>   
        {melhorPetshop && <p>Melhor petshop: {melhorPetshop}</p>}
        </div>
           </div>
      </div>
  );
}

export default App;
