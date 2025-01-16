---
id: client-server-optimization
title: Optimización cliente/servidor
---

4D ofrece optimizaciones para las peticiones ORDA que utilizan selecciones de entidades o cargan entidades en arquitecturas cliente/servidor. Estas optimizaciones aceleran la ejecución de su aplicación 4D reduciendo drásticamente el volumen de información transmitida por la red. Incluyen:

- el **contexto de optimización**
- la **caché ORDA**

## Arquitecturas soportadas

Las arquitecturas de cliente/servidor ORDA que soportan la optimización son:

- Server datastores accessed by 4D remote desktop applications through [**`ds`**](../commands/ds.md),
- [Remote datastores](remoteDatastores.md), accessed via [**`Open datastore`**](../commands/open-datastore.md) (client REST requests).

## Contexto de optimización

El contexto de optimización se basa en las siguientes implementaciones:

- Cuando un cliente solicita una selección de entidades al servidor, 4D "aprende" automáticamente qué atributos de la selección de entidades se utilizan realmente del lado del cliente durante la ejecución del código, y genera un "contexto de optimización" correspondiente. Este contexto se adjunta a la selección de la entidad y almacena los atributos utilizados. Se actualizará dinámicamente si se utilizan posteriormente otros atributos. Los siguientes métodos y funciones activan la fase de aprendizaje:
  - [`Create entity selection`](../commands/create-entity-selection.md)
  - [`dataClass.fromCollection()`](../API/DataClassClass.md#fromcollection)
  - [`dataClass.all()`](../API/DataClassClass.md#all)
  - [`dataClass.get()`](../API/DataClassClass.md#get)
  - [`dataClass.query()`](../API/DataClassClass.md#query)
  - [`entitySelection.query()`](../API/EntitySelectionClass.md#query)

- Las solicitudes posteriores enviadas al servidor sobre la misma selección de entidades reutilizan automáticamente el contexto de optimización y sólo obtienen del servidor los atributos necesarios, lo que acelera el procesamiento. Por ejemplo, en un [list box de tipo entity selection](#entity-selection-based-list-box), la fase de aprendizaje tiene lugar durante la visualización de la primera línea. la visualización de las siguientes líneas está optimizada. Las siguientes funciones asocian automáticamente el contexto de optimización de la entity selection de origen a la entity selection devuelta:
  - [`entitySelection.and()`](../API/EntitySelectionClass.md#and)
  - [`entitySelection.minus()`](../API/EntitySelectionClass.md#minus)
  - [`entitySelection.or()`](../API/EntitySelectionClass.md#or)
  - [`entitySelection.orderBy()`](../API/EntitySelectionClass.md#orderBy)
  - [`entitySelection.slice()`](../API/EntitySelectionClass.md#slice)
  - [`entitySelection.drop()`](../API/EntitySelectionClass.md#drop)

- Un contexto de optimización existente puede pasarse como propiedad a otra selección de entidad de la misma dataclass, evitando así la fase de aprendizaje y acelerar la aplicación (ver abajo [Reutilización de la propiedad context](#reusing-the-context-property)).

- Puede crear contextos de optimización manualmente mediante la función [`dataStore.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) (consulte [Preconfiguración de contextos](#preconfiguring-contexts)).

![](../assets/en/ORDA/cs-optimization-process.png)

:::note Nota de compatibilidad

Contexts handled in connections established through [`Open datastore`](../commands/open-datastore.md) can only be used between similar main versions of 4D. Por ejemplo, una aplicación remota 4D 20.x sólo puede utilizar contextos de un almacen de datos 4D Server 20.x.

:::

### Ejemplo

Dado el siguiente código:

```4d
 $sel:=$ds.Employee.query("firstname = ab@")
 For each($e;$sel)
    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer refiere a la tabla Company
 End for each
```

Gracias a la optimización, esta petición sólo obtendrá los datos de los atributos utilizados (firstname, lastname, employer, employer.name) en _$sel_ a partir de la segunda iteración del bucle.

### Reutilizando la propiedad `context`

Puede aumentar los beneficios de la optimización utilizando la propiedad **context**. Esta propiedad hace referencia a un contexto de optimización "aprendido" para una selección de entidades. Se puede pasar como parámetro a las funciones ORDA que devuelven nuevas selecciones de entidades, de forma que las selecciones de entidades soliciten directamente al servidor los atributos utilizados y sin pasar por la fase de aprendizaje.

> También puede crear contextos utilizando la función [`.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo).

All ORDA functions that handle entity selections support the <strong x-id="1">context</strong> property (for example <a href="../API/DataClassClass.md#query"><code>dataClass.query()</code></a> or <a href="../API/DataClassClass.md#all"><code>dataClass.all()</code></a>). Todas las funciones ORDA que manejan entity selections soportan la propiedad **context** (por ejemplo [`dataClass.query()`](../API/DataClassClass.md#query) o [`dataClass.all()`](../API/DataClassClass.md#all)). Tenga en cuenta, sin embargo, que un contexto se actualiza automáticamente cuando se utilizan nuevos atributos en otras partes del código. Reutilizar el mismo contexto en diferentes códigos podría sobrecargar el contexto y, por tanto, reducir su eficacia.

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

### List box basado en una selección de entidades

La optimización de entity selection se aplica automáticamente a los list boxes basados en una entity selection en las aplicaciones de escritorio cliente/servidor 4D, al mostrar y desplazar el contenido de un list box: sólo se solicitan al servidor los atributos mostrados en el list box.

También se suministra un contexto específico denominado "modo página" cuando se carga la entidad actual de la selección mediante la expresión de la propiedad **elemento actual** del list box (ver [list box de tipo colección o entity selection](FormObjects/listbox_overview.md#list-box-types)). Esta funcionalidad le permite no sobrecargar el contexto inicial del list box en este caso, especialmente si la "página" solicita atributos adicionales. Tenga en cuenta que sólo el uso de la expresión **Elemento actual** permitirá crear/utilizar el contexto de la página (el acceso a través de `entitySelection\[index]` alterará el contexto de la entity selection).

Las solicitudes posteriores al servidor enviadas por las funciones de navegación de la entidad también admitirán esta optimización. Las siguientes funciones asocian automáticamente el contexto de optimización de la entidad fuente a la entidad devuelta:

- [`entity.next()`](../API/EntityClass.md#next)
- [`entity.first()`](../API/EntityClass.md#first)
- [`entity.last()`](../API/EntityClass.md#last)
- [`entity.previous()`](../API/EntityClass.md#previous)

Por ejemplo, el siguiente código carga la entidad seleccionada y permite navegar en la selección de entidades. Las entidades se cargan en un contexto separado y el contexto inicial del list box se deja intacto:

```4d
 $myEntity:=Form.currentElement //expresión del elemento actual
  //... hacer algo
 $myEntity:=$myEntity.next() //carga la siguiente entidad utilizando el mismo contexto
```

### Preconfiguración de contextos

Debe definirse un contexto de optimización para cada funcionalidad o algoritmo de su aplicación, con el fin de obtener el mejor rendimiento. Por ejemplo, un contexto puede utilizarse para consultas sobre clientes, otro para consultas sobre productos, etc.

Si desea entregar aplicaciones finales con el máximo nivel de optimización, puede preconfigurar sus contextos y ahorrarse así fases de aprendizaje siguiendo estos pasos:

1. Diseñe sus algoritmos.
2. Ejecute su aplicación y deje que el mecanismo de aprendizaje automático complete los contextos de optimización.
3. Llame la función [`dataStore.getRemoteContextInfo()`](../API/DataStoreClass.md#getremotecontextinfo) o [`dataStore.getAllRemoteContexts()`](../API/DataStoreClass.md#getallremotecontexts) para recopilar contextos. Puede utilizar las funciones [`entitySelection.getRemoteContextAttributes()`](../API/EntitySelectionClass.md#getremotecontextattributes) y [`entity.getRemoteContextAttributes()`](../API/EntityClass.md#getremotecontextattributes) para analizar cómo utilizan los atributos sus algoritmos.
4. En el último paso, llama a la función [`dataStore.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) para construir contextos al inicio de la aplicación y [utilizarlos](#reutilizando-la-propiedad-context) en sus algoritmos.

## Caché ORDA

Por razones de optimización, los datos solicitados al servidor a través de ORDA se cargan en la caché remota de ORDA (que es diferente de la caché 4D). La caché ORDA está organizada por dataclass y vence después de 30 segundos.

Los datos contenidos en la caché se consideran caducados cuando se alcanza el tiempo de espera. Todo acceso a los datos caducados enviará una petición al servidor. Los datos caducados permanecen en la caché hasta que se necesite el espacio.

Puede forzar que los datos de la selección de entidades en la caché ORDA expiren en cualquier momento utilizando la función [`refresh()`](../API/EntitySelectionClass.md#refresh).

Por defecto, la caché ORDA es manejada de forma transparente por 4D. Sin embargo, puede controlar su contenido utilizando las siguientes funciones de la clase ORDA:

- [dataClass.setRemoteCacheSettings()](../API/DataClassClass.md#setremotecachesettings)
- [dataClass.getRemoteCache()](../API/DataClassClass.md#getremotecache)
- [dataClass.clearRemoteCache()](../API/DataClassClass.md#clearremotecache)
