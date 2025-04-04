---
id: form-event
title: FORM Event
slug: /commands/form-event
displayed_sidebar: docs
---

<!--REF #_command_.FORM Event.Syntax-->**FORM Event** : Object<!-- END REF-->

<!--REF #_command_.FORM Event.Params-->

| Parâmetro | Tipo   |                             | Descrição      |
| --------- | ------ | --------------------------- | -------------- |
| Resultado | Object | &#8592; | Objecto evento |

<!-- END REF-->

## Descrição

<!--REF #_command_.FORM Event.Summary-->**FORM Event** returns an object containing information about the form event that has just occurred.<!-- END REF-->**FORM Event** returns an object containing information about the form event that has just occurred.**FORM Event** returns an object containing information about the form event that has just occurred.**FORM Event** returns an object containing information about the form event that has just occurred.**FORM Event** returns an object containing information about the form event that has just occurred.**FORM Event** returns an object containing information about the form event that has just occurred.**FORM Event** returns an object containing information about the form event that has just occurred.**FORM Event** returns an object containing information about the form event that has just occurred. Usually, you will use **FORM Event** from within a form or object method.

**Returned object**

Each returned object includes the following main properties:

| **Propriedade** | **Tipo** | **Description**                                                                                                                                                                                   |
| --------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objectName      | text     | Name of the object triggering the event - Not included if the event is triggered by the form                                                                                                      |
| code            | integer  | Valor numérico do evento de formulário.                                                                                                                                           |
| description     | text     | Name of the form event (*e.g.* "On After Edit"). Veja a seção [**Eventos Formulário**](../Events/overview.md). |

For example, in the case of a click on a button, the object contains the following properties:

```json
{"code":4,"description":"On Clicked","objectName":"Button2"}
```

The event object can contain additional properties, depending on the object for which the event occurs. For *eventObj* objects generated on:

- List box or list box column objects, see [this section](../FormObjects/listbox_overview.md#additional-properties).
- 4D View Pro areas, see [On VP Ready form event](../Events/onVpReady.md).

**Note:** If there is no current event, **FORM Event** returns a null object.

## Exemplo 1

You want to handle the On Clicked event on a button:

```4d
 If(FORM Event.code=On Clicked)
    ...
 End if
```

## Exemplo 2

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

## Exemplo 3

You want to handle the On Display Details on a list box object with a method set in the *Meta info expression* property:

![](../assets/en/commands/pict4843812.en.png)

The *setColor* method:

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

## Veja também

[Form Events](../Events/overview.md)
[Form event code](form-event-code.md)

## Propriedades

|                |                             |
| -------------- | --------------------------- |
| Command number | 1606                        |
| Thread safe    | &check; |


