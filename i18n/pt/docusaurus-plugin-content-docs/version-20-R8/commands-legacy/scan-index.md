---
id: scan-index
title: SCAN INDEX
slug: /commands/scan-index
displayed_sidebar: docs
---

<!--REF #_command_.SCAN INDEX.Syntax-->**SCAN INDEX** ( *campo* ; *numero* {; > ou <} )<!-- END REF-->
<!--REF #_command_.SCAN INDEX.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| campo | Field | &#8594;  | Campo indexado onde vai procurar o índice |
| numero | Integer | &#8594;  | Nº de registros  a retornar |
| > ou < | Operador | &#8594;  | >a partir do começo do índice, |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SCAN INDEX.Summary-->SCAN INDEX retorna uma seleção de *numero* de registros da *tabela*.<!-- END REF--> Se passa <, SCAN INDEX retorna o *numero* de registros a partir do final do índice (valores superiores). Se passa >, SCAN INDEX retorna *numero* de registros a partir do início do índice (valores inferiores). Este comando é muito eficiente porque utiliza o índice para realizar a operação.  

**Nota**: a seleção que é obtida não está ordenada.  
  
SCAN INDEX funciona unicamente com campos indexados. Este comando modifica a seleção atual da tabela para o processo atual, mas não há registro atual.  
  
Se especifica um número de registros superior ao número de registros presentes na tabela, SCAN INDEX devolverá todos os registros.

##### 

**Nota:** Este comando não é compatível com campos tipo Objeto

#### Exemplo 

O seguinte exemplo envia cartas aos 50 piores clientes e aos 50 melhores clientes:  

```4d
 SCAN INDEX([Clientes]TotalVencido;50;<) // Obter a lista dos 50 piores clientes
 &NBSP;ORDER BY([Clientes]CodigoPostal;>) // Ordenar por código postal
 &NBSP;FORM SET OUTPUT([Clientes];"Advertência")
 &NBSP;PRINT SELECTION([Clientes]) // Imprimir as cartas
 &NBSP;SCAN INDEX([Clientes]TotalVencido;50;>) // Obter a lista dos 50 melhores clientes
 &NBSP;ORDER BY([Clientes]CodigoPostal;>) // Ordenar por código postal
 &NBSP;FORM SET OUTPUT([Clientes];"Carta de agradecimento")
 &NBSP;PRINT SELECTION([Clientes]) // Imprimir as cartas
```
  
  

#### Ver também 

[ORDER BY](order-by.md)  
[QUERY](query.md)  
[REDUCE SELECTION](reduce-selection.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 350 |
| Thread-seguro | &check; |
| Modificar o registro atual ||
| Modificar a seleção atual ||


