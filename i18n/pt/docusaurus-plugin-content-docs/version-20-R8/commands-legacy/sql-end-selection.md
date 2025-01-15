---
id: sql-end-selection
title: SQL End selection
slug: /commands/sql-end-selection
displayed_sidebar: docs
---

<!--REF #_command_.SQL End selection.Syntax-->**SQL End selection**  : Boolean<!-- END REF-->
<!--REF #_command_.SQL End selection.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | Limites do conjunto resultado atingidos |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SQL End selection.Summary-->O comando SQL End selection é utiliza para determinar se os limites do resultado obtido foram alcançado.<!-- END REF-->

#### Exemplo 

O código abaixo conecta-se a uma fonte de dados externos (Oracle) utilizando os seguintes parâmetros:

![](../assets/en/commands/pict33359.en.png)

```4d
 var vNome : Text
 
 SQL LOGIN("Teste_Oracle";"Luis";"pwd")
 If(OK=1)
    SQL EXECUTE("SELECT ename FROM emp";vNome)
    While(Not(SQL End selection))
       SQL LOAD RECORD
    End while
    SQL LOGOUT
 End if
```

Este código devolverá na variável 4D *vNome* os nomes (ename) armazenados na tabela emp.


#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 821 |
| Thread-seguro | &cross; |


