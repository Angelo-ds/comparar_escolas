

/* 🚨NÃO ALTERAR A CLASSE 🚨 */

class Senai {
  constructor(codigo, cidade, anoConstrucao, qtdeCursos) {
    this.codigo = codigo;
    this.cidade = cidade;
    this.anoConstrucao = anoConstrucao;
    this.qtdeCursos = qtdeCursos;

    this.idade = new Date().getFullYear() - anoConstrucao;
    this.statusFuncionamento = false;
  }

  abrirEscola() {
    if (this.statusFuncionamento == false){
      this.statusFuncionamento = true;
      console.log(`\n== [SISTEMA] O SENAI ${this.cidade} agora está ABERTO. Bem-vindos! ==`);
    }
  } 

  fecharEscola() {
    if (this.statusFuncionamento == true){
      this.statusFuncionamento = false;
      console.log(`\n== [SISTEMA] O SENAI ${this.cidade} agora está Fechado. Até amanhã! ==`);
      }
   

  }
}
let UnidadeA;
let UnidadeB;
/* 🚨NÃO ALTERAR A CLASSE 🚨 */

/* ===== OBTER ELEMENTOS ===== */
const cidadeA = document.querySelector('.unidadeA__cidade')
const codigoA =  document.querySelector('.unidadeA__codigo')

const anoA =  document.querySelector('.unidadeA__ano')
const cursosA = document.querySelector('.unidadeA__cursos')

const cidadeB = document.querySelector('.unidadeB__cidade')
const codigoB =  document.querySelector('.unidadeB__codigo')
const anoB =  document.querySelector('.unidadeB__ano')
const cursosB = document.querySelector('.unidadeB__cursos')


const botao_instanciarA = document.querySelector('.unidadeA__instanciar')
const botao_instanciarB = document.querySelector('.unidadeB__instanciar')

const botao_fecharA = document.querySelector('.unidadeA__fechar')

const botao_fecharB = document.querySelector('.unidadeB__fechar')
const botao_abrirB = document.querySelector('.UnidadeB__abrir')
const botao_abrirA = document.querySelector('.UnidadeA__abrir')
const botao_reset =document.querySelector('.sistema__reset')
const botao_compara =document.querySelector('.sistema__comparar')

const mensagemB = document.querySelector('.unidadeB__mensagem')
const mensagemA = document.querySelector('.unidadeA__mensagem')

const veredito = document.querySelector('.relatorio__veredito')
/* ===== FUNÇÃO DE VALIDAÇÃO ===== */
if (cidadeA === Null || codigoA === Null || cursosA == Null || anoA == Null )
    mensagemA.textContent= 'Preencha todos os campos para criar a escola.';

if (cidadeB === Null || codigoB === Null || cursosB == Null || anoB == Null )
  mensagemB.textContent='Preencha todos os campos para criar a escola.';

/* ===== INSTANCIAR ESCOLA A ===== */

botao_instanciarA.addEventListener('click', () => {
    UnidadeA = new Senai(cidadeA.value, codigoA.value,anoA.value,cursosA.value);
    console.log(UnidadeA)
});

/* ===== INSTANCIAR ESCOLA B ===== */

botao_instanciarB.addEventListener('click', () => {
    UnidadeB = new Senai(cidadeB.value, codigoB.value,anoB.value,cursosB.value);
    console.log(UnidadeB)
});
/* ===== ABRIR ESCOLA ===== */
// UnidadeA.abrirEscola()
// UnidadeB.abrirEscola()
// botao_abrirA.addEventListener('click', () => {
//   mensagemA.textContent(`Aberta: Bem-vindos ao SENAI ${this.cidadeA} `)


// });

// botao_abrirB.addEventListener('click', () => {
  

// });
/* ===== FECHAR ESCOLA ===== */
// UnidadeA.fecharEscola()
// UnidadeB.fecharEscola()

/* ===== RELATÓRIO DE COMPARAÇÃO ===== */
 const compararEscolas = (UnidadeA,UnidadeB) =>{
   console.log(`> Comparando oferta de cursos: ${UnidadeA.cidade} vs ${UnidadeB.cidade} ...`)

   if (UnidadeA.qtdeCursos > UnidadeB.qtdeCursos){
       veredito.textContent= `O SENAI ${UnidadeA.cidade} lidera com ${UnidadeA.cursosA}`;

   } else if (UnidadeB.qtdeCursos > UnidadeA.qtdeCursos){
      veredito.textContent= `O SENAI ${UnidadeB.cidade} lidera com ${UnidadeB.cursosB}`;
   }else{
      veredito.textContent= `Ambas as escolas são equivalentes. ${UnidadeB.cidade} com  ${UnidadeB.cursosB}\n ${UnidadeA.cidade} com ${UnidadeB.cursosA}`;
   }
   console.log(`Status: ${UnidadeA.cidade} (${UnidadeA.qtdeCursos}) | ${UnidadeB.cidade} (${UnidadeB.qtdeCursos}) == \n`);
 }

botao_compara.addEventListener('click', () => compararEscolas(UnidadeA, UnidadeB));





/* ===== NOVA CONSULTA ===== */
// function mostrarErro() {
//     resultado.style.display = 'flex';
//     resultado.style.background = 'red';
//     resultado.innerHTML = `
//     <ul>
//         <li>Erro</li>
//         <li>Insira um valor válido para os dois campos.</li>
//     </ul>
//     `;

//     verificaV1.focus();
// }

// formulario.reset();
// inputPeso.focus();

