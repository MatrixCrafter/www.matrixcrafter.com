
export function onRequest(context) {
    return new Response(`Hello ${JSON.stringify(context.request.url)}`);
}