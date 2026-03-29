-- CreateTable
CREATE TABLE "Empresa" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Empresa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Obra" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "empresaId" TEXT NOT NULL,

    CONSTRAINT "Obra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Registo" (
    "id" TEXT NOT NULL,
    "colaborador" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "horas" DECIMAL(65,30) NOT NULL,
    "tempoFormatado" TEXT NOT NULL,
    "obraId" TEXT NOT NULL,

    CONSTRAINT "Registo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Empresa_nome_key" ON "Empresa"("nome");

-- AddForeignKey
ALTER TABLE "Obra" ADD CONSTRAINT "Obra_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registo" ADD CONSTRAINT "Registo_obraId_fkey" FOREIGN KEY ("obraId") REFERENCES "Obra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
