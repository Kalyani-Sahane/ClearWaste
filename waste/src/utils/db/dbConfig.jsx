import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://clearwaste_owner:58tkMdIGehLS@ep-frosty-sound-a8xrko3f.eastus2.azure.neon.tech/clearwaste?sslmode=require"
);
export const db = drizzle(sql, { schema });
