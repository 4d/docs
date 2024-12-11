---
id: regenerate-missing-table
title: REGENERATE MISSING TABLE
slug: /commands/regenerate-missing-table
displayed_sidebar: docs
---

<!--REF #_command_.REGENERATE MISSING TABLE.Syntax-->**REGENERATE MISSING TABLE** ( *nomeTabela* )<!-- END REF-->
<!--REF #_command_.REGENERATE MISSING TABLE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeTabela | Text | &#8594;  | Nome de tabela não encontrada a regenerar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.REGENERATE MISSING TABLE.Summary-->O comando REGENERATE MISSING TABLE reconstrui a tabela não encontrada cujo nome é passado no parâmetro *nomTabela*.<!-- END REF--> Quando se reconstrui uma tabela não encontrada, ela se torna visível no editor de estrutura e seus dados são acessíveis novamente.  
  
As tabelas não encontradas são tabelas cujos dados estão presentes no arquivo de dados mas que não existem a nível da estrutura. Pode identificar as tabelas não encontradas que possam estar presentes, utilizando o comando [GET MISSING TABLE NAMES](get-missing-table-names.md).  
  
Se a tabela designada pelo parâmetro *nomTabela* não for uma tabela faltante do banco, o comando não faz nada.

#### Exemplo 

Este método regenera todas as tabelas não encontradas eventualmente presentes no banco:

```4d
 ARRAY TEXT($arrMissingTables;0)
 GET MISSING TABLE NAMES($arrMissingTables)
 $SizeArray:=Size of array($arrMissingTables)
 If($SizeArray#0)
  //Preenche o array com os nomes de todas as tabelas no banco de dados.
    ARRAY TEXT(arrTables;Last table number)
    If(Last table number>0) //Se houver tabelas
       For($vlTables;Size of array(arrTables);1;-1)
          If(Is table number valid($vlTables))
             arrTables{$vlTables}:=Table name($vlTables)
          Else
             DELETE FROM ARRAY(arrTables;$vlTables)
          End if
       End for
    End if
    For($i;1;$SizeArray)
       If(Find in array(arrTables;$arrMissingTables{$i})=-1)
          CONFIRM("Regenerar a tabela"+$arrMissingTables{$i}+"?")
          If(OK=1)
             REGENERATE MISSING TABLE($arrMissingTables{$i})
          End if
       Else
          ALERT("Impossível regenerar a tabela "+$arrMissingTables{$i}+" porque já existe uma tabela com esse nome no banco de dados.")
       End if
    End for
 Else
    ALERT("Não há tabelas a regenerar.")
 End if
```

#### Ver também 

[GET MISSING TABLE NAMES](get-missing-table-names.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1126 |
| Thread-seguro | &check; |
| Proibido no servidor ||


