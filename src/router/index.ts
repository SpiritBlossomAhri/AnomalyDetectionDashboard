import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "main",
            component: () => import("../views/MainView.vue"),
        },
        {
            path: "/guide",
            name: "guide",
            component: () => import("../views/GuideView.vue"),
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: () => import("../views/DashboardView.vue"),
        },
        {
            path: "/summary",
            name: "summary",
            component: () => import("../views/SummaryView.vue"),
        },
        {
            path: "/about/algorithm",
            name: "algorithm",
            component: () => import("../views/About/AlgorithmView.vue"),
        },
        {
            path: "/about/backend",
            name: "backend",
            component: () => import("../views/About/BackendView.vue"),
        },
        {
            path: "/about/frontend",
            name: "frontend",
            component: () => import("../views/About/FrontendView.vue"),
        },
        {
            path: "/upload/csv",
            name: "csvupload",
            component: () => import("../views/UploadData/CSVFileView.vue"),
        },
        {
            path: "/upload/wav",
            name: "wavupload",
            component: () => import("../views/UploadData/WAVFileView.vue"),
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../views/LoginView.vue"),
        },
    ],
});

export default router;
