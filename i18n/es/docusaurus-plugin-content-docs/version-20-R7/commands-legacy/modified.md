---
id: modified
title: Modified
slug: /commands/modified
displayed_sidebar: docs
---

<!--REF #_command_.Modified.Syntax-->**Modified** ( *campo* ) : Boolean<!-- END REF-->
<!--REF #_command_.Modified.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| campo | Field | &#8594;  | Campo a probar |
| Resultado | Boolean | &#8592; | Verdadero si se ha asignado un nuevo valor al campo, de lo contrario Falso |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.Modified.Summary-->**Modified** devuelve **True** si un valor ha sido asignado por programación a *campo* o si ha sido modificado durante la entrada de datos.<!-- END REF--> El comando **Modified**debe utilizarse únicamente en un método de formulario (o una subrutina llamada por un método de formulario).

Atención, este comando sólo devuelve un valor significativo dentro del mismo ciclo de ejecución. Particularmente devuelve **Falso** para todos los eventos de formulario que correspondan al antiguo ciclo de ejecución *\_o\_During* (On Clicked, On After Keystroke, etc.).

Durante la entrada de datos, un campo se considera modificado si el usuario edita el campo (sin importar si cambia el valor original) y luego pasa a otro campo o hace clic en un control. Note que el hecho de salir de un campo con la ayuda de la tecla Tab no significa que **Modified** devuelva **True**. El campo debe editarse para que **Modified** sea **True**.

Cuando se ejecuta un método, se considera que un campo ha sido modificado si se le asigna un valor (diferente o no).

**Nota:** **Modified** siempre devuelve **True** después de la ejecución de los comandos [PUSH RECORD](push-record.md) y [POP RECORD](pop-record.md).

En todos los casos, utilice el comando [Old](old.md) apara detectar si el valor del campo en realidad ha sido modificado.

**Nota:** aunque **Modified** puede aplicarse a todo tipo de campo, si lo utiliza con el comando [Old](old.md), debe tener en cuenta las restricciones que aplican al comando [Old](old.md). Para más detalles, ver la descripción del comando [Old](old.md).

Durante la entrada de datos, generalmente es más fácil realizar operaciones en métodos objeto con ayuda del comando [Form event code](form-event-code.md) que utilizar la función **Modified** en los métodos formulario. Como un método de objeto recibe el evento On Data Change cuando se modifica un campo, el uso de un método de objeto es equivalente a utilizar **Modified** en un método de formulario.

**Nota:** para funcionar correctamente, el comando **Modified** debe utilizarse únicamente en un método de formulario o en un método llamado por un método de formulario.

#### Ejemplo 1 

El siguiente ejemplo prueba si el campo *\[Ordenes\]Cantidad* o el campo *\[Ordenes\]Precio* ha sido modificado. Si alguno de los dos ha cambiado, entonces el campo *\[Ordenes\]Total* se calcula nuevamente. 

```4d
 If((Modified([Ordenes]Cantidad)|(Modified([Ordenes]Precio))
    [Orders]Total :=[Ordenes]Cantidad*[Ordenes]Precio
 End if
```

Note que el mismo resultado puede obtenerse utilizando la segunda línea como una subrutina llamada por los métodos de objeto de los campos *\[Ordenes\]Cantidad* y *\[Ordenes\]Precio* en el evento de formulario On Data Change.

#### Ejemplo 2 

Selecciona un registro para la tabla *\[unaTabla\]*, luego llama múltiples subrutinas que pueden modificar el campo *\[unaTabla\]CampoImportante,* pero no guarda el registro. Al final del método principal, puede utilizar el comando Modified para determinar si debe guardar el registro:

```4d
  // El registro ha sido seleccionado como registro actual
  // Luego realiza acciones utilizando subrutinas
 HACER ALGO
 HACER ALGO MÁS
 NO OLVIDAR HACER ESTO
  // ...
  // Y luego usted prueba el campo para determinar si el registro debe guardarse
 If(Modified([unaTabla]CampoImportante))
    SAVE RECORD([unaTabla])
 End if
```

#### Ver también 

[Form event code](form-event-code.md)  
[Old](old.md)  