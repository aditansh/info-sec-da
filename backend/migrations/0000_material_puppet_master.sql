CREATE TABLE `movies` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`year` integer,
	`director` text,
	`genre` text
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`username` text NOT NULL,
	`password` text NOT NULL,
	`email` text,
	`phone` text,
	`role` text DEFAULT user NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `title_idx` ON `movies` (`title`);--> statement-breakpoint
CREATE UNIQUE INDEX `id_idx` ON `users` (`id`);