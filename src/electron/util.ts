export function isDev(): boolean {
    return process.env.NODE_ENV === "development";
}

export class Print {
    static info(msg: string) {
        console.log(`\x1b[47m INFO  \x1b[0m \x1b[37m${msg}\x1b[0m`)
    }    
    static ok(msg: string) {
        console.log(`\x1b[42m OK    \x1b[0m \x1b[32m${msg}\x1b[0m`)
    }
    static warn(msg: string) {
        console.log(`\x1b[43m WARN  \x1b[0m \x1b[33m${msg}\x1b[0m`)
    }    
    static error(msg: string) {
        console.log(`\x1b[41m ERROR \x1b[0m \x1b[31m${msg}\x1b[0m`)
    }
}