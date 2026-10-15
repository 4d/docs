---
id: records
title: Registros
slug: /Develop/records
displayed_sidebar: docs
---



Los registros y las selecciones son herramientas fundamentales que permiten a los desarrolladores 4D acceder a los datos de la base 4D y manipularlos. Son **conceptos heredados**. Se anima a los nuevos desarrollos a basarse en la [arquitectura ORDA moderna](../ORDA/overview.md). No obstante, siguen siendo plenamente funcionales y se utilizan ampliamente en los desarrollos 4D existentes.

## Trabajar con registros

:::note

La [tecnología ORDA](../ORDA/overview.md) crea, modifica o elimina los registros subyacentes a nivel de la base de datos cuando es necesario. Por ejemplo, se crea un registro cuando se [crea una nueva entidad](../ORDA/entities.md#creating-an-entity).

:::



### Añadir nuevos registros

En las aplicaciones 4D, se añaden registros utilizando:

- Comandos: [`CREATE RECORD`](../commands/create-record) para crear un registro en memoria (debe utilizar [`SAVE RECORD`](../commands/save-record) para guardar realmente el nuevo registro en los datos); [`ADD RECORD`](../commands/add-record) para abrir un formulario de entrada al usuario, listo para la introducción de datos; [`ARRAY TO SELECTION`](../commands/array-to-selection) para crear registros a partir de los datos correspondientes de un array.
- La función de importación de datos utilizando los comandos del [tema Importación y exportación](../commands/theme/Import-and-Export) o el cuadro de diálogo de importación.
- Acción estándar: [`Add Subrecord`](../Desktop-legacy/standard-actions#addsubrecord) que añade un registro a una lista.
- Comandos de interfaz y menú en el IDE de 4D: **Nuevo registro** y **Nuevo registro en lista** del menú **Registros**.

En la mayoría de los casos, el registro solo se crea en memoria y debe guardarlo explícitamente a través de la interfaz o mediante un comando como [`SAVE RECORD`](../commands/save-record) o la [acción estándar `accept`](../Desktop/standard-actions#accept) para guardar realmente el nuevo registro en los datos.



### Modificar registros

Se modifican los registros cuando se necesita actualizar información o cuando se descubre que la información introducida originalmente es incorrecta. Antes de modificar un grupo de registros, seleccione los registros a modificar como la [selección actual](./current-selection.md). Puede realizar una búsqueda para seleccionar los registros a modificar o seleccionar los registros después de resaltarlos en un [formulario de salida](../FormEditor/properties_FormProperties.md#form-type).

Si un registro está siendo modificado en otro proceso o por otro usuario (modo remoto), se dice que el registro está [bloqueado](#registros-bloqueados). Los registros bloqueados pueden verse, pero no pueden modificarse. Si abre un registro bloqueado, podrá ver las entradas de los campos, pero no podrá cambiar ningún dato.

En las aplicaciones 4D, se modifican los registros utilizando:

- Comandos: [`MODIFY RECORD`](../commands/add-record) para abrir un formulario de entrada al usuario, listo para modificar datos; [`ARRAY TO SELECTION`](../commands/array-to-selection) para modificar datos en registros seleccionados a partir de un array.
- La función de importación de datos utilizando los comandos del [tema Importación y exportación](../commands/theme/Import-and-Export) o el cuadro de diálogo de importación.
- Acción estándar: [`Edit Subrecord`](../Desktop/standard-actions#editsubrecord) que edita un registro en una lista.
- Comandos de interfaz y menú en el IDE de 4D: **Modificar registro** del menú **Registros** o doble clic en un formulario lista.

En la mayoría de los casos, el registro solo se modifica en memoria y debe guardarlo explícitamente a través de la interfaz o mediante un comando como [`SAVE RECORD`](../commands/save-record) o la [acción estándar `accept`](../Desktop/standard-actions#accept) para guardar realmente el registro editado en los datos.


### Actualizaciones globales

Se realiza una actualización global cuando se desea efectuar un cambio específico en un grupo de registros. Se realiza una actualización global para automatizar cambios en un grupo de registros que de otro modo serían tediosos y requerirían mucho tiempo. Por ejemplo, realizaría una actualización global si quisiera cambiar todos los precios de una tabla [Inventario] en un determinado porcentaje o dar formato a un campo numérico o alfa.

La actualización global se realiza "aplicando" una fórmula a la selección actual de registros. En otras palabras, la fórmula se utiliza para efectuar el cambio en cada registro de la selección actual. He aquí algunos ejemplos de fórmulas:

- La siguiente fórmula multiplica el campo Salario por 1,05. Podría utilizarse, por ejemplo, cuando entra en vigor un aumento de salario:

```4d
[Emp]Salary:=[Emp]Salary*1.05
```

- La siguiente utiliza una función integrada para poner en mayúsculas el contenido del campo Estado. Garantiza la uniformidad en la forma en que aparece Estado en las etiquetas e informes:

```4d
[Customer]State:=Uppercase([Customer]State)
```

- Esta fórmula incluye una función escrita por el usuario que pone la primera letra del campo Apellido en mayúscula y todas las letras restantes en minúscula.

```4d
[Emp]Last Name:=Capitalize([Emp]Last_Name)
```

La posibilidad de incluir funciones escritas por el usuario al realizar actualizaciones globales es una potente característica de 4D. Las fórmulas pueden contener funciones del lenguaje 4D así como métodos proyecto. Por razones de seguridad, el acceso a los métodos proyecto en las fórmulas está restringido por un [parámetro de seguridad](../settings/security.md#options) y/o el [comando `SET ALLOWED METHODS`](../commands/set-allowed-methods).

No puede escribir fórmulas más largas que una sola línea lógica; en otras palabras, no puede pulsar el retorno de carro e introducir una segunda línea. Sin embargo, los métodos declarados como utilizables en el editor de fórmulas pueden, por supuesto, constar de varias líneas.

Para realizar una actualización global, puede ejecutar una fórmula de actualización directamente mediante el comando [`EXECUTE FORMULA`](../commands/execute-formula) o mostrar el editor de fórmulas mediante el comando [`EDIT FORMULA`](../commands/edit-formula).

En el IDE de 4D, también puede utilizar el **editor de fórmulas** para escribir la fórmula que luego se aplicará a cada registro de la selección actual. Para ello, elija el comando **Aplicar fórmula...** del menú **Registros** y luego escriba su fórmula. También puede cargar una fórmula previamente guardada en disco como archivo (extensión .4fr).


### Eliminar registros

Es posible que desee eliminar un registro obsoleto o que ya no sea necesario. Si el registro es necesario pero los valores almacenados en él son incorrectos, debería modificar el registro en lugar de eliminarlo.

Puede eliminar registros de dos maneras:

- Eliminar un registro individualmente.
- Eliminar un conjunto de registros.

La eliminación de registros se realiza mediante las acciones estándar [`Delete Record`](../Desktop/standard-actions#deleterecord) o [`Delete Subrecord`](../Desktop/standard-actions#deletesubrecord) (eliminación en lista) o mediante los comandos [`DELETE RECORD`](../commands/delete-record) o [`DELETE SELECTION`](../commands/delete-selection).

En el IDE de 4D, también puede utilizar el comando **Borrar** del menú **Edición** así como las teclas de eliminación.

:::warning

La eliminación de registros es permanente y solo puede deshacerse restaurando una copia de seguridad de la base de datos. Cuando elimina registros, 4D muestra un cuadro de diálogo pidiéndole que confirme la eliminación.

:::

Antes de eliminar registros, cree una selección de los registros que desea eliminar. Si su selección incluye [registros bloqueados](#record-locking), la eliminación continuará pero los registros bloqueados no se eliminarán y permanecerán en la selección actual después de la eliminación. Debe esperar a que estos registros se desbloqueen (es decir, que ya no se utilicen) para eliminarlos. Los [comandos del tema "Bloqueo de registros"](../commands/theme/Record-Locking) pueden utilizarse para gestionar este tipo de escenario.

#### Registros eliminados en otro proceso

La selección actual puede alterarse por registros eliminados en otro proceso. Por ejemplo, mientras trabaja en su base de datos, podría iniciar otro proceso que elimine ciertos registros de una tabla. Los registros eliminados en ese proceso se retiran permanentemente de la tabla. Sin embargo, los registros que ve mientras trabaja con la base de datos pueden no reflejar esos cambios en la tabla hasta que se cree una nueva selección de registros.

Para ilustrar este punto, suponga que una tabla contiene cincuenta registros y que todos los registros están en la selección actual. En este punto, la barra de título del formulario de salida indica que hay "50 de 50" registros seleccionados. Si uno de los registros se elimina en otro proceso, la barra de título cambia para indicar que hay "50 de 49" registros seleccionados. ¡Ahora parece haber más registros en la selección actual que en la tabla! La barra de título se actualizará cuando cambie su selección actual.

Si intenta modificar o eliminar el registro eliminado, aparecerá un cuadro de diálogo indicando que el registro ha sido eliminado.

:::note 4D Server

Los registros eliminados por otro usuario tienen el mismo efecto sobre la selección actual. Los registros se eliminan de la tabla, pero no de la selección actual. Así, la selección actual puede parecer que contiene más registros de los que realmente existen en la tabla.

:::

### Números de registro

Hay tres números asociados a un registro:

- **Número de registro**: el número de registro es el número absoluto/físico de un registro. Este número lo devuelve el comando [`Record number`](../commands/record-number).
Se asigna automáticamente un número de registro a cada nuevo registro y permanece constante para el registro hasta que este se elimina. Los números de registro empiezan en cero. No son únicos porque los números de registro de los registros eliminados se reutilizan para nuevos registros. También cambian cuando la base de datos se [compacta](../MSC/compact.md) o se [repara](../MSC/repair.md).
- **Número de registro seleccionado**: el número de registro seleccionado es la posición del registro en la selección actual, por lo que depende de la selección actual. Si la selección se cambia u ordena, el número de registro seleccionado probablemente cambiará. La numeración del número de registro seleccionado empieza en uno (1). Este número lo devuelve el comando [`Selected record number`](../commands/selected-record-number).
- **Número de secuencia**: el número de secuencia es un número único no repetitivo que puede asignarse a un campo de un registro (mediante la propiedad **Autoincremento**, el atributo SQL AUTO_INCREMENT o el comando [`Sequence number`](../commands/sequence-number)). No se almacena automáticamente con cada registro. Empieza por defecto en 1 y se incrementa por cada nuevo registro que se crea. A diferencia de los números de registro, un número de secuencia no se reutiliza cuando se elimina un registro o cuando se compacta o repara una base de datos. Los números de secuencia proporcionan una forma de tener números de ID únicos para los registros. Si un número de secuencia se incrementa durante una transacción, el número no se decrementa si la transacción se cancela.

:::note Notas

- 4D no realiza ninguna comprobación cuando modifica el contador interno de numeración automática de una tabla mediante el comando [`SET DATABASE PARAMETER`](../commands/set-database-parameter). Si decrementa este contador, los nuevos registros creados pueden tener números que ya han sido asignados.
- No se recomienda utilizar números de secuencia para rellenar campos de clave primaria de ID único para los registros. Para crear ID de registro únicos, se recomienda encarecidamente utilizar UUID.

:::


### Pila de registros

Los comandos [`PUSH RECORD`](../commands/push-record) y [`POP RECORD`](../commands/pop-record) le permiten colocar ("push") registros en la pila de registros y retirarlos ("pop") de la pila.

Cada proceso tiene su propia pila de registros para cada tabla. 4D mantiene las pilas de registros por usted. Cada pila de registros es una pila de tipo último en entrar, primero en salir (LIFO). La capacidad de la pila está limitada por la memoria.

[`PUSH RECORD`](../commands/push-record) y [`POP RECORD`](../commands/pop-record) deben utilizarse con discreción. Cada registro que se coloca en la pila utiliza parte de la memoria libre. Colocar demasiados registros puede provocar una condición de memoria insuficiente o de pila llena.

4D vacía la pila de todos los registros no retirados cuando vuelve al menú al final de la ejecución de su método.

[`PUSH RECORD`](../commands/push-record) y [`POP RECORD`](../commands/pop-record) son útiles cuando desea examinar registros del mismo archivo durante la introducción de datos. Para ello, coloca el registro en la pila, busca y examina registros del archivo (copiando campos en variables, por ejemplo), y finalmente retira el registro de la pila para restaurarlo.

Al introducir un registro, si tiene que comprobar un valor único de varios campos, utilice el comando [`SET QUERY DESTINATION`](../commands/set-quer-destination). Esto le ahorrará las llamadas a [`PUSH RECORD`](../commands/push-record) y [`POP RECORD`](../commands/pop-record) que hacía antes y después de la llamada a QUERY para preservar los datos introducidos en el registro actual. [`SET QUERY DESTINATION`](../commands/set-quer-destination) le permite realizar una búsqueda que no cambia ni la selección ni el registro actual.

## Bloqueo de registros

4D y 4D Server gestionan automáticamente las bases de datos evitando los conflictos multiusuario o multiproceso. Dos usuarios o dos procesos no pueden modificar el mismo registro u objeto al mismo tiempo. Sin embargo, el segundo usuario o proceso puede tener acceso de solo lectura al registro u objeto al mismo tiempo.

Hay varias razones para utilizar los comandos multiusuario:

- Modificar registros mediante el lenguaje.
- Utilizar una interfaz de usuario personalizada para operaciones multiusuario.
- Guardar modificaciones relacionadas dentro de una transacción.

Hay tres conceptos importantes que se deben tener en cuenta al utilizar comandos en una base de datos multiproceso:

1. En un proceso, cada tabla está en un estado de solo lectura o de lectura/escritura.
2. Los registros se bloquean cuando se cargan y se desbloquean cuando se descargan.
3. Un registro bloqueado no puede modificarse.

Como convención en las siguientes secciones, la persona que realiza una operación en la base de datos multiusuario se denomina **usuario local**. Las demás personas que utilizan la base de datos se denominan **otros usuarios**. La explicación se hace desde la perspectiva del usuario local. Asimismo, desde una perspectiva multiproceso, el proceso que ejecuta una operación en la base de datos es el **proceso actual**. Cualquier otro proceso en ejecución se denomina **otros procesos**. La explicación se hace desde el punto de vista del proceso actual.

### Registros bloqueados

Un registro bloqueado no puede modificarse por el usuario local o el proceso actual. Un registro bloqueado puede cargarse, pero no puede modificarse. Un registro está bloqueado cuando uno de los otros usuarios o procesos ha cargado correctamente el registro para modificarlo, o cuando el registro está apilado. Solo el usuario que está modificando el registro ve ese registro como desbloqueado. Todos los demás usuarios y procesos ven el registro como bloqueado y, por lo tanto, no disponible para su modificación. Una tabla debe estar en estado de lectura/escritura para que un registro se cargue desbloqueado.

### Estados de solo lectura y de lectura/escritura

Cada tabla de una base de datos está en un estado de lectura/escritura o de solo lectura para cada usuario y proceso de la base de datos. **Solo lectura** significa que los registros de la tabla pueden cargarse pero no modificarse. **Lectura/escritura** significa que los registros de la tabla pueden cargarse y modificarse si ningún otro usuario ha bloqueado antes el registro.

Tenga en cuenta que si cambia el estado de una tabla, el cambio surte efecto para el siguiente registro cargado. Si hay un registro cargado actualmente cuando cambia el estado de la tabla, ese registro no se ve afectado por el cambio de estado.

#### Estado de solo lectura

Cuando una tabla es de solo lectura y se carga un registro, este registro siempre está bloqueado. En otras palabras, los registros bloqueados pueden mostrarse, imprimirse y utilizarse de otras formas, pero no pueden modificarse.

Tenga en cuenta que el estado de solo lectura se aplica únicamente a la edición de registros existentes. Un estado de solo lectura no afecta a la creación de nuevos registros. Todavía puede añadir registros a una tabla de solo lectura utilizando [`CREATE RECORD`](../commands/create-record) y [`ADD RECORD`](../commands/add-record), o los comandos de menú del entorno de diseño (en este caso, los registros que se están creando están bloqueados para todos los demás usuarios/procesos). Tenga en cuenta que el comando [`ARRAY TO SELECTION`](../commands/array-to-selection) no se ve afectado por el estado de solo lectura ya que puede crear y modificar registros.

4D pone automáticamente una tabla en solo lectura para los comandos que no requieren acceso de escritura a los registros. Estos comandos son: [`DISPLAY SELECTION`](../commands/display-selection), [`DISTINCT VALUES`](../commands/distinct-values), [`EXPORT DIF`](../commands/export-dif), [`EXPORT SYLK`](../commands/export-sylk), [`EXPORT TEXT`](../commands/export-text), [`PRINT SELECTION`](../commands/print-selection), [`PRINT LABEL`](../commands/print-label), [`QR REPORT`](../commands/qr-report), [`SELECTION TO ARRAY`](../commands/selection-to-array), [`SELECTION RANGE TO ARRAY`](../commands/selection-range-to-array).

Puede conocer el estado de una tabla en cualquier momento utilizando la función [`Read only state`](../commands/read-only-state).

Antes de ejecutar cualquiera de estos comandos, 4D guarda el estado actual de la tabla (solo lectura o lectura/escritura) para el proceso actual. Una vez ejecutado el comando, este estado se restaura.

#### Estado de lectura/escritura

Cuando una tabla es de lectura/escritura y se carga un registro, el registro se desbloqueará si ningún otro usuario ha bloqueado antes el registro. Si el registro está bloqueado por otro usuario, el registro se carga como un registro bloqueado que no puede modificarse por el usuario local.

Una tabla debe estar en lectura/escritura y el registro cargado para que se desbloquee y, por lo tanto, sea modificable.

Si un usuario carga un registro de una tabla en modo lectura/escritura, ningún otro usuario puede cargar ese registro para modificarlo. Sin embargo, otros usuarios pueden añadir registros a la tabla, ya sea a través de los comandos [`CREATE RECORD`](../commands/create-record) y [`ADD RECORD`](../commands/add-record) o manualmente en el entorno de diseño.

Lectura/escritura es el estado predeterminado de todas las tablas cuando se abre una base de datos y se inicia un nuevo proceso.

#### Cambiar el estado de una tabla

Puede utilizar los comandos [`READ ONLY`](../commands/read-only) y [`READ WRITE`](../commands/read-write) para cambiar el estado de una tabla. Si desea cambiar el estado de una tabla para hacer que un registro sea de solo lectura o de lectura/escritura, debe ejecutar el comando antes de que se cargue este registro. Cualquier registro que ya esté cargado no se ve afectado por los comandos [`READ ONLY`](../commands/read-only) y [`READ WRITE`](../commands/read-write).

Cada proceso tiene su propio estado (solo lectura o lectura/escritura) para cada tabla de la base de datos.

Por defecto, si no utiliza el comando READ ONLY, todas las tablas están en modo lectura/escritura.

### Cargar, modificar y descargar registros

Antes de que el usuario local pueda modificar un registro, la tabla debe estar en estado de lectura/escritura y el registro debe estar cargado y desbloqueado.

Cualquiera de los comandos que carga un registro actual (si lo hay) — como [`NEXT RECORD`](../commands/next-record), [`QUERY`](../commands/query), [`ORDER BY`](../commands/order-by), [`RELATE ONE`](../commands/relate-one), etc. — establece el estado del registro como bloqueado o desbloqueado. El registro se carga según el estado actual de su tabla (solo lectura o lectura/escritura) y su disponibilidad. Un registro también puede cargarse para una tabla relacionada mediante cualquiera de los comandos que provocan el establecimiento de una relación automática.

Si una tabla está en estado de solo lectura para un proceso o un usuario, entonces los registros de esta tabla se cargan en modo solo lectura, lo que significa que no pueden modificarse ni eliminarse por este proceso o usuario. Esto se recomienda para ver o recuperar datos porque no impide que otros usuarios o procesos accedan a los registros de esta tabla en modo lectura/escritura si es necesario.

Si una tabla está en estado de lectura/escritura para un proceso o un usuario, entonces cualquier registro de esta tabla también se carga en modo lectura/escritura, pero solo si ningún otro usuario o proceso ha bloqueado ya este registro. Si un registro se carga correctamente en modo lectura/escritura, se desbloquea para el proceso o usuario actual (puede modificarse y guardarse) y se bloquea para todos los demás usuarios o procesos. Una tabla debe ponerse en estado de lectura/escritura antes de cargar un registro para modificarlo y luego guardarlo.

Si el registro debe modificarse, utilice la función Locked para comprobar si un registro está bloqueado o no por otro usuario. Si un registro está bloqueado (Locked devuelve True), cargue el registro con el comando [`LOAD RECORD`](../commands/load-record) y compruebe de nuevo si el registro está bloqueado o no. Esta secuencia debe continuar hasta que el registro se desbloquee (Locked devuelve False).

Cuando terminan las modificaciones que se deben hacer a un registro, el registro debe liberarse (y, por lo tanto, desbloquearse para los demás usuarios) con [`UNLOAD RECORD`](../commands/unload-record). Si un registro no se descarga, permanecerá bloqueado para todos los demás usuarios hasta que se seleccione un registro actual diferente. Cambiar el registro actual de una tabla desbloquea automáticamente el registro actual anterior. Debe llamar explícitamente a [`UNLOAD RECORD`](../commands/unload-record) si no cambia el registro actual. Esta explicación se aplica a los registros existentes. Cuando se crea un nuevo registro, este puede guardarse independientemente del estado de la tabla a la que pertenece.

:::note

Cuando se utiliza en una transacción, el comando [`UNLOAD RECORD`](../commands/unload-record) descarga el registro actual solo para el proceso que gestiona la transacción. Para los demás procesos, el registro permanece bloqueado mientras la transacción no se haya validado (o cancelado).

:::

Utilice el comando [`LOCKED BY`](../commands/locked-by) para ver qué usuario y/o proceso ha bloqueado un registro.

Una buena práctica consiste en poner todas las tablas en modo solo lectura al iniciar cada proceso (utilizando la sintaxis [`READ ONLY(*)`](../commands/read-only)) y luego poner cada tabla en modo lectura/escritura solo cuando sea necesario. El acceso a las tablas en modo solo lectura es más rápido y más eficiente en cuanto a memoria. Además, el cambio de estado de una tabla está optimizado en modo cliente/servidor porque no genera ningún tráfico de red adicional: la información solo se envía al servidor al ejecutar un comando que requiere un acceso adecuado a la tabla.

### Bucles para cargar registros desbloqueados

El siguiente ejemplo muestra el bucle más simple con el que cargar un registro desbloqueado:

```4d
 READ WRITE([Customers])//Establece el estado de la tabla en lectura/escritura
 Repeat//Bucle hasta que el registro se desbloquee
    LOAD RECORD([Customers])//Carga el registro y establece el estado bloqueado
 Until(Not(Locked([Customers])))
 //Hacer algo con el registro aquí
 READ ONLY([Customers])//Establece el estado de la tabla en solo lectura
```

El bucle continúa hasta que el registro se desbloquea.

Un bucle de este tipo solo se utiliza si es improbable que el registro esté bloqueado por otra persona, ya que el usuario tendría que esperar a que el bucle termine. Por lo tanto, es improbable que el bucle se utilice tal cual, a menos que el registro solo pudiera modificarse por medio de un método.

El siguiente ejemplo utiliza el bucle anterior para cargar un registro desbloqueado y modificarlo:

```4d
 READ WRITE([Inventory])
 Repeat //Bucle hasta que el registro se desbloquee
    LOAD RECORD([Inventory]) //Carga el registro y lo establece como bloqueado
 Until(Not(Locked([Inventory])))
 [Inventory]Part Qty:=[Inventory]Part Qty 1 //Modifica el registro
 SAVE RECORD([Inventory]) //Guarda el registro
 UNLOAD RECORD([Inventory]) //Permite que otros usuarios lo modifiquen
 READ ONLY([Inventory])
```


El comando [`MODIFY RECORD`](../commands/modify-record) notifica automáticamente al usuario si un registro está bloqueado e impide que el registro se modifique. El siguiente ejemplo evita esta notificación automática comprobando primero el registro con la función Locked. Si el registro está bloqueado, el usuario puede cancelar.

Este ejemplo comprueba de forma eficiente si el registro actual está bloqueado para la tabla [Pedidos]. Si está bloqueado, el proceso se retrasa mediante el procedimiento durante un segundo. Esta técnica puede utilizarse tanto en una situación multiusuario como multiproceso:

```4d
 Repeat
    READ ONLY([Commands])//No necesita lectura/escritura por ahora
    QUERY([Commands])
 //Si la búsqueda se completó y se devolvieron algunos registros
    If((OK=1) & (Records in selection([Commands])>0))
       READ WRITE([Commands])//Pone la tabla en estado de lectura/escritura
       LOAD RECORD([Commands])
       While(Locked([Commands]) & (OK=1)) `Si el registro está bloqueado,
 //bucle hasta que el registro se desbloquee
 //¿Por quién está bloqueado el registro?
          LOCKED BY([Commands];$Process;$User;$SessionUser;$Name)
          If($Process=-1)//¿Se ha eliminado el registro?
             ALERT("El registro ha sido eliminado mientras tanto.")
             OK:=0
          Else
             If($User="")//¿Está en modo monopuesto?
                $User:="usted"
             End if
             CONFIRM("El registro ya está siendo utilizado por "+$User+" en el proceso "+$Name+".")
             If(OK=1)//Si desea esperar unos segundos
                DELAY PROCESS(Current process;120)//Esperar unos segundos
                LOAD RECORD([Commands])//Intentar cargar el registro
             End if
          End if
       End while
       If(OK=1)//El registro está desbloqueado
          MODIFY RECORD([Commands])//Puede modificar el registro
          UNLOAD RECORD([Commands])
       End if
       READ ONLY([Commands])//Volver a solo lectura
       OK:=1
    End if
 Until(OK=0)
```


### Utilizar comandos en un entorno multiusuario o multiproceso

Varios comandos del lenguaje realizan acciones específicas cuando encuentran un registro bloqueado. Se comportan normalmente si no encuentran un registro bloqueado.

He aquí una lista de estos comandos y sus acciones cuando se encuentra un registro bloqueado.

- [`MODIFY RECORD`](../commands/modify-record): Muestra un cuadro de diálogo indicando que el registro está en uso. El registro no se muestra, por lo que el usuario no puede modificarlo. En el entorno de diseño, el registro se muestra en estado de solo lectura.
- [`MODIFY SELECTION`](../commands/modify-selection): Se comporta normalmente excepto cuando el usuario hace doble clic en un registro para modificarlo. [`MODIFY SELECTION`](../commands/modify-selection) muestra un cuadro de diálogo indicando que el registro está en uso y luego permite el acceso de solo lectura al registro.
- [`APPLY TO SELECTION`](../commands/apply-to-selection): Carga un registro bloqueado, pero no lo modifica. [`APPLY TO SELECTION`](../commands/apply-to-selection) puede utilizarse para leer información de la tabla sin cuidado especial. Si el comando encuentra un registro bloqueado, el registro se coloca en el [conjunto sistema `LockedSet`](./sets.md#the-lockedset-system-set).
- [`DELETE SELECTION`](../commands/delete-selection): No elimina ningún registro bloqueado; los omite. Si el comando encuentra un registro bloqueado, el registro se coloca en el [conjunto sistema `LockedSet`](./sets.md#the-lockedset-system-set).
- [`DELETE RECORD`](../commands/delete-record): Este comando se ignora si el registro está bloqueado. No se devuelve ningún error. Debe comprobar que el registro está desbloqueado antes de ejecutar este comando.
- [`SAVE RECORD`](../commands/save-record): Este comando se ignora si el registro está bloqueado. No se devuelve ningún error. Debe comprobar que el registro está desbloqueado antes de ejecutar este comando.
- [`ARRAY TO SELECTION`](../commands/array-to-selection): No guarda ningún registro bloqueado. Si el comando encuentra un registro bloqueado, el registro se coloca en el [conjunto sistema `LockedSet`](./sets.md#the-lockedset-system-set).
- [`GOTO RECORD`](../commands/goto-record): Los registros de una base de datos multiusuario/multiproceso pueden ser eliminados y añadidos por otros usuarios, por lo que los números de registro pueden cambiar. Tenga cuidado al referenciar directamente un registro por su número en una base de datos multiusuario.
- [**Conjuntos**](./sets.md): Tenga especial cuidado con los conjuntos, ya que la información en la que se basó el conjunto puede haber sido modificada por otro usuario o proceso.


## Registros y relaciones

Los comandos del [tema Relaciones](../commands/theme/Relations.md), en particular [`RELATE ONE`](../commands/relate-one) y [`RELATE MANY`](../commands/relate-many), establecen y gestionan las relaciones automáticas y no automáticas entre tablas. Antes de utilizar cualquiera de los comandos de este tema, consulte el manual de referencia Modo Diseño de 4D para obtener información sobre la creación de relaciones entre tablas.

### Utilizar relaciones automáticas entre tablas con los comandos

Dos tablas pueden relacionarse mediante relaciones automáticas. En general, cuando se establece una relación automática entre tablas, esta carga o selecciona los registros relacionados de una tabla relacionada. Muchas operaciones provocan el establecimiento de la relación.

Estas operaciones incluyen:

- La introducción de datos
- La visualización de registros en pantalla en formularios de salida
- La creación de informes
- Las operaciones sobre una selección de registros, como búsquedas, ordenaciones y la aplicación de una fórmula

Para optimizar el rendimiento, cuando 4D establece relaciones automáticas, solo un registro se convierte en el registro actual de una tabla. Para cada una de las operaciones enumeradas anteriormente, el registro relacionado se carga según los siguientes principios:

- Si una relación selecciona un solo registro de una tabla relacionada, ese registro se carga desde el disco.
- Si una relación selecciona más de un registro de una tabla relacionada, se crea una nueva selección de registros para esa tabla, y el primer registro de esa selección se carga desde el disco.

Por ejemplo, utilizando la estructura de base de datos mostrada aquí, si un registro de la tabla [Empleados] se carga y muestra para la introducción de datos, el registro relacionado de la tabla [Empresas] se selecciona y se carga. De forma similar, si un registro de la tabla [Empresas] se carga y muestra para la introducción de datos, los registros relacionados de la tabla [Empleados] se seleccionan.

![](../assets/en/Develop/relations.png)


En esta estructura de base de datos, la tabla [Empleados] se denomina **tabla N** (Many), y la tabla [Empresas] se denomina **tabla 1** (One). Para recordar este concepto, piense en "hay muchos empleados relacionados con una empresa" y "cada empresa tiene muchos empleados".

De forma similar, el campo Empresa de la tabla [Empleados] se denomina **campo N**, y el campo Nombre de la tabla [Empresas] se denomina campo **1**. No siempre es posible que el campo relacionado sea único. Por ejemplo, el campo [Empresas]Nombre puede tener varios registros de empresa que contengan el mismo valor. Esta situación no única puede gestionarse fácilmente creando una relación, que siempre será única, sobre otro campo de la tabla relacionada. Este campo podría ser un campo de ID de empresa.

La siguiente tabla enumera los comandos que utilizan relaciones automáticas para cargar registros relacionados durante la ejecución del comando. Todos los comandos utilizarán las relaciones automáticas N a 1 existentes. Solo los comandos con Sí en la columna 1 a N establecida a continuación utilizarán las relaciones automáticas 1 a N.

|Comando|1 a N establecida|
|--|--|
|[`ADD RECORD`](../commands/add-record)	|Sí|
|[`APPLY TO SELECTION`](../commands/apply-to-selection)|	No|
|[`DISPLAY SELECTION`](../commands/display-selection)|	No|
|[`EXPORT DIF`](../commands/export-dif)|	No|
|[`EXPORT SYLK`](../commands/export-sylk)|	No|
|[`EXPORT TEXT`](../commands/export-text)|	No|
|[`EXPORT DATA`](../commands/export-data)|	No|
|[`MODIFY RECORD`](../commands/modify-record)|	Sí|
|[`MODIFY SELECTION`](../commands/modify-selection)|	Sí (en introducción de datos)|
|[`ORDER BY`](../commands/order-by)|	No|
|[`ORDER BY FORMULA`](../commands/order-by-formula)|	No|
|[`QUERY BY FORMULA`](../commands/query-by-formula)|	Sí|
|[`QUERY SELECTION`](../commands/query-selection)|	Sí|
|[`QUERY`](../commands/query)|	Sí|
|[`PRINT LABEL`](../commands/print-label)|	No|
|[`PRINT SELECTION`](../commands/print-selection)|	Sí|
|[`QR REPORT`](../commands/qr-report)|	No|
|[`SELECTION TO ARRAY`](../commands/selection-to-array)|	No|
|[`SELECTION RANGE TO ARRAY`](../commands/selection-range-to-array)|	No|


### Utilizar comandos para establecer relaciones entre tablas

Las relaciones automáticas no significan que el registro o registros relacionados de una tabla vayan a seleccionarse simplemente porque un comando carga un registro. En algunos casos, después de utilizar un comando que carga un registro, debe seleccionar explícitamente los registros relacionados utilizando [`RELATE ONE`](../commands/relate-one) o [`RELATE MANY`](../commands/relate-many) si necesita acceder a los datos relacionados.

Algunos de los comandos enumerados en la tabla anterior (como los comandos de búsqueda) cargan un registro actual una vez completada la tarea. En este caso, el registro que se carga no selecciona automáticamente los registros relacionados con él. De nuevo, si necesita acceder a los datos relacionados, debe seleccionar explícitamente los registros relacionados utilizando [`RELATE ONE`](../commands/relate-one) o [`RELATE MANY`](../commands/relate-many).
