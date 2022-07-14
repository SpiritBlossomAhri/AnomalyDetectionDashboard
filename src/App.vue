<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <el-config-provider namespace="ep">
        <BaseHeader />
        <div style="display: flex">
            <BaseSide />
            <div>
                <RouterView />
            </div>
        </div>
    </el-config-provider>
</template>

<style></style>
