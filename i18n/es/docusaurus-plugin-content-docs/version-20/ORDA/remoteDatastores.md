---
id: datastores
title: Utilizar un almacén de datos remoto
---

Un [datastore](dsMapping.md#datastore) expuesto en una aplicación 4D se puede acceder simultáneamente a través de diferentes clientes:

- Las aplicaciones 4D remotas que utilizan ORDA para acceder al almacén de datos principal con el comando `ds`. Tenga en cuenta que la aplicación 4D remota puede seguir accediendo a la base de datos en modo clásico. Estos accesos son gestionados por el **servidor de aplicaciones**.
- Otras aplicaciones 4D (4D remote, 4D Server) abriendo una sesión en el datastore remoto a través del comando [`Open datastore`](../API/DataStoreClass.md#open-datastore). Estos accesos son gestionados por el **servidor HTTP REST**.
- Las peticiones [4D for iOS o 4D for Android](https://developer.4d.com/go-mobile/) para actualizar las aplicaciones móviles. Estos accesos son gestionados por el **servidor HTTP**.



## Apertura de las sesiones

Cuando se trabaja con un datastore remoto referenciado a través de llamadas al comando `Open datastore`, la conexión entre los procesos que efectúan la petición y el datastore remoto se gestiona a través de sesiones.

Se crea una sesión en el datastore remoto para gestionar la conexión. Esta sesión se identifica mediante un ID de sesión interno que se asocia al `localID` del lado de la aplicación 4D. Esta sesión gestiona automáticamente el acceso a los datos, a las selecciones de entidades o a las entidades.

El `localID` es local a la máquina que se conecta al datastore remoto, lo que significa:

*   Si otros procesos de la misma aplicación necesitan acceder al mismo datastore remoto, pueden utilizar el mismo `localID` y, de este modo, compartir la misma sesión.
*   Si otro proceso de la misma aplicación abre el mismo datastore remoto pero con otro `localID`, creará una nueva sesión en el datastore remoto.
*   Si otra máquina se conecta al mismo datastore remoto con el mismo `localID`, creará otra sesión con otra cookie.

Estos principios se ilustran en los gráficos siguientes:

![](../assets/en/ORDA/sessions.png)

> Para las sesiones abiertas por peticiones REST, consulte [Usuarios y sesiones](REST/authUsers.md).

### Visualización de las sesiones

Los procesos que gestionan las sesiones de acceso al datastore se muestran en la ventana de administración de 4D Server:

*   nombre: "REST Handler: \<process name\>"
*   tipo: tipo Worker Server HTTP
*   sesión: el nombre de la sesión es el nombre de usuario que se pasa al comando `Open datastore`.

En el siguiente ejemplo, se están ejecutando dos procesos para la misma sesión:

![](../assets/en/ORDA/sessionAdmin.png)

### Bloqueo y transacciones

Las funcionalidades ORDA relacionadas con el bloqueo de entidades y transacciones se gestionan a nivel del proceso en los datastores remotos, igual que en el modo cliente/servidor ORDA:

*   Si un proceso bloquea una entidad de un datastores remoto, la entidad se bloquea para todos los otros procesos, incluso cuando estos procesos comparten la misma sesión (ver [Bloqueo de entidades](entities.md#entity-locking)). Si varias entidades que apuntan a un mismo registro han sido bloqueadas en un proceso, todas deben ser desbloqueadas en el proceso para eliminar el bloqueo. Si se ha puesto un bloqueo en una entidad, el bloqueo se elimina cuando ya no hay ninguna referencia a esta entidad en la memoria.
*   Las transacciones pueden iniciarse, validarse o cancelarse por separado en cada almacén de datos remoto mediante las funciones `dataStore.startTransaction()`, `dataStore.cancelTransaction()` y `dataStore.validateTransaction()`. No afectan a otros almacenes de datos.
*   Los comandos clásicos del lenguaje 4D (`START TRANSACTION`, `VALIDATE TRANSACTION`, `CANCEL TRANSACTION`) sólo se aplican al datastore principal (devuelto por `ds`). Si una entidad de un datastore remoto es retenida por una transacción en un proceso, los otros procesos no pueden actualizarla, incluso si estos procesos comparten la misma sesión.
*   Los bloqueos en las entidades son eliminados y las transacciones son anuladas:
    *   cuando el proceso es eliminado.
    *   cuando la sesión se cierra en el servidor
    *   cuando la sesión es terminada desde la ventana de administración del servidor.

### Cierre de las sesiones

4D cierra automáticamente una sesión cuando no hay actividad durante el tiempo de espera. El tiempo de espera por defecto es de 60 mn, pero este valor puede modificarse utilizando el parámetro *connectionInfo* del comando `Open datastore`.

Si se envía una solicitud al almacén de datos remoto después de haber cerrado la sesión, ésta se vuelve a crear automáticamente si es posible (licencia disponible, servidor no detenido...). Sin embargo, hay que tener en cuenta que se pierde el contexto de la sesión en cuanto a bloqueos y transacciones (ver arriba).

## Optimización cliente/servidor

4D optimiza las peticiones ORDA que utilizan entity selections o cargan entidades en configuraciones cliente/servidor (datastore accesible remotamente a través de `ds` o de `Open datastore`). Estas optimizaciones aceleran la ejecución de su aplicación 4D reduciendo drásticamente el volumen de información transmitida por la red. Incluyen:
* el **contexto de optimización**
* la **caché ORDA**

### Contexto

El contexto de optimización se basa en las siguientes implementaciones:

* Cuando un cliente solicita una selección de entidades al servidor, 4D "aprende" automáticamente qué atributos de la selección de entidades se utilizan realmente del lado del cliente durante la ejecución del código, y genera un "contexto de optimización" correspondiente. Este contexto se adjunta a la selección de la entidad y almacena los atributos utilizados. Se actualizará dinámicamente si se utilizan posteriormente otros atributos. Los siguientes métodos y funciones activan la fase de aprendizaje:
  * [`Create entity selection`](../API/EntitySelectionClass.md#create-entity-selection)
  * [`dataClass.fromCollection()`](../API/DataClassClass.md#fromcollection)
  * [`dataClass.all()`](../API/DataClassClass.md#all)
  * [`dataClass.get()`](../API/DataClassClass.md#get)
  * [`dataClass.query()`](../API/DataClassClass.md#query)
  * [`entitySelection.query()`](../API/EntitySelectionClass.md#query)

* Las solicitudes posteriores enviadas al servidor sobre la misma selección de entidades reutilizan automáticamente el contexto de optimización y sólo obtienen del servidor los atributos necesarios, lo que acelera el procesamiento. Por ejemplo, en un [list box de tipo entity selection](#entity-selection-based-list-box), la fase de aprendizaje tiene lugar durante la visualización de la primera línea. la visualización de las siguientes líneas está optimizada. Las siguientes funciones asocian automáticamente el contexto de optimización de la entity selection de origen a la entity selection devuelta:
    *   [`entitySelection.and()`](../API/EntitySelectionClass.md#and)
    *   [`entitySelection.minus()`](../API/EntitySelectionClass.md#minus)
    *   [`entitySelection.or()`](../API/EntitySelectionClass.md#or)
    *   [`entitySelection.orderBy()`](../API/EntitySelectionClass.md#orderby)
    *   [`entitySelection.slice()`](../API/EntitySelectionClass.md#slice)
    *   [`entitySelection.drop()`](../API/EntitySelectionClass.md#drop)

* Un contexto de optimización existente puede pasarse como propiedad a otra selección de entidad de la misma dataclass, evitando así la fase de aprendizaje y acelerando la aplicación (ver [Uso de la propiedad context](#reusing-the-context-property) abajo).

* Puede crear contextos de optimización manualmente utilizando la función [`dataStore.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) (ver [Preconfiguración de contextos](#preconfiguring-contexts)).

![](../assets/en/ORDA/cs-optimization-process.png)

:::warning Nota de compatibilidad

Los contextos manejados en conexiones establecidas a través de [`Open datastore`](../API/DataStoreClass.md#open-datastore) solo pueden ser utilizados entre versiones principales similares de 4D. Por ejemplo, una aplicación remota 4D v20.x sólo puede utilizar contextos de un almacen de datos 4D Server v20.x.

:::


#### Ejemplo

Dado el siguiente código:

```4d
 $sel:=$ds.Employee.query("firstname = ab@")
 For each($e;$sel)
    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer refiere a la tabla Company
 End for each
```

Gracias a la optimización, esta petición sólo obtendrá los datos de los atributos utilizados (firstname, lastname, employer, employer.name) en *$sel* a partir de la segunda iteración del bucle.

#### Reutilización de la propiedad context

Puede aumentar los beneficios de la optimización utilizando la propiedad **context**. Esta propiedad hace referencia a un contexto de optimización "aprendido" para una selección de entidades. Se puede pasar como parámetro a las funciones ORDA que devuelven nuevas selecciones de entidades, de forma que las selecciones de entidades soliciten directamente al servidor los atributos utilizados y sin pasar por la fase de aprendizaje.
> También puede crear contextos utilizando la función [`.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo).

All ORDA functions that handle entity selections support the **context** property (for example [`dataClass.query()`](../API/DataClassClass.md#query) or [`dataClass.all()`](../API/DataClassClass.md#all)). The same optimization context property can be passed to unlimited number of entity selections on the same dataclass. Tenga en cuenta, sin embargo, que un contexto se actualiza automáticamente cuando se utilizan nuevos atributos en otras partes del código. Reutilizar el mismo contexto en diferentes códigos podría sobrecargar el contexto y, por tanto, reducir su eficacia.
> Se implementa un mecanismo similar para las entidades que se cargan, de modo que sólo se solicitan los atributos utilizados (ver la función [`dataClass.get()`](../API/DataClassClass.md#get)).

**Ejemplo con `dataClass.query()`:**

```4d
 var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object
 var $data : Collection
 $querysettings:=New object("context";"shortList")
 $querysettings2:=New object("context";"longList")

 $sel1:=ds.Employee.query("lastname = S@";$querysettings)
 $data:=extractData($sel1) // En el método extractData la optimización asociada
 // al contexto "shortList" se aplica

 $sel2:=ds.Employee.query("lastname = Sm@";$querysettings)
 $data:=extractData($sel2) // En el método extractData una optimización
 // se activa y asocia al contexto "shortList"

 $sel3:=ds.Employee.query("lastname = Smith";$querysettings2)
 $data:=extractDetailedData($sel3) // En el método extractDetailedData una optimización
 // se activa y asocia al contexto "longList"

 $sel4:=ds.Employee.query("lastname = Brown";$querysettings2)
 $data:=extractDetailedData($sel4) // En el método extractDetailedData la optimización
 // asociada al contexto "longList" se aplica
```

#### List box basado en una selección de entidades

La optimización de la selección de entidades se aplica automáticamente a los list boxes basados en la selección de entidades en configuraciones cliente/servidor, al mostrar y desplazar el contenido de un list box: sólo se solicitan al servidor los atributos mostrados en el list box.

También se ofrece un contexto específico "modo página" cuando se carga la entidad actual a través de la expresión propiedad **Elemento actual** del list box (ver [List box de tipo colección o entity selection](FormObjects/listbox_overview.md#list-box-types)). Esta funcionalidad le permite no sobrecargar el contexto inicial del list box en este caso, especialmente si la "página" solicita atributos adicionales. Tenga en cuenta que sólo el uso de la expresión **Elemento actual** permitirá crear/utilizar el contexto de la página (el acceso a través de `entitySelection[index]` alterará el contexto de la selección de entidad).

Las solicitudes posteriores al servidor enviadas por las funciones de navegación de la entidad también admitirán esta optimización. Las siguientes funciones asocian automáticamente el contexto de optimización de la entidad fuente a la entidad devuelta:

*   [`entity.next()`](../API/EntityClass.md#next)
*   [`entity.first()`](../API/EntityClass.md#first)
*   [`entity.last()`](../API/EntityClass.md#last)
*   [`entity.previous()`](../API/EntityClass.md#previous)

Por ejemplo, el siguiente código carga la entidad seleccionada y permite navegar en la selección de entidades. Las entidades se cargan en un contexto separado y el contexto inicial del list box se deja intacto:

```4d
 $myEntity:=Form.currentElement //expresión del elemento actual
  //... hacer algo
 $myEntity:=$myEntity.next() //carga la siguiente entidad utilizando el mismo contexto
```

#### Preconfiguración de contextos

Debe definirse un contexto de optimización para cada funcionalidad o algoritmo de su aplicación, con el fin de obtener el mejor rendimiento. Por ejemplo, un contexto puede utilizarse para consultas sobre clientes, otro para consultas sobre productos, etc.

Si desea entregar aplicaciones finales con el máximo nivel de optimización, puede preconfigurar sus contextos y ahorrarse así fases de aprendizaje siguiendo estos pasos:

1. Diseñe sus algoritmos.
2. Ejecute su aplicación y deje que el mecanismo de aprendizaje automático complete los contextos de optimización.
3. Llame la función [`dataStore.getRemoteContextInfo()`](../API/DataStoreClass.md#getremotecontextinfo) o [`dataStore.getAllRemoteContexts()`](../API/DataStoreClass.md#getallremotecontexts) para recoger contextos. Puede utilizar las funciones [`entitySelection.getRemoteContextAttributes()`](../API/EntitySelectionClass.md#getremotecontextattributes) y [`entity.getRemoteContextAttributes()`](../API/EntityClass.md#getremotecontextattributes) para analizar cómo utilizan los atributos sus algoritmos.
4. En el paso final, llame a la función [`dataStore.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) para crear contextos al inicio de la aplicación y [utilizarlos](#reusing-the-context-property) en sus algoritmos.


### Caché ORDA

Por razones de optimización, los datos solicitados al servidor a través de ORDA se cargan en la caché remota de ORDA (que es diferente de la caché 4D). La caché ORDA está organizada por dataclass y vence después de 30 segundos.

Los datos contenidos en la caché se consideran caducados cuando se alcanza el tiempo de espera. Todo acceso a los datos caducados enviará una petición al servidor. Los datos caducados permanecen en la caché hasta que se necesite el espacio.

Por defecto, la caché ORDA es manejada de forma transparente por 4D. Sin embargo, puede controlar su contenido utilizando las siguientes funciones de la clase ORDA:

* [dataClass.setRemoteCacheSettings()](../API/DataClassClass.md#setremotecachesettings)
* [dataClass.getRemoteCache()](../API/DataClassClass.md#getremotecache)
* [dataClass.clearRemoteCache()](../API/DataClassClass.md#clearremotecache)