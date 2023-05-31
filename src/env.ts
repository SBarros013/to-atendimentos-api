// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function getEnv() {
  return {
    port: process.env.PORT ?? 4001,
    databaseUrl: process.env.DATABASE_URL ?? '',
    tsNodeEnv: process.env.TS_NODE_DEV ?? 'dev'
  }
}
