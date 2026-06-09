import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// 👇 1. 引入图标自动引入插件
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(), // Tailwind v4 官方 Vite 插件
    // 自动按需引入 Element Plus
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({ prefix: "Icon" }), // 自动导入图标组件
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({ enabledCollections: ["ep"] }), // 自动注册图标组件（这里的 ep 代表 element-plus）
      ],
    }),
    Icons({ autoInstall: true }), // 启用图标插件
  ],
});
