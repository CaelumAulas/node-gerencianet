## Usando MySQL 
1 - Logar no mysql
```terminal
mysql -u root -p  
Enter password: caelum
```
2 - CREATE DATABASE casadocodego;
3 - USE casadocodego;
4 - 
CREATE TABLE livros (
    id INT(11) NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(255) DEFAULT NULL,
    preco DECIMAL(10,2) DEFAULT NULL,
    descricao TEXT,
    PRIMARY KEY (id)
)
5 - 
INSERT INTO livros (titulo, preco, descricao)
VALUES ('Livro Ruby', 10.10, 'Um livro show');

INSERT INTO livros (titulo, preco, descricao)
VALUES ('Livro NodeJS', 10.10, 'Um livro show');

6 - SELECT * FROM livros;
> Tem que aparecer os livros criados por vocês :) 

