import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import 'dotenv/config';

// 1. Criamos a pool de conexão do driver nativo 'pg'
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });

// 2. Criamos o adaptador do Prisma para esse driver
const adapter = new PrismaPg(pool);

// 3. Instanciamos o Prisma passando o adaptador obrigatoriamente
// Na v7, isto impede o InitializationError
export const prisma = new PrismaClient({ adapter });