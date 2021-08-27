/* eslint-disable */
import { render } from "@lit-labs/ssr/lib/render-with-global-dom-shim.js";
import { Readable } from "stream";
import { html } from "@microsoft/fast-element";

// Keep process open until stream closes
setInterval(() => {}, 1 << 30);

function myTemplate() {
    return html`
        <p>success</p>
    `;
}
//...

const ssrResult = render(myTemplate());
const stream = Readable.from(ssrResult);

stream.on("readable", function() {
    let data;

    while ((data = this.read())) {
        console.log(data);
    }
});
stream.on("close", () => process.exit(0));
stream.on("error", () => process.exit(1));
