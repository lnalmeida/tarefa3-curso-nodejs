import express from "express";
import config from "./config/index.js";

import router from "./routes/index.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("public"));

app.use(router)

app.use((req, res, next) => {
        res.status(404).sendFile(`${config()}/404.html`);
});
app.listen(port, () => console.log(`Server online na porta ${port}`));
