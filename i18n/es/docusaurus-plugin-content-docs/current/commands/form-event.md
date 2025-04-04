---
id: form-event
title: FORM Event
slug: /commands/form-event
displayed_sidebar: docs
---

<!--REF #_command_.FORM Event.Syntax-->**FORM Event** : Object<!-- END REF-->

<!--REF #_command_.FORM Event.Params-->

| Parámetros | Tipo   |                             | Descripción   |
| ---------- | ------ | --------------------------- | ------------- |
| Resultado  | Object | &#8592; | Objeto evento |

<!-- END REF-->

## Descripción

<!--REF #_command_.FORM Event.Summary-->**FORM Event** returns an object containing information about the form event that has just occurred.<!-- END REF-->**FORM Event** returns an object containing information about the form event that has just occurred.**FORM Event** returns an object containing information about the form event that has just occurred.**FORM Event** returns an object containing information about the form event that has just occurred.**FORM Event** returns an object containing information about the form event that has just occurred.**FORM Event** returns an object containing information about the form event that has just occurred.**FORM Event** returns an object containing information about the form event that has just occurred.**FORM Event** returns an object containing information about the form event that has just occurred.**FORM Event** returns an object containing information about the form event that has just occurred.**FORM Event** returns an object containing information about the form event that has just occurred. Usually, you will use **FORM Event** from within a form or object method.

**Objeto devuelto**

Each returned object includes the following main properties:

| **Propiedad** | **Tipo** | **Description**                                                                                                                                                                               |
| ------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objectName    | text     | Nombre del objeto que desencadena el evento - No se incluye si el evento lo desencadena el formulario                                                                                         |
| code          | integer  | Valor numérico del evento de formulario.                                                                                                                                      |
| description   | text     | Name of the form event (*e.g.* "On After Edit"). See the [**Form Events**](../Events/overview.md) section. |

For example, in the case of a click on a button, the object contains the following properties:

```json
{"code":4,"description":"On Clicked","objectName":"Button2"}
```

The event object can contain additional properties, depending on the object for which the event occurs. For *eventObj* objects generated on:

- List box or list box column objects, see [this section](../FormObjects/listbox_overview.md#additional-properties).
- 4D View Pro areas, see [On VP Ready form event](../Events/onVpReady.md).

**Note:** If there is no current event, **FORM Event** returns a null object.

## Ejemplo 1

You want to handle the On Clicked event on a button:

```4d
 If(FORM Event.code=On Clicked)
    ...
 End if
```

## Ejemplo 2

If you set the column object name with a real attribute name of a dataclass like this:

![](../assets/en/commands/pict4843820.en.png)

You can sort the column using the On Header Click event:

```4d
 Form.event:=FORM Event
 Case of
    :(Form event code=On Header Click)
       if(Form.event.columnName="lastname")
          Form.employees:=Form.employees.orderBy(Form.event.columnName+", firstname")
       End if
 End case
```

## Ejemplo 3

You want to handle the On Display Details on a list box object with a method set in the *Meta info expression* property:

![](../assets/en/commands/pict4843812.en.png)

El método *setColor*:

```4d
 var $event;$0;$meta : Object
 $event:=FORM Event
 $meta:=New object
 
 Case of
    :($event.code=On Display Detail)
       If($event.isRowSelected)
          $meta.fill:="lightblue"
       End if
 End case
 $0:=$meta
```

The resulting list box when rows are selected:

![](../assets/en/commands/pict4843808.en.png)

## Ver también

[Form Events](../Events/overview.md)
[Form event code](form-event-code.md)

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1606                        |
| Hilo seguro       | &check; |


