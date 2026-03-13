

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

/* 🚨NÃO ALTERAR A CLASSE 🚨 */



/* SUGESTÃO DE LÓGICA PARA O DESENVOLVIMENTO */



/* ===== OBTER ELEMENTOS ===== */
const cidadeA = document.querySelectorAll('unidadeA__cidade')
const codigoA =  document.getElementsByClassName('unidadeA__codigo')
const anoA =  document.getElementsByClassName('unidadeA__ano')
const cursosA = document.getElementById('unidadeA__cursos')

const cidadeB = document.getElementsByClassName('unidadeB__cidade')
const codigoB =  document.getElementsByClassName('unidadeB__codigo')
const anoB =  document.getElementsByClassName('unidadeB__ano')
const cursosB = document.getElementById('unidadeB__cursos')

console.log(cursosB)
// const botao_instanciarA = document.getElementsByClassName('unidadeA__instanciar').addEventListener('click',)
// const botao_abrirA = document.getElementsByClassName('UnidadeA__abrir').addEventListener('click',)
// const botao_feharA = document.getElementsByClassName('unidadeA__fechar').addEventListener('click',)


// const botao_instanciarB = document.getElementsByClassName('unidadeB__instanciar').addEventListener('click',)
// const botao_abrirB = document.getElementsByClassName('UnidadeB__abrir').addEventListener('click',)
// const botao_feharB = document.getElementsByClassName('unidadeB__fechar').addEventListener('click',)

// const botao_reset =document.getElementsByClassName('sistema__reset').addEventListener('click',)
// const botao_compara =document.getElementsByClassName('sistema__comparar').addEventListener('click',)
/* ===== FUNÇÃO DE VALIDAÇÃO ===== */


/* ===== INSTANCIAR ESCOLA A ===== */
const UnidadeA = new Senai(cidadeA,codigoA,anoA,cursosA)

/* ===== INSTANCIAR ESCOLA B ===== */
const UnidadeB = new Senai(cidadeB,codigoB,anoB,cursosB)

/* ===== ABRIR ESCOLA ===== */

UnidadeA.abrirEscola()
UnidadeB.abrirEscola()
/* ===== FECHAR ESCOLA ===== */
UnidadeA.fecharEscola()
UnidadeB.fecharEscola()

/* ===== RELATÓRIO DE COMPARAÇÃO ===== */
 const compararEscolas = (UnidadeA,UnidadeB) =>{
   console.log(`> Comparando oferta de cursos: ${UnidadeA.cidade} vs ${UnidadeB.cidade} ...`)

   if (UnidadeA.qtdeCursos > UnidadeB.qtdeCursos){
       console.log(`Resultado: O SENAI ${UnidadeA.cidade} possui mais cursos`);

   } else if (UnidadeB.qtdeCursos > UnidadeA.qtdeCursos){
       console.log(`Resultado: O SENAI ${escolaB.cidade} possui mais cursos`);
   }else{
       console.log(`Resultado: Todas as unidades possuem a mesma quantidade de cursos.`);
   }
   console.log(`Status: ${UnidadeA.cidade} (${UnidadeA.qtdeCursos}) | ${UnidadeB.cidade} (${UnidadeB.qtdeCursos}) == \n`);
 }

compararEscolas(UnidadeA,UnidadeB);

/* ===== NOVA CONSULTA ===== */


