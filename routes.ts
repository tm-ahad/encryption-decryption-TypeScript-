// @ts-ignore
import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

// @ts-ignore
router.get("/", async (ctx) => {
    const {request: req} = ctx;
    const body = await req.body();
    console.log({
        ip: req.ip,
        method: req.method,
        route: req.url.pathname,
        type: body.type || null
    });
    ctx.response.body = `Hello World!`;
});

export default router;