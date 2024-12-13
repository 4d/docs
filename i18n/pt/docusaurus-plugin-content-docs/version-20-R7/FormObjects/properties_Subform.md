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

[Subformulario](subform_overview.md)

---

## Formulário detalhado

Esta propriedade é utilizada para declarar o formulário detalhado a utilizar no subformulário. Pode ser:

- um widget, ou seja, um subformulário de tipo página, dotado de funções específicas. In this case, the [list subform](#list-form) and [Source](#source) properties must be empty or not present.\
  You can select a component form name when it is published in the component.\
  You can select a component form name when it is published in the component.

> Para ello, basta con hacer dos clics en el campo a modificar para que pase al modo edición (asegúrese de dejar suficiente tiempo entre los dos clics para no generar un doble clic).

- el formulario detallado a asociar al [subformulario listado](#formulario-de-lista). O formulário detalhado pode ser utilizado para introduzir ou visualizar sub-registos. Geralmente contém mais informações do que o subformulário lista. Naturalmente, o formulário detalhado deve pertencer à mesma tabela que o subformulário. Normalmente, utiliza-se um formulário de saída como formulário lista e um formulário de entrada como formulário detalhado. Se não especificar o formulário a ser usado para a entrada de página inteira, 4D automaticamente usa o formato de entrada padrão da tabela.

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis                                                                                                                                                                         |
| ---------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| detailForm | string        | Name (string) of table or project form, a POSIX path (string) to a .json file describing the form, or an object describing the form |

#### Objectos suportados

[Subformulario](subform_overview.md)

---

## Duplo clique numa linha vazia

Action to perform in case of a double-click on an empty line of a list subform. As opções abaixo estão disponíveis:

- Não fazer nada: Ignora o duplo clique.
- Add Record: Creates a new record in the subform and changes to editing mode. El registro se creará directamente en la lista si la propiedad [Editable en la lista](#enterable-in-list) está activada. En caso contrario, se creará en modo página, en el [formulario detallado](#detail-form) asociado al subformulario.

#### Gramática JSON

| Nome                         | Tipo de dados | Valores possíveis                        |
| ---------------------------- | ------------- | ---------------------------------------- |
| doubleClickInEmptyAreaAction | string        | "addSubrecord" ou "" para não fazer nada |

#### Objectos suportados

[Subformulario](subform_overview.md)

#### Veja também

[Clique duas vezes na linha](#double-click-on-row)

---

## Duplo clique em linha

`Subformulário lista`

Sets the action to be performed when a user double-clicks on a row in a list subform. As opções disponíveis são:

- **Não fazer nada** (padrão): clicar duas vezes em uma linha não aciona nenhuma ação automática.
- **Editar registro**: al hacer doble clic en una línea se muestra el registro correspondiente en el [formulario detallado](#detail-form) definido para el subformulario lista. O registo é aberto em modo de leitura-escrita para poder ser modificado.
- **Exibir registro**: idêntico à ação anterior, exceto pelo fato de que o registro é aberto no modo somente leitura, de modo que não pode ser modificado.

Independentemente da ação selecionada/escolhida, o evento de formulário `On Double clicked` é gerado.

Para as duas últimas ações, o evento do formulário `On Open Detail` também é gerado. `On Close Detail` é gerado quando um registro exibido no formulário detalhado associado à list box está prestes a ser fechado (independentemente de o registro ter sido modificado ou não).

#### Gramática JSON

| Nome                   | Tipo de dados | Valores possíveis                   |
| ---------------------- | ------------- | ----------------------------------- |
| doubleClickInRowAction | string        | "editSubrecord", "displaySubrecord" |

#### Objectos suportados

[Subformulario](subform_overview.md)

#### Veja também

[Clique duas vezes na linha vazia](#double-click-on-empty-row)

---

## Introduzível em lista

Cuando un subformulario lista tiene esta propiedad activada, el usuario puede modificar los datos del registro directamente en la lista, sin tener que utilizar el [formulario detallado asociado](#detail-form).

> To do this, simply click twice on the field to be modified in order to switch it to editing mode (make sure to leave enough time between the two clicks so as not to generate a double-click).

#### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis |
| --------------- | ------------- | ----------------- |
| enterableInList | boolean       | true, false       |

#### Objectos suportados

[Subformulario](subform_overview.md)

---

## Formulário lista

Você usa essa propriedade para declarar o formulário de lista a ser usado no subformulário. Um subformulário lista permite que você insira, visualize e modifique dados em outras tabelas.

Los subformularios de lista pueden utilizarse para la entrada de datos de dos maneras: el usuario puede introducir los datos directamente en el subformulario, o introducirlos en un [formulario de entrada](#detail-form). In this configuration, the form used as the subform is referred to as the List form. O formulário de entrada é designado Formulário detalhado.

#### Gramática JSON

| Nome     | Tipo de dados | Valores possíveis                                                                                                                                                                         |
| -------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| listForm | string        | Name (string) of table or project form, a POSIX path (string) to a .json file describing the form, or an object describing the form |

#### Objectos suportados

[Subformulario](subform_overview.md)

---

## Source

Especifica a tabela a que pertence o subformulário Lista (se existir).

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis                                              |
| ------ | ------------- | -------------------------------------------------------------- |
| tabela | string        | Nome da tabela 4D, ou "" se não houver tabela. |

#### Objectos suportados

[Subformulario](subform_overview.md)

---

## Modo seleção

Designa a opção que permite aos utilizadores selecionar linhas:

- **Nenhum**: Linhas não podem ser selecionadas se esse modo for escolhido. Hacer clic en la lista no tendrá ningún efecto a menos que la opción [Editable en lista](subform_overview.md#enterable-in-list) esté activada. As teclas de navegação só fazem a lista rolar, o evento de formulário `Ao selecionar mudança` não é gerado.
- **Simples**: Uma linha de cada vez pode ser selecionada neste modo. Ao clicar em uma linha, ela será selecionada. Um **Ctrl+clique** (Windows) ou **Command+clique** (macOS) em uma linha alterna seu estado (entre selecionado ou não).\
  As teclas de seta para cima e para baixo selecionam a linha anterior/seguinte na lista. As outras teclas de navegação percorrem a lista. O evento de formulário `On Selection Change` é gerado sempre que a linha atual é alterada.
- **Multiplique**: Várias linhas podem ser selecionadas simultaneamente neste modo.
  - Los subregistros seleccionados son devueltos por el comando `GET HIGHLIGHTED RECORDS`.
  - Clicking on the record will select it, but it does not modify the current record.
  - Un **Ctrl+clic** (Windows) o **Comando+clic** (macOS) en un registro cambia su estado (entre seleccionado o no). As teclas de seta para cima e para baixo selecionam o registo anterior/seguinte na lista. As outras teclas de navegação percorrem a lista. El evento de formulario `On Selection Change` se genera cada vez que el registro seleccionado se modifica.

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis            |
| ------------- | ------------- | ---------------------------- |
| selectionMode | string        | "multiple", "single", "none" |

#### Objectos suportados

[Subformulario](subform_overview.md)
