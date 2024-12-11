---
id: sql-get-data-source-list
title: SQL GET DATA SOURCE LIST
slug: /commands/sql-get-data-source-list
displayed_sidebar: docs
---

<!--REF #_command_.SQL GET DATA SOURCE LIST.Syntax-->**SQL GET DATA SOURCE LIST** ( *tipoFonte* ; *arrayNomesFontes* ; *arrayDrivers* )<!-- END REF-->
<!--REF #_command_.SQL GET DATA SOURCE LIST.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tipoFonte | Integer | &#8594;  | Tipo da fonte: usuário ou sistema |
| arrayNomesFontes | Text array | &#8592; | Array dos nomes das fontes dos dados |
| arrayDrivers | Text array | &#8592; | Array dos drives das fontes |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SQL GET DATA SOURCE LIST.Summary-->O comando SQL GET DATA SOURCE LIST retorna nos arrays *arrayNomesFontes* e *arrayDrivers*, os nomes e drivers das fontes de dados de tipo *tipoFonte* definidas no administrador ODBC do Sistema operativo.<!-- END REF-->  
  
4D permite que se conecte diretamente através da linguagem a uma fonte de dados ODBC externa e executar pesquisas SQL dentro de uma estrutura **Begin SQL/End SQ**L. Este princípio funciona desta forma: o comando SQL GET DATA SOURCE LIST permite obter a lista de fontes de dados presentes na máquina. O comando [SQL LOGIN](sql-login.md) permite determinar a fonte a utilizar. Depois pode executar as pesquisas SQL utilizando uma estrutura **Begin SQL/End SQL** na fonte “atual”. Para realizar novas pesquisas utilizando novamente o motor interno de 4D, simplesmente passe o comando [SQL LOGOUT](sql-logout.md). Para maior informação sobre os comandos SQL no editor de métodos, consulte *Manual de SQL* no manual 4D SQL.  
  
Em *tipoFonte*, passe o tipo de fonte de dados que deseja obter. Pode utilizar uma das seguintes constantes do tema “SQL”, encontradas no tema “*SQL*”:  
  
| Constante          | Tipo          | Valor |
| ------------------ | ------------- | ----- |
| User data source   | Inteiro longo | 1     |
| System data source | Inteiro longo | 2     |
  
  
**Nota**: este comando não leva em consideração as fontes de dados de tipo arquivo.  
  
O comando preenche e dimensiona os arrays *arrayNomesFontes e arrayDrivers* com os valores correspondentes.  
  
**Nota**: Se desejar conectar-se a uma fonte de dados 4D externa através ODBC, necessitará ter instalado 4D ODBC Driver em seu equipo. Para maior informação, consulte o manual de instalação do driver 4D ODBC.

#### Exemplo 

Este exemplo utiliza uma fonte de dados usuário:  
  
```4d
 ARRAY TEXT(arrDSN;0)
 ARRAY TEXT(arrDSNDrivers;0)
 GET DATA SOURCE LIST(User data source;arrDSN;arrDSNDrivers)
```

#### Variáveis e conjuntos do sistema 

Se o comando for executado corretamente, a variável Sistema OK assume o valor 1\. Do contrário, assume o valor 0 e um erro é gerado.  

#### Ver também 

[SQL Get current data source](sql-get-current-data-source.md)  
[SQL LOGIN](sql-login.md)  
[SQL LOGOUT](sql-logout.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 989 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


