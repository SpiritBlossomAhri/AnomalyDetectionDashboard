<template>
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="false"
        @open="handleOpen"
        @close="handleClose"
    >
        <RouterLink to="/guide" style="text-decoration: none">
            <el-menu-item index="1">
                <template #title>Guide</template>
            </el-menu-item>
        </RouterLink>

        <el-sub-menu index="2">
            <template #title>
                <span>Upload Data</span>
            </template>
            <el-menu-item-group>
                <template #title><span>Time Series Data</span></template>
                <RouterLink to="/upload/csv" style="text-decoration: none">
                    <el-menu-item index="2-1">.CSV File</el-menu-item>
                </RouterLink>
                <RouterLink to="/upload/wav" style="text-decoration: none">
                    <el-menu-item index="2-2">.Wav File</el-menu-item>
                </RouterLink>
            </el-menu-item-group>
                
            <el-menu-item-group>
                <template #title><span>Image Data</span></template>
                <RouterLink to="/upload/image" style="text-decoration: none">
                    <el-menu-item index="3-1" >Image File</el-menu-item>
                </RouterLink>
            </el-menu-item-group>
        </el-sub-menu>
        
        <RouterLink to="/dashboard" style="text-decoration: none">
            <el-menu-item index="3" d>
                <template #title>DashBoard</template>
            </el-menu-item>
        </RouterLink>

        <RouterLink to="/summary" style="text-decoration: none">
            <el-menu-item index="4">
                <template #title>Summary Report</template>
            </el-menu-item>
        </RouterLink>
    </el-menu>
</template>

<script lang="ts" setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import {
    Location,
    Document,
    Menu as IconMenu,
    Setting,
} from "@element-plus/icons-vue";

const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
</script>

<style scoped>
RouterLink {
    text-decoration: none;
}
</style>
