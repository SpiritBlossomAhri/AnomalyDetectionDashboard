<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

methods: {
}
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
