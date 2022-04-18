import {dirname, join} from "path";
import { fileURLToPath } from "url";

const config = () => {
    let __filename = fileURLToPath(import.meta.url);
    let __dirname = dirname(__filename);
    let basePath = join(__dirname, "../templates")

    return basePath;
};

export default config;