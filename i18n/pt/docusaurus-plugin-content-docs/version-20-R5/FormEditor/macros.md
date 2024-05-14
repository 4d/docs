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

El código de las macros soporta [funciones de clase](Concepts/classes.md) y las [propiedades de objeto de formulario en JSON](FormObjects/properties_Reference.md) para permitir definir toda funcionalidad personalizada en el editor de formularios.

Macros can been defined for the host project or for components within the project. Usually, you will create a macro and install it within the components you use for development.

Quando chamada, uma macro substitui qualquer comportamento especificado anteriormente.

## Exemplo prático

In this short example, you'll see how to create and call a macro that adds a "Hello World!" alert button in the top left corner of your form.

1. En un archivo `formMacros.json` dentro de la carpeta `Sources` de su proyecto, escriba:

```js
{
   "macros": {
      "Add Hello World button": {
       "class": "AddButton"
     }
   }
}
```

2. Cree una clase 4D llamada `AddButton`.

3. En la clase `AddButton`, escriba la siguiente función:

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

Este menú se crea sobre el [archivo de definición de macros](#location-of-macros) `formMacros.json`. Os itens de macro estão ordenados por ordem alfabética.

Este menu pode ser chamado numa área vazia ou numa seleção no formulário. Selected object are passed to `$editor.currentSelection` or `$editor.target` in the [`onInvoke`](#oninvoke) function of the macro.

Uma única macro pode executar várias operações. Si se selecciona, la función **Deshacer** del editor de formularios puede utilizarse para revertir las operaciones de las macros de forma global.

## Localização do ficheiro macro

Todas las macros del editor de formularios 4D se definen en un único archivo JSON por proyecto o componente: `FormMacros.json`.

Este archivo debe estar ubicado en la carpeta **Project** > **Sources** local o del componente:

![](../assets/en/FormEditor/macroStructure.png)

## Declaração de macros

La estructura del archivo `formMacros.json` es la siguiente:

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

Las propiedades personalizadas, cuando se utilizan, se pasan a la función [constructor](#class-constructor) de la macro.

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

Cada macro que quiera instanciar en su proyecto o componente debe ser declarada como una [clase 4D](Concepts/classes.md).

El nombre de la clase debe coincidir con el nombre definido mediante el atributo [class](#creating-macros) del archivo `formMacros.json`.

As macros são instanciadas no arranque da aplicação. Consequently, if you modify the macro class structure (add a function, modify a parameter...) or the [constructor](#class-constructor), you will have to restart the application to apply the changes.

## Funções macro

Cada clase de macro puede contener un `Class constructor` y dos funciones: `onInvoke()` y `onError()`.

### Class constructor

#### Class constructor($macro : Object)

| Parâmetro | Tipo   | Descrição                                                                            |
| --------- | ------ | ------------------------------------------------------------------------------------ |
| $macro    | Object | Objeto de declaración de macros (en el archivo `formMacros.json`) |

Las macros se instancian utilizando una función [class constructor](Concepts/classes.md#class-constructor), si existe.

The class constructor is called once during class instantiation, which occurs at application startup.

Las propiedades personalizadas añadidas a la [declaración macro](#declaring-macros) se devuelven en el parámetro de la función class contructor.

#### Exemplo

En el archivo `formMacros.json`:

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

La función `onInvoke` se ejecuta automáticamente cada vez que se llama a la macro.

Cuando la función es llamada, recibe en la propiedad `$editor.editor` una copia de todos los elementos del formulario con sus valores actuales. Pode então executar qualquer operação sobre estas propriedades.

Una vez completadas las operaciones, si la macro resulta en la modificación, adición o eliminación de objetos, puede pasar las propiedades editadas resultantes en `$result`. The macro processor will parse the returned properties and apply necessary operations in the form. Obviously, the less properties you return, the less time processing will require.

Estas son las propiedades devueltas en el parámetro _$editor_:

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

Estas son las propiedades que puede pasar en el objeto `$result` si quiere que el macro procesador ejecute una modificación. Todas as propriedades são opcionais:

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

#### atributo `method`

Cuando se maneja el atributo `method` de los objetos de formulario, se puede definir el valor del atributo de dos maneras en las macros:

- Utilizando una [cadena que contiene el nombre/ruta del archivo del método](FormObjects/properties_Action.md#method).

- Utilizar um objeto com a seguinte estrutura:

| Propriedade | Tipo   | Descrição        |
| ----------- | ------ | ---------------- |
| source      | String | Código do método |

4D creará un archivo con el nombre del objeto en la carpeta "objectMethods" con el contenido del atributo `source`. Esta funcionalidade só está disponível para o código macro.

#### Propiedad `$4dId` en `currentPage.objects`

La propiedad `$4dId` define un ID único para cada objeto de la página actual. Esta clave es utilizada por el procesador de macros para controlar los cambios en `$result.currentPage`:

- si la llave `$4dId` falta tanto en el formulario y en un objeto en `$result`, el objeto se crea.
- si la llave `$4dId` existe en el formulario pero falta en `$result`, el objeto se elimina.
- si la llave `$4dId` existe tanto en el formulario y en un objeto en `$result`, el objeto se modifica.

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

| Parâmetro    |                                                                                           | Tipo       | Descrição                                 |
| ------------ | ----------------------------------------------------------------------------------------- | ---------- | ----------------------------------------- |
| $editor      |                                                                                           | Object     | Objeto enviado a [onInvoke](#oninvoke)    |
| $resultMacro |                                                                                           | Object     | Objeto devuelto por [onInvoke](#oninvoke) |
| $error       |                                                                                           | Collection | Pilha de erros                            |
|              | [].errCode            | Number     | Código de erro                            |
|              | [].message            | Text       | Descrição do erro                         |
|              | [].componentSignature | Text       | Assinatura da componente interna          |

La función `onError` se ejecuta cuando el procesador de macros encuentra un error.

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
