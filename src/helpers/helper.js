import {collision_helper} from "./collision.js"
import {house_helper} from "./house.js"
import { mousepick_helper } from "./mousepick.js";

let comps = Object.assign({}, {}, collision_helper);
comps = Object.assign({}, comps, house_helper);
Object.assign(comps, mousepick_helper);

export {comps};
