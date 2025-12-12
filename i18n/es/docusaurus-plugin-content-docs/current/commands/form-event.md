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

<!--REF #_command_.FORM Event.Summary-->**FORM Event** returns an object containing information about the form event that has just occurred.<!-- END REF-->**FORM Event** devuelve un objeto que contiene información sobre el evento formulario que acaba de ocurrir. Por lo general, utilizará **FORM Event** en un método formulario u objeto.

**Objeto devuelto**

Cada objeto devuelto incluye las siguientes propiedades principales:

| **Propiedad** | **Tipo** | **Description**                                                                                                                                                                           |
| ------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objectName    | text     | Nombre del objeto que desencadena el evento - No se incluye si el evento lo desencadena el formulario                                                                                     |
| code          | integer  | Valor numérico del evento de formulario.                                                                                                                                  |
| description   | text     | Nombre del evento de formulario (*por ejemplo*, "On After Edit"). Consulte la sección [**Eventos formulario**](../Events/overview.md). |

Por ejemplo, en el caso de un clic en un botón, el objeto contiene las siguientes propiedades:

```json
{"code":4,"description":"On Clicked","objectName":"Button2"}
```

El objeto evento puede contener propiedades adicionales, dependiendo del objeto para el que se produzca el evento. Para objetos *eventObj* generados en:

- los objetos list box o columna de list box, ver [esta sección](../FormObjects/listbox_overview.md#additional-properties).
- áreas 4D View Pro, ver [On VP Ready form event](../Events/onVpReady.md).

**Nota:** si no hay ningún evento actual, **FORM Event** devuelve un objeto null.

## Ejemplo 1

Desea manejar el evento On Clicked en un botón:

```4d
 If(FORM Event.code=On Clicked)
    ...
 End if
```

## Ejemplo 2

Si define el nombre del objeto columna con un nombre de atributo real de una dataclass como esta:

![](../assets/en/commands/pict4843820.en.png)

Puede ordenar la columna utilizando el evento On Header Click:

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

Desea gestionar los detalles de visualización en un objeto list box con un método definido en la propiedad *Meta info expression*:

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

El list box resultante cuando se seleccionan líneas:

![](../assets/en/commands/pict4843808.en.png)

## Ver también

[Form Events](../Events/overview.md)
[Form event code](form-event-code.md)

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1606                        |
| Hilo seguro       | &check; |


