---
id: get-highlighted-records
title: GET HIGHLIGHTED RECORDS
slug: /commands/get-highlighted-records
displayed_sidebar: docs
---

<!--REF #_command_.GET HIGHLIGHTED RECORDS.Syntax-->**GET HIGHLIGHTED RECORDS** ( {*tabela* ;} *nomConjunto* )<!-- END REF-->
<!--REF #_command_.GET HIGHLIGHTED RECORDS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual os registros selecionados serão lidos. Se omitido, a tabela do formulário atual |
| nomConjunto | Text | &#8594;  | Conjunto onde os nomes selecionados serão armazenados |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET HIGHLIGHTED RECORDS.Summary-->O comando GET HIGHLIGHTED RECORDS guarda, no conjunto designado pelo parâmetro *nomConjunto,* os registros selecionados (ou seja, os registros selecionados pelo usuário no formulário listado) da *tabela* passada como parâmetro.<!-- END REF--> Se o parâmetro *tabela* for omitido, é utilizada a tabela do formulário ou do subformulário atual.  
  
Em modo Desenho ou durante a execução dos comandos [DISPLAY SELECTION](display-selection.md) /[MODIFY SELECTION](modify-selection.md), este comando pode ser substituído chamando o conjunto sistema UserSet mantendo automaticamente por 4D. Entretanto, como este comando permite atribuir a tabela da qual recuperar os registros selecionados, o comando GET HIGHLIGHTED RECORDS também pode administrar as seleções de registros em subformulários. Neste caso, as seleções de subformulários podem vir de diferentes tabelas. Para maior informação sobre o conjunto UserSet, consulte a seção *Conjuntos*.  
  
O comando GET HIGHLIGHTED RECORDS também pode ser chamado fora do contexto de um formulário; entretanto, o conjunto retornado está vazio.  
  
O conjunto designado por *nomConjunto* pode ser local/cliente, processo ou interprocesso.  
  
**Nota**: Em formulários incluídos, o comando GET HIGHLIGHTED RECORDS retorna um conjunto vazio se o subformulário não tiver a propriedade de seleção **Várias linhas**. Neste caso, para conhecer a linha selecionada, deve utilizar o comando [Selected record number](selected-record-number.md).

#### Exemplo 

Este método indica quantos registros estão selecionados no subformulário que mostra os registros da tabela \[CDs\]: 

```4d
 GET HIGHLIGHTED RECORDS([CDs];"$highlight")
 ALERT(String(Records in set("$highlight"))"+"registros selecionados.")
 CLEAR SET("$highlight")
```

#### Variáveis e conjuntos do sistema 

Se o comando for executado corretamente, a variável sistema OK assume o valor 1\. Do contrário, assume o valor 0.

#### Ver também 

[HIGHLIGHT RECORDS](highlight-records.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 902 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


