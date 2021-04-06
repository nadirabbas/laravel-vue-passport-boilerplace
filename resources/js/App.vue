<template>
    <div class="app">
        <vue-extend-layouts />
    </div>
</template>

<script>
import VueExtendLayouts from "vue-extend-layout";

export default {
    name: "App",
    components: {
        VueExtendLayouts
    }
};
</script>

<style lang="scss">
@import "@assets/_variables.scss";

body {
    background: $primary;
    color: $fg;
}
</style>
