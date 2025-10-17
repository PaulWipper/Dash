import psList from "ps-list";
import { getApps } from "./database/dbController.js";
import { Application } from "./types.js";
import { updateApp } from "./database/dbController.js";
import { print } from "./util.js";

const POLLING_INTERVAL = 10000;

export function pollApplications() {
    setInterval(async () => {
        const data = await getApplications()
        const dbApps: Application[] = getApps()
        const dbAppsNames = []

        for(let i = 0; i < dbApps.length; i++){
            dbAppsNames.push(dbApps[i].name)
        }

        for(let i = 0; i < data.length; i++){
            if(dbAppsNames.indexOf(data[i].name.toLowerCase()) > -1){
                const appIndex = getIndexOfApp(data[i].name, dbApps)
                if(appIndex){
                    const app = dbApps[appIndex]
                    print("INFO", `FOUND: ${app.name} at Index ${appIndex}`)
                    const updatedApp: Application = {
                        id: app.id,
                        name: app.name,
                        nickname: app.nickname,
                        path: app.path,
                        totalActive: app.totalActive + (POLLING_INTERVAL/1000),
                        lastActive: new Date().toISOString(),
                        firstActive: app.firstActive === null ? new Date().toISOString() : app.firstActive 
                    }
                    updateApp(updatedApp)
                }else{
                    print("ERROR", `FOUND: ${data[i].name} but could not find corresponding Index.`)
                }
            }
        }
    }, POLLING_INTERVAL);
}

async function getApplications() {
    const data = await psList()
    return data
}

function getIndexOfApp(name: string, dbApps: Application[]){
    for(let i = 0; i < dbApps.length; i++){
        if(name.toLowerCase() === dbApps[i].name){
            return i
        }
    }
    return null
}