/*
  Warnings:

  - Added the required column `companyId` to the `tbl_users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tbl_users" ADD COLUMN     "companyId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "tbl_users" ADD CONSTRAINT "tbl_users_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "tbl_company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
