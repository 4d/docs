---
id: macros
title: Macros do editor de formulários
---


O editor de formulários 4D suporta macros. Uma macro é um conjunto de instruções para executar uma ação ou uma sequência de ações. Quando chamada, a macro executará suas instruções e realizará automaticamente a(s) ação(ões).

Por exemplo, se você tiver um relatório recorrente com formatação específica (por exemplo, determinado texto deve aparecer em vermelho e determinado texto deve aparecer em verde), poderá criar uma macro para definir automaticamente a cor. É possível criar macros para o editor de 4D Form que podem:

*   Criar e executar código 4D
*   Exibir diálogos
*   Seleccionar objectos do formulário
*   Adicionar / excluir / modificar formulários, objetos de formulário e suas propriedades
*   Modificar ficheiros de projeto (atualizar, apagar)

O código de macros suporta [funções de classe](Concepts/classes.md) e [propriedades de objeto de formulário em JSON](FormObjects/properties_Reference.md) para permitir que você defina qualquer recurso personalizado no editor de formulários.

As macros podem ser definidas para o projeto host ou para componentes do projeto. Normalmente, você vai criar uma macro e instalá-la nos componentes que você usa para o desenvolvimento.

Quando chamada, uma macro substitui qualquer comportamento especificado anteriormente.

## Exemplo prático

Neste pequeno exemplo, você verá como criar e chamar uma macro que adiciona um botão de alerta "Hello World!" no canto superior esquerdo do seu formulário.

1. Num ficheiro `formMacros.json` dentro da pasta `Sources` do seu projecto, escreve:

```js
{
   "macros": {
      "Add Hello World button": {
       "class": "AddButton"
     }
   }
}
```

2. Criar uma classe 4D com o nome `AddButton`.

3. Na classe `AddButton`, escreva a seguinte função:

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

Você pode então chamar a macro: ![](../assets/en/FormEditor/macroex1.png) ![](../assets/en/FormEditor/macroex2.png)


## Chamar macros no editor de formulários

Quando as macros são definidas no seu projeto 4D, você pode chamar uma macro usando o menu contextual do editor de formulário:

![](../assets/en/FormEditor/macroSelect.png)

Esse menu é construído com base no(s) [arquivo(s) de definição de macro](#location-of-macros) `formMacros.json`. Os itens de macro estão ordenados por ordem alfabética.

Este menu pode ser chamado numa área vazia ou numa seleção no formulário. O objeto selecionado é passado para `$editor.currentSelection` ou `$editor.target` no [`onInvoke`](#oninvoke) da macro.

Uma única macro pode executar várias operações. Se selecionado, a função **Desfazer** do editor de formulários pode ser usado para reverter as operações macro globalmente.

## Localização do ficheiro macro

Todas as macros do 4D Form Editor são definidas em um único arquivo JSON por projeto ou componente: `FormMacros.json`.

Esse arquivo deve estar localizado na pasta **Project** > **Sources** do host ou do componente:

![](../assets/en/FormEditor/macroStructure.png)



## Declaração de macros

A estrutura do ficheiro `formMacros.json` é a seguinte:

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

| Atributo |                     |                          | Tipo   | Descrição                                            |
| -------- | ------------------- | ------------------------ | ------ | ---------------------------------------------------- |
| macros   |                     |                          | object | lista de macros definidas                            |
|          | `<macroName>` |                          | object | definição macro                                      |
|          |                     | "class"                  | string | nome da classe macro                                 |
|          |                     | `<customProperty>` | any    | (opcional) valor personalizado a obter no construtor |

As propriedades personalizadas, quando usadas, são passadas para a função [constructor](#class-constructor) da macro.

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

Cada macro que você deseja instanciar em seu projeto ou componente deve ser declarada como uma [classe 4D](Concepts/classes.md).

O nome da classe deve corresponder ao nome definido usando o atributo [class](#creating-macros) do arquivo `formMacros.json`.

As macros são instanciadas no arranque da aplicação. Consequentemente, se você modificar a estrutura da classe de macro (adicionar uma função, modificar um parâmetro...) ou o [construtor](#class-constructor), será necessário reiniciar a aplicação para aplicar as alterações.




## Funções macro

Every macro class can contain a `Class constructor` and two functions: `onInvoke()` and `onError()`.


### Class constructor

#### Class constructor($macro : Object)

| Parâmetro | Tipo   | Descrição                                                    |
| --------- | ------ | ------------------------------------------------------------ |
| $macro    | Object | Objeto de declaração de macro (no arquivo `formMacros.json`) |

Macros are instantiated using a [class constructor](Concepts/classes.md#class-constructor) function, if it exists.

The class constructor is called once during class instantiation, which occurs at application startup.

Custom properties added to the [macro declaration](#declaring-macros) are returned in the parameter of the class contructor function.



#### Exemplo

No ficheiro `formMacros.json`:

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

| Parâmetro | Tipo   | Descrição                                                                                    |
| --------- | ------ | -------------------------------------------------------------------------------------------- |
| $editor   | Object | Objeto Form Editor Macro Proxy que contém as propriedades do formulário                      |
| $result   | Object | Objeto Form Editor Macro Proxy que devolve as propriedades modificadas pela macro (opcional) |

A função `onInvoke` é executada automaticamente sempre que a macro é chamada.

Quando a função é chamada, recebe na propriedade `$editor.editor` uma cópia de todos os elementos do formulário com os seus valores atuais. Pode então executar qualquer operação sobre estas propriedades.

Once operations are completed, if the macro results in modifying, adding, or removing objects, you can pass the resulting edited properties in `$result`. The macro processor will parse the returned properties and apply necessary operations in the form. Obviously, the less properties you return, the less time processing will require.

Aqui estão as propriedades retornadas no parâmetro *$editor*:

| Propriedade                      | Tipo       | Descrição                                                                         |
| -------------------------------- | ---------- | --------------------------------------------------------------------------------- |
| $editor.editor.form              | Object     | O formulário completo                                                             |
| $editor.editor.file              | File       | Objeto File do ficheiro do formulário                                             |
| $editor.editor.name              | Text       | Nome do formulário                                                                |
| $editor.editor.table             | number     | Número da tabela do formulário, 0 para formulário projecto                        |
| $editor.editor.currentPageNumber | number     | O número da página actual                                                         |
| $editor.editor.currentPage       | Object     | The current page, containing all the form objects and the entry order of the page |
| $editor.editor.currentSelection  | Collection | Colecção de nomes de objectos seleccionados                                       |
| $editor.editor.formProperties    | Object     | Propriedades do formulário atual                                                  |
| $editor.editor.target            | string     | Nome do objeto sob o rato quando clicado numa macro                               |

Here are the properties that you can pass in the `$result` object if you want the macro processor to execute a modification. Todas as propriedades são opcionais:

| Propriedade       | Tipo       | Descrição                                                              |
| ----------------- | ---------- | ---------------------------------------------------------------------- |
| currentPage       | Object     | currentPage incluindo os objectos modificados pela macro, se existirem |
| currentSelection  | Collection | currentSelection se modificada pela macro                              |
| formProperties    | Object     | formProperties se modificada pela macro                                |
| editor.groups     | Object     | informação do grupo, se os grupos forem modificados pela macro         |
| editor.views      | Object     | view info, se as vistas forem modificadas pela macro                   |
| editor.activeView | Text       | Nome da vista activa                                                   |


Por exemplo, se objectos da página actual e grupos tiverem sido modificados, pode escrever:

```4d
    $result:=New object("currentPage"; $editor.editor.currentPage ; \ 
   "editor"; New object("groups"; $editor.editor.form.editor.groups))

```


#### atributo `method`

When handling the `method` attribute of form objects, you can define the attribute value in two ways in macros:

- Using a [string containing the method file name/path](FormObjects/properties_Action.md#method).

- Utilizar um objeto com a seguinte estrutura:

| Propriedade | Tipo | Descrição |
| ----------- | ---- | --------- |
|             |      |           |
 source|Text|method code|

4D will create a file using the object name in the "objectMethods" folder with the content of `source` attribute. Esta funcionalidade só está disponível para o código macro.

#### Propriedade `$4dId` em `currentPage.objects`

A propriedade `$4dId` define um ID único para cada objecto na página actual. Esta chave é utilizada pelo macro processador para controlar as alterações em `$result.currentPage`:

- se a chave `$4dId` estiver em falta tanto na forma como num objecto em `$result`, o objecto é criado.
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
 End if 

 // Notify to 4D the modification
 $result:=New object("currentPage"; $editor.editor.currentPage)
    End if 

    // Notificar ao 4D a modificação
    $result:=New object("currentPage"; $editor.editor.currentPage)
```


### onError()

#### onError($editor : Object; $resultMacro : Object ; $error : Collection)

| Parâmetro    |                       | Tipo       | Descrição                                   |
| ------------ | --------------------- | ---------- | ------------------------------------------- |
| $editor      |                       | Object     | Objeto enviado para [emInvoke](#oninvoke)   |
| $resultMacro |                       | Object     | Objecto devolvido por [onInvoke](#oninvoke) |
| $error       |                       | Collection | Pilha de erros                              |
|              | [].errCode            | Number     | Código de erro                              |
|              | [].message            | Text       | Descrição do erro                           |
|              | [].componentSignature | Text       | Assinatura da componente interna            |

A função `onError` é executada quando o processador de macros encontra um erro.

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
