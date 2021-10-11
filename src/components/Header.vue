<template>

  <header class="cabecalho">
    <div class="logo">
      <img src="../assets/imagens/Logo.png" alt="">
    </div>
    <!--<div class="logo">
      <h1 id="nomeLogo">CETEEP <p id="nomeLogo2">Centro Técnico</p></h1> 
    </div>-->
    <div class="nav">
      <router-link to='/'>Home</router-link>
      <router-link to='/curso'>Curso</router-link>
      <router-link to='/escola'>Escola</router-link>
      <router-link to='/servicos'>Servicos</router-link>
     <!-- <ul>
          <li><a href="http:/">Home</a></li>
          <li><a href="http:/curso">Curso</a></li>
          <li><a href="http:/escola">Escola</a></li>
          <li><a href="http:/servicos">Serviços</a></li>
      </ul> -->
    </div>

    <!-- Menu responsivo -->
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
    </div>


  </header>

</template>

<script>
  export default {
      name: 'HomeComponent',
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
  font-size: 20px;
  font-weight: 500;
  position: absolute;

}

.nav ul, li{
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
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 20px 30px;
  width: 180px;
  height: 70px;
  background-color: rgb(33, 33, 242);
  box-shadow: 3px 3px 3px rgb(87, 86, 86);
  cursor: pointer;
}

#nomeLogo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 700;
  color: #fff;
}

#nomeLogo2 {
  font-size: 13px;
  color: #fff;
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