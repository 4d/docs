---
id: overview
title: Form Events
---

Form events are events that can lead to the execution of the form method and/or form object method(s). Form events allow you to control the flow of your application and to write code that is executed only when a specific event occurs.

In your code, you control the events using the `FORM Event` command, that returns the triggered event. Por exemplo:

```4d  
//code of a button
If(FORM Event.code=On Clicked) 
// do something when the button is clicked
End if
```

> Every form and every active object on the form can listen to a predefined set of events, but only the events that you enabled at the form level and/or at every object level will actually occur.


## Objecto evento

Each event is returned as an object by the `FORM Event` command. Por defeito, contém as seguintes propriedades:

| Propriedade | Tipo | Descrição |
| ----------- | ---- | --------- |
|             |      |           |
 objectName|text|Name of the object triggering the event - Not included if the event is triggered by the form| |code|longint|Numeric value of the form event. Also returned by the 

`Form event code` command| |description|text|Name of the form event (e.g. "On After Edit")|

Propriedades adicionais são retornadas quando o evento ocorre em objetos específicos. Em particular:

- [list boxes](FormObjects/listbox_overview.md#supported-form-events) and [list box columns](FormObjects/listbox_overview.md#supported-form-events-1) return [additional properties](FormObjects/listbox_overview.md#additional-properties) such as `columnName` or `isRowSelected`.
- [4D View Pro areas](FormObjects/viewProArea_overview.md) return for example `sheetName` or `action` properties in the [On After Edit](onAfterEdit.md) event object.


## Eventos e métodos

Quando um evento formulário ocorre, 4D executa as seguintes ações:

- First, it browses the objects of the form and calls the object method for any object (involved in the event) whose corresponding object event property has been selected.
- Second, it calls the form method if the corresponding form event property has been selected.

Do not assume that the object methods, if any, will be called in a particular order. The rule of thumb is that the object methods are always called before the form method. If an object is a subform, the object methods of the subform’s list form are called, then the form method of the list form is called. 4D então continua a chamar os métodos objeto do formulário pai. In other words, when an object is a subform, 4D uses the same rule of thumb for the object and form methods within the subform object.

Except for the [On Load](onLoad.md) and [On Unload](onUnload.md) events (see below), if the form event property is not selected for a given event, this does not prevent calls to object methods for the objects whose same event property is selected. In other words, enabling or disabling an event at the form level has no effect on the object event properties.

The number of objects involved in an event depends on the nature of the event.

## Tabela de chamadas

A tabela seguinte resume a forma como os métodos objeto e formulário são chamados para cada tipo de evento:

| Evento                   | Métodos objecto                   | Método formulário | Que objectos               |
| ------------------------ | --------------------------------- | ----------------- | -------------------------- |
| On Load                  | Sim                               | Sim               | Todos os objectos          |
| On Unload                | Sim                               | Sim               | Todos os objectos          |
| On Validate              | Sim                               | Sim               | Todos os objectos          |
| On Clicked               | Sim                               | Sim               | Apenas objecto envolvido   |
| On Double Clicked        | Sim                               | Sim               | Apenas objecto envolvido   |
| On Before Keystroke      | Sim                               | Sim               | Apenas objecto envolvido   |
| On After Keystroke       | Sim                               | Sim               | Apenas objecto envolvido   |
| On After Edit            | Sim                               | Sim               | Apenas objecto envolvido   |
| On Getting Focus         | Sim                               | Sim               | Apenas objecto envolvido   |
| On Losing Focus          | Sim                               | Sim               | Apenas objecto envolvido   |
| On Activate              | Nunca                             | Sim               | Nenhum                     |
| On Deactivate            | Nunca                             | Sim               | Nenhum                     |
| On Outside Call          | Nunca                             | Sim               | Nenhum                     |
| On Page Change           | Nunca                             | Sim               | Nenhum                     |
| On Begin Drag Over       | Sim                               | Sim               | Apenas objecto envolvido   |
| On Drop                  | Sim                               | Sim               | Apenas objecto envolvido   |
| On Drag Over             | Sim                               | Nunca             | Apenas objecto envolvido   |
| On Mouse Enter           | Sim                               | Sim               | Todos os objectos          |
| On Mouse Move            | Sim                               | Sim               | Todos os objectos          |
| On Mouse Leave           | Sim                               | Sim               | Todos os objectos          |
| On Mouse Up              | Sim                               | Nunca             | Apenas objecto envolvido   |
| On Menu Selected         | Nunca                             | Sim               | Nenhum                     |
| On Bound variable change | Nunca                             | Sim               | Nenhum                     |
| On Data Change           | Sim                               | Sim               | Apenas objecto envolvido   |
| On Plug in Area          | Sim                               | Sim               | Apenas objecto envolvido   |
| On Header                | Sim                               | Sim               | Todos os objectos          |
| On Printing Detail       | Sim                               | Sim               | Todos os objectos          |
| On Printing Break        | Sim                               | Sim               | Todos os objectos          |
| On Printing Footer       | Sim                               | Sim               | Todos os objectos          |
| On Close Box             | Nunca                             | Sim               | Nenhum                     |
| On Display Detail        | Sim                               | Sim               | Todos os objectos          |
| On Open Detail           | Sim (List box)                    | Sim               | Nenhum, excepto List boxes |
| On Close Detail          | Sim (List box)                    | Sim               | Nenhum, excepto List boxes |
| On Resize                | Nunca                             | Sim               | Nenhum                     |
| On Selection Change      | Sim                               | Sim               | Apenas objecto envolvido   |
| On Load Record           | Nunca                             | Sim               | Nenhum                     |
| On Timer                 | Nunca                             | Sim               | Nenhum                     |
| On Scroll                | Sim                               | Nunca             | Apenas objecto envolvido   |
| On Before Data Entry     | Sim (List box)                    | Nunca             | Apenas objecto envolvido   |
| On Column Moved          | Sim (List box)                    | Nunca             | Apenas objecto envolvido   |
| On Row Moved             | Sim (List box)                    | Nunca             | Apenas objecto envolvido   |
| On Column Resize         | Sim (List box e Area 4D View Pro) | Nunca             | Apenas objecto envolvido   |
| On Header Click          | Sim (List box e Area 4D View Pro) | Nunca             | Apenas objecto envolvido   |
| On Footer Click          | Sim (List box)                    | Nunca             | Apenas objecto envolvido   |
| On After Sort            | Sim (List box)                    | Nunca             | Apenas objecto envolvido   |
| On Long Click            | Sim (Botão)                       | Sim               | Apenas objecto envolvido   |
| On Alternative Click     | Sim (botão e List box)            | Nunca             | Apenas objecto envolvido   |
| On Expand                | Sim (Hier. lista e list box)      | Nunca             | Apenas objecto envolvido   |
| On Collapse              | Sim (Hier. lista e list box)      | Nunca             | Apenas objecto envolvido   |
| On Delete Action         | Sim (Hier. lista e list box)      | Nunca             | Apenas objecto envolvido   |
| On URL Resource Loading  | Sim (Área Web)                    | Nunca             | Apenas objecto envolvido   |
| On Begin URL Loading     | Sim (Área Web)                    | Nunca             | Apenas objecto envolvido   |
| On URL Loading Error     | Sim (Área Web)                    | Nunca             | Apenas objecto envolvido   |
| On URL Filtering         | Sim (Área Web)                    | Nunca             | Apenas objecto envolvido   |
| On End URL Loading       | Sim (Área Web)                    | Nunca             | Apenas objecto envolvido   |
| On Open External Link    | Sim (Área Web)                    | Nunca             | Apenas objecto envolvido   |
| On Window Opening Denied | Sim (Área Web)                    | Nunca             | Apenas objecto envolvido   |
| On VP Range Changed      | Sim (Área 4D View Pro)            | Nunca             | Apenas objecto envolvido   |
| On VP Ready              | Sim (Área 4D View Pro)            | Nunca             | Apenas objecto envolvido   |
| On Row Resize            | Sim (Área 4D View Pro)            | Nunca             | Apenas objecto envolvido   |

Always keep in mind that, for any event, the method of a form or an object is called if the corresponding event property is selected for the form or objects. The benefit of disabling events in the Design environment (using the Property List of the Form editor) is that you can reduce the number of calls to methods and therefore significantly optimize the execution speed of your forms.

> WARNING: The [On Load](onLoad.md) and [On Unload](onUnload.md) events are generated for objects if they are enabled for both the objects and the form to which the objects belong. If the events are enabled for objects only, they will not occur; these two events must also be enabled at the form level.

