---
id: log
title: Log
slug: /commands/log
displayed_sidebar: docs
---

<!--REF #_command_.Log.Syntax-->**Log** ( *numero* ) : Real<!-- END REF-->
<!--REF #_command_.Log.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| numero | Real | &#8594;  | Número que você deseja obter o log |
| Resultado | Real | &#8592; | Log de número |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Log.Summary-->Log retorna o logaritmo neperiano de *numero*.<!-- END REF--> Log é a função inversa de [Exp](exp.md).

**Nota:** 4D oferece a constante pré-definida *e numero* (2.71828...).

#### Exemplo 

A linha a seguir mostra 1:

```4d
 ALERT(String(Log(Exp(1)))
```

#### Ver também 

[Exp](exp.md)  