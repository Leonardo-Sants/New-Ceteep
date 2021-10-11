<template>
    <main>
        <div class="imgBanner">
            <img src= "../assets/Cursos.jpg" >
        </div>
        <!-- Logo da escola -->
        <section class="sectionLogo">
            <div class="logo">
                <h1 id="nomeLogo">CETEEP <p id="nomeLogo2">Centro Técnico Especializado Profissionalizante</p></h1>
            </div>
        </section>

        <!-- Descrição do curso -->
        <section class="sectionCurso">
            <div>
                <p>Cursos e treinamentos presenciais e (EAD)</p>
            </div>
            <div class="paragrafo">
                <h2 id="paragrafoH2">Venha alavancar sua carreira com a CETEEP treinamentos, e saia na frente 
                    com a sua certificação no mesmo dia.
                </h2>
            </div>
        </section>

        <!-- Imagens e descrições do curso -->
        <section class="DadosCurso">
            <div class="imgCurso">
                <div id="sombra">
                <img id="imgAjuste" src="../assets/SOLDAGEM.jpg" alt="Solda e corte">
                </div>
                <div id="imgTitulo">
                    <h1>Soldagem e Corte</h1>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Soldagem Por Fricção</ul>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Soldador na  Indústria 4.0</ul>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Soldador  TIG em Inox O.D</ul>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Soldador Eletrodo Revestido</ul>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Soldador Mig/Mag/Arame Tubular</ul>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Soldador de Manutenção Industrial</ul>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Soldador de Brasagem</ul>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Corte Plasma e Oxicorte</ul>
                </div>
            </div>
        </section>

        <section class="DadosCurso">
            <div class="imgCurso">
                <div id="sombra">
                <img id="imgAjuste" src="../assets/INDUSTRIA.jpg" alt="Solda e corte">
                </div>
                <div id="imgTitulo">
                    <h1>Indústria e Tecnologia</h1>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Automação Industrial</ul>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Instrumentista Industrial</ul>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Comandos Elétricos</ul>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Eletricista de Manutenção</ul>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Rebobinamento motores Elétricos</ul>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Mecânico de Manutenção Industrial</ul>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Mecânico Transportadores</ul>
                </div>
            </div>
        </section>

         <section class="DadosCurso">
            <div class="imgCurso">
                <div id="sombra">
                <img id="imgAjuste" src="../assets/Qualidade.jpg" alt="Solda e corte">
                </div>
                <div id="imgTitulo">
                    <h1>Controle de Qualidade</h1>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Macrografia Ensaio Visual</ul>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Inspetor de Fabricação Mecânicas</ul>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Inspeção visual de Corrosão em Equipamentos</ul>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Medição Espessura por Ultrassom</ul>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Inspetor de Vídeoscopia-Industrial</ul>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Inspetor de Líquidos Penetrantes</ul>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Inspetor de Metrologia</ul>
                </div>
            </div>
        </section>

        <section class="DadosCurso">            
                <div class="imgCurso">
                    <div id="sombra">
                    <img id="imgAjuste" src="../assets/INDUSTRIA.jpg" alt="Solda e corte">
                    </div>
                <div id="imgTitulo">
                    <h1>Normas Internacionais</h1>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Inglês Técnico Instrumental</ul>
                    <ul id="LinkCurso"><link rel="stylesheet" href=""> NBR/ISO 14731 Coordenação em Soldagem Tarefas e Responsabilidade</ul>
                    <ul id="LinkCurso"><link rel="stylesheet" href=""> NBR/ISO 3834 Requisitos de Qualidade para Soldagem por fusão de Materiais</ul>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Certificação NBR ISO 9712 De END</ul>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Certificação SCWI -  Sênior certified Welding do Sistema da AWS</ul>
                    <ul id="LinkCurso"><link rel="stylesheet" href="">Especificação de Consumíveis AWS</ul>
                </div>
                </div>
        </section>

    </main>
</template>

<script>
export default {
    name: 'Curso',        
}
</script>

<style scoped>

* {
  text-decoration: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.imgBanner, img {
    width: 100%;
    height: 480px;
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
  margin-top: 150px;

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
    height: 200px;
    margin-top: 30px;
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

.DadosCurso {
    display: flex;
}

.imgCurso {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 30px;
}

#imgAjuste {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 210px;
    margin: 50px;
    box-shadow: 3px 5px 1em rgb(87, 86, 86);
    border-radius: 20px;
}
h1 {
    margin:5px 50px;
}

#imgTitulo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1em;
    font-weight: 700;
    margin: 50px 10px 50px 200px;
    width: 600px;
    height: 280px;
    box-shadow:  3px 3px  0.5em rgb(87, 86, 86);
    border-radius: 20px;
}

#LinkCurso {
    display: flex;
    flex-direction: column;
    align-items: initial;
    color: blue;
    font-size: 0.9em;
    font-weight: 700;
    margin: 3px 50px;
}

#sombra {
    display: flex;
    align-items: baseline;
    width: 390px;
    height: 250px;
    background-color: rgba(0, 0, 0, 0.72);
    margin: 10px 50px;
    border-radius: 20px;
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

