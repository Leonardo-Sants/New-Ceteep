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
          <p>Telefone: (12)996349547</p>
        </div>

        <div class="contatos">
          <h3>Contatos</h3>
          <div class="icons">
          <b-icon icon="instagram"></b-icon>
          <b-icon icon="Linkedin"></b-icon>
          <b-icon icon="facebook"></b-icon>
          <b-icon icon="envelope"></b-icon>
          </div>
        </div>

        <div class="create">
          <p>Create by <a href="https://br.linkedin.com/in/leonardo-dos-santos-27a029193">Léo Santos</a></p>
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
  margin-top: 10px;
  background-color: blue;
}

.endereco {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1px 100px;
  width: 50%;
  color: #fff;
  font-size: 1em;
}

.contatos {
  display: flex;
  flex-direction: column;
  margin: 40px 100px;
  width: 50%;
  color: #fff;
  font-size: 1em;
}

.icons {
  display: flex;
  margin: 10px 0px;
}

.b-icon {
  margin: 5px;
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

.create {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  color: #fff;
  width: 50%;
  margin-top: 160px;
}

</style>
