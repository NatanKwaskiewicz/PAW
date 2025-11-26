/*
  Warnings:

  - You are about to drop the column `entryId` on the `comment` table. All the data in the column will be lost.
  - You are about to drop the `entry` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `postId` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_entryId_fkey`;

-- DropForeignKey
ALTER TABLE `entry` DROP FOREIGN KEY `Entry_categoryId_fkey`;

-- DropIndex
DROP INDEX `Comment_entryId_fkey` ON `comment`;

-- AlterTable
ALTER TABLE `comment` DROP COLUMN `entryId`,
    ADD COLUMN `postId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `entry`;

-- CreateTable
CREATE TABLE `Post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `title` VARCHAR(255) NOT NULL,
    `content` VARCHAR(191) NULL,
    `author` VARCHAR(255) NOT NULL,
    `categoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
