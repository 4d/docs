---
id: log
title: Log
slug: /commands/log
displayed_sidebar: docs
---

<!--REF #_command_.Log.Syntax-->**Log** ( *Numero* ) : Real<!-- END REF-->
<!--REF #_command_.Log.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Numero | Real | &#8594;  | Número para el cual devolver el logaritmo |
| Resultado | Real | &#8592; | Logaritmo del número |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Log.Summary-->Log devuelve el logaritmo neperiano de *número*.<!-- END REF--> Log es la función inversa de Exp.

**Nota:** 4D ofrece la constante predefinida *e number* (2.71828...).

#### Ejemplo 

La siguiente línea muestra 1:

```4d
 ALERT(String(Log(Exp(1)))
```

#### Ver también 

[Exp](exp.md)  