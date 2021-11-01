<template>
    <main>
        <div>
        <Carrossel/>
        </div>
        <section class="sectionLogo">
            <div class="logo">
                <h1 id="nomeLogo">CETEEP <p id="nomeLogo2">Centro Técnico Especializado Profissionalizante</p></h1>
            </div>
        </section>

        <section class="sectionCurso">
            <div>
                <p>Cursos e treinamentos presenciais e (EAD)</p>
            </div>
            <div class="paragrafo">
                <h2 id="paragrafoH2">Venha alavancar sua carreira com a CETEEP treinamentos, e saia na frente 
                    com a sua certificação no mesmo dia.
                </h2>
            </div>
            <br>
            <br>
        </section> 
    <!-- ********************  Seção das Imagens do curso *************************  -->
            <div class="imgCurso">
                <div class="detalhes">
                    <p id="imgTitulo1">Você sabe o que é soldagem por fricção?</p>
                    <img id="imgAjuste" src="../assets/SoldaFricção.jpg" alt="Solda e corte" >
                    <p id="imgTitulo">Venha conhecer nossa mais nova técnica de soldagem</p>
                    <button>Saiba mais</button>
                </div>
                  <div class="detalhes">
                    <p id="imgTitulo1">Quer alcançar aquela vaga na área de qualidade?</p>
                    <img id="imgAjuste" src="../assets/ControleQualidade.jpeg" alt="Solda e corte" >
                    <p id="imgTitulo">Venha conhecer nossa mais nova técnica de soldagem </p>
                    <button>Saiba mais</button>    
                </div>
               
                 <div class="detalhes">
                    <p id="imgTitulo1">Você está preparado para o futuro?</p>
                    <img id="imgAjuste" src="../assets/Tecnologia4.0.jpg" alt="Solda e corte" >
                    <p id="imgTitulo">Venha conhecer nossa mais nova técnica de soldagem </p>
                    <button>Saiba mais</button>
                </div>
            </div>
    <!-- ********************  Seção das Imagens do Serviço *************************  -->
        <section class="sectionCurso">
            <div>
                <p>Prestação de serviços variáveis</p>
            </div>
            <div class="paragrafo">
                <h2 id="paragrafoH2"> Precisando de algum serviço especial, temos o melhor para 
                    você e sua empresa, click abaixo e conheça mais... </h2>
            </div>
            <br>
            <br>
        </section> 

            <div class="imgCurso">
                <div class="detalhes">
                    <p id="imgTitulo1">Auditoria</p>
                    <img id="imgAjuste" src="../assets/Auditoria.jpg" alt="Solda e corte" >
                    <p id="imgTitulo">Venha conhecer nossa mais nova técnica de soldagem</p>
                    <button>Saiba mais</button>
                </div>
                  <div class="detalhes">
                    <p id="imgTitulo1">Documentação Técnica</p>
                    <img id="imgAjuste" src="../assets/Documentos.jpg" alt="Solda e corte" >
                    <p id="imgTitulo">Venha conhecer nossa mais nova técnica de soldagem </p>
                    <button>Saiba mais</button>    
                </div>
               
                 <div class="detalhes">
                    <p id="imgTitulo1">Ensaios</p>
                    <img id="imgAjuste" src="../assets/Laboratorio.jpg" alt="Solda e corte" >
                    <p id="imgTitulo">Venha conhecer nossa mais nova técnica de soldagem </p>
                    <button>Saiba mais</button>
                </div>
            </div>
        

      
    </main>
</template>

<script>
import Carrossel from "../components/CarrosselComponent.vue"
export default {
    name: 'Home',
    components:{
       Carrossel
    } 
        
}
</script>

<style scoped>

* {
  text-decoration: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  background-color: #fff;
  width: 100%;
  height: 570px;
}

#carrossel {
  color: #fff;
  font-size: 4em;
  font-weight: 700;
}

section {
    display: flex;
    flex-direction: column;
}

.sectionLogo {
    display: flex;
    justify-items: center;   
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 100px;

}

#nomeLogo {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 0px 0px 15px;
    font-size: 60px;
    font-weight: 700;
    color: #fff;
    margin: 10px;
    width: 500px;
    height: 130px;
    border: 3px solid #fff;
    background-color: rgb(33, 33, 242);
    box-shadow:  1px 1px  0.5em rgb(87, 86, 86);
}

#nomeLogo2 {
  font-size: 20px;
  color: #fff;
}

.paragrafo {
    display: flex;
    justify-content: center;
    color: #000;
    width: 100%;
    margin-top: 20px;
}

.sectionCurso {
    display: flex;
    background-color: aliceblue;
    width: 100%;
    height: 250px;
    margin-top: 70px;
}

.sectionCurso p {
    display: flex;
    justify-content: center;
    font-size: 3em;
    font-weight: 700;
}

#paragrafoH2 {
    display: flex;
    justify-content: center;
    width: 800px;
    font-weight: 300;
}

.imgCurso {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    background-color: aliceblue;

}

.detalhes {
    background-color: rgba(221, 218, 218, 0.5);
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    width: 30%;
    height: 500px;
    width: 20%;
}

#imgAjuste {
    display: flex;
    padding: 2px;
    border-radius: 50%;
    width: 230px;
    height: 230px;
    margin: 30px 0px;
    box-shadow:  1px 1px  0.5em rgb(87, 86, 86);
}

#imgTitulo1 {
    display: flex;
    font-size: 1.2em;
    margin: 10px 1px 10px 5px;
    font-weight: 700;
}

#imgTitulo {
    display: flex;
    font-size: 1em;
    margin: 10px 20px ;
    font-weight: 700;
}

button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(0, 59, 252);
    color: lemonchiffon;
    font-size: 0.7em;
    width: 100px;
}

#imgLista {
    display: flex;
    flex-direction: column;
    align-items: initial;
    font-size: 0.7em;
    margin: 5px 60px;
}

.sectionServico {
    display: flex;
    width: 100%;
    height: 600px;
    margin-top: 100px;
}

.sectionServico p {
    display: flex;
    justify-content: center;
    font-size: 3em;
    font-weight: 500;
}

/* Responsivo do Site*/

@media (max-width: 720px){
    img {
    width: 100%;
    height: 280px;
    }

    #carrossel {
    color: #fff;
    font-size: 2em;
    font-weight: 700;
    }

    .sectionCurso p {
        display: flex;
        justify-content: center;
        font-size: 1.5em;
        font-weight: 700;
    }

    #paragrafoH2 {
        display: flex;
        justify-content: center;
        font-size: 1em;
        width: 950px;
        font-weight: 300;
    }
    .imgCurso {
        flex-direction: column;
    }

    #imgAjuste {
        display: flex;
        align-items: center;
        width: 220px;
        height: 150px;
        margin: 50px 40px 20px 20px;
        box-shadow:  3px 3px  1em rgb(87, 86, 86);
    }

    .sectionServico {
        display: flex;
        width: 100%;
        height: 100%;
        margin-top: 600px;
    }

    .sectionServico p {
        display: flex;
        justify-content: center;
        margin-top: 75px;
        font-size: 2em;
        font-weight: 500;
    }

   #imgTitulo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        font-size: 1em;
        font-weight: 700;
    }

    #imgLista {
        display: flex;
        align-items: center;
        font-size: 0.8em;
        margin: 3px;
        font-weight: 500;
        color: rgb(17, 73, 119);
    }
}
</style>

