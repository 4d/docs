---
id: subformOverview
title: Subformulário
---


Um subformulário é um formulário incluído noutro formulário.

## Terminologia

Para definir claramente os conceitos implementados com subformulários, aqui estão algumas definições para certos termos utilizados:

* **Subform**: a form intended for inclusion in another form, itself called the parent form.
* **Parent form**: a form containing one or more subform(s).
* **Subform container**: an object included in the parent form, displaying an instance of the subform.
* **Subform instance**: the representation of a subform in a parent form. This concept is important because it is possible to display several instances of the same subform in a parent form.
* **Formulário lista**: instância do subformulário exibido como uma lista.
* **Detail form**: page-type input form associated with a list-type subform that can be accessed by double-clicking in the list.

## Sub formulários lista

Um subformulário lista permite que você insira, visualize e modifique dados em outras tabelas. You usually use list subforms in databases in which you have established One to Many relations. A list subform on a form in a related One table lets you view, enter, and modify data in a related Many table. Você pode ter vários subformulários provenientes de tabelas diferentes no mesmo formulário. However, it is not possible to place two subforms that belong to the same table on the same page of a form.

For example, a Contacts manager database might use a list subform to display all the telephone numbers for a particular contact. Although the telephone numbers appear on the Contacts screen, the information is actually stored in a related table. Using a One to Many relation, this database design makes it easy to store an unlimited number of telephone numbers per contact. With automatic relations, you can support data entry directly into the related Many table without programming.

Although list subforms are generally associated with Many tables, a subform instance can display the records of any other database table.

Também é possível permitir que o usuário introduza dados no formulário Lista. Depending on the configuration of the subform, the user may display the detail form by double-clicking on a subrecord or by using the commands for adding and editing subrecords.

> 4D offers three standard actions to meet the basic needs for managing subrecords: `Edit Subrecord`, `Delete Subrecord`, and `Add Subrecord`. When the form includes several subform instances, the action will apply to the subform that has the focus.

## Subformulários em página

Page subforms can display the data of the current subrecord or any type of pertinent value depending on the context (variables, pictures, and so on). One of the main advantages of using page subforms is that they can include advanced functionalities and can interact directly with the parent form (widgets). Page subforms also have their own specific properties and events; you can manage them entirely by programming.

The page subform uses the input form indicated by the [Detail Form](properties_Subform.md#detail-form) property. Unlike a list subform, the form used can come from the same table as the parent form. Também é possível utilizar um formulário projeto. When executed, a page subform has the same standard display characteristics as an input form.

> Os widgets 4D são objetos compostos predefinidos com base em subformulários de página. São descritos em detalhes em um manual separado, [4D Widgets](https://doc.4d.com/4Dv17R6/4D/17-R6/4D-Widgets.100-4465257.en.html).

### Gestão da variável relacionada

The [variable](properties_Object.md#variable-or-expression) bound to a page subform lets you link the parent form and subform contexts to put the finishing touches on sophisticated interfaces. For example, imagine a subform representing a dynamic clock, inserted into a parent form containing an enterable variable of the Time type:

![](../assets/en/FormObjects/subforms1.png)

Both objects (time variable and subform container) *have the same variable name*. In this case, when you open the parent form, 4D synchronizes both values automatically. Se o valor da variável é definido em vários locais, 4D usa o valor que foi carregado por último. It applies the following loading order: 1-Object methods of subform 2-Form method of subform 3-Object methods of parent form 4-Form method of parent form

When the parent form is executed, the developer must take care to synchronize the variables using appropriate form events. Podem ocorrer dois tipos de interações: formulário para subformulário e vice-versa.

#### Atualização do conteúdo do subformulário

Case 1: The value of the parent form variable is modified and this modification must be passed on to the subform. In our example, the time of ParisTime changes to 12:15:00, either because the user entered it, or because it was updated dynamically (via the `Current time` command for example).

Nesse caso, você deve usar o evento formulário On Bound Variable Change. This event must be selected in the subform properties; it is generated in the form method of the subform.

![](../assets/en/FormObjects/subforms2.png)

O evento de formulário `On Bound Variable Change` é gerado:

* as soon as a value is assigned to the variable of the parent form, even if the same value is reassigned,
* se o subformulário pertence à página formulário atual ou à página 0.

Note that, as in the above example, it is preferable to use the `OBJECT Get pointer` command which returns a pointer to the subform container rather than its variable because it is possible to insert several subforms in the same parent form (for example, a window displaying different time zones contains several clocks). In this case, only a pointer lets you know which subform container is at the origin of the event.

#### Atualização do conteúdo do formulário parent

Caso 2: o conteúdo do subformulário é modificado e esta modificação deve ser transmitida ao formulário principal. In our example, imagine that the subform interface lets the user "manually" move the hands of the clock.

In this case, from the subform, you must assign the object value to the variable of the parent subform container. As in the previous example, we recommend that you use the `OBJECT Get pointer` command with the `Object subform container` selector which returns a pointer to the subform container.

Assigning the value to the variable generates the `On Data Change` form event in the object method of the parent subform container, which lets you perform any type of action. O evento deve ser selecionado nas propriedades do contêiner do subformulário.

![](../assets/en/FormObjects/subforms3.png)

> If you "manually" move the hands of the clock, this also generates the `On Data Change` form event in the object method of the *clockValue* variable in the subform.

### Utilizar o objeto vinculado ao subformulário

4D automatically binds an object (`C_OBJECT`) to each subform. The contents of this object can be read and/or modified from within the context of the subform, allowing you to share values in a local context.

The object can be created automatically or be the parent container variable, if explicitely named and typed as Object (see below). In all cases, the object is returned by the `Form` command, which can be called directy the subform (using a pointer is useless). Since objects are always passed by reference, if the user modifies a property value in the subform, it will automatically be saved in the object itself.

For example, in your subform, field labels are stored in the bound object so that you can display different languages:

![](../assets/en/FormObjects/subforms4.png)

You can modify the labels from the subform by assigning values to the *InvoiceAddress* object:

```4d
 C_OBJECT($lang)
 $lang:=New object
 If(<>lang="fr")
    $lang.CompanyName:="Société :"
    $lang.LastName:="Nom :"
 Else
    $lang.CompanyName:="Company:"
    $lang.LastName:="Name:"
 End if
 InvoiceAddress.Label:=$lang
```

![](../assets/en/FormObjects/subforms5.png)

### Programação entre formulários avançada

Communication between the parent form and the instances of the subform may require going beyond the exchange of a value through the bound variable. In fact, you may want to update variables in subforms according to the actions carried out in the parent form and vice versa. If we use the previous example of the "dynamic clock" type subform, we may want to set one or more alarm times for each clock.

4D implementou os seguintes mecanismos para atender a essas necessidades:

* Use of the "subform" parameter with the `OBJECT Get name` command to specify the subform object and the `OBJECT Get pointer` command.
* Calling of a container object from the subform using the `CALL SUBFORM CONTAINER` command,
* Execution of a method in the context of the subform via the `EXECUTE METHOD IN SUBFORM` command.

#### Comandos "Object get pointer" e "Object get name

In addition to the `Object subform container` selector, the `OBJECT Get pointer` command accepts a parameter that indicates in which subform to search for the object whose name is specified in the second parameter. Essa sintaxe só pode ser usada quando o seletor Object named é passado.

Por exemplo, a seguinte instrução:

```4d
 $ptr:=OBJECT Get pointer(Object named;"MyButton";"MySubForm")
```

... retrieves a pointer to the "MyButton" variable that is located in the "MySubForm" subform object. This syntax can be used to access from the parent form any object found in a subform. Also note the `OBJECT Get name` command which can be used to retrieve the name of the object that has the focus.

#### Comando CALL SUBFORM CONTAINER

The `CALL SUBFORM CONTAINER` command lets a subform instance send an event to the subform container object, which can then process it in the context of the parent form. O evento é recebido no método do objeto contentor. It may be at the origin of any event detected by the subform (click, drag-and-drop, etc.).

O código do evento não tem restrições (por exemplo, 20000 ou -100). You can use a code that corresponds to an existing event (for example, 3 for `On Validate`), or use a custom code. In the first case, you can only use events that you have checked in the Property List for subform containers. In the second case, the code must not correspond to any existing form event. It is recommended to use a negative value to be sure that this code will not be used by 4D in future versions.

For more information, refer to the description of the `CALL SUBFORM CONTAINER` command.

#### Comando EXECUTE METHOD IN SUBFORM

The `EXECUTE METHOD IN SUBFORM` command lets a form or one of its objects request the execution of a method in the context of the subform instance, which gives it access to the subform variables, objects, etc. This method can also receive parameters. Este método também pode receber parâmetros.

Este mecanismo é ilustrado no diagrama seguinte:

![](../assets/en/FormObjects/subforms6.png)

Para mais informações, consultar a descrição do comando `EXECUTE METHOD IN SUBFORM`.

#### Comando GOTO OBJECT

The `GOTO OBJECT` command looks for the destination object in the parent form even if it is executed from a subform.

## Propriedades compatíveis

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Detail Form](properties_Subform.md#detail-form) - [Double click on empty row](properties_Subform.md#double-click-on-empty-row) - [Double click on row](properties_Subform.md#double-click-on-row) - [Enterable in list](properties_Subform.md#enterable-in-list) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Height](properties_CoordinatesAndSizing.md#height) - [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) - [Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [List Form](properties_Subform.md#list-form) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Print Frame](properties_Print.md#print-frame) - [Right](properties_CoordinatesAndSizing.md#right) - [Selection mode](properties_Subform.md#selection-mode) - [Source](properties_Subform.md#source) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
