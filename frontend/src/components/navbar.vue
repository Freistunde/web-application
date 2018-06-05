<template>
  <b-navbar toggleable="md" type="dark" class="fs-bg">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">
      <img src="./../assets/Freistunde_Icon.svg" height="30px" alt="BV">
      Freistunde
      </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="#header">Suche</b-nav-item>
        <b-nav-item href="#getstarted">Die Idee</b-nav-item>
        <b-nav-item href="#categories">Kategorien</b-nav-item>
        <b-nav-item href="#aboutus">Über uns</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>Mein Profil</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {

    }
  }
};
</script>

<style lang="scss">
.fs-bg {
  background: #005b96;
}
</style>
