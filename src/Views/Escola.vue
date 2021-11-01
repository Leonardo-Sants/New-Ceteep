<template>
    <main>
         <div class="imgBanner">
            <img src= "../assets/Cursos.jpg" >
        </div>

        <section>
            <div class="texto">
                <p class="about">A CETEEP atua no mercado desde 2014 com o, Compromisso em aumentar a satisfação 
                    dos nossos clientes, incentivar a pesquisa em desenvolvimento tecnológico. Desenvolver 
                    programas permanentes de educação continua, atendimento aos requisitos aplicáveis 
                    aos nossos serviços, promover melhoria contínua no sistema de gestão da qualidade.
                </p>
            </div>
        </section>
    </main>

  
</template>

<script>
export default {
    
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
    height: 630px;
}

.texto {
display: flex;
justify-content: flex-end;
}

.about {
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;
    font-size: 1.5em;
    width: 50%;
    height: 500px;
}

</style>