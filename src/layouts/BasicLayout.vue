<template>
    <a-layout :style="{height:'100vh'}">
        <a-layout-sider
                breakpoint="lg"
                :collapsible="collapsible"
                :collapsed="collapsed"
                width="208px">
                <SiderMenu/>
        </a-layout-sider>
        <a-layout>
            <a-layout-header :style="headerStyle">
               <GlobalHeader :collapsed.sync="collapsed"/>
            </a-layout-header>
            <!--<multi-tab></multi-tab>-->
            <a-layout-content :style="contentStyle">
                <router-view/> router-view
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
    import SiderMenu from "@/components/SiderMenu.vue"
    import GlobalHeader from '@/components/GlobalHeader.vue'
    export default {
        data() {
            return {
                headerStyle: {
                    background: '#fff',
                    boxShadow: '0 1px 4px rgba(0, 21, 41, .08)',
                    padding: '0',
                    position: 'sticky',
                    top: '0',
                    zIndex: 100,
                    height: '48px'
                },
                contentStyle: {
                    margin: '16px',
                    minHeight: 'auto'
                },
                footerStyle: {
                    textAlign: 'center'
                },
                collapsible: false,
                collapsed: false,
            }
        },
        components:{SiderMenu,GlobalHeader},
        computed: {},
        methods: {
            // handleToggleCollapsed() {
            //     this.collapsed = !this.collapsed;
            // }
        }
    }
</script>

<style lang="scss" scoped>

</style>
