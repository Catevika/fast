/* eslint-disable */
import express, { Request, Response } from "express";
import "./dom";
import { render } from "@lit-labs/ssr/lib/render-lit-html";
import { Readable } from "stream";
import { FASTElementRenderer } from "./element-renderer";
import { myTemplate } from "./experience";

const open = `
<!DOCTYPE HTML>
<html lang="en">
<head><title>FAST SSR Demo</title></head>
<body>
`;
const close = `
</body>
</html>
`;
function handleRequest(req: Request, res: Response) {
    res.set("Content-Type", "text/html");
    const templateResult = myTemplate();
    const ssrResult = render(templateResult, {
        elementRenderers: [FASTElementRenderer],
        customElementHostStack: [],
        customElementInstanceStack: [],
    });
    res.write(open);
    const stream = (Readable as any).from(ssrResult);
    stream.on("readable", function(this: any) {
        let data: string;

        while ((data = this.read())) {
            // I'm not 100% certain why lit's render is emitting element open and close tags
            // as HTML entities, but it seems to be. Circumventing for now but this should be solved.
            data = data.replaceAll("&gt;", ">").replaceAll("&lt;", "<");
            res.write(data);
        }
    });
    stream.on("close", () => res.write(close) && res.end());
    stream.on("error", (e: Error) => {
        console.error(e);
        process.exit(1);
    });
}

const port = 8080;
const app = express();
app.get("/", handleRequest);

console.log(`FAST SSR demo started at http://localhost:${port}`);
app.listen(8080);
