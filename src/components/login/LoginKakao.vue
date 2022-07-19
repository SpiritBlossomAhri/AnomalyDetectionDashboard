<template>
    <button @click="loginWithKakao">카카오 계정으로 로그인</button>
</template>

<script lang="ts">
export default {
    name: "LoginKakao",
    methods: {
        loginWithKakao() {
            const params = {
                redirectUri: "http://localhost:3000",
            };
            window.Kakao.Auth.authorize(params);
        },
    },
};
</script>
