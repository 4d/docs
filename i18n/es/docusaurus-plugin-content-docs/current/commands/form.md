---
id: form
title: Formulario
displayed_sidebar: docs
---

<!--REF #_command_.Form.Syntax-->**Form**  : Object<!-- END REF-->

<!--REF #_command_.Form.Params-->

| Parámetros | Tipo   |                             | Descripción                 |
| ---------- | ------ | --------------------------- | --------------------------- |
| Resultado  | Object | &#8592; | Datos del formulario actual |

<!-- END REF-->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                       |
| ----------- | ------------------------------------ |
| 20 R8       | Soporte de las clases de formularios |

</details>

## Descripción

<!--REF #_command_.Form.Summary-->The **Form** command returns the object associated with the current form (instantiated from the *formData* parameter or the user class assigned in the Form editor).<!-- END REF-->El comando **Form** devuelve el objeto asociado al formulario actual (instanciado a partir del parámetro *formData* o de la clase de usuario asignada en el editor de formularios). 4D asocia automáticamente un objeto al formulario actual en los siguientes casos:

- el formulario actual ha sido cargado por uno de los comandos [`DIALOG`](dialog.md), [`Print form`](print-form.md), o [`FORM LOAD`](form-load.md),
- el formulario actual es un subformulario,
- un formulario de tabla se muestra actualmente en la pantalla.

### Comandos (DIALOG...)

Si el formulario actual se está mostrando o cargando mediante una llamada a los comandos [DIALOG](dialog.md), [`Print form`](print-form.md), o [`FORM LOAD`](form-load.md), **Form** devuelve cualquiera de los dos:

 - el objeto *formData* pasado como parámetro a este comando, si existe,
 - o, un objeto instanciado de la [clase de usuario asociada al formulario](../FormEditor/properties_FormProperties.md#form-class), si existe,
 - o, un objeto vacío.

### Subformulario

Si el formulario actual es un subformulario, el objeto devuelto depende de la variable contenedor padre:

- Si la variable asociada al contenedor padre ha sido tipificada como objeto, **Form** devuelve el valor de esta variable.\
    En este caso, el objeto devuelto por **Form** es el mismo que el devuelto por la siguiente expresión:

```4d
 (OBJECT Get pointer(Object subform container))->  
```

- Si la variable asociada al contenedor padre no ha sido tipificada como objeto, **Form** devuelve un objeto vacío, mantenido por 4D en el contexto del subformulario.

Para más información, consulte la sección *Subformularios de página*.

### Formulario tabla

**Form** devuelve el objeto asociado al formulario tabla que se muestra en pantalla. En el contexto de un formulario de entrada visualizado desde un formulario de salida (es decir, después de hacer doble clic en un registro), el objeto devuelto contiene la siguiente propiedad:

| **Propiedad** | **Tipo** | **Description**                                |
| ------------- | -------- | ---------------------------------------------- |
| parentForm    | object   | Objeto **Form** del formulario de salida padre |

## Ejemplo

En un formulario que muestra el registro de una persona, un botón "Check children" abre un cuadro de diálogo para verificar/modificar los nombres y edades de sus hijos:

![](../assets/en/commands/pict3542015.en.png)

**Nota:** el campo objeto "Children" se representa sólo para mostrar su estructura en este ejemplo.

En el formulario de verificación, ha asignado algunas propiedades del objeto Form a las entradas:

![](../assets/en/commands/pict3541682.en.png)

Este es el código del botón "Check children":

```4d
 var $win;$n;$i : Integer
 var $save : Boolean
 ARRAY OBJECT($children;0)
 OB GET ARRAY([Person]Children; "children";$children) //obtener la colección children
 $save:=False //inicializar la variable save
 
 $n:=Tamaño del array($children)
 If($n>0)
    $win:=Open form window("Edit_Children";Movable form dialog box)
    SET WINDOW TITLE("Check children for "+[Person]Name)
    For($i;1;$n) //para cada hijo
       DIALOG("Edit_Children";$children{$i}) //muestra el diálogo lleno de valores
       If(OK=1) //el usuario ha pulsado OK
          $save:=True
       End if
    End for
    If($save=True)
       [Person]Children:=[Person]Children //forza la actualización del campo objeto
    End if
    CLOSE WINDOW($win)
 Else
    ALERT("No child to check.")
 End if
```

El formulario muestra información sobre cada niño:

![](../assets/en/commands/pict3515152.en.png)

Si se editan los valores y se presiona el botón OK, se actualiza el campo (después hay que guardar el registro principal).

## Ver también

[DIALOG](dialog.md)

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1466                        |
| Hilo seguro       | &cross; |


