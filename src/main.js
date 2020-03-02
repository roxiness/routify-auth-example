import HMR from  '@sveltech/routify/hmr'
import { Router } from "@sveltech/routify";
import { routes } from "@sveltech/routify/tmp/routes";

console.log(routes)

export default HMR(Router, { target: document.body, props: {routes} }, 'routify-app')