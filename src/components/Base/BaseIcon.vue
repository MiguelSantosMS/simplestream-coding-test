<template>
    <div class="base-icon-container" @click="iconClicked">
        <img :src="resolveIconPath" :alt="iconName"/>
    </div>
</template>

<script>
    export default {
        name: 'BaseIcon',
        props: {
            iconName: String,
            iconExtension: {
                type: String,
                default: 'svg'
            }
        },
        computed: {
            resolveIconPath () {
                return require(`../../assets/icons/${this.iconName}.${this.iconExtension}`)
            }
        },
        methods: {
            iconClicked () {
                this.$emit('icon-clicked')
            }
        }
    }
</script>
