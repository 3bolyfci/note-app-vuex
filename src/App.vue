<template>
    <div id="app">
        <sidebar></sidebar>
        <pad></pad>
    </div>
</template>

<script>
    import Sidebar from './components/sidebar'
    import Pad from './components/Pad'
    export default {
        name: 'app',
        components: {
            Sidebar,
            Pad
        }
    }
</script>
<style>
    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        color: #2c3e50;
    }

    #app {
        display: flex;
        height: 100%;
    }

</style>