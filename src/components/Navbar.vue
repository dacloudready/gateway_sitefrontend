<template>
    <div>
      <!-- Start: Navigation Clean -->
      <nav class="navbar navbar-light navbar-expand-md navigation-clean">
          <div class="container-fluid">
                <img src="images/logo_bestdeals.png">
                <button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1">
                  <span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navcol-1">
                    <ul class="nav navbar-nav ml-auto">
                        <li class="nav-item" role="presentation" v-for="(item, index) in navitems" :key="index" :class="{ 'dropdown':item.dropdown }">
                            <router-link :to="item.url" class="nav-link" :class="{'dropdown-toggle':item.dropdown}" :data-toggle=" item.dropdown ? toggle : null ">{{item.text}}</router-link>
                            <div class="dropdown-menu" role="menu" v-if="item.dropdown">
                                <router-link v-for="(menu, index) in item.dropdown_menu" :key="index" class="dropdown-item" role="presentation" :to="{ name: 'site', params: { id:  menu.url} }">{{menu.text}}</router-link>
                            </div>
                        </li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="https://www.facebook.com/Gateway-Online-Store-104579737992303/">GATEWAY STORE</a></li>
                    </ul>
                </div>
          </div>
      </nav>
      <!-- End: Navigation Clean -->
    </div>
</template>
<script>
export default {
    name: 'Navbar',
    props: {
        navitems: Array
    },
    data() {
        return{
            toggle: 'dropdown'
        }
    }

}
</script>