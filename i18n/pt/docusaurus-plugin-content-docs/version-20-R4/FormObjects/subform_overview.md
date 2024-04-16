---
id: subformOverview
title: Subform
---


Um subformulário é um formulário incluído noutro formulário.


## Terminologia

Para definir claramente os conceitos implementados com subformulários, aqui estão algumas definições para certos termos utilizados:

*   **Subformulário**: um formulário destinado a ser incluído em outro formulário, ele próprio chamado de formulário pai.
*   **Formulário pai**: um formulário que contém um ou mais subformulários.
*   **Contêiner de sub**formulário: um objeto incluído no formulário pai, que exibe uma instância do subformulário.
*   **Instância de sub**formulário: a representação de um subformulário em um formulário pai. Esse conceito é importante porque é possível exibir várias instâncias do mesmo subformulário em um formulário pai.
*   **Formulário lista**: instância do subformulário exibido como uma lista.
*   **Formulário de detalhes**: formulário de entrada do tipo página associado a um subformulário do tipo lista que pode ser acessado com um clique duplo na lista.


## Sub formulários lista

Um subformulário lista permite que você insira, visualize e modifique dados em outras tabelas. Normalmente, os subformulários de lista são usados em bancos de dados nos quais você estabeleceu relações Um para Muitos. Um subformulário de lista em um formulário em uma tabela One relacionada permite visualizar, inserir e modificar dados em uma tabela Many relacionada. Você pode ter vários subformulários provenientes de tabelas diferentes no mesmo formulário. No entanto, não é possível colocar dois subformulários que pertençam à mesma tabela na mesma página de um formulário.

Por exemplo, um banco de dados do gerenciador de contatos pode usar um subformulário de lista para exibir todos os números de telefone de um determinado contato. Embora os números de telefone apareçam na tela Contatos, as informações são, na verdade, armazenadas em uma tabela relacionada. Usando uma relação de um para muitos, esse design de banco de dados facilita o armazenamento de um número ilimitado de números de telefone por contato. Com as relações automáticas, você pode apoiar a entrada de dados diretamente na tabela Many relacionada sem programação.

Embora os subformulários de lista geralmente estejam associados a muitas tabelas, uma instância de subformulário pode exibir os registros de qualquer outra tabela do banco de dados.

Também é possível permitir que o usuário introduza dados no formulário Lista. Dependendo da configuração do subformulário, o usuário pode exibir o formulário detalhado clicando duas vezes em um subregistro ou usando os comandos para adicionar e editar subregistros.

> 4D oferece três ações padrão para atender às necessidades básicas de gerenciamento de sub-registros: `Editar Subregistro`, `Excluir Subregistro` e `Adicionar Subregistro`. Quando o formulário incluir várias instâncias de subformulários, a ação será aplicada ao subformulário que tiver o foco.


## Subformulários em página

Os subformulários de página podem exibir os dados do subregistro atual ou qualquer tipo de valor pertinente, dependendo do contexto (variáveis, figuras etc.). Uma das principais vantagens do uso de subformulários de página é que eles podem incluir funcionalidades avançadas e interagir diretamente com o formulário pai (widgets). Os subformulários de página também têm suas próprias propriedades e eventos específicos; você pode gerenciá-los inteiramente por meio de programação.

O subformulário de página usa o formulário de entrada indicado pela propriedade [Detail Form](properties_Subform.md#detail-form). Ao contrário de um subformulário de lista, o formulário usado pode vir da mesma tabela que o formulário pai. Também é possível usar um formulário de projeto. Quando executado, um subformulário de página tem as mesmas características de exibição padrão de um formulário de entrada.

> Os widgets 4D são objetos compostos predefinidos com base em subformulários de página. They are described in detail in a separate manual, [4D Widgets](https://doc.4d.com/4Dv17R6/4D/17-R6/4D-Widgets.100-4465257.en.html).


### Utilizar a variável ou expressão ligada

É possível vincular [uma variável ou uma expressão](properties_Object.md#variable-or-expression) a um objeto de contêiner de subformulário. Isso é muito útil para sincronizar valores do formulário principal e de seus subformulários.

Por padrão, o 4D cria uma variável ou expressão de [tipo objeto](properties_Object.md#expression-type) para um contêiner de subformulário, o que permite compartilhar valores no contexto do subformulário usando o comando `Form` ([veja abaixo](#using-the-subform-bound-object)). For example, imagine a subform representing a dynamic clock, inserted into a parent form containing an enterable variable of the Time type:

- Define a bound variable or expression of a scalar type and call the `OBJECT Get subform container value` and `OBJECT SET SUBFORM CONTAINER VALUE` commands to exchange values when [On Bound Variable Change](../Events/onBoundVariableChange.md) or [On Data Change](../Events/onDataChange.md) form events occur. Esta solução é recomendada para sincronizar um único valor.
- Define a bound variable or expression of the **object** type and use the `Form` command to access its properties from the subform. Esta solução é recomendada para sincronizar vários valores.



### Sincronização do formulário principal e do subformulário (valor único)

Binding the same variable or expression to your subform container and other objects of the parent form lets you link the parent form and subform contexts to put the finishing touches on sophisticated interfaces. Imagine a subform that contains a clock displaying a static time, inserted into a parent form containing an [input area](input_overview.md):

![](../assets/en/FormObjects/subforms1.png)

Both objects (time variable and subform container) *have the same variable name*. It can be a variable (e.g. `parisTime`), or an expression (e.g. `Form.parisTime`).

:::info

To display a static time, you must use the appropriate [data type](properties_DataSource.md#data-type-expression-type) for the [variable or expression](properties_Object.md#variable-or-expression):

- If you use a variable (e.g. `parisTime`), it must be of the `text` or `time` type.
- If you use an expression (e.g. `Form.myValue`), it must contain a `text` value.

O valor do texto deve ter o formato "hh:mm:ss".

:::

If you "manually" move the hands of the clock, this also generates the `On Data Change` form event in the object method of the *clockValue* variable in the subform.


#### Updating subform contents

Case 1: The value of the parent form variable or expression is modified and this modification must be passed on to a subform.

In our example, the time of ParisTime changes to 12:15:00, either because the user entered it, or because it was updated dynamically (via the `Current time` command for example). Case 1: The value of the parent form variable is modified and this modification must be passed on to the subform.

O seguinte código é executado:

```4d  
// Subform form method If (Form event code=On Bound Variable Change) //bound variable or expression was modified in the parent form
    Form.clockValue:=OBJECT Get subform container value //synchonize the local value End if
```

Ele atualiza o valor de `Form.clockValue` no subformulário:

![](../assets/en/FormObjects/update-subform.png)

The `On Bound Variable Change` form event is generated:

- as soon as a value is assigned to the variable of the parent form, even if the same value is reassigned,
- se o subformulário pertence à página formulário atual ou à página 0.

Note that, as in the above example, it is preferable to use the `OBJECT Get pointer` command which returns a pointer to the subform container rather than its variable because it is possible to insert several subforms in the same parent form (for example, a window displaying different time zones contains several clocks).

When the parent form is executed, the developer must take care to synchronize the variables using appropriate form events. Two types of interactions can occur: form to subform and vice versa.

- Use of the "subform" parameter with the `OBJECT Get name` command to specify the subform object and the `OBJECT Get pointer` command.
- Assigning the value to the variable generates the `On Data Change` form event in the object method of the parent subform container, which lets you perform any type of action.



#### Updating parent form contents

Caso 2: o conteúdo do subformulário é modificado e esta modificação deve ser transmitida ao formulário principal.

This triggers the [On Data Change](../Events/onDataChange.md) form event inside the clock object (this event must be selected for the object), which updates the `Form.parisTime` value in the main form. Inside the subform, the button changes the value of the `Form.clockValue` expression of type Text attached to the clock object.

O seguinte código é executado:

```4d  
// subform clock object method If (Form event code=On Data Change) //whatever the way the value is changed
    OBJECT SET SUBFORM CONTAINER VALUE(Form.clockValue) //Push the value to the container End if
```

![](../assets/en/FormObjects/update-main-form.png)

Everytime the value of `Form.clockValue` changes in the subform, `parisTime` or `Form.parisTime` in the subform container is also updated.


> If the variable value is set at several locations, 4D uses the value that was loaded last. It applies the following loading order: 1-Object methods of subform 2-Form method of subform 3-Object methods of parent form 4-Form method of parent form


### Sincronização formulário principal e do subformulário (valores múltiplos)

4D automatically binds an object (`C_OBJECT`) to each subform. The contents of this object can be read and/or modified from within the context of the subform, allowing you to share values in a local context.

In all cases, the object is returned by the `Form` command, which can be called directy the subform (using a pointer is useless). Since objects are always passed by reference, if the user modifies a property value in the subform, it will automatically be saved in the object itself. On the other hand, if a property of the object is modified by the user in the parent form or by programming, it will be automatically updated in the subform. Não é necessária qualquer gestão de eventos.

For example, in a subform, inputs are bound to the `Form` object properties (of the subform form):

![](../assets/en/FormObjects/subnew1.png)

No formulário pai, o subformulário é apresentado duas vezes. Each subform container is bound to an expression which is a property of the `Form` object (of the parent form):

![](../assets/en/FormObjects/subnew2.png)

The button only creates `mother` and `father` properties in the parent's `Form` object:

```4d
//Add values button object method Form.mother:=New object("lastname"; "Hotel"; "firstname"; "Anne")
Form.father:=New object("lastname"; "Golf"; "firstname"; "Félix")
```

When you execute the form and click on the button, you see that all values are correctly displayed:

![](../assets/en/FormObjects/subnew3.png)

If you modify a value either in the parent form or in the subform, it is automatically updated in the other form because the same object is used:

![](../assets/en/FormObjects/subnew4.png) ![](../assets/en/FormObjects/subnew5.png)

### Utilização de ponteiros (compatibilidade)

In versions prior to 4D v19 R5, synchronization between parent forms and subforms was handled through **pointers**. Por exemplo, para atualizar um objeto subformulário, você pode chamar o seguinte código:

```4d  
// Subform form method If (Form event code=On Bound Variable Change) 
    ptr:=OBJECT Get pointer(Object subform container) 
    clockValue:=ptr-> End if
```

**This principle is still supported for compatibility but is now deprecated since it does not allow binding expressions to subforms.** It should no longer be used in your developments. In any cases, we recommend to use the [`Form` command](#synchronizing-parent-form-and-subform-multiple-values) or the [`OBJECT Get subform container value` and `OBJECT SET SUBFORM CONTAINER VALUE` commands](#synchronizing-parent-form-and-subform-single-value) to synchronize form and subform values.


### Programação entre formulários avançada

Communication between the parent form and the instances of the subform may require going beyond the exchange of a value through the bound variable. In fact, you may want to update variables in subforms according to the actions carried out in the parent form and vice versa. If we use the previous example of the "dynamic clock" type subform, we may want to set one or more alarm times for each clock.

4D implementou os seguintes mecanismos para atender a essas necessidades:

- Calling of a container object from the subform using the `CALL SUBFORM CONTAINER` command,
- Execution of a method in the context of the subform via the `EXECUTE METHOD IN SUBFORM` command.

> The `GOTO OBJECT` command looks for the destination object in the parent form even if it is executed from a subform.


#### Comando CALL SUBFORM CONTAINER

The `CALL SUBFORM CONTAINER` command lets a subform instance send an event to the subform container object, which can then process it in the context of the parent form. O evento é recebido no método do objeto contentor. It may be at the origin of any event detected by the subform (click, drag-and-drop, etc.).

O código do evento não tem restrições (por exemplo, 20000 ou -100). You can use a code that corresponds to an existing event (for example, 3 for `On Validate`), or use a custom code. In the first case, you can only use events that you have checked in the Property List for subform containers. In the second case, the code must not correspond to any existing form event. It is recommended to use a negative value to be sure that this code will not be used by 4D in future versions.

For more information, refer to the description of the `CALL SUBFORM CONTAINER` command.

#### Comando EXECUTE METHOD IN SUBFORM

The `EXECUTE METHOD IN SUBFORM` command lets a form or one of its objects request the execution of a method in the context of the subform instance, which gives it access to the subform variables, objects, etc. This method can also receive parameters. Este método também pode receber parâmetros.

Este mecanismo é ilustrado no diagrama seguinte:

![](../assets/en/FormObjects/subforms6.png)

Para mais informações, consultar a descrição do comando `EXECUTE METHOD IN SUBFORM`.





## Propriedades compatíveis

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Detail Form](properties_Subform.md#detail-form) - [Double click on empty row](properties_Subform.md#double-click-on-empty-row) - [Double click on row](properties_Subform.md#double-click-on-row) - [Enterable in list](properties_Subform.md#enterable-in-list) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Height](properties_CoordinatesAndSizing.md#height) - [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) - [Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [List Form](properties_Subform.md#list-form) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Print Frame](properties_Print.md#print-frame) - [Right](properties_CoordinatesAndSizing.md#right) - [Selection mode](properties_Subform.md#selection-mode) - [Source](properties_Subform.md#source) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 
