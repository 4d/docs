---
id: sets
title: Conjuntos
slug: /Develop/sets
displayed_sidebar: docs
---


Los conjuntos le ofrecen un medio potente y rápido de manipular las selecciones de registros. Además de la posibilidad de crear conjuntos, relacionarlos con la selección actual, así como almacenar, cargar y borrar conjuntos, 4D ofrece tres operaciones estándar sobre conjuntos:

- Intersección
- Unión
- Diferencia.


## Conjuntos y selección actual

Un conjunto es una representación compacta de una selección de registros. La idea de los conjuntos está estrechamente ligada a la idea de la selección actual. Los conjuntos se utilizan generalmente para los siguientes propósitos:

- Guardar y restaurar posteriormente una selección cuando el orden no importa
- Acceder a la selección que un usuario ha realizado en pantalla (el `UserSet`)
- Realizar una operación lógica entre selecciones.

La selección actual es una lista de referencias que apunta a cada registro seleccionado actualmente. La lista existe en memoria. Solo los registros seleccionados actualmente están en la lista. Una selección no contiene realmente los registros, sino únicamente una lista de referencias a los registros. Cada referencia a un registro ocupa 4 bytes en memoria. Cuando trabaja sobre una tabla, siempre trabaja con los registros de la selección actual. Cuando una selección se ordena, solo se reorganiza la lista de referencias. Solo hay una selección actual para cada tabla dentro de un proceso.

Al igual que una selección actual, un conjunto representa una selección de registros. Un conjunto lo hace utilizando una representación muy compacta para cada registro. Cada registro se representa mediante un bit (un octavo de byte). Las operaciones que utilizan conjuntos son muy rápidas, porque los ordenadores pueden realizar operaciones sobre bits muy rápidamente. Un conjunto contiene un bit por cada registro de la tabla, esté o no incluido el registro en el conjunto. De hecho, cada bit es igual a 1 o 0, según el registro esté o no en el conjunto.

Los conjuntos son muy económicos en cuanto a espacio de RAM. El tamaño de un conjunto, en bytes, siempre es igual al número total de registros de la tabla dividido por 8. Por ejemplo, si crea un conjunto para una tabla que contiene 10.000 registros, el conjunto ocupa 1.250 bytes, es decir, alrededor de 1,2 K en RAM.

Puede haber muchos conjuntos para cada tabla. De hecho, los conjuntos pueden guardarse en disco por separado de la base de datos. Para cambiar un registro perteneciente a un conjunto, primero debe utilizar el conjunto como la selección actual y luego modificar el registro o registros.

Un conjunto nunca está en un orden clasificado — los registros simplemente se indican como pertenecientes o no al conjunto. Por otro lado, una selección nombrada está en orden clasificado, pero requiere más memoria en la mayoría de los casos. Para más información sobre las selecciones nombradas, consulte la sección Selecciones nombradas.

Un conjunto "recuerda" qué registro era el registro actual en el momento en que se creó el conjunto. La siguiente tabla compara los conceptos de la selección actual y de los conjuntos:

|Comparación|Selección actual|Conjuntos|
|---|---|---|
|Número por tabla|1|0 a varios|
|Ordenable|Sí|No|
|Puede guardarse en disco|No|Sí|
|RAM por registro (en bytes)|Número de registros seleccionados * 4|Número total de registros/8|
|Combinable|	No|	Sí|
|Contiene el registro actual|	Sí|	Sí, tal como estaba en el momento en que se creó el conjunto|

Cuando crea un conjunto, este pertenece a la tabla a partir de la cual lo creó. Las operaciones sobre conjuntos solo pueden realizarse entre conjuntos que pertenezcan a la misma tabla.

Los conjuntos son independientes de los datos. Esto significa que, tras realizar cambios en un archivo, un conjunto puede dejar de ser exacto. Hay muchas operaciones que pueden hacer que un conjunto sea inexacto. Por ejemplo, si crea un conjunto de todas las personas de Nueva York y luego cambia los datos de uno de esos registros a "Boston", el conjunto no cambiaría, porque el conjunto es solo una representación de una selección de registros. Eliminar registros y reemplazarlos por nuevos también cambia un conjunto, al igual que el compactado de los datos. Solo se puede garantizar que los conjuntos sean exactos mientras los datos de la selección original no hayan sido modificados.

## Conjuntos de proceso e interproceso

Puede tener los siguientes tres tipos de conjuntos:

- **Conjuntos de proceso**: Un conjunto de proceso solo puede ser accedido por el proceso en el que se ha creado. `LockedSet` es un conjunto de proceso. Los conjuntos de proceso se borran en cuanto termina el método de proceso. Los conjuntos de proceso no necesitan ningún prefijo especial en el nombre.
- **Conjuntos interproceso**: Un conjunto es un conjunto interproceso si el nombre del conjunto va precedido de los símbolos (<>) — un signo "menor que" seguido de un signo "mayor que". Un conjunto interproceso es "visible" para todos los procesos de la base de datos.
En modo cliente/servidor, un conjunto interproceso es "visible" para los procesos de la máquina donde se creó (cliente o servidor).
El nombre de un conjunto interproceso debe ser único en la base de datos.
- **Conjuntos locales/conjuntos cliente**: Los conjuntos locales/cliente están destinados a utilizarse en modo cliente/servidor. El nombre de un conjunto local/cliente siempre va precedido del signo de dólar ($) -- excepto para el conjunto sistema UserSet. A diferencia de otros tipos de conjuntos, un conjunto local/cliente se almacena en la máquina cliente.

:::note Notas

- El tamaño máximo de un nombre de conjunto es de 255 caracteres (excluyendo los símbolos <> y $).
- Para más información sobre el uso de conjuntos en modo cliente/servidor, consulte 4D Server, Conjuntos y selecciones nombradas.

:::


## Visibilidad de los conjuntos

La siguiente tabla indica los principios relativos a la visibilidad de los conjuntos en función de su alcance y del lugar donde se crearon:

 

||Proceso cliente|Otros procesos en el mismo cliente|Otros clientes|Proceso servidor|Otros procesos en el servidor|
|---|---|---|---|---|---|
|Creación en un proceso cliente	||||||
|$test|X	|||||
|test	| X||| X(Trigger)	||
|<>test	| X|X	||||
|Creación en un proceso servidor||||||
|$test|||| X||
|test	||||X||
|<>test||||X| X|


## Conjuntos y transacciones

Un conjunto puede crearse dentro de una [transacción](./transactions.md). Es posible crear un conjunto de los registros creados dentro de una transacción y un conjunto de registros creados o modificados fuera de una transacción. Cuando la transacción finaliza, el conjunto creado durante la transacción debería borrarse, porque puede no ser una representación exacta de los registros, especialmente si la transacción fue cancelada.

## Ejemplo

El siguiente ejemplo elimina los registros duplicados de una tabla que contiene información sobre personas. Un bucle For...End for recorre todos los registros, comparando el registro actual con el registro anterior. Si el nombre, la dirección y el código postal son iguales, el registro se añade a un conjunto. Al final del bucle, el conjunto se convierte en la selección actual y la (antigua) selección actual se elimina:

```4d
 CREATE EMPTY SET([People];"Duplicates")
  // Crea un conjunto vacío para los registros duplicados
 ALL RECORDS([People])
  // Selecciona todos los registros
  // Ordena los registros por código postal, dirección y nombre para
  // que los duplicados queden unos junto a otros
 ORDER BY([People];[People]ZIP;>;[People]Address;>;[People]Name;>)
  // Inicializa las variables que contienen los campos del registro anterior
 $Name:=[People]Name
 $Address:=[People]Address
 $ZIP:=[People]ZIP
  // Va al segundo registro para compararlo con el primero
 NEXT RECORD([People])
 For($i;2;Records in table([People]))
  // Bucle a través de los registros a partir del 2
  // Si el nombre, la dirección y el código postal son iguales a los del
  // registro anterior, entonces es un registro duplicado.
    If(([People]Name=$Name) & ([People]Address=$Address) & ([People]ZIP=$ZIP))
  // Añade el registro actual (el duplicado) al conjunto
       ADD TO SET([People];"Duplicates")
    Else
  // Guarda el nombre, la dirección y el código postal de este registro para compararlos con el siguiente
       $Name:=[People]Name
       $Address:=[People]Address
       $ZIP:=[People]ZIP
    End if
  // Pasa al siguiente registro
    NEXT RECORD([People])
 End for
  // Utiliza los registros duplicados que se encontraron
 USE SET("Duplicates")
  // Elimina los registros duplicados
 DELETE SELECTION([People])
  // Retira el conjunto de la memoria
 CLEAR SET("Duplicates")
```

Como alternativa a eliminar inmediatamente los registros al final del método, podría mostrarlos en pantalla o imprimirlos, para poder realizar una comparación más detallada.


## El conjunto sistema UserSet

4D mantiene un conjunto sistema llamado `UserSet`, que almacena automáticamente la selección más reciente de registros resaltados en pantalla por el usuario. Así, puede mostrar un grupo de registros con [`MODIFY SELECTION`](../commands/modify-selection) o [`DISPLAY SELECTION`](../commands/display-selection), pedir al usuario que seleccione de entre ellos y convertir el resultado de esa selección manual en una selección o en un conjunto que usted nombre.

:::info 4D Server

Aunque su nombre no comienza por el carácter "$", el conjunto sistema `UserSet` es un conjunto cliente. Por lo tanto, al utilizar [`INTERSECTION`](../commands/intersection), [`UNION`](../commands/union) y [`DIFFERENCE`](../commands/difference), asegúrese de comparar `UserSet` únicamente con conjuntos cliente.

:::

Solo hay un `UserSet` para un [proceso](../Develop/processes.md). Cada tabla no tiene su propio `UserSet`. `UserSet` pasa a ser "propiedad" de una tabla cuando se muestra una selección de registros para esa tabla.

4D gestiona el conjunto `UserSet` para los formularios lista mostrados en modo Diseño o mediante los comandos [`MODIFY SELECTION`](../commands/modify-selection) o [`DISPLAY SELECTION`](../commands/display-selection). Sin embargo, este mecanismo no está activo para los [subformularios](../FormObjects/subform_overview.md).

El siguiente método ilustra cómo puede mostrar registros, permitir que el usuario seleccione algunos de ellos y luego utilizar UserSet para mostrar los registros seleccionados:

```4d
  // Muestra todos los registros y permite que el usuario seleccione cualquier número de ellos.
  // Luego muestra esta selección utilizando UserSet para cambiar la selección actual.
 FORM SET OUTPUT([People];"Display") // Define el formulario de salida
 ALL RECORDS([People]) // Selecciona todas las personas
 ALERT("Pulse Ctrl o Comando y haga clic para seleccionar las personas necesarias.")
 DISPLAY SELECTION([People]) // Muestra las personas
 USE SET("UserSet") // Utiliza las personas que se seleccionaron
 ALERT("Ha elegido las siguientes personas.")
 DISPLAY SELECTION([People]) // Muestra las personas seleccionadas
```

## El conjunto sistema LockedSet

Los comandos [`APPLY TO SELECTION`](../commands/apply-to-selection), [`DELETE SELECTION`](../commands/delete-selection), [`ARRAY TO SELECTION`](../commands/array-to-selection) y [`JSON TO SELECTION`](../commands/json-to-selection) crean un conjunto llamado `LockedSet` cuando se utilizan en un entorno multiproceso.

Los comandos de búsqueda también crean un conjunto sistema `LockedSet` cuando encuentran registros bloqueados en el contexto de "búsqueda y bloqueo" (ver el comando [`SET QUERY AND LOCK`](../commands/set-query-and-lock)).

`LockedSet` indica qué registros fueron bloqueados durante la ejecución del comando.
