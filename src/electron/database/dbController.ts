import { db } from "./db.js";
import { Application } from "../types.js";

export function getApps(): Application[]{
    const query = `SELECT * FROM applications`
    const apps = db.prepare(query).all() as Application[];
    return apps
}

export function getApp(name: string){
    const query = `SELECT * FROM applications WHERE name = ?`
    const prepareApp = db.prepare(query)
    const app = prepareApp.get(name)
    return app
}

export function addApp(name: string, nickname: string){
    const query = `INSERT INTO applications (name, nickname) VALUES (?, ?)`
    const prepareApp = db.prepare(query)
    const app = prepareApp.run(name, nickname)
    return app
}

export function updateApp(application: Application){
    const query = `UPDATE applications SET name = ?, nickname = ?, path = ?, totalActive = ?, lastActive = ?, firstActive = ? WHERE id = ?`
    const prepareApp = db.prepare(query)
    const app = prepareApp.run(application.name, application.nickname, application.path, application.totalActive, application.lastActive, application.firstActive, application.id)
    return app
}

export function deleteApp(application: Application){
    const query = `DELETE FROM applications WHERE id = ?`
    const prepareApp = db.prepare(query)
    const app = prepareApp.run(application.id)
    return app
}