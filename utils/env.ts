import { ProcessEnv } from "../types/environment";

export default function env(key: keyof ProcessEnv, val: string | null = null) {
    return process.env[key] || val
}