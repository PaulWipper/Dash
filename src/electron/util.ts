export function isDev(): boolean {
    return process.env.NODE_ENV === "development";
}

export function print(type: "INFO" | "OK" | "WARN" | "ERROR", msg: string): void {
    if(type === "INFO"){
        console.log(`\x1b[47m INFO  \x1b[0m \x1b[37m${msg}\x1b[0m`)
    }else if(type === "OK"){
        console.log(`\x1b[42m OK    \x1b[0m \x1b[32m${msg}\x1b[0m`)
    }else if (type === "WARN"){
        console.log(`\x1b[43m WARN  \x1b[0m \x1b[33m${msg}\x1b[0m`)
    }else if (type === "ERROR"){
        console.log(`\x1b[41m ERROR \x1b[0m \x1b[31m${msg}\x1b[0m`)
    }else{
        console.log(msg)
    }
}