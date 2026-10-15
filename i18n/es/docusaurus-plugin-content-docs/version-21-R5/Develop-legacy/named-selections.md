---
id: named-selections
title: Selecciones nombradas
slug: /Develop/named-selections
displayed_sidebar: docs
---



## Información general

Las selecciones nombradas ofrecen una forma sencilla de manipular varias selecciones simultáneamente. Una selección nombrada es una lista ordenada de registros de una tabla en un proceso. A esta lista ordenada se le puede asignar un nombre y mantenerla en memoria. Las selecciones nombradas ofrecen un medio sencillo de conservar en memoria el orden de la selección y el registro actual de la selección.

Los siguientes comandos le permiten trabajar con selecciones nombradas:

- [`COPY NAMED SELECTION`](../commands/copy-named-selection)
- [`CUT NAMED SELECTION`](../commands/cut-named-selection)
- [`USE NAMED SELECTION`](../commands/use-named-selection)
- [`CLEAR NAMED SELECTION`](../commands/clear-named-selection)
- [`CREATE SELECTION FROM ARRAY`](../commands/create-selection-from-array)


Las selecciones nombradas se crean con los comandos [`COPY NAMED SELECTION`](../commands/copy-named-selection), [`CUT NAMED SELECTION`](../commands/cut-named-selection) y [`CREATE SELECTION FROM ARRAY`](../commands/create-selection-from-array). Las selecciones nombradas se utilizan generalmente para trabajar sobre una o varias selecciones y para guardar y restaurar posteriormente una selección ordenada. Puede haber muchas selecciones nombradas para cada tabla en un proceso. Para reutilizar una selección nombrada como selección actual, llame a [`USE NAMED SELECTION`](../commands/use-named-selection). Cuando haya terminado con una selección nombrada, utilice [`CLEAR NAMED SELECTION`](../commands/clear-named-selection).

:::note

Combinar la instrucción `SET QUERY DESTINATION(Into named selection;namedselection)` con un comando de búsqueda (por ejemplo [`QUERY`](../commands/query)) también puede utilizarse para crear una selección nombrada. Consulte la descripción del comando [`SET QUERY DESTINATION`](../commands/set-query-destination).

:::

Las selecciones nombradas pueden tener un alcance local, de proceso o interproceso.

Una selección nombrada es local cuando su nombre va precedido de un signo de dólar. Cuando su nombre no va precedido de ningún símbolo, es una selección nombrada de proceso, y es una selección nombrada interproceso si su nombre va precedido de los símbolos (<>) — un signo "menor que" seguido de un signo "mayor que".

El alcance de una selección nombrada interproceso es idéntico al alcance de una variable interproceso (*obsoleta*). A una selección nombrada interproceso se puede acceder desde cualquier proceso. Con 4D en modo remoto y 4D Server, una selección nombrada interproceso solo está disponible para los procesos del cliente que la creó. Una selección nombrada interproceso no está disponible para otras máquinas cliente.
Una selección nombrada de proceso solo está disponible dentro del proceso en el que se creó y en el servidor.
Una selección nombrada local se define para el proceso que la creó y no es visible en el servidor.

:::note

La creación de una selección nombrada requiere acceso a la selección de la tabla. Dado que las selecciones se conservan en el servidor y un proceso local no tiene acceso a los datos del servidor, no utilice selecciones nombradas dentro de procesos locales.

:::

## Visibilidad de las selecciones nombradas

La siguiente tabla indica los principios relativos a la visibilidad de las selecciones nombradas en función de su alcance y del lugar donde se crearon:


||Proceso cliente|Otros procesos en el mismo cliente|Otros clientes|Proceso servidor|Otros procesos en el servidor|
|---|---|---|---|---|---|
|Creación en un proceso cliente|||||| 	 
|$test|X|||||
|test|X|||X(Trigger)	 ||
|<>test| X| X	||||
|Creación en un proceso servidor|||||| 	 	 	 
|$test||||X||
|test|||| X	|| 
|<>test	|||| X|X|


### Selecciones nombradas y conjuntos

Las diferencias entre los [conjuntos](./sets.md) y las selecciones nombradas son:

- Una selección nombrada es una lista ordenada de registros; un conjunto no lo es.
- Los conjuntos son muy eficientes en cuanto a memoria, porque solo requieren un bit por cada registro del archivo. Las selecciones nombradas requieren 4 bytes por cada registro de la selección.
- A diferencia de los conjuntos, las selecciones nombradas no pueden guardarse en disco.
- Los conjuntos disponen de las operaciones estándar [`INTERSECTION`](../commands/intersection), [`UNION`](../commands/union) y [`DIFFERENCE`](../commands/difference); las selecciones nombradas no pueden combinarse con otras selecciones nombradas.


Las similitudes entre las selecciones nombradas y los conjuntos son:

- Al igual que un conjunto, una selección nombrada existe en memoria.
- Una selección nombrada y un conjunto almacenan referencias a un registro. Si los registros se modifican o eliminan, la selección nombrada o el conjunto puede volverse inválido.
- Al igual que un conjunto, una selección nombrada "recuerda" el registro actual tal como estaba en el momento en que se creó la selección nombrada.
