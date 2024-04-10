---
id: vp-run-offscreen-area
title: VP Run offscreen area
---

<!-- REF #_method_.VP Run offscreen area.Syntax -->

**VP Run offscreen area** ( _parameters_ : Object) : Mixed<!-- END REF -->

<!-- REF #_method_.VP Run offscreen area.Params -->

| Parámetros | Tipo   |    | Descripción                                                                   |                  |
| ---------- | ------ | -- | ----------------------------------------------------------------------------- | ---------------- |
| parameters | Object | -> | Objeto que contiene los atributos del área fuera de pantalla                  |                  |
| Result     | Mixed  | <- | propiedad `.result` del objeto `.onEvent`, o Null si no devuelve ningún valor | <!-- END REF --> |

#### Descripción

El comando `VP Run offscreen area` <!-- REF #_method_.VP Run offscreen area.Summary -->crea un área fuera de pantalla en la memoria que puede ser utilizada para procesar comandos y funciones del área 4D View Pro<!-- END REF -->.

En el objeto _parameters_, pase una de las siguientes propiedades opcionales. Estas propiedades estarán disponibles a través del comando `This` dentro del método `onEvent` y harán referencia a la instancia:

| Propiedad          | Tipo                               | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------ | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| area               | text                               | El nombre del área fuera de la pantalla. Si se omite o es null, se asigna un nombre genérico (por ejemplo, "OffscreenArea1").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| onEvent            | objet (fórmula) | Un método retro llamada que se lanzará cuando el área fuera de la pantalla esté lista. It can be either:<li>an `onEvent` function of a class, or</li><li>a `Formula` object</li>By default, the callback method is called on the [`On VP Ready`](../../Events/onVpReady.md), [`On Load`](../../Events/onLoad.md), [`On Unload`](../../Events/onUnload.md), [`On End URL Loading`](../../Events/onEndUrlLoading.md), [`On URL Loading Error`](../../Events/onUrlLoadingError.md), [`On VP Range Changed`](../../Events/onVpRangeChanged.md), or [`On Timer`](../../Events/onTimer.md) events. The callback method can be used to access the [4D View Pro form object variable](../configuring.md#4d-view-pro-form-object-variable). |
| autoQuit           | boolean                            | True (default value) if the command must stop the formula execution when the [`On End URL Loading`](../../Events/onEndUrlLoading.md) or [`On URL Loading Error`](../../Events/onUrlLoadingError.md) events occur. If false, you must use the `CANCEL` or `ACCEPT` commands in the _onEvent_ callback method.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| timeout            | number                             | Tiempo máximo (expresado en segundos) antes de que el área se cierre automáticamente si no se genera ningún evento. Si se fija en 0, no se aplica ninguna limitación. Valor por defecto: 60                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| result             | mixto                              | Resultado del procesamiento (si hay)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `<customProperty>` | mixto                              | Any custom attribute to be available in the _onEvent_ callback method.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

La siguiente propiedad es añadida automáticamente por el comando si es necesario:

| Propiedad      | Tipo    | Descripción                                                     |
| -------------- | ------- | --------------------------------------------------------------- |
| timeoutReached | boolean | Añadido con el valor true si se ha excedido el tiempo de espera |

> The offscreen area is only available during the execution of the `VP Run offscreen area` command. Se destruirá automáticamente una vez finalizada la ejecución.

Los siguientes comandos se pueden utilizar en el método de retrollamada:

- `ACCEPT`
- `CANCEL`
- `SET TIMER`
- `WA Evaluate JavaScript`
- `WA EXECUTE JAVASCRIPT FUNCTION`

#### Ejemplo 1

Quiere crear un área 4D View Pro fuera de la pantalla y obtener el valor de una celda:

```4d
// cs.OffscreenArea class declaration 
Class constructor ($path : Text)
 This.filePath:=$path
 
// This function will be called on each event of the offscreen area 
Function onEvent()
 Case of
  :(FORM Event.code=On VP Ready)
      VP IMPORT DOCUMENT(This.area;This.filePath)
       This.result:=VP Get value(VP Cell(This.area;6;22))
 
       ALERT("The G23 cell contains the value: "+String(This.result))
 End case
```

El método de retrollamada _OffscreenArea_:

```4d
$o:=cs.OffscreenArea.new()
$result:=VP Run offscreen area($o)
```

#### Ejemplo 2

Quiere cargar un documento grande fuera de la pantalla, esperar a que todos los cálculos se completen y exportarlo como PDF:

```4d
//cs.OffscreenArea class declaration
Class constructor($pdfPath : Text)
 This.pdfPath:=$pdfPath
 This.autoQuit:=False
 This.isWaiting:=False
 
Function onEvent()
 Case of
     :(FORM Event.code=On VP Ready)
 // Document import
   VP IMPORT DOCUMENT(This.area;$largeDocument4VP)
         This.isWaiting:=True
 
 // Start a timer to verify if all calculations are finished.
 // If during this period the "On VP Range Changed" is thrown, the timer will be restarted
 // The time must be defined according to the computer configuration.
   SET TIMER(60)
 
  :(FORM Event.code=On VP Range Changed)
 // End of calculation detected. Restarts the timer
         If(This.isWaiting)
           SET TIMER(60)
         End if
 
  :(FORM Event.code=On Timer)
 // To be sure to not restart the timer if you call others 4D View command after this point
         This.isWaiting:=False
 


 // Stop the timer
   SET TIMER(0)
 
 // Start the PDF export
        VP EXPORT DOCUMENT(This.area;This.pdfPath;New object("formula";Formula(ACCEPT)))
 
     :(FORM Event.code=On URL Loading Error)

         CANCEL 
 End case
```

El método de retrollamada _OffscreenArea_:

```4d
$o:=cs.OffscreenArea.new()
 
$result:=VP Run offscreen area($o)
```

#### Ver también

[Blog post: End of document loading](https://blog.4d.com/4d-view-pro-end-of-document-loading/)
