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

| Propiedad          | Tipo                               | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------ | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| area               | text                               | El nombre del área fuera de la pantalla. Si se omite o es null, se asigna un nombre genérico (por ejemplo, "OffscreenArea1").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| onEvent            | objet (fórmula) | Un método retro llamada que se lanzará cuando el área fuera de la pantalla esté lista. It can be either:<li>an `onEvent` function of a class, or</li><li>a `Formula` object</li>By default, the callback method is called on the [`On VP Ready`](../../Events/onVpReady.md), [`On Load`](../../Events/onLoad.md), [`On Unload`](../../Events/onUnload.md), [`On End URL Loading`](../../Events/onEndUrlLoading.md), [`On URL Loading Error`](../../Events/onUrlLoadingError.md), [`On VP Range Changed`](../../Events/onVpRangeChanged.md), or [`On Timer`](../../Events/onTimer.md) events. El método de retrollamada puede ser utilizado para acceder a la [variable del objeto 4D View Pro](../configuring.md#4d-view-pro-form-object-variable). |
| autoQuit           | boolean                            | True (default value) if the command must stop the formula execution when the [`On End URL Loading`](../../Events/onEndUrlLoading.md) or [`On URL Loading Error`](../../Events/onUrlLoadingError.md) events occur. Si es false, debe utilizar los comandos `CANCEL` o `ACCEPT` en el método de retrollamada _onEvent_.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| timeout            | number                             | Tiempo máximo (expresado en segundos) antes de que el área se cierre automáticamente si no se genera ningún evento. Si se fija en 0, no se aplica ninguna limitación. Valor por defecto: 60                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| resultado          | mixto                              | Resultado del procesamiento (si hay)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `<customProperty>` | mixto                              | Todo atributo personalizado que esté disponible en el método de retrollamada _onEvent_.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

La siguiente propiedad es añadida automáticamente por el comando si es necesario:

| Propiedad      | Tipo    | Descripción                                                     |
| -------------- | ------- | --------------------------------------------------------------- |
| timeoutReached | boolean | Añadido con el valor true si se ha excedido el tiempo de espera |

> El área fuera de pantalla solo está disponible durante la ejecución del comando `VP Run offscreen area`. Se destruirá automáticamente una vez finalizada la ejecución.

Los siguientes comandos se pueden utilizar en el método de retrollamada:

- `ACCEPT`
- `CANCEL`
- `SET TIMER`
- `WA Evaluate JavaScript`
- `WA EXECUTE JAVASCRIPT FUNCTION`

#### Ejemplo 1

Quiere crear un área 4D View Pro fuera de la pantalla y obtener el valor de una celda:

```4d
// Declaración de la clase cs.OffscreenArea 
Class constructor ($path : Text)
 This.filePath:=$path

// Esta función será llamada en cada evento del área offscreen 
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
// Declaración de clase cs.OffscreenArea
Class constructor($pdfPath : Text)
 This.pdfPath:=$pdfPath
 This.autoQuit:=False
 This.isWaiting:=False
 
Function onEvent()
 Case of
     :(FORM Event.code=On VP Ready)
 // Importar el documento
   VP IMPORT DOCUMENT(This.area;$largeDocument4VP)
         This.isWaiting:=True
 
 // Iniciar un temporizador para verificar si todos los cálculos han finalizado.
 // Si durante este período se lanza "On VP Range Changed", se reiniciará el temporizador
 // El tiempo debe ser definido de acuerdo con la configuración del ordenador.
   SET TIMER(60)
 
  :(FORM Event.code=On VP Range Changed)
 // Se detectó el fin del cálculo. Reinicia el temporizador
         If(This.isWaiting)
           SET TIMER(60)
         End if
 
  :(FORM Event.code=On Timer)
 // Para asegurarse de no reiniciar el temporizador si llama a otros comandos de 4D View después de este punto
         This.isWaiting:=False
 


 // Detener el temporizador
   SET TIMER(0)
 
 // Iniciar la exportación a PDF
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
