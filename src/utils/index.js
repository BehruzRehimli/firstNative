import { io } from "socket.io-client";
import {API_BASE} from "@env"


 export const socket= io.connect(API_BASE)