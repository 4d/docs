---
id: overview
title: Eventos formulário
---

Eventos de formulário são eventos que podem levar à execução do método de formulário e/ou método(s) de objeto de formulário. Os eventos de formulário permitem que você controle o fluxo do aplicativo e escreva códigos que são executados somente quando ocorre um evento específico.

Em seu código, você controla os eventos usando o comando [`FORM Event`](../commands/form-event), que retorna o evento acionado. Por exemplo:

```4d
//código de um botão If(FORM Event.code=On Clicked) 
// faça algo quando o botão for clicado End if
```

> Cada formulário e cada objeto ativo no formulário podem ouvir um conjunto predefinido de eventos, mas somente os eventos que você ativou no nível do formulário e/ou em cada nível de objeto ocorrerão de fato.

## Objecto evento

Cada evento é retornado como um objeto pelo comando [`FORM Event`](../commands/form-event). Por padrão, ele contém as seguintes propriedades:

| Propriedade | Tipo          | Descrição                                                                                               |
| ----------- | ------------- | ------------------------------------------------------------------------------------------------------- |
| objectName  | text          | Name of the object triggering the event - Not included if the event is triggered by the form            |
| code        | inteiro longo | Valor numérico do evento de formulário. Também retornado pelo comando `Form event code` |
| description | text          | Nome do evento do formulário (por exemplo, "On After Edit")                          |

Propriedades adicionais são retornadas quando o evento ocorre em objetos específicos. Em particular:

- [list boxes](FormObjects/listbox-object.md#supported-form-events) and [list box columns](FormObjects/listbox-column.md#supported-form-events) return [additional properties](FormObjects/listbox-object.md#supported-form-events) such as `columnName` or `isRowSelected`.
- Las [áreas de View Pro](FormObjects/viewProArea_overview.md) devuelven por ejemplo las propiedades `sheetName` o `action` en el objeto evento [On After Edit](onAfterEdit.md).

## Eventos e métodos

Quando um evento formulário ocorre, 4D executa as seguintes ações:

- Primeiro, ele pesquisa os objetos do formulário e chama o método de objeto para qualquer objeto (envolvido no evento) cuja propriedade de evento de objeto correspondente tenha sido selecionada.
- Em segundo lugar, ele chama o método de formulário se a propriedade de evento de formulário correspondente tiver sido selecionada.

Não presuma que os métodos do objeto, se houver, serão chamados em uma ordem específica. A regra geral é que os métodos de objeto sejam sempre chamados antes do método de formulário. Se um objeto for um subformulário, os métodos de objeto do formulário de lista do subformulário serão chamados e, em seguida, o método de formulário do formulário de lista será chamado. 4D então continua a chamar os métodos objeto do formulário pai. Em outras palavras, quando um objeto é um subformulário, 4D usa a mesma regra prática para o objeto e os métodos do formulário dentro do objeto do subformulário.

ATENCIÓN: los eventos [On Load](onLoad.md) y [On Unload](onUnload.md) se generan para los objetos si están activados a la vez para los objetos y para el formulario al que pertenecen los objetos. Em outras palavras, ativar ou desativar um evento no nível do formulário não tem efeito sobre as propriedades do evento do objeto.

O número de objetos envolvidos em um evento depende da natureza do evento.

## Tabela de chamadas

A tabela seguinte resume a forma como os métodos objeto e formulário são chamados para cada tipo de evento:

| Evento                   | Code | Métodos objecto                                                 | Método formulário | Que objectos               |
| ------------------------ | ---- | --------------------------------------------------------------- | ----------------- | -------------------------- |
| On Activate              | 11   | Nunca                                                           | Sim               | Nenhum                     |
| On After Edit            | 45   | Sim                                                             | Sim               | Apenas objecto envolvido   |
| On After Keystroke       | 28   | Sim                                                             | Sim               | Apenas objecto envolvido   |
| On After Sort            | 30   | Sim (List box)                               | Nunca             | Apenas objecto envolvido   |
| On Alternative Click     | 38   | Sim (botão e List box)                       | Nunca             | Apenas objecto envolvido   |
| On Before Data Entry     | 41   | Sim (List box)                               | Nunca             | Apenas objecto envolvido   |
| On Before Keystroke      | 17   | Sim                                                             | Sim               | Apenas objecto envolvido   |
| On Begin Drag Over       | 46   | Sim                                                             | Sim               | Apenas objecto envolvido   |
| On Begin URL Loading     | 47   | Sim (Área Web)                               | Nunca             | Apenas objecto envolvido   |
| On Bound variable change | 54   | Nunca                                                           | Sim               | Nenhum                     |
| On Clicked               | 4    | Sim                                                             | Sim               | Apenas objecto envolvido   |
| On Close Box             | 22   | Nunca                                                           | Sim               | Nenhum                     |
| On Close Detail          | 26   | Sim (List box)                               | Sim               | Nenhum, excepto List boxes |
| On Collapse              | 44   | Sim (Hier. lista e list box) | Nunca             | Apenas objecto envolvido   |
| On Column Moved          | 32   | Sim (List box)                               | Nunca             | Apenas objecto envolvido   |
| On Column Resize         | 33   | Sim (List box e Area 4D View Pro)            | Nunca             | Apenas objecto envolvido   |
| On Data Change           | 20   | Sim                                                             | Sim               | Apenas objecto envolvido   |
| On Deactivate            | 12   | Nunca                                                           | Sim               | Nenhum                     |
| On Delete Action         | 58   | Sim (Hier. lista e list box) | Nunca             | Apenas objecto envolvido   |
| On Display Detail        | 8    | Sim                                                             | Sim               | Todos os objectos          |
| On Double Clicked        | 13   | Sim                                                             | Sim               | Apenas objecto envolvido   |
| On Drag Over             | 21   | Sim                                                             | Nunca             | Apenas objecto envolvido   |
| On Drop                  | 16   | Sim                                                             | Sim               | Apenas objecto envolvido   |
| On End URL Loading       | 49   | Sim (Área Web)                               | Nunca             | Apenas objecto envolvido   |
| On Expand                | 43   | Sim (Hier. lista e list box) | Nunca             | Apenas objecto envolvido   |
| On Footer Click          | 57   | Sim (List box)                               | Nunca             | Apenas objecto envolvido   |
| On Getting Focus         | 15   | Sim                                                             | Sim               | Apenas objecto envolvido   |
| On Header                | 5    | Sim                                                             | Sim               | Todos os objectos          |
| On Header Click          | 42   | Sim (List box e Area 4D View Pro)            | Nunca             | Apenas objecto envolvido   |
| On Load                  | 1    | Sim                                                             | Sim               | Todos os objectos          |
| On Load Record           | 40   | Nunca                                                           | Sim               | Nenhum                     |
| On Long Click            | 39   | Sim (Botão)                                  | Sim               | Apenas objecto envolvido   |
| On Losing Focus          | 14   | Sim                                                             | Sim               | Apenas objecto envolvido   |
| On Menu Selected         | 18   | Nunca                                                           | Sim               | Nenhum                     |
| On Mouse Enter           | 35   | Sim                                                             | Sim               | Todos os objectos          |
| On Mouse Leave           | 36   | Sim                                                             | Sim               | Todos os objectos          |
| On Mouse Move            | 37   | Sim                                                             | Sim               | Todos os objectos          |
| On Mouse Up              | 2    | Sim                                                             | Nunca             | Apenas objecto envolvido   |
| On Open Detail           | 25   | Sim (List box)                               | Sim               | Nenhum, excepto List boxes |
| On Open External Link    | 52   | Sim (Área Web)                               | Nunca             | Apenas objecto envolvido   |
| On Outside Call          | 10   | Nunca                                                           | Sim               | Nenhum                     |
| On Page Change           | 56   | Nunca                                                           | Sim               | Nenhum                     |
| On Plug in Area          | 19   | Sim                                                             | Sim               | Apenas objecto envolvido   |
| On Printing Break        | 6    | Sim                                                             | Sim               | Todos os objectos          |
| On Printing Detail       | 23   | Sim                                                             | Sim               | Todos os objectos          |
| On Printing Footer       | 7    | Sim                                                             | Sim               | Todos os objectos          |
| On Resize                | 29   | Nunca                                                           | Sim               | Nenhum                     |
| On Row Moved             | 34   | Sim (List box)                               | Nunca             | Apenas objecto envolvido   |
| On Row Resize            | 60   | Sim (Área 4D View Pro)                       | Nunca             | Apenas objecto envolvido   |
| On Scroll                | 59   | Sim                                                             | Nunca             | Apenas objecto envolvido   |
| On Selection Change      | 31   | Sim                                                             | Sim               | Apenas objecto envolvido   |
| On Timer                 | 27   | Nunca                                                           | Sim               | Nenhum                     |
| On Unload                | 24   | Sim                                                             | Sim               | Todos os objectos          |
| On URL Filtering         | 51   | Sim (Área Web)                               | Nunca             | Apenas objecto envolvido   |
| On URL Loading Error     | 50   | Sim (Área Web)                               | Nunca             | Apenas objecto envolvido   |
| On URL Resource Loading  | 48   | Sim (Área Web)                               | Nunca             | Apenas objecto envolvido   |
| On Validate              | 3    | Sim                                                             | Sim               | Todos os objectos          |
| On VP Range Changed      | 61   | Sim (Área 4D View Pro)                       | Nunca             | Apenas objecto envolvido   |
| On VP Ready              | 9    | Sim (Área 4D View Pro)                       | Nunca             | Apenas objecto envolvido   |
| On Window Opening Denied | 53   | Sim (Área Web)                               | Nunca             | Apenas objecto envolvido   |

Lembre-se sempre de que, para qualquer evento, o método de um formulário ou de um objeto é chamado se a propriedade de evento correspondente estiver selecionada para o formulário ou para os objetos. A vantagem de desativar os eventos no ambiente Design (usando a Lista de propriedades do editor de formulários) é que você pode reduzir o número de chamadas para métodos e, portanto, otimizar significativamente a velocidade de execução dos formulários.

> Excepto en los eventos [En carga](onLoad.md) y [En descarga](onUnload.md) (ver más abajo), si la propiedad del evento formulario no está seleccionada para un evento determinado, esto no impide las llamadas a los métodos objetos cuya misma propiedad de eve Em outras palavras, ativar ou desativar um evento no nível do formulário não tem efeito sobre as propriedades do evento do objeto. Se os eventos estiverem ativados somente para objetos, eles não ocorrerão; esses dois eventos também devem ser ativados no nível do formulário.


