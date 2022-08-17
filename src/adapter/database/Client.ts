import { Client } from "pg";

export const DBClient = new Client({
    host: 'db',
    user: 'cara-cracha',
    password: 'cara-cracha',
    database: 'cara-cracha'
}) 