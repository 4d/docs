---
id: macros
title: Macros do editor de formulários
---

O editor de formulários 4D suporta macros. A macro is a set of instructions to perform an action or a sequence of actions. When called upon, the macro will execute its instructions and automatically perform the action(s).

For example if you have a recurring report with specific formatting (e.g., certain text must appear in red and certain text must appear in green), you can create a macro to automatically set the color. É possível criar macros para o editor de 4D Form que podem:

- Criar e executar código 4D
- Exibir diálogos
- Seleccionar objectos do formulário
- Adicionar / excluir / modificar formulários, objetos de formulário e suas propriedades
- Modificar ficheiros de projeto (atualizar, apagar)

Macros code supports [class functions](Concepts/classes.md) and [form object properties in JSON](FormObjects/properties_Reference.md) to let you define any custom feature in the Form editor.

Macros can been defined for the host project or for components within the project. Usually, you will create a macro and install it within the components you use for development.

Quando chamada, uma macro substitui qualquer comportamento especificado anteriormente.

## Exemplo prático

In this short example, you'll see how to create and call a macro that adds a "Hello World!" alert button in the top left corner of your form.

1. In a `formMacros.json` file within the `Sources` folder of your project, you write:

```js
{
   "macros": {
      "Add Hello World button": {
       "class": "AddButton"
     }
   }
}
```

2. Create a 4D class named `AddButton`.

3. Within the `AddButton` class, write the following function:

```4d
Function onInvoke($editor : Object)->$result : Object
	
	var $btnHello : Object
	
	// Create a "Hello" button
	$btnHello:=New object("type"; "button"; \
	"text"; "Hello World!"; \
	"method"; New object("source"; "ALERT(\"Hello World!\")"); \
	"events"; New collection("onClick"); \
	"width"; 120; \
	"height"; 20; \
	"top"; 0; \
	"left"; 0)	
	
	// Add button in the current page
	$editor.editor.currentPage.objects.btnHello:=$btnHello	
	
	// Select the new button in the form editor
	$editor.editor.currentSelection.clear() //unselect elements
	$editor.editor.currentSelection.push("btnHello")	
	
	// Notify the modification to the 4D Form editor
	$result:=New object("currentSelection"; $editor.editor.currentSelection;\  
		"currentPage"; $editor.editor.currentPage)
```

You can then call the macro:
![](../assets/en/FormEditor/macroex1.png)
![](../assets/en/FormEditor/macroex2.png)

## Chamar macros no editor de formulários

When macros are defined in your 4D project, you can call a macro using the contextual menu of the Form editor:

![](../assets/en/FormEditor/macroSelect.png)

This menu is built upon the `formMacros.json` [macro definition file(s)](#location-of-macros). Os itens de macro estão ordenados por ordem alfabética.

Este menu pode ser chamado numa área vazia ou numa seleção no formulário. Selected object are passed to `$editor.currentSelection` or `$editor.target` in the [`onInvoke`](#oninvoke) function of the macro.

Uma única macro pode executar várias operações. If selected, the **Undo** feature of the Form editor can be used to reverse macro operations globally.

## Localização do ficheiro macro

All 4D Form Editor macros are defined within a single JSON file per project or component: `FormMacros.json`.

This file must be located in the host or component's **Project** > **Sources** folder:

![](../assets/en/FormEditor/macroStructure.png)

## Declaração de macros

The structure of the `formMacros.json` file is the following:

```js
{
    "macros": {
            <macroName>: {
                "class": <className>,
                <customProperty> : <value>
        }
    }
}
```

Eis a descrição do conteúdo do ficheiro JSON:

| Atributo |               |                    | Tipo   | Descrição                                                               |
| -------- | ------------- | ------------------ | ------ | ----------------------------------------------------------------------- |
| macros   |               |                    | object | lista de macros definidas                                               |
|          | `<macroName>` |                    | object | definição macro                                                         |
|          |               | "class"            | string | nome da classe macro                                                    |
|          |               | `<customProperty>` | any    | (opcional) valor personalizado a obter no construtor |

Custom properties, when used, are passed to the [constructor](#class-constructor) function of the macro.

### Exemplo

```js
{
   "macros": {
     "Open Macros file": {
       "class": "OpenMacro"
     },
     "Align to Right on Target Object": {
       "class": "AlignOnTarget",
       "myParam": "right"
     },
     "Align to Left on Target Object": {
       "class": "AlignOnTarget",
       "myParam": "left"
     }
   }
}
```

## Instanciando macros em 4D

Each macro you want to instantiate in your project or component must be declared as a [4D class](Concepts/classes.md).

The class name must match the name defined using the [class](#creating-macros) attribute of the `formMacros.json` file.

As macros são instanciadas no arranque da aplicação. Consequently, if you modify the macro class structure (add a function, modify a parameter...) or the [constructor](#class-constructor), you will have to restart the application to apply the changes.

## Funções macro

Every macro class can contain a `Class constructor` and two functions: `onInvoke()` and `onError()`.

### Class constructor

#### Class constructor($macro : Object)

| Parâmetro | Tipo   | Descrição                                                                   |
| --------- | ------ | --------------------------------------------------------------------------- |
| $macro    | Object | Macro declaration object (in the `formMacros.json` file) |

Macros are instantiated using a [class constructor](Concepts/classes.md#class-constructor) function, if it exists.

The class constructor is called once during class instantiation, which occurs at application startup.

Custom properties added to the [macro declaration](#declaring-macros) are returned in the parameter of the class contructor function.

#### Exemplo

In the `formMacros.json` file:

```js
{
   "macros": {
     "Align to Left on Target Object": {
       "class": "AlignOnTarget",
       "myParam": "left"
     }
   }
}
```

Você pode escrever:

```4d
// Class "AlignOnTarget" Class constructor($macro : Object)
    This.myParameter:=$macro.myParam //left
    ...
```

### onInvoke()

#### onInvoke($editor : Object) -> $result : Object

| Parâmetro | Tipo   | Descrição                                                                                                       |
| --------- | ------ | --------------------------------------------------------------------------------------------------------------- |
| $editor   | Object | Objeto Form Editor Macro Proxy que contém as propriedades do formulário                                         |
| $result   | Object | Objeto Form Editor Macro Proxy que devolve as propriedades modificadas pela macro (opcional) |

The `onInvoke` function is automatically executed each time the macro is called.

When the function is called, it receives in the `$editor.editor` property a copy of all the elements of the form with their current values. Pode então executar qualquer operação sobre estas propriedades.

Once operations are completed, if the macro results in modifying, adding, or removing objects, you can pass the resulting edited properties in `$result`. The macro processor will parse the returned properties and apply necessary operations in the form. Obviously, the less properties you return, the less time processing will require.

Here are the properties returned in the _$editor_ parameter:

| Propriedade                                                      | Tipo       | Descrição                                                                         |
| ---------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------- |
| $editor.editor.form              | Object     | O formulário completo                                                             |
| $editor.editor.file              | File       | Objeto File do ficheiro do formulário                                             |
| $editor.editor.name              | String     | Nome do formulário                                                                |
| $editor.editor.table             | number     | Número da tabela do formulário, 0 para formulário projecto                        |
| $editor.editor.currentPageNumber | number     | O número da página actual                                                         |
| $editor.editor.currentPage       | Object     | The current page, containing all the form objects and the entry order of the page |
| $editor.editor.currentSelection  | Collection | Colecção de nomes de objectos seleccionados                                       |
| $editor.editor.formProperties    | Object     | Propriedades do formulário atual                                                  |
| $editor.editor.target            | string     | Nome do objeto sob o rato quando clicado numa macro                               |

Here are the properties that you can pass in the `$result` object if you want the macro processor to execute a modification. Todas as propriedades são opcionais:

| Propriedade                       | Tipo       | Descrição                                                              |
| --------------------------------- | ---------- | ---------------------------------------------------------------------- |
| currentPage                       | Object     | currentPage incluindo os objectos modificados pela macro, se existirem |
| currentSelection                  | Collection | currentSelection se modificada pela macro                              |
| formProperties                    | Object     | formProperties se modificada pela macro                                |
| editor.groups     | Object     | informação do grupo, se os grupos forem modificados pela macro         |
| editor.views      | Object     | view info, se as vistas forem modificadas pela macro                   |
| editor.activeView | String     | Nome da vista activa                                                   |

Por exemplo, se objectos da página actual e grupos tiverem sido modificados, pode escrever:

```4d
	$result:=New object("currentPage"; $editor.editor.currentPage ; \ 
			"editor"; New object("groups"; $editor.editor.form.editor.groups))

```

#### `method` attribute

When handling the `method` attribute of form objects, you can define the attribute value in two ways in macros:

- Using a [string containing the method file name/path](FormObjects/properties_Action.md#method).

- Utilizar um objeto com a seguinte estrutura:

| Propriedade | Tipo   | Descrição        |
| ----------- | ------ | ---------------- |
| source      | String | Código do método |

4D will create a file using the object name in the "objectMethods" folder with the content of `source` attribute. Esta funcionalidade só está disponível para o código macro.

#### `$4dId` property in `currentPage.objects`

The `$4dId` property defines a unique ID for each object in the current page. This key is used by the macro processor to control changes in `$result.currentPage`:

- if the `$4dId` key is missing in both the form and an object in `$result`, the object is created.
- if the `$4dId` key exists in the form but is missing in `$result`, the object is deleted.
- if the `$4dId` key exists in both the form and an object in `$result`, the object is modified.

#### Exemplo

You want to define a macro function that will apply the red color and italic font style to any selected object(s).

```4d
Function onInvoke($editor : Object)->$result : Object
	var $name : Text
	
	If ($editor.editor.currentSelection.length>0)		
		// Set stroke to red and style to italic for each selected object
		For each ($name; $editor.editor.currentSelection)
			$editor.editor.currentPage.objects[$name].stroke:="red"
			$editor.editor.currentPage.objects[$name].fontStyle:="italic"

		End for each 
		
	Else 
		ALERT("Please select a form object.")
	End if 
	
	// Notify to 4D the modification
	$result:=New object("currentPage"; $editor.editor.currentPage)
```

### onError()

#### onError($editor : Object; $resultMacro : Object ; $error : Collection)

| Parâmetro    |                                                                                           | Tipo       | Descrição                                |
| ------------ | ----------------------------------------------------------------------------------------- | ---------- | ---------------------------------------- |
| $editor      |                                                                                           | Object     | Object send to [onInvoke](#oninvoke)     |
| $resultMacro |                                                                                           | Object     | Object returned by [onInvoke](#oninvoke) |
| $error       |                                                                                           | Collection | Pilha de erros                           |
|              | [].errCode            | Number     | Código de erro                           |
|              | [].message            | Text       | Descrição do erro                        |
|              | [].componentSignature | Text       | Assinatura da componente interna         |

The `onError` function is executed when the macros processor encounters an error.

When executing a macro, if 4D encounters an error which prevents the macro from being cancelled, it does not execute the macro. É o caso, por exemplo, se a execução de uma macro resultar em:

- eliminar ou modificar um script cujo ficheiro é só de leitura.
- criar dois objectos com o mesmo ID interno.

#### Exemplo

Em uma definição de classe macro, você pode escrever o seguinte código de erro genérico:

```4d
Function onError($editor : Object; $resultMacro : Object; $error : Collection)
	var $obj : Object
	var $txt : Text
	$txt:=""
	
	For each ($obj; $error)
		$txt:=$txt+$obj.message+" \n"
	End for each 
	
	ALERT($txt)
```
