declare global {
    namespace NodeJS {
      interface ProcessEnv {
        APP_URL: string;
        DB_HOST: string
      }
    }
  }

export interface ProcessEnv {
    APP_URL: string;
    DB_HOST: stirng
}

export {};