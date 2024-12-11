---
id: create-folder
title: CREATE FOLDER
slug: /commands/create-folder
displayed_sidebar: docs
---

<!--REF #_command_.CREATE FOLDER.Syntax-->**CREATE FOLDER** ( *rotaPasta* {; *} )<!-- END REF-->
<!--REF #_command_.CREATE FOLDER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rotaPasta | Text | &#8594;  | Rota de acesso a nova pasta a criar |
| * | Operador | &#8594;  | Cria hierarquia de pastas |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.CREATE FOLDER.Summary-->O comando CREATE FOLDER cria uma pasta de acordo com a rota de acesso que é passada em *rotaPasta*.<!-- END REF-->  

Se passar um nome, a pasta é criada na pasta do banco. Se passar uma rota de acesso completa, deve ser uma rota válida ao nome da pasta que você deseja criar, a partir da raiz de um volume ou ao nível da pasta do banco.

#### Exemplo 1 

O exemplo abaixo cria a pasta “Arquivos” na pasta do banco: 

```4d
 CREATE FOLDER("Arquivos")
```

#### Exemplo 2 

O exemplo abaixo cria a pasta Arquivos na pasta do banco, depois cria as subpastas “Janeiro” e “Fevereiro”: 

```4d
 CREATE FOLDER("Arquivos")
 CREATE FOLDER("Arquivos\\Janeiro")
 CREATE FOLDER("Arquivos\\Fevereiro")
```

#### Exemplo 3 

O exemplo abaixo cria a pasta “Arquivos” na raiz do volume C: 

```4d
 CREATE FOLDER("C:\\Arquivos")
```

#### Exemplo 4 

O exemplo falhará se não houver uma pasta “Novidades” na raiz do volume C: 

```4d
 CREATE FOLDER("C:\\Novidades\\Imagens") // INCORRETO, não é possível criar dois níveis de pastas em uma chamada
```

#### Exemplo 5 

Criação da subpasta "\\Fevereiro\\" na atual pasta "C:\\Arquivos\\": 

```4d
 CREATE FOLDER("C:\\Arquivos\\2011\\Fevereiro\\Doc.txt";*)
  // O arquivo "Doc.txt" é ignorado
```

#### Ver também 

[FOLDER LIST](folder-list.md)  
[Test path name](test-path-name.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 475 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, error |
| Proibido no servidor ||


