import "reflect-metadata"
import { getEnv } from './env'
import { DataSource } from "typeorm"

const env = getEnv()

const getSource = (): string => (env.tsNodeEnv === 'dev' ? 'src' : 'dist')

export const AppDataSource = new DataSource({
    type: "postgres",
    url: env.databaseUrl,
    synchronize: false,
    logging: false,
    entities: [`${getSource()}/entities/*.entity.{ts,js}`],
    migrations: [`${getSource()}/migrations/*.{ts,js}`],
    subscribers: [],
});