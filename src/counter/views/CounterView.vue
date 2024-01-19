<!-- <script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const counter = ref(5);

    const increase = () => {
        counter.value += 1;
    }

    return {
      counter,

    //   Methods
    increase
    }
  }
})
</script> -->

<script setup lang="ts">
import { ref } from 'vue';

    const counter = ref(5);
    const increase = () => {
        counter.value++;
    }
</script>

<template>
  <h1>Counter View: {{ counter }}</h1>
  <!-- <button @click="increase">+1</button>
 -->
 <button @click="counter++">+1</button>
</template>
