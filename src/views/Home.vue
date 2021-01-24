<template>
  <div class="home">
    <ItemComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ItemComponent from "@/components/Item.component.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    ItemComponent
  }
});
</script>
