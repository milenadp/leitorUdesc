CREATE TABLE IF NOT EXISTS centroCusto(id INTEGER PRIMARY KEY AUTOINCREMENT,nome TEXT,codigoBarras TEXT);
INSERT or IGNORE INTO centroCusto VALUES (1, 'Sala 57', '12345');
INSERT or IGNORE INTO centroCusto VALUES (2, 'Sala 49', '23456');
INSERT or IGNORE INTO centroCusto VALUES (3, 'Sala 12', '34567');
 
CREATE TABLE IF NOT EXISTS produto(id INTEGER PRIMARY KEY AUTOINCREMENT,nome TEXT, ccId INTEGER, codigoBarras TEXT);
INSERT or IGNORE INTO produto(id, name, ccId, codigoBarras) VALUES (1, 'Monitor Dell 14"', 1, '45678');
INSERT or IGNORE INTO produto(id, name, ccId, codigoBarras) VALUES (2, 'Mouse Raser Black Power', 1, '45679');
INSERT or IGNORE INTO produto(id, name, ccId, codigoBarras) VALUES (3, 'Teclado HP 1998', 2, '45789');
INSERT or IGNORE INTO produto(id, name, ccId, codigoBarras) VALUES (4, 'Monitor Dell 21" - monster', 2, '45786');
INSERT or IGNORE INTO produto(id, name, ccId, codigoBarras) VALUES (5, 'CPU HP', 3, '45378');
INSERT or IGNORE INTO produto(id, name, ccId, codigoBarras) VALUES (6, 'Cadeira giratória', 3, '45128');