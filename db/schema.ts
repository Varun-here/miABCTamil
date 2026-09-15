import {sqliteTable,text,integer} from 'drizzle-orm/sqlite-core';
export const studioState=sqliteTable('studio_state',{owner:text('owner').primaryKey(),data:text('data').notNull(),revision:integer('revision').notNull().default(1)});
