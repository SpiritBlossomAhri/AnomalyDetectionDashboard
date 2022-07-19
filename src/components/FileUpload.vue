<template>
    <el-space wrap>
        <el-card class="box-card" style="width: 400px">
            <template #header>
                <div class="card-header">
                    <span>For test data file upload.</span>
                </div>
            </template>
            <el-upload
                class="upload-demo"
                drag
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                multiple
            >
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">
                    Drop file here or <em>click to upload</em>
                </div>
                <template #tip>
                    <div class="el-upload__tip">
                        Files with a size less than 100MB.
                    </div>
                    <br/>
                    <div class="float-right">
                        <el-button type="primary">
                            Upload
                        </el-button>
                    </div>
                    <br/>
                </template>
            </el-upload>
        </el-card>
        <el-card class="box-card" style="width: 400px">
            <template #header>
                <div class="card-header">
                    <span>For test data file upload.</span>
                </div>
            </template>
            <el-upload
                class="upload-demo"
                drag
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                multiple
            >
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">
                    Drop file here or <em>click to upload</em>
                </div>
                <template #tip>
                    <div class="el-upload__tip">
                        Files with a size less than 100MB.
                    </div>
                    <br/>
                    <div class="float-right">
                        <el-button type="primary">
                            Upload
                        </el-button>
                    </div>
                    <br/>
                </template>
            </el-upload>
        </el-card>
    </el-space>
</template>

<script setup lang="ts">
import { UploadFilled } from "@element-plus/icons-vue";
</script>

<style scoped>
/*template #tip display: inline-block; */
.el-upload__tip {
    display: inline-block;
}
</style>
