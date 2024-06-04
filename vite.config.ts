import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    base: "./",
    server: {
        port: 4500, // 设置服务启动端口号
        open: true, // 设置服务启动时是否自动打开浏览器
        // cors: true, // 允许跨域

        // 设置代理，根据我们项目实际情况配置
        proxy: {
            "/static": {
                // target: "http://127.0.0.1:7001",
                target: "http://120.48.63.39/",
                // target: "http://106.54.75.203:7200",
                changeOrigin: true,
                secure: false,
                // rewrite: (path) => path.replace('/api/', '/')
            },
            "/files": {
                target: "http://120.48.63.39/",
                // target: "http://127.0.0.1:7004",
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
