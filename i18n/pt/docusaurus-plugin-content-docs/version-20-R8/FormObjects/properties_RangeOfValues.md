---
id: propertiesRangeOfValues
title: Gama de valores
---

## Valor padrão

É possível atribuir um valor proposto a ser introduzido num objeto de entrada. Esta propriedade é útil, por exemplo, quando a entrada [data source](properties_Object.md#variable-or-expression) é um campo: o valor padrão é inserido quando um novo registro é exibido pela primeira vez. Você pode alterar o valor, a menos que a área de entrada tenha sido definida como [não entrável](properties_Entry.md#enterable).

O valor padrão só poderá ser usado se o [tipo de fonte de dados](properties_Object.md#expression-type) for:

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

You can use a sequence number to create a unique number for each record in the table for the current data file. Um número de sequência é um longint gerado para cada novo registo. Os números começam em um (1) e aumentam gradualmente em um (1). A sequence number is never repeated even if the record it is assigned to is deleted from the table. Cada tabela tem o seu próprio contador interno de números de sequência. Para obter mais informações, consulte o parágrafo [Autoincremento](https://doc.4d.com/4Dv17R6/4D/17-R6/Field-properties.300-4354738.en.html#976029).

> Não faça confusão entre esta propriedade e a propriedade "[valores padrão](properties_DataSource.md#default-list-of-values)" que permite preencher uma coluna list box com valores estáticos.

#### Gramática JSON

| Nome         | Tipo de dados                       | Valores possíveis                                                |
| ------------ | ----------------------------------- | ---------------------------------------------------------------- |
| defaultValue | string, number, date, time, boolean | Qualquer valor e/ou um carimbo: "#D", "#H", "#N" |

#### Objectos suportados

[Entrada](input_overview.md)

---

## Lista de excluídos

Permite definir uma lista cujos valores não podem ser introduzidos no objeto. Se um valor excluído for digitado, não será aceito e uma mensagem de erro é exibido.

> Se uma lista especificada for hierárquica, apenas os itens do primeiro nível são tidos em conta.

#### Gramática JSON

| Nome         | Tipo de dados | Valores possíveis                               |
| ------------ | ------------- | ----------------------------------------------- |
| excludedList | lista         | Uma lista de valores a excluir. |

#### Objectos suportados

[Combo Box](comboBox_overview.md) - [Columna List Box](listbox_overview.md#list-box-columns) - [Entrada](input_overview.md)

---

## Lista obrigatória

Restringe as entradas válidas aos itens da lista. For example, you may want to use a required list for job titles so that valid entries are limited to titles that have been approved by management.

Tornar uma lista obrigatória não apresenta automaticamente a lista quando o campo é selecionado. Se você deseja exibir a lista obrigatória, atribua a mesma lista à propriedade [Lista de opções](properties_DataSource.md#choice-list).
No entanto, ao contrário da propriedade [Lista de opções](properties_DataSource.md#choice-list) quando uma lista é definida, a entrada de teclado não é mais possível, apenas a seleção de um valor da lista usando o menu pop-up é permitida. Se listas diferentes forem definidas usando as propriedades da [Lista de Opções](properties_DataSource.md#choice-list) e da Lista exigida, a propriedade da Lista obrigatória tem prioridade.

> Se uma lista especificada for hierárquica, apenas os itens do primeiro nível são tidos em conta.

#### Gramática JSON

| Nome         | Tipo de dados | Valores possíveis                                  |
| ------------ | ------------- | -------------------------------------------------- |
| requiredList | lista         | Uma lista de valores obrigatórios. |

#### Objectos suportados

[Combo Box](comboBox_overview.md) - [Columna List Box](listbox_overview.md#list-box-columns) - [Entrada](input_overview.md)
