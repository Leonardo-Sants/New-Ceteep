<template>

  <header class="cabecalho">
    <div class="logo">
        <h1 id="nomeLogo">CETEEP <p id="nomeLogo2">Centro Técnico</p></h1>
    </div>     

    <div class="nav">
      <router-link class="link" to='/'>Home</router-link>
      <router-link class="link" to='/curso'>Curso</router-link>
      <router-link class="link" to='/escola'>Escola</router-link>
      <router-link class="link" to='/servicos'>Servicos</router-link>
    </div>

    <!-- Menu responsivo -->
     <!--
    <div class="menu">
      <b-button v-b-toggle.sidebar-no-header variant="outline-light"><b-icon icon="menu-button-wide-fill" aria-hidden="true"></b-icon></b-button>
      <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
        <template #default="{ hide }">
          <div class="p-3">
            <h4 id="sidebar-no-header-title">Custom header sidebar</h4>
            <ul class="menuSider">
              <li><a href="http:/">Home</a></li>
              <li><a href="http:/">Curso</a></li>
              <li><a href="http:/">Escola</a></li>
              <li><a href="http:/">Serviços</a></li>
            </ul>
            <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
          </div>
        </template>
      </b-sidebar>
    </div> -->


  </header>

</template>

<script>
  export default {
      name: 'Header',
    methods: {
        openMenu() {
          let menu = document.querySelector('.menuDrop');
          menu.style.display = ('block');
        },

         closeMenu() {
          let menu = document.querySelector('.menuDrop');
          menu.style.display = ('none');
        }
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

.logo {
  display: flex;
  width: 100%;
}

#nomeLogo {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    font-size: 2.5em;
    margin: 10px 20px;
    width: 180px;
    height: 65px;
    border: 1px solid #fff;
    background-color: rgb(33, 33, 242);
}

#nomeLogo2 {
  font-size: 0.3em;
  color: #fff;
}

.cabecalho {
  display: flex;
  width: 100%;
  height: 200px;
  z-index: 3;
  position:absolute;
}

.nav {
  display: flex;
  justify-content: flex-end;
  width: 90%;
  margin: 15px;
  color: #fff;
  font-size: 1.5em;
  font-weight: 300;
  position: absolute;
}

.link{
  display: flex;
  margin: 5px 25px;
}

a {
  color: #fff;
}

li:hover {
  color: black;
  cursor: pointer;  
}
img {
  width: 250px;
  height: 250px;
  margin-top: 40px;
}

.menu {
  display: none;
  align-items: center;
  justify-content: flex-end;
  margin: 25px;
  width: 100%;
}




@media (max-width: 720px) {
  .nav {
    display: none;
  }
  .menu {
    display: flex;
  }
  
}
</style>