<template>
    <div class="base-icon-container" @click="clickAction">
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
            },
            clickAction: {
                type: Function
            }
        },
        computed: {
            resolveIconPath () {
                return require(`../../assets/icons/${this.iconName}.${this.iconExtension}`)
            }
        }
    }
</script>

<style scoped>

</style>
