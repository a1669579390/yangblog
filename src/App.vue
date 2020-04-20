<template>
  <div id="app">
    <vue-particles
        color="#ccc"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#000"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
      >
      </vue-particles>
    <router-view/>
  </div>
</template>

<script>

export default {
  data(){
    return{
    }
  },
  name: '',
  components: {
    
  },
  mounted(){
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.lizi{
  min-width: 1080px;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 1110;
  pointer-events: none;
}
</style>
