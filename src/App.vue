<template>
  <div id="app">
    <header class="site-navbar py-3" role="banner">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-6 col-md-2" data-aos="fade-down">
            <h1 class="mb-0"><router-link to="/" class="text-black h2 mb-0">Ruth Prieto Arenas</router-link></h1>
          </div>
          <div class="col-10 col-md-10 d-none d-xl-block" data-aos="fade-down">
            <nav class="site-navigation position-relative text-right" role="navigation">

              <ul class="site-menu js-clone-nav mx-auto d-none d-lg-block">
                <li class="active">
                  <router-link to="/">Home</router-link>
                </li>
                <li class="has-children">
                  <a href="">Projects</a>
                  <ul class="dropdown">
                    <li class="has-children">
                      <a href="">Safe Heaven</a>
                      <ul class="dropdown">
                        <li><router-link to="/projects/safe_heaven">Blue - Delia</router-link></li>
                        <li><router-link to="/projects/safe_heaven">Yellow - Juanita</router-link></li>
                        <li><router-link to="/projects/safe_heaven">Green - Sabel</router-link></li>
                        <li><router-link to="/projects/safe_heaven">Purple - Maribel</router-link></li>
                      </ul>
                    </li>
                    <li><router-link to="/projects/panteras_negras">Panteras Negras</router-link></li>
                    <li><router-link to="/projects/moments_of_suspension">Moments Of Suspension</router-link></li>
                  </ul>
                </li>
                <li class="has-children">
                  <a href="">Commissioned Work</a>
                  <ul class="dropdown">
                    <li><router-link to="commissioned/dior">Dior</router-link></li>
                  </ul>
                </li>
                <li><a href="#">Exhibitions</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>

          <!--          <div class="col-6 col-xl-2 text-right" data-aos="fade-down">-->
          <!--            <div class="d-none d-xl-inline-block">-->
          <!--              <ul class="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0" data-class="social">-->
          <!--                <li>-->
          <!--                  <a href="#" class="pl-0 pr-3"><span class="icon-facebook"></span></a>-->
          <!--                </li>-->
          <!--                <li>-->
          <!--                  <a href="#" class="pl-3 pr-3"><span class="icon-twitter"></span></a>-->
          <!--                </li>-->
          <!--                <li>-->
          <!--                  <a href="#" class="pl-3 pr-3"><span class="icon-instagram"></span></a>-->
          <!--                </li>-->
          <!--                <li>-->
          <!--                  <a href="#" class="pl-3 pr-3"><span class="icon-youtube-play"></span></a>-->
          <!--                </li>-->
          <!--              </ul>-->
          <!--            </div>-->

          <!--            <div class="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style="position: relative; top: 3px;"><a href="#" class="site-menu-toggle js-menu-toggle text-black"><span class="icon-menu h3"></span></a></div>-->

          <!--          </div>-->
        </div>
      </div>

    </header>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
