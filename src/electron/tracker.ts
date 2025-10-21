import psList from "ps-list";
import { getApps, updateApp } from "./database/dbController.js";
import { type Application } from "./types.js";
import { print } from "./util.js";

const POLLING_INTERVAL = 10000;

export function pollApplications() {
    setInterval(async () => {
        const data = await getApplications()
        const dbApps: Map<string, Application> = getAppsAsMap()

        for(const element of data) {
            const app = dbApps.get(element.name.toLowerCase())
            if(app == undefined) {
                print("ERROR", `could not find ${element.name} in database`)
            } else {
                print("INFO", `FOUND: ${app.name}`)

                app.totalActive += (POLLING_INTERVAL/1000)
                app.lastActive = new Date().toISOString()
                app.firstActive ??= new Date().toISOString()

                updateApp(app)
            }
        }
        
    }, POLLING_INTERVAL);
}

export function getAppsAsMap(): Map<string, Application> {
    return new Map<string, Application>(getApps().map(app => [app.name, app]))
}

async function getApplications() {
    const data = await psList()
    return data
}