import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import DefineOptions from "unplugin-vue-define-options/vite";
export default defineConfig({
  build:{
    outDir: "weird-dream-ui",
    minify: false,
    rollupOptions: {
      //忽略打包文件
      external: ["vue","unplugin-vue-define-options",/\.scss/],
      input: ["index.ts"],
      output: [
        {
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          preserveModulesRoot:"./",
          exports: "named",
          //配置打包根目录
          dir: "../weird-dream-ui/es",
        },
        {
          //打包格式
          format: "cjs",
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          preserveModulesRoot:"./",
          // preserveModulesRoot:"packages/weird-dream-ui",
          exports: "named",
          //配置打包根目录
          dir: "../weird-dream-ui/lib",
        },
        
      ],
    },
    lib: {
      entry: "./index.ts",
    },
  },
  plugins: [
    vue(),
    dts({
      entryRoot: "./src",
      outputDir: ["../weird-dream-ui/es/src", "../weird-dream-ui/lib/src"],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: "../../tsconfig.json",
    }),
    DefineOptions(),

    {
      name: "style",
      generateBundle(config, bundle) {
        //这里可以获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle);

        for (const key of keys) {
          const bundler: any = bundle[key as any];
          //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件

          this.emitFile({
            type: "asset",
            fileName: key, //文件名名不变
            source: bundler.code.replace(/\.scss/g, ".css"),
          });
        }
      },
    },
  ],
});




// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
// export default defineConfig({
//   build: {
//     //打包文件目录
//     outDir: "es",
//     //压缩
//     //minify: false,
//     rollupOptions: {
//       //忽略打包vue文件
//       external: ["vue"],
//       input: ["index.ts"],
//       output: [
//         {
//           //打包格式
//           format: "es",
//           //打包后文件名
//           entryFileNames: "[name].mjs",
//           //让打包目录和我们目录对应
//           preserveModules: true,
//           exports: "named",
//           //配置打包根目录
//           dir: "../weird-dream-ui/es",
//         },
//         {
//           //打包格式
//           format: "cjs",
//           //打包后文件名
//           entryFileNames: "[name].js",
//           //让打包目录和我们目录对应
//           preserveModules: true,
//           exports: "named",
//           //配置打包根目录
//           dir: "../weird-dream-ui/lib",
//         },
//       ],
//     },
//     lib: {
//       entry: "./index.ts",
//     },
//   },
//   plugins: [vue()],
// });
