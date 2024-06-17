import React, { useState } from 'react';

const FormularioIMC = () => {
const [altura, setAltura] = useState('');
const [peso, setPeso] = useState('');
const [resultadoIMC, setResultadoIMC] = useState(null);

const calcularIMC = () => {
    const alturaMetros = altura / 100; // Converter altura para metros
    const imc = peso / (alturaMetros * alturaMetros);
    setResultadoIMC(imc.toFixed(2)); // Arredondar IMC para duas casas decimais
};

const classificarIMC = () => {
    if (!resultadoIMC) return '';

    if (resultadoIMC < 18.5) {
    return 'Magreza';
    } else if (resultadoIMC < 24.9) {
    return 'Normal';
    } else if (resultadoIMC < 29.9) {
    return 'Sobrepeso';
    } else if (resultadoIMC < 34.9) {
    return 'Obesidade Grau I';
    } else if (resultadoIMC < 39.9) {
    return 'Obesidade Grau II';
    } else {
    return 'Obesidade Grau III ou Mórbida';
    }
};

return (
    <div>
    <h2>Calculadora de IMC</h2>
    <form>
        <label>
        Altura (cm):
        <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
        />
        </label>
        <br />
        <label>
        Peso (kg):
        <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
        />
        </label>
        <br />
        <button type="button" onClick={calcularIMC}>
        Calcular IMC
        </button>
    </form>
    {resultadoIMC && (
        <div>
        <p>Seu IMC é: {resultadoIMC}</p>
        <p>Classificação: {classificarIMC()}</p>
        </div>
    )}
    </div>
);
};

export default FormularioIMC;
