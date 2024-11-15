---
id: add-to-date
title: Add to date
slug: /commands/add-to-date
displayed_sidebar: docs
---

<!--REF #_command_.Add to date.Syntax-->**Add to date** ( *data* ; *anos* ; *meses* ; *dias* ) : Date<!-- END REF-->
<!--REF #_command_.Add to date.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| data | Date | &#8594;  | Data a qual adicionar dias, meses e anos |
| anos | Integer | &#8594;  | Número de anos a adicionar a data |
| meses | Integer | &#8594;  | Número de meses a adicionar a data |
| dias | Integer | &#8594;  | Números de dias a adicionar a data |
| Resultado | Date | &#8592; | Data resultante |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Add to date.Summary-->O comando Add to date adiciona *anos*, *meses,* e *dias* a data passada em *data*, depois retorna a data resultante.<!-- END REF-->

Mesmo que você possa utilizar os [Self](self.md) para adicionar dias a uma data, Add to date lhe permite rapidamente adicionar meses e anos sem ter que lidar com o número de dias ao mês ou anos bissextos (como seria feito quando utiliza o operador + em datas).

#### Exemplo 

```4d
  // Esta linha calcula a data dentro de um ano, ou mesmo dia
 $vdInUmano:=Add to date(Current date;1;0;0)
 
  // Esta linha calcula a data ou próximo mês, ou mesmo dia
 $vdProximoMes:=Add to date(Current date;0;1;0)
 
  // Esta linha faz o mesmo que $vdAmanhã:=Current date+1
 $vdAmanhã:=Add to date(Current date;0;0;1)
```
