<template>
    <div id="app">
        <div class="app-top-bar">
            <router-link to="/">
                <base-icon icon-name="app-logo"></base-icon>
            </router-link>
        </div>
        <router-view/>
    </div>
</template>
<script>
    import BaseIcon from '@/components/Base/BaseIcon'

    export default {
        components: { BaseIcon }
    }
</script>
