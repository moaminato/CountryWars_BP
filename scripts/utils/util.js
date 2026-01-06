import * as server from "@minecraft/server";
const { world, system } = server;

export class Util {
    static translateMessage(target, text) {
        try {
            target.sendMessage({ translate: text })
        } catch (error) {
            console.error(error)
        }
    }
}