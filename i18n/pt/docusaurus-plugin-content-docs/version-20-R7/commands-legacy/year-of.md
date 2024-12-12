---
id: year-of
title: Year of
slug: /commands/year-of
displayed_sidebar: docs
---

<!--REF #_command_.Year of.Syntax-->**Year of** ( *data* ) : Integer<!-- END REF-->
<!--REF #_command_.Year of.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| data | Date | &#8594;  | Data para a qual devolver o ano |
| Resultado | Integer | &#8592; | Número indicando o ano da data |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Year of.Summary-->O comando Year of retorna o ano de *data*.<!-- END REF-->

#### Exemplo 1 

O exemplo a seguir mostra o uso de Year of. Os resultados são atribuídos à variável *vResult*. 

```4d
 vResult:=Year of(!25/12/92!) // vResult toma o valor 1992
 vResult:=Year of(!25/12/1992!) // vResult toma o valor 1992
 vResult:=Year of(!25/12/1892!) // vResult toma o valor 1892
 vResult:=Year of(!25/12/2092!) // vResult toma o valor 2092
 vResult:=Year of(Current date) // vResult toma o valor do ano da data atual
```

#### Exemplo 2 

Ver o exemplo do comando [Current date](current-date.md "Current date"). 

#### Ver também 

[Day of](day-of.md)  
[Month of](month-of.md)  