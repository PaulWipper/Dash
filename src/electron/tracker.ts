import psList from "ps-list";
import { getApps } from "./database/dbController.js";
import { Application } from "./types.js";

const POLLING_INTERVAL = 5000;


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
                console.log("FOUND: ", data[i].name)
            }
        }

    }, POLLING_INTERVAL);
}

async function getApplications() {
    const data = await psList()
    return data
}