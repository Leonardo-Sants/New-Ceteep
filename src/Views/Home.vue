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
            <div class="imgCurso">
                <div>
                    <img id="imgAjuste" src="../assets/SOLDAGEM.jpg" alt="Solda e corte">
                    <h1 id="imgTitulo">Soldagem e Corte</h1>
                </div>
                <div>
                    <img id="imgAjuste" src="../assets/Qualidade.jpg" alt="Solda e corte">
                    <h1 id="imgTitulo">Controle de Qualidade</h1>
                </div>
                <div>
                    <img id="imgAjuste" src="../assets/INDUSTRIA.jpg" alt="Solda e corte">
                    <h1 id="imgTitulo">Indústria eTecnologia</h1>
                </div>
            </div>
        </section> 

        <section class="sectionServico">
              <div>
                <p>CETEEP Serviços</p>
            </div>
            <div class="imgCurso">
                <div>
                    <img id="imgAjuste" src="../assets/Laboratorio.jpg">
                    <h1 id="imgTitulo">Laboratório</h1>
                    <ul id="imgLista">
                        <li id="imgLista">Laboratório de ensaios Mecânico     </li>
                        <li id="imgLista">Laboratório de ensaio de Soldagem   </li>
                        <li id="imgLista">Laboratório de ensaios de END       </li>
                        <li id="imgLista">Laboratório de ensaio de Macrografia</li>
                    </ul>
                </div>
                <div>
                    <img id="imgAjuste" src="../assets/Documentos.jpg">
                    <h1 id="imgTitulo">Documentos</h1>
                     <ul id="imgLista">
                        <li id="imgLista">Laudos e Documentos técnicos</li>
                        <li id="imgLista">Desenvolvimentos de Procedimentos</li>
                        <li id="imgLista">Qualificação de Soldadores EPS/RQPS/RQS/IEIS</li>
                    </ul>
                </div>
                <div>
                    <img id="imgAjuste" src="../assets/Auditoria.jpg" alt="Solda e corte">
                    <h1 id="imgTitulo">Auditoria</h1>
                     <ul id="imgLista">
                        <li id="imgLista">Laboratório de ensaios Mecânico</li>
                        <li id="imgLista">Laboratório de ensaio de Soldagem</li>
                        <li id="imgLista">Laboratório de ensaios de END</li>
                        <li id="imgLista">Laboratório de ensaio de Macrografia</li>
                    </ul>
                </div>
            </div>
        </section> 

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
    width: 100%;
    height: 500px;
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
    align-items: center;
    justify-content: center;
    width: 100%;
}

#imgAjuste {
    display: flex;
    width: 250px;
    height: 250px;
    margin: 100px 30px 20px 30px;
    box-shadow:  3px 3px  1em rgb(87, 86, 86);
}

#imgTitulo {
    display: flex;
    justify-content: center;
    font-size: 1em;
    font-weight: 700;
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

