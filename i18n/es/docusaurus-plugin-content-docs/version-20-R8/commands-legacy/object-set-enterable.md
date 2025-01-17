---
id: object-set-enterable
title: OBJECT SET ENTERABLE
slug: /commands/object-set-enterable
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET ENTERABLE.Syntax-->**OBJECT SET ENTERABLE** ( {* ;} *objeto* ; *editable* )<!-- END REF-->
<!--REF #_command_.OBJECT SET ENTERABLE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *), o Tabla o campo o variable (si se omite *) |
| editable | Boolean, Integer | &#8594;  | True para editable; False para no editable |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT SET ENTERABLE.Summary-->El comando **OBJECT SET ENTERABLE** \]vuelve editables o no editables los objetos de formulario especificados por *objeto* y puede definir el atributo enfocable.<!-- END REF-->

**Nota**: un objeto de formulario enfocable puede obtener el foco y desencadenar los eventos de formulario *On Getting focus* / *On Losing focus*. Además, los objetos enfocables del **área de** **entrada** y **del área 4D Write Pro** pueden tener su contenido seleccionado y copiado, incluso si no son editables. 

Si especifica el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si omite el parámetro opcional *\**, indica que el parámetro *objeto* es una tabla, un campo o una variable. En este caso, usted especifica una referencia de un campo o de una variable (campo o variable tipo objeto únicamente) en lugar de una cadena. Para mayor información sobre nombres de objetos, consulte la sección *Propiedades de los objetos*.

Puede pasar un valor booleano o un valor Entero largo en *editable*:

* Booleano: cuando *editable* es True, el usuario puede ingresar datos y mover el cursor al área.  
Cuando *editable* es False:  
   * en las bases de datos binarias, el usuario no puede introducir datos y el atributo enfocable depende de la opción **Enfocable** definida en la lista de propiedades.  
   * en los proyectos, el usuario no puede introducir datos y el objeto es enfocable.
* Entero largo: pasar un valor Entero largo en *editable* le permite controlar también la propiedad **enfocable** para **Entradas** y **áreas 4D Write Pro**. Puede utilizar una de las siguientes constantes:  

| Constante                       | Valor | Comentario                                                                                                                                                                                                     |  
| ------------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| obk enterable                   | 1     | Los usuarios pueden ingresar valores en el objeto y el objeto es enfocable.                                                                                                                                    |  
| obk not enterable               | 0     | Los usuarios no pueden ingresar valores en el objeto, pero un **objeto área de entrada** o un objeto **área 4D Write Pro** es enfocable (los otros objetos no editables no se pueden enfocar automáticamente). |  
| obk not enterable not focusable | 2     | Los usuarios no pueden ingresar valores en el objeto y un objeto **área de entrada** y **área 4D Write Pro** no es enfocable.                                                                                  |

El comando **OBJECT SET ENTERABLE** también puede utilizarse para activar por programación el modo “Editable en lista” para los subformularios y formularios listados mostrados utilizando los comandos [MODIFY SELECTION](modify-selection.md) y [DISPLAY SELECTION](display-selection.md):

* Para los subformularios, en el parámetro *areaEntrada*, pase el nombre de la tabla del subformulario o el nombre del objeto del subformulario, por ejemplo: **OBJECT SET ENTERABLE**(\*;"Subform";True). The command works in subforms only if it is in the form method of the subform.
* Para los formularios listados, debe pasar el nombre de la tabla del formulario en el parámetro *areaEntrada*, por ejemplo: **OBJECT SET ENTERABLE**(\[MiTabla\];True).

Volver un objeto no editable no evita que cambie su valor por programación.

**Nota:** para volver una celda de list box no editable, pase el valor -1 a $0 en el evento On Before Data Entry, ver *Gestión de entrada*.

#### Ejemplo 1 

El siguiente ejemplo define un campo de envío, dependiendo del peso del paquete. Si el paquete pesa un 1 kilo o menos, el envío se realiza a través de la Oficina Postal Nacional y el campo no es editable. De lo contrario, el campo es editable. 

```4d
 If([Envio]Peso<=1)
    [Envio]Empresa:="Oficina Postal Nacional"
    OBJECT SET ENTERABLE([Envio]Empresa;False)
 Else
    OBJECT SET ENTERABLE([Envio]Empresa;True)
 End if
```

#### Ejemplo 2 

Este es el método de objeto de una casilla de selección ubicada en el encabezado de una lista para controlar el modo Entrada en lista: 

```4d
 var bEditable : Boolean
 OBJECT SET ENTERABLE([Tabla1];bEditable)
```

#### Ver también 

[OBJECT Get enterable](object-get-enterable.md)  
[OBJECT SET VISIBLE](object-set-visible.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 238 |
| Hilo seguro | &cross; |


