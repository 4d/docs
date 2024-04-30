---
id: propertiesRangeOfValues
title: Gama de valores
---

## Valor padrão

É possível atribuir um valor proposto a ser introduzido num objeto de entrada. This property is useful for example when the input [data source](properties_Object.md#variable-or-expression) is a field: the default value is entered when a new record is first displayed. You can change the value unless the input area has been defined as [non-enterable](properties_Entry.md#enterable).

The default value can only be used if the [data source type](properties_Object.md#expression-type) is:

- text/string
- number/integer
- date
- time
- boolean

4D provides stamps for generating default values for the date, time, and sequence number. A data e a hora são retiradas da data e da hora do sistema. 4D gera automaticamente os números de sequência necessários. The table below shows the stamp to use to generate default values automatically:

| Stamp | Significado         |
| ----- | ------------------- |
| #D    | Data actual         |
| #H    | Hora actual         |
| #N    | Número de sequência |

You can use a sequence number to create a unique number for each record in the table for the current data file. Um número de sequência é um longint gerado para cada novo registo. Os números começam em um (1) e aumentam gradualmente em um (1). A sequence number is never repeated even if the record it is assigned to is deleted from the table. Cada tabela tem o seu próprio contador interno de números de sequência. For more information, refer to the [Autoincrement](https://doc.4d.com/4Dv17R6/4D/17-R6/Field-properties.300-4354738.en.html#976029) paragraph.

> Do not make confusion between this property and the "[default values](properties_DataSource.md#default-list-of-values)" property that allows to fill a list box column with static values.

#### Gramática JSON

| Nome         | Tipo de dados                       | Valores possíveis                                                |
| ------------ | ----------------------------------- | ---------------------------------------------------------------- |
| defaultValue | string, number, date, time, boolean | Qualquer valor e/ou um carimbo: "#D", "#H", "#N" |

#### Objectos suportados

[Input](input_overview.md)

---

## Lista de excluídos

Permite definir uma lista cujos valores não podem ser introduzidos no objeto. Se um valor excluído for digitado, não será aceito e uma mensagem de erro é exibido.

> Se uma lista especificada for hierárquica, apenas os itens do primeiro nível são tidos em conta.

#### Gramática JSON

| Nome         | Tipo de dados | Valores possíveis                               |
| ------------ | ------------- | ----------------------------------------------- |
| excludedList | lista         | Uma lista de valores a excluir. |

#### Objectos suportados

[Combo Box](comboBox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [Input](input_overview.md)

---

## Lista obrigatória

Restringe as entradas válidas aos itens da lista. For example, you may want to use a required list for job titles so that valid entries are limited to titles that have been approved by management.

Tornar uma lista obrigatória não apresenta automaticamente a lista quando o campo é selecionado. If you want to display the required list, assign the same list to the [Choice List](properties_DataSource.md#choice-list) property.
However, unlike the [Choice List](properties_DataSource.md#choice-list) property, when a required list is defined, keyboard entry is no longer possible, only the selection of a list value using the pop-up menu is allowed. If different lists are defined using the [Choice List](properties_DataSource.md#choice-list) and Required List properties, the Required List property has priority.

> Se uma lista especificada for hierárquica, apenas os itens do primeiro nível são tidos em conta.

#### Gramática JSON

| Nome         | Tipo de dados | Valores possíveis                                  |
| ------------ | ------------- | -------------------------------------------------- |
| requiredList | lista         | Uma lista de valores obrigatórios. |

#### Objectos suportados

[Combo Box](comboBox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [Input](input_overview.md)
