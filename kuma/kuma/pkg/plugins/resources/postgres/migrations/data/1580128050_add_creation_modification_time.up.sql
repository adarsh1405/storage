ALTER TABLE resources ADD COLUMN creation_time TIMESTAMP NOT NULL DEFAULT now();
ALTER TABLE resources ADD COLUMN modification_time TIMESTAMP NOT NULL DEFAULT now();