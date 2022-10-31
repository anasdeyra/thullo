import { router } from "../../trpc";
import * as procedures from "./procedures";
const board = router(procedures);
export default board;
