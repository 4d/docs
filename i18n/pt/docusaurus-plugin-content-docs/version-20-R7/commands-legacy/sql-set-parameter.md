---
id: sql-set-parameter
title: SQL SET PARAMETER
slug: /commands/sql-set-parameter
displayed_sidebar: docs
---

<!--REF #_command_.SQL SET PARAMETER.Syntax-->**SQL SET PARAMETER** ( *objeto* ; *paramTipo* )<!-- END REF-->
<!--REF #_command_.SQL SET PARAMETER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objeto | Object | &#8594;  | Objeto 4D a ser usado (variável, array ou campo) |
| paramTipo | Integer | &#8594;  | Tipo de parâmetro |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.SQL SET PARAMETER.Summary-->O comando SQL SET PARAMETER permite o uso do valor de uma variável, array ou campo 4D nas pedidos SQL.<!-- END REF-->

**Nota**: também é possível inserir diretamente o nome de um objeto 4D a utilizar (variável, array ou campo) entre os caracteres << e >> no texto do pedido (ver exemplo 1). Para maior informação, consulte a seção *Introdução aos comandos SQL* .  
* No parâmetro *objeto*, passe o objeto 4D (variável, array ou campo) a utilizar no pedido
* No parâmetro *tipoParam*, passe o tipo SQL do parâmetro. Pode passar um valor ou utilizar uma das seguintes constantes, localizadas no tema “*SQL*”  
| Constante        | Tipo          | Valor | Comentário                                                                                                                         |  
| ---------------- | ------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------- |  
| SQL param in     | Inteiro longo | 1     |                                                                                                                                    |  
| SQL param in out | Inteiro longo | 2     | Utilizável unicamente no contexto de um procedimento armazenado SQL (entrada-saída parâmetro definido no procedimento armazenado). |  
| SQL param out    | Inteiro longo | 4     | Utilizável unicamente no contexto de um procedimento armazenado SQL (parâmetro saída definido no procedimento armazenado).         |

O valor do objeto 4D substitui ao caractere *?* no pedido SQL (Sintaxe padrão). Se a solicitação contiver mais de um caractere *?*, serão necessárias várias chamadas a SQL SET PARAMETER. Os valores dos objetos 4D serão atribuídos sequencialmente no pedido, de acordo com a ordem de execução dos comandos.

**Atenção:** Este comando se utiliza para lidar com os *parâmetros* passados a petição SQL. Não é possível utilizar o tipo SQL param out para associar um objeto 4D ao resultado de uma petição SQL. O resultado de uma petição SQL se recupera, por exemplo, utilizando o parâmetro *objAssoc* do comando [SQL EXECUTE](sql-execute.md) (ver *Introdução aos comandos SQL*). O comando **SQL SET PARAMETER** se utiliza geralmente para definir os parâmetros passados a petição (SQL param in); os tipos SQL param out e SQL param in out estão reservados para ser utilizados no contexto dos procedimentos armazenados SQL que podem devolver parâmetros. 

#### Exemplo 1 

Este exemplo é utilizado para executar um pedido SQL ao qual chama diretamente às variáveis 4D associadas: 

```4d
 var MeuTexto : Text
 var MeuInteiroLongo : Integer
 
 SQL LOGIN("mysql";"root";"")
 SQLStmt:="insert into app_testTable (alpha_field, longint_field) VALUES (<>, <>)"
 For(vContador;1;10)
    MeuTexto:="Text"+String(vContador)
    MeuInteiroLongo:=vContador
    SQL EXECUTE(SQLStmt)
    SQL CANCEL LOAD
 End for
 SQL LOGOUT
```

#### Exemplo 2 

O mesmo exemplo que o anterior, mas utilizando o comando SQL SET PARAMETER : 

```4d
 var MeuTexto : Text
 var MeuInteiroLongo : Integer
 
 SQL LOGIN("mysql";"root";"")
 SQLStmt:="insert into app_testTable (alpha_field, longint_field) VALUES (?,?)"
 For(vCounter;1;10)
    MeuTexto:="Text"+String(vContador)
    MeuInteiroLongo:=vCounter
    SQL SET PARAMETER(MyText;SQL param in)
    SQL SET PARAMETER(MyLongint;SQL param in)
    SQL EXECUTE(SQLStmt)
    SQL CANCEL LOAD
 End for
 SQL LOGOUT
```

#### Variáveis e conjuntos do sistema 

Se o comando tiver sido executado corretamente, a variável Sistema OK retorna 1\. Do contrário, retorna 0.  
