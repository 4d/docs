---
id: set-assert-enabled
title: SET ASSERT ENABLED
slug: /commands/set-assert-enabled
displayed_sidebar: docs
---

<!--REF #_command_.SET ASSERT ENABLED.Syntax-->**SET ASSERT ENABLED** ( *aser* : Boolean {; *} )<!-- END REF-->
<!--REF #_command_.SET ASSERT ENABLED.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| aser | Boolean | &#8594; | True = activar las aserciones, False = desactivar las aserciones |
| * | Operador | &#8594; | Si se omite = el comando se aplica al conjunto de los procesos, Si se pasa = el comando se aplica al proceso actual únicamente |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|12|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.SET ASSERT ENABLED.Summary-->El comando **SET ASSERT ENABLED** se utiliza para desactivar o reactivar las aserciones insertadas en el código 4D de la aplicación.<!-- END REF--> Para mayor información sobre aseciones, consulte la descripción del comando [ASSERT](../commands/assert). 

Por defecto, las aserciones añadidas en el programa están activas, en modo interpretado y en modo compilado. Este comando es útil para desactivarlas ya que su evaluación puede ser costosa en términos de tiempo de ejecución y usted también podría querer ocultarlas del usuario final de la aplicación. Por lo general, el comando **SET ASSERT ENABLED** puede utilizarse en el método base On Startup para activar o desactivar aserciones en función de si la aplicación está en modo "Prueba" o en modo "Producción". 

Por defecto, el comando **SET ASSERT ENABLED** afecta todos los procesos de la aplicación. Para restringir el efecto del comando al proceso actual únicamente, pase el parámetro *\**.

Por favor tenga en cuenta que cuando las aserciones están desactivadas, las expresiones pasadas a los comandos [ASSERT](../commands/assert) no se evalúan. Las líneas de código que llaman a [ASSERT](../commands/assert) no tienen más efecto en el funcionamiento de la aplicación, ni en términos de comportamiento ni en términos de rendimiento. 

## Ejemplo 

Desactivación de aserciones:

```4d
 SET ASSERT ENABLED(False)
 ASSERT(TestMethod) // TestMethod no se llamará ya que las aserciones están desactivadas
```

## Ver también 

[ASSERT](../commands/assert)  
[Asserted](../commands/asserted)  
[Get assert enabled](../commands/get-assert-enabled)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1131 |
| Hilo seguro | yes |


