create database clientes;

use clientes;

CREATE TABLE clientesDados (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    razao_social VARCHAR(255),
    estado VARCHAR(2);
);

CREATE TABLE telefones (
    id_telefone INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    numero_telefone VARCHAR(255),
    tipo_telefone VARCHAR(255),
    FOREIGN KEY (id_cliente) REFERENCES clientesDados(id_cliente)
);

INSERT INTO clientesDados (razao_social, estado) VALUES
    ('Petrobras', 'SP'),
    ('Globo', 'RJ');

INSERT INTO telefones (id_cliente, numero_telefone, tipo_telefone) VALUES
    (1, '(11) 98765-4321', 'Celular'),
    (1, '(11) 45678-9012', 'Comercial'),
    (2, '(21) 12345-6789', 'Fixo'),
    (2, '(21) 34567-8901', 'Celular')


-- Consulta para retornar traga o código, a razão social e o(s) telefone(s) de todos os clientes do estado de São Paulo (código “SP”);
SELECT c.razao_social, c.estado, t.numero_telefone, t.tipo_telefone
FROM clientesDados c
INNER JOIN telefones t ON c.id_cliente = t.id_cliente
WHERE c.estado = 'SP';


-- SELECT c.nome_cliente, c.estado, t.numero_telefone, t.tipo_telefone
-- FROM clientesDados c
-- INNER JOIN telefones t ON c.id_cliente = t.id_cliente;

