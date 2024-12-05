---
id: overview
title: Eventos formulário
---

Eventos de formulário são eventos que podem levar à execução do método de formulário e/ou método(s) de objeto de formulário. Os eventos de formulário permitem que você controle o fluxo do aplicativo e escreva códigos que são executados somente quando ocorre um evento específico.

In your code, you control the events using the [`FORM Event`](../commands/form-event.md) command, that returns the triggered event. Por exemplo:

```4d
//código de um botão
If(FORM Event.code=On Clicked) 
// faça algo quando o botão for clicado
End if
```

> Cada formulário e cada objeto ativo no formulário podem ouvir um conjunto predefinido de eventos, mas somente os eventos que você ativou no nível do formulário e/ou em cada nível de objeto ocorrerão de fato.

## Objecto evento

Each event is returned as an object by the [`FORM Event`](../commands/form-event.md) command. Por padrão, ele contém as seguintes propriedades:

| Propriedade | Tipo          | Descrição                                                                                               |
| ----------- | ------------- | ------------------------------------------------------------------------------------------------------- |
| objectName  | text          | Name of the object triggering the event - Not included if the event is triggered by the form            |
| code        | inteiro longo | Valor numérico do evento de formulário. Também retornado pelo comando `Form event code` |
| description | text          | Nome do evento do formulário (por exemplo, "On After Edit")                          |

Propriedades adicionais são retornadas quando o evento ocorre em objetos específicos. Em particular:

- [list boxes](FormObjects/listbox_overview.md#supported-form-events) and [list box columns](FormObjects/listbox_overview.md#supported-form-events-1) return [additional properties](FormObjects/listbox_overview.md#additional-properties) such as `columnName` or `isRowSelected`.
- Las [áreas de View Pro](FormObjects/viewProArea_overview.md) devuelven por ejemplo las propiedades `sheetName` o `action` en el objeto evento [On After Edit](onAfterEdit.md).

## Eventos e métodos

Quando um evento formulário ocorre, 4D executa as seguintes ações:

- Primeiro, ele pesquisa os objetos do formulário e chama o método de objeto para qualquer objeto (envolvido no evento) cuja propriedade de evento de objeto correspondente tenha sido selecionada.
- Em segundo lugar, ele chama o método de formulário se a propriedade de evento de formulário correspondente tiver sido selecionada.

Não presuma que os métodos do objeto, se houver, serão chamados em uma ordem específica. A regra geral é que os métodos de objeto sejam sempre chamados antes do método de formulário. Se um objeto for um subformulário, os métodos de objeto do formulário de lista do subformulário serão chamados e, em seguida, o método de formulário do formulário de lista será chamado. 4D então continua a chamar os métodos objeto do formulário pai. Em outras palavras, quando um objeto é um subformulário, 4D usa a mesma regra prática para o objeto e os métodos do formulário dentro do objeto do subformulário.

Excepto en los eventos [En carga](onLoad.md) y [En descarga](onUnload.md) (ver más abajo), si la propiedad del evento formulario no está seleccionada para un evento determinado, esto no impide las llamadas a los métodos objetos cuya misma propiedad de eve Em outras palavras, ativar ou desativar um evento no nível do formulário não tem efeito sobre as propriedades do evento do objeto.

O número de objetos envolvidos em um evento depende da natureza do evento.

## Tabela de chamadas

A tabela seguinte resume a forma como os métodos objeto e formulário são chamados para cada tipo de evento:

| Evento                   | Métodos objecto                                                 | Método formulário | Que objectos               |
| ------------------------ | --------------------------------------------------------------- | ----------------- | -------------------------- |
| On Load                  | Sim                                                             | Sim               | Todos os objectos          |
| On Unload                | Sim                                                             | Sim               | Todos os objectos          |
| On Validate              | Sim                                                             | Sim               | Todos os objectos          |
| On Clicked               | Sim                                                             | Sim               | Apenas objecto envolvido   |
| On Double Clicked        | Sim                                                             | Sim               | Apenas objecto envolvido   |
| On Before Keystroke      | Sim                                                             | Sim               | Apenas objecto envolvido   |
| On After Keystroke       | Sim                                                             | Sim               | Apenas objecto envolvido   |
| On After Edit            | Sim                                                             | Sim               | Apenas objecto envolvido   |
| On Getting Focus         | Sim                                                             | Sim               | Apenas objecto envolvido   |
| On Losing Focus          | Sim                                                             | Sim               | Apenas objecto envolvido   |
| On Activate              | Nunca                                                           | Sim               | Nenhum                     |
| On Deactivate            | Nunca                                                           | Sim               | Nenhum                     |
| On Outside Call          | Nunca                                                           | Sim               | Nenhum                     |
| On Page Change           | Nunca                                                           | Sim               | Nenhum                     |
| On Begin Drag Over       | Sim                                                             | Sim               | Apenas objecto envolvido   |
| On Drop                  | Sim                                                             | Sim               | Apenas objecto envolvido   |
| On Drag Over             | Sim                                                             | Nunca             | Apenas objecto envolvido   |
| On Mouse Enter           | Sim                                                             | Sim               | Todos os objectos          |
| On Mouse Move            | Sim                                                             | Sim               | Todos os objectos          |
| On Mouse Leave           | Sim                                                             | Sim               | Todos os objectos          |
| On Mouse Up              | Sim                                                             | Nunca             | Apenas objecto envolvido   |
| On Menu Selected         | Nunca                                                           | Sim               | Nenhum                     |
| On Bound variable change | Nunca                                                           | Sim               | Nenhum                     |
| On Data Change           | Sim                                                             | Sim               | Apenas objecto envolvido   |
| On Plug in Area          | Sim                                                             | Sim               | Apenas objecto envolvido   |
| On Header                | Sim                                                             | Sim               | Todos os objectos          |
| On Printing Detail       | Sim                                                             | Sim               | Todos os objectos          |
| On Printing Break        | Sim                                                             | Sim               | Todos os objectos          |
| On Printing Footer       | Sim                                                             | Sim               | Todos os objectos          |
| On Close Box             | Nunca                                                           | Sim               | Nenhum                     |
| On Display Detail        | Sim                                                             | Sim               | Todos os objectos          |
| On Open Detail           | Sim (List box)                               | Sim               | Nenhum, excepto List boxes |
| On Close Detail          | Sim (List box)                               | Sim               | Nenhum, excepto List boxes |
| On Resize                | Nunca                                                           | Sim               | Nenhum                     |
| On Selection Change      | Sim                                                             | Sim               | Apenas objecto envolvido   |
| On Load Record           | Nunca                                                           | Sim               | Nenhum                     |
| On Timer                 | Nunca                                                           | Sim               | Nenhum                     |
| On Scroll                | Sim                                                             | Nunca             | Apenas objecto envolvido   |
| On Before Data Entry     | Sim (List box)                               | Nunca             | Apenas objecto envolvido   |
| On Column Moved          | Sim (List box)                               | Nunca             | Apenas objecto envolvido   |
| On Row Moved             | Sim (List box)                               | Nunca             | Apenas objecto envolvido   |
| On Column Resize         | Sim (List box e Area 4D View Pro)            | Nunca             | Apenas objecto envolvido   |
| On Header Click          | Sim (List box e Area 4D View Pro)            | Nunca             | Apenas objecto envolvido   |
| On Footer Click          | Sim (List box)                               | Nunca             | Apenas objecto envolvido   |
| On After Sort            | Sim (List box)                               | Nunca             | Apenas objecto envolvido   |
| On Long Click            | Sim (Botão)                                  | Sim               | Apenas objecto envolvido   |
| On Alternative Click     | Sim (botão e List box)                       | Nunca             | Apenas objecto envolvido   |
| On Expand                | Sim (Hier. lista e list box) | Nunca             | Apenas objecto envolvido   |
| On Collapse              | Sim (Hier. lista e list box) | Nunca             | Apenas objecto envolvido   |
| On Delete Action         | Sim (Hier. lista e list box) | Nunca             | Apenas objecto envolvido   |
| On URL Resource Loading  | Sim (Área Web)                               | Nunca             | Apenas objecto envolvido   |
| On Begin URL Loading     | Sim (Área Web)                               | Nunca             | Apenas objecto envolvido   |
| On URL Loading Error     | Sim (Área Web)                               | Nunca             | Apenas objecto envolvido   |
| On URL Filtering         | Sim (Área Web)                               | Nunca             | Apenas objecto envolvido   |
| On End URL Loading       | Sim (Área Web)                               | Nunca             | Apenas objecto envolvido   |
| On Open External Link    | Sim (Área Web)                               | Nunca             | Apenas objecto envolvido   |
| On Window Opening Denied | Sim (Área Web)                               | Nunca             | Apenas objecto envolvido   |
| On VP Range Changed      | Sim (Área 4D View Pro)                       | Nunca             | Apenas objecto envolvido   |
| On VP Ready              | Sim (Área 4D View Pro)                       | Nunca             | Apenas objecto envolvido   |
| On Row Resize            | Sim (Área 4D View Pro)                       | Nunca             | Apenas objecto envolvido   |

Lembre-se sempre de que, para qualquer evento, o método de um formulário ou de um objeto é chamado se a propriedade de evento correspondente estiver selecionada para o formulário ou para os objetos. A vantagem de desativar os eventos no ambiente Design (usando a Lista de propriedades do editor de formulários) é que você pode reduzir o número de chamadas para métodos e, portanto, otimizar significativamente a velocidade de execução dos formulários.

> ATENCIÓN: los eventos [On Load](onLoad.md) y [On Unload](onUnload.md) se generan para los objetos si están activados a la vez para los objetos y para el formulario al que pertenecen los objetos. If the events are enabled for objects only, they will not occur; these two events must also be enabled at the form level.
