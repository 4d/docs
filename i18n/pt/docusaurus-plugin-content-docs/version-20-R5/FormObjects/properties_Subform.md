---
id: propertiesSubform
title: Subformulário
---

---

## Permitir a eliminação

Especifica se o utilizador pode eliminar sub-registos num subformulário lista.

#### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis                                             |
| --------------- | ------------- | ------------------------------------------------------------- |
| deletableInList | boolean       | true, false (padrão: true) |

#### Objectos suportados

[Subform](subform_overview.md)

---

## Formulário detalhado

Esta propriedade é utilizada para declarar o formulário detalhado a utilizar no subformulário. Pode ser:

- um widget, ou seja, um subformulário de tipo página, dotado de funções específicas. In this case, the [list subform](#list-form) and [Source](#source) properties must be empty or not present.\
  You can select a component form name when it is published in the component.

> You can generate [components](Concepts/components.md) providing additional functionalities through subforms.

- the detail form to associate a with the [list subform](#list-form). O formulário detalhado pode ser utilizado para introduzir ou visualizar sub-registos. Geralmente contém mais informações do que o subformulário lista. Naturalmente, o formulário detalhado deve pertencer à mesma tabela que o subformulário. Normalmente, utiliza-se um formulário de saída como formulário lista e um formulário de entrada como formulário detalhado. Se não especificar o formulário a ser usado para a entrada de página inteira, 4D automaticamente usa o formato de entrada padrão da tabela.

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis                                                                                                                                                                         |
| ---------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| detailForm | string        | Name (string) of table or project form, a POSIX path (string) to a .json file describing the form, or an object describing the form |

#### Objectos suportados

[Subform](subform_overview.md)

---

## Duplo clique numa linha vazia

Action to perform in case of a double-click on an empty line of a list subform. As opções abaixo estão disponíveis:

- Não fazer nada: Ignora o duplo clique.
- Add Record: Creates a new record in the subform and changes to editing mode. The record will be created directly in the list if the [Enterable in List](#enterable-in-list) property is enabled. Otherwise, it will be created in page mode, in the [detail form](#detail-form) associated with the subform.

#### Gramática JSON

| Nome                         | Tipo de dados | Valores possíveis                        |
| ---------------------------- | ------------- | ---------------------------------------- |
| doubleClickInEmptyAreaAction | string        | "addSubrecord" ou "" para não fazer nada |

#### Objectos suportados

[Subform](subform_overview.md)

#### Veja também

[Double click on row](#double-click-on-row)

---

## Duplo clique em linha

`Subformulário lista`

Sets the action to be performed when a user double-clicks on a row in a list subform. As opções disponíveis são:

- **Do nothing** (default): Double-clicking a row does not trigger any automatic action.
- **Edit Record**: Double-clicking a row displays the corresponding record in the [detail form defined for the list subform](#detail-form). O registo é aberto em modo de leitura-escrita para poder ser modificado.
- **Display Record**: Identical to the previous action, except that the record is opened in read-only mode so it cannot be modified.

Regardless of the action selected/chosen, the `On Double clicked` form event is generated.

For the last two actions, the On `Open Detail` form event is also generated. The `On Close Detail` is then generated when a record displayed in the detail form associated with the list box is about to be closed (regardless of whether or not the record was modified).

#### Gramática JSON

| Nome                   | Tipo de dados | Valores possíveis                   |
| ---------------------- | ------------- | ----------------------------------- |
| doubleClickInRowAction | string        | "editSubrecord", "displaySubrecord" |

#### Objectos suportados

[Subform](subform_overview.md)

#### Veja também

[Double click on empty row](#double-click-on-empty-row)

---

## Introduzível em lista

When a list subform has this property enabled, the user can modify record data directly in the list, without having to use the [associated detail form](#detail-form).

> To do this, simply click twice on the field to be modified in order to switch it to editing mode (make sure to leave enough time between the two clicks so as not to generate a double-click).

#### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis |
| --------------- | ------------- | ----------------- |
| enterableInList | boolean       | true, false       |

#### Objectos suportados

[Subform](subform_overview.md)

---

## Formulário lista

Você usa essa propriedade para declarar o formulário de lista a ser usado no subformulário. Um subformulário lista permite que você insira, visualize e modifique dados em outras tabelas.

List subforms can be used for data entry in two ways: the user can enter data directly in the subform, or enter it in an [input form](#detail-form). In this configuration, the form used as the subform is referred to as the List form. O formulário de entrada é designado Formulário detalhado.

#### Gramática JSON

| Nome     | Tipo de dados | Valores possíveis                                                                                                                                                                         |
| -------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| listForm | string        | Name (string) of table or project form, a POSIX path (string) to a .json file describing the form, or an object describing the form |

#### Objectos suportados

[Subform](subform_overview.md)

---

## Source

Especifica a tabela a que pertence o subformulário Lista (se existir).

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis                                              |
| ------ | ------------- | -------------------------------------------------------------- |
| tabela | string        | Nome da tabela 4D, ou "" se não houver tabela. |

#### Objectos suportados

[Subform](subform_overview.md)

---

## Modo seleção

Designa a opção que permite aos utilizadores selecionar linhas:

- **None**: Rows cannot be selected if this mode is chosen. Clicking on the list will have no effect unless the [Enterable in list](subform_overview.md#enterable-in-list) option is enabled. The navigation keys only cause the list to scroll; the `On Selection Change` form event is not generated.
- **Single**: One row at a time can be selected in this mode. Ao clicar em uma linha, ela será selecionada. A **Ctrl+click** (Windows) or **Command+click** (macOS) on a row toggles its state (between selected or not).\
  The Up and Down arrow keys select the previous/next row in the list. As outras teclas de navegação percorrem a lista. The `On Selection Change` form event is generated every time the current row is changed.
- **Multiple**: Several rows can be selected simultaneously in this mode.
  - The selected subrecords are returned by the `GET HIGHLIGHTED RECORDS` command.
  - Clicking on the record will select it, but it does not modify the current record.
  - A **Ctrl+click** (Windows) or **Command+click** (macOS) on a record toggles its state (between selected or not). As teclas de seta para cima e para baixo selecionam o registo anterior/seguinte na lista. As outras teclas de navegação percorrem a lista. The `On Selection Change` form event is generated every time the selected record is changed.

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis            |
| ------------- | ------------- | ---------------------------- |
| selectionMode | string        | "multiple", "single", "none" |

#### Objectos suportados

[Subform](subform_overview.md)
