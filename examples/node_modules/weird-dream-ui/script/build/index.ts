import delPath from "../utils/delpath";
import { series, parallel, src, dest } from "gulp";
import { pkgPath, componentPath } from "../utils/paths";
import glupSass from 'gulp-sass';
import sassLang from 'sass';
import autoprefixer from "gulp-autoprefixer";
import run from "../utils/run";


// 删除原打包文件
export const removeDist = () => {
  return delPath(`${pkgPath}/weird-dream-ui`);
};

//样式打包
const sass = glupSass(sassLang);
export const buildStyle = () => {
return src(`${pkgPath}/theme-chalk/src/**.scss`)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/weird-dream-ui/lib/theme-chalk/src`))
    .pipe(dest(`${pkgPath}/weird-dream-ui/es/theme-chalk/src`));
};

export const buildComponent = async () => {
    run("npm run build", componentPath);
  };

export default series(
    async () => removeDist(),
    parallel(
        async () => buildStyle(),
        async () => buildComponent()
    )
);
