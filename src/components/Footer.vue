<template>

  <footer>
    <div class="rodape">
       <section class="sectionLogo">
            <div class="logo">
                <h1 id="nomeLogo">CETEEP <p id="nomeLogo2">Centro Técnico</p></h1>
            </div>
        </section>

        <div class="endereco">
          <h3>Endereço</h3>
          <p>Rua: Jacareí</p>
          <p>Bairro: Meia Lua</p>
          <p>Cidade: Jacareí</p>
        </div>

        <div class="contatos">
          <h3>Contatos</h3>
          <p class=" mb-2"><b-icon icon="telephone"></b-icon>  (12)996349547</p>
          <b-icon icon="instagram"></b-icon>
          <b-icon icon="Linkedin"></b-icon>
          <b-icon icon="facebook"></b-icon>
        </div>

    </div>
  </footer>

</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
}
.rodape {
  display: flex;
  width: 100%;
  height: 200px;
  background-color: blue;
}

.endereco {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 140px;
  width: 100%;
  color: #fff;
  font-size: 1.2em;
}

.contatos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 140px;
  width: 100%;
  color: #fff;
  font-size: 1.2em;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;

}

#nomeLogo {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 0px 0px 15px;
    font-size: 60px;
    font-weight: 700;
    color: #fff;
    margin: 30px;
    width: 300px;
    height: 120px;
    border: 3px solid #fff;
    background-color: rgb(33, 33, 242);
    box-shadow:  1px 1px  0.5em rgb(87, 86, 86);
}

#nomeLogo2 {
  font-size: 20px;
  color: #fff;
}
</style>
