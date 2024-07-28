import { createId } from "@paralleldrive/cuid2";
import { pgTable,text, uuid  } from "drizzle-orm/pg-core";

export const user =  pgTable( "users",{
id: text("user_id").primaryKey().$defaultFn(createId),


})