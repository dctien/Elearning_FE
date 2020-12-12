<template>
  <div class="home">
    <HeadComponent></HeadComponent>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import HeadComponent from "@/components/HeadComponent.vue";

export default {
  name: "Home",
  components: {
    HeadComponent
  }
};
</script>
