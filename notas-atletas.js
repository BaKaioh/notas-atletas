class Atleta {
  constructor(nome, notas) {
    this.nome = nome;
    this.notas = notas;
  }
  obterMedia() {
    let emOrdem = [];
    if (this.notas) {
      emOrdem = this.notas.sort(function (a, b) {
        return a - b;
      });
    }
    let notasFatiadas = emOrdem.slice(1, 4);

    let soma = notasFatiadas.reduce(function (contador, nota) {
      return contador + nota;
    });
    return soma / notasFatiadas.length;
    // let media = soma / notasFatiadas.length; // retorna a média (soma divida pelo total de notas[3 após o slice])
    // return media;
  }
  exibirDados() {
    return `Atleta: ${this.nome} 
Notas Obtidas: ${this.notas} 
Média Válida: ${this.obterMedia()}`;
  }
  adicionarAtleta(atleta) {
    this.atletas.push(atleta);
  }
}

const atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88],
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33],
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8],
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5],
  },
];

atletas.forEach(function (atleta) {
  let atletasObj = new Atleta(atleta.nome, atleta.notas);
  console.log(atletasObj.exibirDados());
});
// let osmar = new Atleta("Osmar Lopez", [9, 9, 10, 8, 10]); //teste
// osmar.exibirDados(); // OK - funcionando
// osmar.exibirDados();

// console.log(atletasNew);
