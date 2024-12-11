---
id: dialog
title: DIALOG
slug: /commands/dialog
displayed_sidebar: docs
---

<!--REF #_command_.DIALOG.Syntax-->**DIALOG** ( {*tabla* ;} *form* {; *formData*}{; *} )<!-- END REF-->
<!--REF #_command_.DIALOG.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla a la cual pertenece el formulario o Si se omite: tabla por defecto o uso del formulario de proyecto |
| form | Text, Object | &#8594;  | Nombre de tabla o formulario de proyecto a mostrar como diálogo |
| formData | Object | &#8594;  | Datos para asociar al formulario |
| * | Operador | &#8594;  | Utilizar el mismo proceso |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DIALOG.Summary-->El comando **DIALOG** presenta el *formulario* al usuario junto con los parámetros *formData* (opcional).<!-- END REF--> Este comando se designa para trabajar con interfaces de usuario avanzadas y personalizadas basadas en formularios. Puede utilizarlo para mostrar información de la base o de otras ubicaciones, o para ofrecer funcionalidades de entrada de datos. A diferencia de [ADD RECORD](add-record.md) o [MODIFY RECORD](modify-record.md), **DIALOG** le da control total sobre el formulario, su contenido y los bontones de navegación y validación. 

Este comando por lo general se llama junto con [Open form window](open-form-window.md) para mostrar formularios sofisticados, como se muestra en el siguiente ejemplo:

![](../assets/en/commands/pict3541609.en.png)

Utilice **DIALOG** en lugar de [ALERT](alert.md), [CONFIRM](confirm.md) o [Request](request.md) cuando la información qie sea presentada o reunida sea más compleja de lo que estos comandos pueden manejar. 

**Nota:** en bases convertidas, es posible prohibir la entrada de datos en cajas de diálogo (y limitar la entrada de datos a variables únicamente) utilizando una opción en las Preferencias de 4D (página Compatibilidad). Esta restricción corresponde al funcionamiento de versiones anteriores de 4D. 

En el parámetro *formulario,* puede pasar:

* el nombre de un formulario (formulario proyecto o formulario tabla) a utilizar;
* la ruta (en sintaxis POSIX) a un archivo .json válido que contiene una descripción del formulario a utilizar. Ver *Ruta de archivo del formulario*;
* un objeto que contiene una descripción del formulario a utilizar.

Opcionalmente, puede pasar parámetros al *form* mediante el objeto *formData*. Toda propiedad del objeto *formData* estará disponible desde el contexto del formulario mediante el comando [Form](form.md). Por ejemplo, si pasa un objeto que contiene {"version","12"} en *formData*, podrá obtener el valor de la propiedad "Version" en el formulario llamando:

```4d
 $v:=Form.version //"12"
```

Utilizando una variable local para *formData*, esta funcionalidad le permite pasar parámetros de manera segura a sus formularios, cualquiera que sea el contexto de la llamada. En particular, si el mismo formulario se llama desde diferentes lugares en el mismo proceso, siempre podrá acceder a sus valores específicos simplemente llamando a [Form](form.md).myProperty. Además, dado que los objetos se pasan por referencia, si el usuario modifica un valor de propiedad en el formulario, éste se guardará automáticamente en el mismo objeto.  
Al combinar el objeto *formData* y el comando [Form](form.md), puede enviar parámetros al formulario o leer los parámetros en cualquier momento con código limpio y seguro.

**Nota:** si no pasa el parámetro *formData* o si pasa un objeto indefinido, **DIALOG** crea automáticamente un nuevo objeto vacío vinculado al *form* y disponible a través del comando [Form](form.md). 

El diálogo es cerrado por el usuario con una acción Aceptar (disparada por la acción estándar ak accept, la tecla Intro o el comando [ACCEPT](accept.md)). Una acción aceptar definirá la variable sistema OK en 1, mientra una acción cancelar definirá OK en 0\.   
Recuerde que validar no es igual a guardar: si el diálogo incluye campos, debe llamar explícitamente al comando [SAVE RECORD](save-record.md) para guardar los datos que hayan sido modificados.  
El diálogo se cancela si el usuario hace clic en el botón Cancelar (**Escape** en Windows, **Esc** en Macintosh) o si se ejecuta el comando [CANCEL](cancel.md). 

Si pasa el parámetro opcional \*, el formulario se carga y muestra en la última ventana del proceso actual y el comando termina su ejecución mientras deja el formulario activo en pantalla. Este formulario luego reacciona "normalmente" a las acciones del usuario y se cierra vía una acción estándar o cuando el código 4D relacionado con el formulario (método objeto o método formulario) llama al comando [CANCEL](cancel.md) o [ACCEPT](accept.md). Si el proceso actual termina, los formularios creados de esta forma se cierran automáticamente de la misma forma que si se hubiera llamado el comando [CANCEL](cancel.md). Este modo de apertura es particularmente útil para mostrar una paleta flotante con un documento, sin necesidad de otro proceso.

**Notas:** 

* Puede combinar el uso de la sintaxis **DIALOG**(form;\*) con el comando [CALL FORM](call-form.md) para establecer la comunicación entre los formularios.
* debe crear una ventana antes de llamar la instrucción **DIALOG**(form;\*); si no es posible utilizar la ventana de diálogo actual en el proceso ni la ventana creada por defecto para cada proceso. De lo contrario, se genera el error -9909.
* cuando se utiliza el parámetro *\**, la ventana se cierra automáticamente después de una acción estándar o una llamada al comando [CANCEL](cancel.md) o [ACCEPT](accept.md). No tiene que gestionar el cierre de la propia ventana.

#### Ejemplo 1 

El siguiente ejemplo puede usarse para crear una paleta de herramientas

```4d
  //Muestra la paleta de herramientas
 $palette_window:=Open form window("tools";Palette form window)
 DIALOG("tools";*) //Give back the control immediately
  //Muestra ventana del documento principal
 $document_window:=Open form window("doc";Standard form window)
 DIALOG("doc")
```

#### Ejemplo 2 

En un formulario, usted asignó algunas propiedades de objeto [Form](form.md) a variables:

![](../assets/en/commands/pict3515147.en.png)

Luego, puede ejecutarlas desde cualquier lugar de la aplicación:

```4d
 var $win : Integer
 $win:=Open form window("Edit_Address";Movable form dialog box;Horizontally centered;Vertically centered)
 DIALOG("Edit_Address";New object("firstName";"Mike";"age";12))
 CLOSE WINDOW($win)
```

El formulario muestra los valores que ha pasado:

![](../assets/en/commands/pict3515152.en.png)

**Nota:** este ejemplo requiere que la notación de objeto esté habilitada en la base de datos (ver *Página Compatibilidad*).

#### Ejemplo 3 

El siguiente ejemplo usa la ruta a un formulario .json para mostrar los registros en una lista de empleados:

```4d
 Open form window("/RESOURCES/OutputPersonnel.json";Plain form window)
 ALL RECORDS([Personnel])
 DIALOG("/RESOURCES/OutputPersonnel.json";*)
```

que devuelve:

![](../assets/en/commands/pict3687439.en.png)

#### Ejemplo 4 

El siguiente ejemplo utiliza un archivo .json como un objeto y modifica algunas propiedades:

```4d
 var $form : Object
 $form:=JSON Parse(Document to text(Get 4D folder(Current resources folder)+"OutputPersonnel.json"))
 $form.windowTitle:="The Avengers"
 $form.pages[1].objects.logo.picture:="/RESOURCES/Images/Avengers.png"
 $form.pages[1].objects.myListBox.borderStyle:="double"
 Open form window($form;Plain form window)
 DIALOG($form;*)
```

El formulario modificado se devuelve con el título, el logotipo y el borde modificados:

![](../assets/en/commands/pict3688356.en.png)

#### Variables y conjuntos del sistema 

Después de llamar a DIALOG, si se acepta el diálogo, la variable sistema OK toma el valor 1; si se cancela toma el valor 0.

#### Ver también 

[ACCEPT](accept.md)  
[ADD RECORD](add-record.md)  
[CALL FORM](call-form.md)  
[CANCEL](cancel.md)  
[Form](form.md)  
[Open window](open-window.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 40 |
| Hilo seguro | &check; |
| Modifica variables | OK, error |
| Prohibido en el servidor ||


