---
id: wa-run-offscreen-area
title: WA Run offscreen area
slug: /commands/wa-run-offscreen-area
displayed_sidebar: docs
---

<!--REF #_command_.WA Run offscreen area.Syntax-->**WA Run offscreen area** ( *parametros* : Object ) : any<!-- END REF-->
<!--REF #_command_.WA Run offscreen area.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| parametros | Object | &#8594; | Objeto que contiene los atributos del área web |
| Resultado | any | &#8592; | Propiedad .result del objeto onEvent, o Null si no devuelve un valor |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|18 R6|Modificado|
|18 R3|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.WA Run offscreen area.Summary-->El comando **WA Run offscreen area** crea un área web en memoria que se puede utilizar para cargar y analizar automáticamente las páginas web.<!-- END REF-->

**Nota:** este comando utiliza el motor de renderización web integrado.

En el objeto *parametros*, pase cualquiera de los siguientes atributos opcionales. Estas propiedades estarán disponibles a través del comando [This ](../commands/this) dentro del método *onEvent* y hacen referencia a la instancia: 

| **Propiedad**    | **Tipo <br/>**     | **Descripción**                                                                                                                                                                                                                                                                                                                                                            |
| ---------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| url              | texto \| objeto de archivo | La URL o el archivo que se cargará en el área web. Si se omite o es null, se carga una página en blanco.                                                                                                                                                                                                                                                                   |
| area             | texto                      | El nombre del área web. Si se omite o es null, se asigna un nombre genérico (por ejemplo, OffscreenArea1).                                                                                                                                                                                                                                                                 |
| onEvent          | objeto (fórmula)           | Un método de retrollamada que se iniciará cuando el área web esté lista. Puede ser:<br/> una función *onEvent* de una clase, o un objeto [Formula](../commands/formula)  Por defecto, el método de retrollamada se llama en los eventos On Load, On Unload, On End URL Loading, On URL Loading Error o On Timer.                                                            |
| autoQuit         | booleano                   | True (valor predeterminado) si el comando debe detener la ejecución de la fórmula cuando se producen los eventos On End URL Loading o On URL Loading Error.<br/><br/>Si es false, debe utilizar los comandos [CANCEL](../commands/cancel) o [ACCEPT](../commands/accept) en el método de retrollamada o métodos proyecto llamados con el objeto $4d para cerrar el área web. |
| timeout          | real                       | Tiempo máximo (expresado en segundos) antes de que el área se cierre automáticamente si ningún evento se genera. Si se define en 0, no se aplica ninguna limitación. Valor predeterminado: 60                                                                                                                                                                              |
| result           | fusionado                  | Resultado del proceso a devolver (si lo hay)                                                                                                                                                                                                                                                                                                                               |
| <customProperty> | fusionado                  | Todo atributo personalizado que esté disponible en la retrollamada o método $4d.                                                                                                                                                                                                                                                                                           |

El comando agrega automáticamente la siguiente propiedad si es necesario:

| **Propiedad**  | **Tipo <br/>** | **Descripción**                                                   |
| -------------- | ---------------------- | ----------------------------------------------------------------- |
| timeoutReached | booleano               | Agregado con valor **true** si se ha excedido el tiempo de espera |

  
Si se pasa un valor nulo en *parametros*, se creará un área web en blanco y luego se cerrará automáticamente.

**Notas**: 

* El área web fuera de pantalla solo está disponible durante la ejecución del comando **WA Run offscreen area**. Se destruirá automáticamente una vez haya finalizado la ejecución.
* Los métodos 4D pueden llamarse desde el código JavaScript ejecutado en un área web. Ver *Acceder a los métodos 4D*.

Los siguientes comandos se pueden usar en el método de retrollamada:

* [ACCEPT](../commands/accept)
* [CANCEL](../commands/cancel)
* [SET TIMER](../commands/set-timer)
* [WA Evaluate JavaScript](../commands/wa-evaluate-javascript)
* [WA EXECUTE JAVASCRIPT FUNCTION](../commands/wa-execute-javascript-function)
* [WA Get current URL](../commands/wa-get-current-url)
* [WA GET LAST URL ERROR](../commands/wa-get-last-url-error)
* [WA Get page content](../commands/wa-get-page-content)
* [WA Get page title](../commands/wa-get-page-title)
* [WA OPEN URL](../commands/wa-open-url)
* [WA REFRESH CURRENT URL](../commands/wa-refresh-current-url)
* [WA STOP LOADING URL](../commands/wa-stop-loading-url)

## Ejemplo 

Desea crear y manejar un área web fuera de pantalla utilizando una función de su clase OffscreenArea:

```4d
 $config:=cs.OffscreenArea.new()
 $result:=WA Run offscreen area($config)
 If($config.timeoutReached) //devuelto automáticamente en caso de tiempo de espera
    ALERT("Timeout reached")
 End if
```

En la **clase OffscreenArea**:

```4d
 Class constructor
 This.url:=File("/RESOURCES/compute.html")
 This.area:="myWAOffscreen"
 
 Function onEvent
 Case of
    :(FORM Event.code=On End URL Loading)
       This.result:=WA Evaluate JavaScript(*;This.area;"myJSMethod();")
 End case
```

## Variables y conjuntos del sistema 

La variable del sistema OK se define en 0 si se ha alcanzado el tiempo de espera o se ha llamado a [CANCEL](../commands/cancel) en *onEvent*, de lo contrario, se define en 1.

## Ver también 

[FORM Event](../commands/form-event)  
*Gestión programada de áreas web*  
[WA OPEN WEB INSPECTOR](../commands/wa-open-web-inspector)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1727 |
| Hilo seguro | no |
| Modifica variables | OK |



