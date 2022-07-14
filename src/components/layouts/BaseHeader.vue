<script lang="ts" setup>
import { toggleDark } from "~/composables";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
        <RouterLink to="/" style="text-decoration: none">
            <el-menu-item index="0">Anomaly Detection</el-menu-item>
        </RouterLink>

        <el-sub-menu index="1">
            <template #title>About</template>
            <RouterLink to="/about/algorithm" style="text-decoration: none"
                ><el-menu-item index="1-1">Algorithm</el-menu-item></RouterLink
            >
            <RouterLink to="/about/backend" style="text-decoration: none"
                ><el-menu-item index="1-2">Backend</el-menu-item></RouterLink
            >
            <RouterLink to="/about/frontend" style="text-decoration: none"
                ><el-menu-item index="1-3">Frontend</el-menu-item></RouterLink
            >
        </el-sub-menu>
        <el-menu-item index="2" disabled>Github</el-menu-item>

        <div class="flex-grow" />
        <el-menu-item h="full" @click="toggleDark()">
            <button
                class="border-none w-full bg-transparent cursor-pointer"
                style="height: var(--ep-menu-item-height)"
            >
                <i inline-flex i="dark:ep-moon ep-sunny" />
            </button>
        </el-menu-item>
        <RouterLink to="/login" style="text-decoration: none"
            ><el-menu-item index="4">Login</el-menu-item>
        </RouterLink>
    </el-menu>
</template>

<style>
.el-menu-item {
    text-decoration: none;
}
</style>
