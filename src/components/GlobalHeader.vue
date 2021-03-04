<template>
    <header class="global-header">
        <div>
            <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="handleToggleCollapsed"/>
        </div>
        <div></div>
    </header>
</template>

<script>
export default {
    data(){
        return {
            // collapsed:true
        }
    },
    props: {
        collapsed: {
            type: Boolean,
            default: false
        }
    },
    methods:{
        handleToggleCollapsed() {
            this.$emit('update:collapsed', !this.collapsed)
        }
    }
}
</script>

<style lang="scss" scoped>
    .global-header {
        display: flex;
        height: 100%;
    }
</style>