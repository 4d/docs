---
id: copy-set
title: COPY SET
slug: /commands/copy-set
displayed_sidebar: docs
---

<!--REF #_command_.COPY SET.Syntax-->**COPY SET** ( *srcCon* ; *dstCon* )<!-- END REF-->
<!--REF #_command_.COPY SET.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| srcCon | Text | &#8594;  | Nombre del conjunto fuente |
| dstCon | Text | &#8594;  | Nombre del conjunto de destino |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.COPY SET.Summary-->El comando COPY SET copia el contenido del conjunto *srcCon* en el conjunto *dstCon*.<!-- END REF--> 

Cada uno de estos conjuntos pueden ser procesos, interprocesos o de tipo local/cliente. Los dos conjuntos no tienen que ser del mismo tipo (como se muestra en los ejemplos a continuación), siempre y cuando ambos sean visibles en la máquina. Para más información acerca de este punto, consulte "*Visibilidad de Conjuntos*".

#### Ejemplo 1 

El siguiente ejemplo, copia el conjunto "ConjuntoA", en el conjunto *"ConjuntoB"*:

```4d
 COPY SET("ConjuntoA";"ConjuntoB")
```

#### Ejemplo 2 

El siguiente ejemplo en Cliente/Servidor, copia el conjunto proceso "ConjuntoA", conservado en el equipo servidor, en el conjunto local *"$ConjuntoB",* conservado en el equipo cliente:

```4d
 COPY SET("ConjuntoA";"$ConjuntoB")
```

#### Ver también 

*Conjuntos*  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 600 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


