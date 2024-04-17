---
id: formEditor
title: Form Editor
---

4D fornece um editor de formulários completo que permite modificar seu formulário até conseguir o efeito que deseja. Com o editor de formulários, é possível criar e eliminar objetos, manipulá-los diretamente e definir as propriedades de objetos e formulários.

## Interface

O editor de formulários apresenta cada formulário JSON na sua própria janela, que tem uma barra de ferramentas e de uma barra de objetos. É possível ter vários formulários abertos ao mesmo tempo.

### Opções de visualização

You can show or hide several interface elements on the current page of the form:

- **Inherited Form**: Inherited form objects (if there is an [inherited form](forms.md#inherited-forms)).
- **Page 0**: Objects from [page 0](forms.md#form-pages). This option allows you to distinguish between the objects on the form’s current page and those on page 0.
- **Paper**: Borders of the printing page, which are shown as gray lines. This element can only be displayed by default in ["for printing" type](properties_FormProperties.md#form-type) forms.
- **Réguas**: réguas da janela do editor de formulários.
- **Markers**: Output control lines and associated markers that show the limits of the form’s different areas. This element can only be displayed by default in [list forms](properties_FormProperties.md#form-type).
- **Marker Labels**: Marker labels, available only when the output control lines are displayed. This element can only be displayed by default in [list forms](properties_FormProperties.md#form-type).
- **Limites**: Limites do formulário. When this option is selected, the form is displayed in the Form editor as it appears in Application mode. This way you can adjust your form without having to switch to the Application mode in order to see the result.

> > The [**Size Based on**](properties_FormSize.md#size-based-on), [**Hor margin**](properties_FormSize.md#hor-margin) and [**Vert margin**](properties_FormSize.md#vert-margin) settings of the form properties affect the form’s limits. When using these settings, the limits are based on the objects in the form. When you modify the size of an object that is located next to the form’s border, it is modified to reflect that change.

#### Visualização por defeito

When a form is opened in the editor, interface elements are displayed or hidden by default, depending on:

- the **New form default display** options set in the Preferences - unchecked options cannot be displayed by default.
- the current [form type](properties_FormProperties.md#form-type):
  - Marcadores e rótulos de marcadores são sempre exibidos por padrão em formulários lista
  - O papel é apresentado por defeito nos formulários "para impressão".

#### Exibir/ocultar elementos

You can display or hide elements at any moment in the Form editor’s current window by selecting **Display** from the **Form** menu or the Form editor's context menu:

![](../assets/en/FormEditor/showHideElements.png)

### Regras

The rulers on the side and bottom help you position objects in the form. Podem ser [apresentados ou ocultos](#display-options).

Select **Ruler definition...** from the **Form** menu to change measurement units so that the form displays inches, centimeters, or pixels.

### Barra de ferramentas

The toolbar of the Form editor offers a set of tools to manipulate and modify the form. Cada janela tem a sua própria barra de ferramentas.

![](../assets/en/FormEditor/toolbar.png)

A barra de ferramentas contém os seguintes elementos:

| Ícone                                            | Nome                                                      | Descrição                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------ | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](../assets/en/FormEditor/execute.png)         | Executar o formulário                                     | Utilizado para testar a execução do formulário. When you click on this button, 4D opens a new window and displays the form in its context (list of records for a list form and current record page for a detail form). O formulário é executado no processo principal.                                                                                                          |
| ![](../assets/en/FormEditor/selection.png)       | [Ferramenta de selecção](#selecting-objects)              | Permite selecionar, mover e redimensionar os objetos do formulário.<p>Allows selecting, moving and resizing form objects.<strong x-id="1">Note</strong>: When an object of the Text or Group Box type is selected, pressing the <strong x-id="1">Enter</strong> key lets you switch to editing mode.</p>                                                                                                                                                                                                                                                                                    |
| ![](../assets/en/FormEditor/zOrder.png)          | [Ordem de entrada](#selecting-objects)                    | Switches to “Entry order” mode, where it is possible to view and change the current entry order of the form. Note that shields allow viewing the current entry order, while still working in the form.                                                                                                                                                                          |
| ![](../assets/en/FormEditor/moving.png)          | [Deslocamento](#moving-objects)                           | Switches to “Move” mode, where it is possible to reach any part of the form quickly by using drag and drop in the window. O cursor assume a forma de uma mão. Este modo de navegação é particularmente útil ao ampliar o formulário.                                                                                                                                            |
| ![](../assets/en/FormEditor/zoom.png)            | [Zoom](#zoom)                                             | Permite modificar a percentagem de visualização do formulário (100% por padrão). You can switch to “Zoom” mode by clicking on the magnifying glass or by clicking directly on the desired bar. Esta função é descrita em pormenor na secção anterior.                                                                                                                           |
| ![](../assets/en/FormEditor/alignment.png)       | [Alinhamento](#aligning-objects)                          | This button is linked to a menu that allows changing the level of objects in the form. É ativada (ou não) em função dos objetos selecionados.<p>Disponível apenas com CSS Preview None</p>                                                                                                                                                                                                          |
| ![](../assets/en/FormEditor/distribution.png)    | [Distribuição](#distributing-objects)                     | Este botão está ligado a um menu que permite agrupar e desagrupar seleções de objetos no formulário. É ativada (ou não) em função dos objetos selecionados.<p>Disponível apenas com CSS Preview None</p>                                                                                                                                                                                            |
| ![](../assets/en/FormEditor/level.png)           | [Nível](#layering-objects)                                | This button is linked to a menu that allows aligning objects in the form. É ativada (ou não) em função dos objetos selecionados.                                                                                                                                                                                                                                                |
| ![](../assets/en/FormEditor/group.png)           | [Grupo/Ungrupo](#grouping-objects)                        | Este botão está ligado a um menu que permite agrupar e desagrupar seleções de objetos no formulário. É ativada (ou não) em função dos objetos selecionados.                                                                                                                                                                                                                     |
| ![](../assets/en/FormEditor/displyAndPage.png)   | [Visualização e gestão de páginas](forms.html#form-pages) | Esta área permite passar de uma página de formulário para outra e adicionar páginas. Para navegar entre páginas de formulários, clique nos botões de seta, ou clique na área central e escolha a página a exibir a partir do menu que aparece. Se clicar no botão da seta para a direita enquanto é exibida a última página do formulário, 4D permite-lhe adicionar uma página. |
| ![](../assets/en/FormEditor/cssPreviewicon.png)  | [Pré-visualização CSS](#css-preview)                      | Este botão é utilizado para seleccionar o Modo CSS a utilizar.                                                                                                                                                                                                                                                                                                                  |
| ![](../assets/en/FormEditor/views.png)           | [Gestão da vistas](#views)                                | Este botão apresenta ou oculta a paleta de vistas. Esta função é detalhada em Utilização de vistas de objeto.                                                                                                                                                                                                                                                                   |
| ![](../assets/en/FormEditor/shields2.png)        | [Mostrando escudos](#shields)                             | Each click on this button causes the successive display of each type of form shield. The button is also linked to a menu that allows directly selecting the type of shield to display.                                                                                                                                                                                          |
| ![](../assets/en/FormEditor/library.png)         | [Librería de objetos preconfigurada](objectLibrary.html)  | This button displays the preconfigured object library that provides numerous objects with certain properties that have been predefined.                                                                                                                                                                                                                                         |
| ![](../assets/en/FormEditor/listBoxBuilder1.png) | [Criação de list box](#list-box-builder)                  | Este botão cria list boxes entity selection.                                                                                                                                                                                                                                                                                                                                    |
| ![](../assets/en/FormEditor/insertFields.png)    | [Inserir campos](#insert-fields)                          | This button inserts all fields (except object and blob type fields) of the form table in the form, along with their labels and with respect to interface standards.                                                                                                                                                                                                             |


### Barra de objetos

The object bar contains all the active and inactive objects that can be used in 4D forms. Alguns objectos estão agrupados por temas. Cada tema inclui várias alternativas que pode escolher entre elas. Quando a barra de objectos tem o foco, é possível seleccionar os botões usando as teclas do teclado. The following table describes the object groups available and their associated shortcut key.

| Botão                                      | Agrupar                                                                                                                                                                                                                                                   | Chave |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:-----:|
| ![](../assets/en/FormEditor/text.png)      | [Text](FormObjects/text.md) / [Group Box](FormObjects/groupBox.md)                                                                                                                                                                                        |   T   |
| ![](../assets/en/FormEditor/input.png)     | [Entrada](FormObjects/input_overview.md)                                                                                                                                                                                                                  |   F   |
| ![](../assets/en/FormEditor/listbox.png)   | [Lista hierárquica](FormObjects/list_overview.md) / [List Box](FormObjects/listbox_overview.md)                                                                                                                                                           |   L   |
| ![](../assets/en/FormEditor/combo.png)     | [Combo Box](FormObjects/comboBox_overview.md) / [Drop-down List](FormObjects/dropdownList_Overview.md) / [Picture Pop-up Menu](FormObjects/picturePopupMenu_overview.md)                                                                                  |   P   |
| ![](../assets/en/FormEditor/button.png)    | [Button](FormObjects/button_overview.md) / [Picture Button](FormObjects/pictureButton_overview.md) / [Button Grid](FormObjects/buttonGrid_overview.md)                                                                                                    |   B   |
| ![](../assets/en/FormEditor/radio.png)     | [Botão rádio](FormObjects/radio_overview.md)                                                                                                                                                                                                              |   R   |
| ![](../assets/en/FormEditor/checkbox.png)  | [Caixa de selecção](FormObjects/checkbox_overview.md)                                                                                                                                                                                                     |   C   |
| ![](../assets/en/FormEditor/indicator.png) | [Progress Indicator](FormObjects/progressIndicator.md) / [Ruler](FormObjects/ruler.md) / [Stepper](FormObjects/stepper.md) / [Spinner](FormObjects/spinner.md)                                                                                            |   I   |
| ![](../assets/en/FormEditor/rectangle.png) | [Rectangle](FormObjects/shapes_overview.md#rectangle) / [Line](FormObjects/shapes_overview.md#line) / [Oval](FormObjects/shapes_overview.md#oval)                                                                                                         |   S   |
| ![](../assets/en/FormEditor/splitter.png)  | [Splitter](FormObjects/splitters.md) / [Tab Control](FormObjects/tabControl.md)                                                                                                                                                                           |   D   |
| ![](../assets/en/FormEditor/plugin.png)    | [Plug-in Area](FormObjects/pluginArea_overview.md) / [Subform](FormObjects/subform_overview.md) / [Web Area](FormObjects/webArea_overview.md) / [4D Write Pro](FormObjects/writeProArea_overview.md) / [4D View Pro](FormObjects/viewProArea_overview.md) |   X   |

To draw an object type, select the corresponding button and then trace the object in the form. Após criar um objeto, você pode modificar seu tipo utilizando a Lista de Propriedades. Hold down the **Shift** key as you draw to constrain the object to a regular shape. Lines are constrained to horizontal, 45°, or vertical, rectangles are constrained to squares, and ovals are constrained to circles.

The current variant of the theme is the object that will be inserted in the form. Ao clicar no lado direito de um botão, você acessa o menu de variantes:

![](../assets/en/FormEditor/objectBar.png)

You can click twice on the button so that it remains selected even after you have traced an object in the form (continual selection). This function makes creating several successive objects of the same type easier. Para cancelar uma seleção contínua, clique noutro objeto ou ferramenta.

### Lista de propriedades

Both forms and form objects have properties that control access to the form, the appearance of the form, and the behavior of the form when it is used. Form properties include, for example, the form’s name, its menu bar, and its size. Object Properties include, for example, an object’s name, its dimensions, its background color, and its font.

You can display and modify form and object properties using the Property List. It displays either form or objects properties depending on what you select in the editor window.

To display/hide the Property List, choose **Property List** from the **Form** menu or from the context menu of the Form editor. You can also display it by double-clicking in an empty area of the form.

#### Atalhos

Pode utilizar os seguintes atalhos na Lista de Propriedades:

- **Tecla de seta**s ↑ ↓: utilizada para ir de uma célula para outra.
- **Teclas de seta** ← →: utilizadas para expandir/recolher temas ou entrar no modo de edição.
- **PgUp** and **PgDn**: Used to scroll the Property List contents.
- **Home** and **End**: Used to scroll the Property List so that the first or last cell is displayed.
- **Ctrl+click** (Windows) or **Command+click** (macOS) on an event: Used to select/deselect every event in the list, according to the initial state of the event on which you clicked.
- **Ctrl+click** (Windows) or **Command+click** (macOS) on a theme label: Used to Collapse/Expand every theme in the list.
- **Ctrl+click** (Windows) or **Command+click** (macOS) on a property value displayed in **bold**: Resets the property to its default.


## Manipulação de objetos formulário

### Adicionar objectos

É possível adicionar objetos a formulários de várias maneiras:

- By drawing the object directly in the form after selecting its type in the object bar (see [Using the object bar](#using-the-object-bar))
- Arrastando e soltando o objeto da barra de objetos
- By drag-and-drop or copy-paste operations on an object selected from the preconfigured [object library](objectLibrary.md),
- Ao arrastar e largar um objeto de outro formulário,
- By dragging and dropping an object from the Explorer (fields) or from other editors in the Design environment (lists, pictures, etc.)

Once the object is placed in the form, you can modify its characteristics using the Form editor.

É possível trabalhar com dois tipos de objetos nos formulários:

- **Static objects** (lines, frames, background pictures, etc.): These objects are generally used for setting the appearance of the form and its labels as well as for the graphic interface. Estão disponíveis na barra de objetos do editor de formulários. You can also set their graphic attributes (size, color, font, etc.) and their resizing properties using the Property List. Os objetos estáticos não têm variáveis associadas como os objetos ativos. No entanto, é possível inserir objetos dinâmicos em objetos estáticos.

- **Active objects**: These objects perform tasks or functions in the interface and can take many forms: fields, buttons, scrollable lists, etc. Each active object is associated with either a field or a variable. Cada objeto ativo é associado com um campo ou uma variável.

### Selecção de objectos

Before you can perform any operation on an object (such as changing a line width or font), you need to select the object that you want to modify.

Para seleccionar um objecto utilizando a barra de ferramentas:

1. Clique na ferramenta Seta na barra de ferramentas.<p>![](../assets/en/FormEditor/selection.png)</p>

<p>Click the Arrow tool  in the toolbar.<img src="../assets/en/FormEditor/selection.png" alt="" /> When you move the pointer into the form area, it becomes a standard arrow-shaped pointer.</p>.

2. Clique no objecto que deseja selecionar. As pegas de redimensionamento identificam o objeto selecionado.<p>../assets/en/FormEditor/selectResize.png</p>

Para selecionar um objecto utilizando a Lista de Propriedades:

1. Escolher o nome do objecto na lista pendente da Lista de Objectos localizada no topo da Lista de Propriedades. Usando estes dois métodos, pode seleccionar um objecto que esteja escondido por outros objectos ou localizado fora da área visível da janela actual. Para desmarcar um objecto, clicar fora dos limites do objecto ou **Shift+click** o objecto.
> > > It is also possible to select objects by double-clicking them in the result window of ""Find in design" operation.

### Selecção de múltiplos objectos

Pode querer realizar a mesma operação em mais de um objecto de forma - por exemplo, para mover os objectos, alinhá-los, ou alterar a sua aparência. 4D permite-lhe selecionar vários objectos ao mesmo tempo. Há várias maneiras de seleccionar vários objectos:

- Escolher **Seleccionar Todos** a partir do menu Editar para seleccionar todos os objectos.
- Right-click on the object and choose the **Select Similar Objects** command in the context menu.
- Hold down the **Shift** key and click the objects you want to select.
- Start at a location outside the group of objects you want to select and drag a marquee (sometimes called a selection rectangle) around the objects. When you release the mouse button, if any part of an object lies within or touches the boundaries of the selection rectangle, that object is selected.
- Hold down the **Alt** key (Windows) or the **Option** key (macOS) and draw a marquee. Os objetos que estiverem completamente no retângulo serão selecionados.

A figura abaixo mostra um marque sendo desenhado para selecionar dois objetos:

![](../assets/en/FormEditor/selectMultiple.png)

To deselect an object that is part of a set of selected objects, hold down the **Shift** key and click the object. Os outros objetos permanecem selecionados. To deselect all the selected objects, click outside the boundaries of all the objects.

### Duplicação de objectos

Pode duplicar qualquer objecto na forma, incluindo objectos activos. Copies of active objects retain all the properties of the original, including name, type, standard action, display format, and object method.

You can duplicate an object directly using the Duplicate tool in the Tools palette or use the Duplicate Many dialog box to duplicate an object more than once. Also, using this dialog box, you can set the distance between two copies.

Para duplicar um ou mais objectos:

1. Seleccione os objectos que pretende agrupar.
2. Escolher **Duplicar** a partir do menu **Editar**. 4D cria uma cópia de cada objecto selecionado e coloca a cópia em frente e ligeiramente para o lado do original.
3. Deslocar a cópia para a localização pretendida. If you choose the Duplicate menu item again, 4D creates another copy of each object and moves it the exact same distance and direction from the first copy. If you need to distribute copies of the object along a line, you should use the following procedure. Duplicate the original object, move the copy to another location in the form, and then duplicate the copy. The second copy is automatically placed in the same relation to the first copy as the first copy was in relation to the original object. As cópias subsequentes também são colocadas na mesma relação com seus originais. A figura abaixo mostra como funciona esse posicionamento relativo das cópias:

![](../assets/en/FormEditor/duplicateObjects.png)

#### Duplicar muitos

A caixa de diálogo "Duplicar muitos" aparece quando se seleciona um ou mais objetos e se escolhe o comando **Duplicar Muitos...** a partir do menu **Objeto**.

![](../assets/en/FormEditor/duplcateMany.png)

- Na área superior, introduza o número de colunas e linhas (linhas) de objectos que pretende obter. Por exemplo, se quiser três colunas e duas linhas de objectos, introduza 3 na área de Coluna(s) e 2 na área de Linha(s). Se quiser três novas cópias horizontais de um objecto, introduza 4 na área de Coluna(s) e deixe o valor por defeito, 1, na área de Linha(s).

- Para linhas e colunas, defina o offset que deseja deixar entre cada cópia. O valor deve ser expresso em pontos. It will be applied to each copy, or copies, in relation to the original object. For example, if you want to leave a vertical offset of 20 points between each object and the height of the source object is 50 points, enter 70 in the column’s “Offset” area.

- Se desejar criar uma matriz de variáveis, seleccione a opção **Number Variables** e seleccione a direcção em que as variáveis devem ser numeradas, seja por linha(s) ou por coluna(s). Esta opção só está activa quando o objecto seleccionado é uma variável. For more information on this option, refer to **Duplicating on a matrix** in the *Design Reference*.

### Mover objetos

You can move any graphic or active object in the form including fields and objects created with a template. Ao mover um objeto, existem as seguintes opções:

- Mova o objeto arrastando-o,
- Mova o objeto um píxel de cada vez utilizando as teclas de seta,
- Mova o objeto em etapas usando as teclas de seta (etapas de 20 píxeis por padrão),

Ao começar a arrastar o objeto selecionado, seus manipuladores desaparecem. 4D displays markers that show the location of the object’s boundaries in the rulers so that you can place the object exactly where you want it. Be careful not to drag a handle. Dragging a handle resizes the object. You can press the **Shift** key to carry out the move with a constraint.

When the [Magnetic Grid](#using-the-magnetic-grid) is on, objects are moved in stages indicating noticeable locations.

Para mover um objeto um píxel de cada vez:

- Select the object or objects and use the arrow keys on the keyboard to move the object. Each time you press an arrow key, the object moves one pixel in the direction of the arrow.

Para mover um objeto em passos:

- Select the object or objects you want to move  and hold down the **Shift** key and use the arrow keys to move the object by steps. Por padrão, os passos são de 20 pixéis de cada vez. Pode alterar este valor na página Formulários das Preferências.

### Agrupamento de objectos

4D lets you group objects so that you can select, move, and modify the group as a single object. Objects that are grouped retain their position in relation to each other. You would typically group a field and its label, an invisible button and its icon, and so forth.

When you resize a group, all the objects in the group are resized proportionally (except text areas, which are resized in steps according to their font sizes.

Você pode desagrupar um grupo de objetos a qualquer momento e tratá-los novamente como objetos independentes.

Um objecto activo que tenha sido agrupado deve ser desarticulado antes de se poder aceder às suas propriedades ou método. However, it is possible to select an object belonging to a group without degrouping the set: to do this, **Ctrl+click** (Windows) or **Command+click** (macOS) on the object (the group must be selected beforehand).

O agrupamento só afeta os objetos no editor de formulários. Quando o formulário é executado, todos os objetos agrupados agem como se não estivessem agrupados.
> It is not possible to group objects belonging to different views and only those objects belonging to the current view can be grouped (see [Views](#views) ).

Para agrupar objectos:

1. Selecione o objecto agrupado que pretende desagrupar.
2. Selecione **Grupo** no menu Objeto. OR Click the Group button  in the toolbar of the Form editor:<p>![](../assets/en/FormEditor/group.png)</p>
Choose **Group** from the Object menu.OR Click the Group button  in the toolbar of the Form editor:![](../assets/en/FormEditor/group.png) 4D marks the boundary of the newly grouped objects with handles. No handles mark the boundary of any of the individual objects within the group. Now, when you modify the grouped object, you change all the objects that make up the group.

Para desagrupar objetos:

1. Seleccione o objecto ou objectos que pretende duplicar.
2. Choose **Ungroup** from the **Object** menu.ORClick the **Ungroup** button (variant of the **Group** button) in the toolbar of the Form editor.<p>OU</p><p>Click the **Ungroup** button (variant of the **Group** button) in the toolbar of the Form editor.</p><p>If <strong x-id="1">Ungroup</strong> is dimmed, this means that the selected object is already separated into its simplest form.4D marks the boundaries of the individual objects with handles.</p>4D marca os limites dos objetos individuais com alças.

### Alinhamento de objetos

Pode-se alinhar objectos uns com os outros ou utilizar uma grelha invisível no formulário.

- When you align one object to another, you can align it to the top, bottom, side, or horizontal or vertical center of the other object. You can directly align a selection of objects using the alignment tools or apply more advanced alignment settings using the Alignment Assistant. The latter option allows you, for example, to set the object that will be used as the position reference and to preview the alignment in the form before applying it.
- When you use the invisible grid, each object can be aligned manually with others based on “noticeable” positions which are depicted with dotted lines that appear when the object being moved approaches other objects.

#### Usando as ferramentas de alinhamento instantâneo

As ferramentas de alinhamento na barra de ferramentas e no submenu Alinhar do menu Objecto permitem alinhar rapidamente os objectos seleccionados.

![](../assets/en/FormEditor/alignmentMenu.png)

When 4D aligns objects, it leaves one selected object in place and aligns the remaining objects to that one. Este objecto é a "âncora." Utiliza o objecto que se encontra mais afastado na direção do alinhamento como âncora e alinha os outros objetos com esse objecto. Por exemplo, se quiser realizar um alinhamento correcto num conjunto de objectos, o objecto mais à direita será utilizado como âncora. The figure below shows objects with no alignment, "aligned left", "aligned horizontally by centers", and "aligned right":

![](../assets/en/FormEditor/alignmentTools.png)

#### Usando o assistente de alinhamento

The Alignment Assistant allows you to perform any type of alignment and/or distribution of objects.

![](../assets/en/FormEditor/alignmentAssistant.png)

To display this dialog box, select the objects you want to align then choose the **Alignment** command from the **Align** submenu in the **Object** menu or from the context menu of the editor.

- In the “Left/Right Alignment” and/or “Top/Bottom Alignment” areas, click the icon that corresponds to the alignment you want to perform.<p>A área de exemplo apresenta os resultados da sua seleção.</p>

- To perform an alignment that uses the standard anchor scheme, click **Preview** or **Apply**. In this case 4D uses the object that is the furthest in the alignment’s direction as the anchor and aligns the other objects to that object. Por exemplo, se quiser realizar um alinhamento correcto num conjunto de objectos, o objecto mais à direita será utilizado como âncora. For instance, if you want to perform a right alignment on a set of objects, the rightmost object will be used as the anchor.OR:To align objects to a specific object, select the **Align on** option and select the object to which you want the other objects to be aligned from the object list.<p>To align objects to a specific object, select the **Align on** option and select the object to which you want the other objects to be aligned from the object list. Neste caso, a posição do objeto de referência não será alterada.</p>

Pode pré-visualizar os resultados do alinhamento clicando no botão **Pré-visualização**. Os objetos são então alinhados no editor de formulários, mas como a caixa de diálogo não desaparece, ainda é possível cancelar ou aplicar o alinhamento.
> Esta caixa de diálogo permite-lhe alinhar e distribuir objetos numa única operação. Para mais informações sobre como distribuir objetos, consultar [Distribuir objetos](#distributing-objects).

#### Utilização da Rede Magnética

O editor de formulários fornece uma grelha magnética virtual que pode ajudá-lo a colocar e alinhar objetos num formulário. O alinhamento magnético dos objetos baseia-se na sua posição em relação uns aos outros. A grelha magnética só pode ser utilizada quando pelo menos dois objetos estão presentes no formulário.

Isso funciona da seguinte maneira: quando se move um objeto no formulário, 4D indica possíveis localizações para este objeto baseado em alinhamentos notáveis com outros objetos do formulário. É estabelecido um alinhamento perceptível cada vez que isso acontece:

- Horizontalmente, os bordos ou centros de dois objetos coincidem,
- Verticalmente, as arestas de dois objectos coincidem.

Quando isso acontece, 4D coloca o objeto no local e mostra uma linha vermelha indicando o alinhamento perceptível considerado:

![](../assets/en/FormEditor/magneticGrid1.png)

No que diz respeito à distribuição dos objetos, 4D propõe uma distância baseada em normas de interface. Tal como no caso do alinhamento magnético, as linhas vermelhas indicam as diferenças visíveis quando estas são atingidas.

![](../assets/en/FormEditor/magneticGrid2.png)

Esta operação aplica-se a todos os tipos de objetos dos formulários. A grelha magnética pode ser ativada ou desactivada em qualquer altura utilizando o comando **Ativar a grade magnética** no menu **Formulário** ou no menu contextual do editor. It is also possible to set the activation of this feature by default on the **Preferences** > **Forms** page (**Activate auto alignment by default** option). You can manually activate or deactivate the magnetic grid when an object is selected by pressing the **Ctrl** (Windows) or **Control** (macOS) key .
> O magnetismo também leva à observação de etapas ao redimensionar objetos manualmente.

### Distribuição de objectos

You can distribute objects so that they are set out with an equal amount of space between them. To do this, you can distribute objects using either the Distribute tools in the Tools palette or the Alignment Assistant. Este último permite-lhe alinhar e distribuir objetos numa única operação.
> When the [Magnetic Grid](#using-the-magnetic-grid) is on, a visual guide is also provided for distribution when an object is moved manually.

Para distribuir objetos com igual espaçamento:

1. Selecione três ou mais objetos e clique na ferramenta Distribuir pretendida.

2. In the toolbar, click on the distribution tool that corresponds to the distribution you want to apply.<p>![](../assets/en/FormEditor/distributionTool.png)</p> OU<p>Select a distribution menu command from the **Align** submenu in the **Object** menu or from the context menu of the editor.</p>In the toolbar, click on the distribution tool that corresponds to the distribution you want to apply.![](../assets/en/FormEditor/distributionTool.png)ORSelect a distribution menu command from the **Align** submenu in the **Object** menu or from the context menu of the editor.4D distributes the objects accordingly. Objects are distributed using the distance to their centers and the largest distance between two consecutive objects is used as a reference.

Para distribuir objetos utilizando a caixa de diálogo Alinhar e distribuir:

1. Seleccione os objectos que pretende distribuir.

2. Choose the **Alignment** command from the **Align** submenu in the **Object** menu or from the context menu of the editor. Aparece a seguinte caixa de diálogo:![](../assets/en/FormEditor/alignmentAssistant.png)

3. In the Left/Right Alignment and/or Top/Bottom Alignment areas, click the standard distribution icon: ![](../assets/en/FormEditor/horizontalDistribution.png)(Standard horizontal distribution icon)The example area displays the results of your selection.![](../assets/en/FormEditor/horizontalDistribution.png) <p>(Ícone de distribuição horizontal standard)</p>A área de exemplo apresenta os resultados da sua seleção.

4. To perform a distribution that uses the standard scheme, click **Preview** or *Apply*.<p>In this case 4D will perform a standard distribution, so that the objects are set out with an equal amount of space between them.OR:To execute a specific distribution, select the <strong x-id="1">Distribute</strong> option (for example if you want to distribute the objects based on the distance to their right side).</p>For instance, if you want to perform a right alignment on a set of objects, the rightmost object will be used as the anchor.OR:To align objects to a specific object, select the **Align on** option and select the object to which you want the other objects to be aligned from the object list.<p>To execute a specific distribution, select the **Distribute** option (for example if you want to distribute the objects based on the distance to their right side). Esta opção funciona como um interruptor. If the Distribute check box is selected, the icons located below it perform a different function:</p>

- Horizontally, the icons correspond to the following distributions: evenly with respect to left sides, centers (hor.) and right sides of the selected objects.
- Vertically, the icons correspond to the following distributions: evenly with respect to top edges, centers (vert.) and bottom edges of the selected objects.

 You can preview the actual result of your settings by clicking on the **Preview** button: the operation is carried out in the Form editor but the dialog box stays in the foreground. You can then **Cancel** or **Apply** the modifications.
> Esta caixa de diálogo permite-lhe combinar o alinhamento e a distribuição de objetos. For more information about alignment, refer to [Aligning objects](#aligning-objects).

### Gerenciar os planos dos objetos

You will sometimes have to rearrange objects that are obstructing your view of other objects in the form. For example, you may have a graphic that you want to appear behind the fields in a form. 4D provides four menu items, **Move to Back**, **Move to Front**, **Up One Level** and **Down One Level** that let you “layer” objects on the form. These layers also determine the default entry order (see Modifying data entry order). A figura abaixo mostra objetos à frente e atrás de outros objetos:

![](../assets/en/FormEditor/layering.png)

Para mover um objeto para outro nível, selecione-o e escolha:

- One of the **Move to Back**, **Move to Front**, **Up One Level** and **Down One Level** commands of the Object menu,
- One of the commands in the **Level>** submenu in the context menu of the editor,
- One of the commands associated with the level management button of the toolbar.

![](../assets/en/FormEditor/level2.png)
> When several objects are superimposed, the **Ctrl+Shift+click** / **Command+Shift+click** shortcut can be used to select each object successively by going down a layer with each click.

When ordering different levels, 4D always goes from the background to the foreground. As a result, the previous level moves the selection of objects one level towards the background. The next level moves the selection one level towards the foreground of the form.

### Ordem de introdução de dados

The data entry order is the order in which fields, subforms, and other active objects are selected as you hit the **Tab** or the **Carriage return** key in an input form. It is possible to move through the form in the opposite direction (reverse data entry order) by pressing the **Shift+Tab** or **Shift+Carriage** return keys.

> You can change the entry order at runtime using the `FORM SET ENTRY ORDER` and `FORM GET ENTRY ORDER` commands.

Every object that supports the focusable property is included in the data entry order by default.

Setting the entry order for a JSON form is done with the [`entryOrder`](properties_JSONref.md) property.

If you don’t specify a custom entry order, by default 4D uses the layering of the objects to determine the entry order in the direction “background towards foreground.” The standard entry order thus corresponds to the order in which the objects were created in the form.

Em alguns formulários, é necessária uma ordem de entrada de dados personalizada. Below, for example, additional fields related to the address have been added after the creation of the form. The resulting standard entry order thus becomes illogical and forces the user to enter the information in an awkward manner:

![](../assets/en/FormEditor/entryOrder1.png)

In cases such as this, a custom data entry order allows you to enter the information in a more logical order:

![](../assets/en/FormEditor/entryOrder2.png)

#### Visualização e alteração da ordem de introdução de dados

You can view the current entry order either using the “Entry order” shields, or by using the “Entry order” mode. No entanto, você só pode modificar a ordem de entrada usando o modo “Ordem de entrada”.

This paragraph describes viewing and modifying the entry order using the “Entry order” mode. For more information about viewing the entry order using shields, refer to [Using shields](#using-shields).

Para ver ou alterar a ordem de entrada:

1. When you are satisfied with the data entry order, click any unselected tool in the toolbar or choose **Entry Order** from the **Form** menu.4D returns to normal operation of the Form editor.<p>![](../assets/en/FormEditor/zOrder.png)</p>

    Choose **Entry Order** from the **Form** menu or click on the Entry Order button in the toolbar of the window:![](../assets/en/FormEditor/zOrder.png)The pointer turns into an entry order pointer and 4D draws a line in the form showing the order in which it selects objects during data entry. A visualização e alteração da ordem de introdução de dados são as únicas acções que pode realizar até clicar em qualquer ferramenta na paleta Ferramentas.

2. To change the data entry order, position the pointer on an object in the form and, while holding down the mouse button, drag the pointer to the object you want next in the data entry order.![](../assets/en/FormEditor/entryOrder3.png)4D will adjust the entry order accordingly.<p>![](../assets/en/FormEditor/entryOrder3.png)</p>4D irá ajustar a ordem de entrada em conformidade.

3. Repita a etapa 2 tantas vezes quantas forem necessárias para definir a ordem de introdução de dados que desejar.

4. Quando estiver satisfeito com a ordem de entrada de dados, clique em qualquer ferramenta não selecionada na barra de ferramentas ou escolha **Ordem de entrada** a partir do menu **Formulário**. 4D regressa ao funcionamento normal do editor de formulários.

> Somente a ordem de entrada da página atual do formulário é exibida. If the form contains enterable objects on page 0 or coming from an inherited form, the default entry order is as follows: Objects from page 0 of the inherited form > Objects from page 1 of the inherited form > Objects from page 0 of the open form > Objects from the current page of the open form.

#### Utilização de um grupo de introdução de dados

While you are changing the data entry order, you can select a group of objects in a form so that the standard data entry order applies to the objects within the group. This allows you to easily set the data entry order on forms in which fields are separated into groups or columns.

Para criar um grupo de entrada de dados:

1. Escolha **Ordem de entrada** a partir do menu *Formulário* ou clique no botão na barra de ferramentas.
2. Desenhe uma seleção ao redor dos objetos que você deseja agrupar para entrada de dados.

When you release the mouse button, the objects enclosed or touched by the rectangle follow the standard data entry order. A ordem de entrada de dados para os restantes objetos ajustam-se conforme necessário.

#### Excluir um objeto da ordem de entrada

Por defeito, todos os objetos que suportam a propriedade focusable são incluídos na ordem de entrada. Para excluir um objeto da ordem de entrada:

1. Selecionar o modo ordem de entrada e, em seguida

2. **Maiúsculas-clic** no objeto

3. **right-click** on the object and select **Remove from entry order** option from the context menu

## Pré-visualização CSS

The Form editor allows you to view your forms with or without applied CSS values.

When [style sheets](createStylesheet.md) have been defined, forms (including inherited forms and subforms) are opened in the CSS Preview mode for your operating system by default.

### Selecção do modo de pré-visualização do CSS

A barra de ferramentas do editor de formulários fornece um botão CSS para a visualização de objectos com estilo:

![](../assets/en/FormEditor/cssToolbar.png)

Seleccione um dos seguintes modos de pré-visualização a partir do menu:

| Ícone barra de ferramentas              | Modo de pré-visualização CSS | Descrição                                                                                                                         |
| --------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ![](../assets/en/FormEditor/cssNo.png)  | Nenhum                       | No CSS values are applied in the form and no CSS values or icons displayed in the Property List.                                  |
| ![](../assets/en/FormEditor/cssWin.png) | Windows                      | Os valores CSS para a plataforma Windows são aplicados no formulário. Valores CSS e ícones apresentados na Lista de Propriedades. |
| ![](../assets/en/FormEditor/cssMac.png) | macOS                        | Os valores CSS para a plataforma macOS são aplicados no formulário. Valores CSS e ícones apresentados na Lista de Propriedades.   |
> If a font size too large for an object is defined in a style sheet or JSON, the object will automatically be rendered to accommodate the font, however the size of the object will not be changed.

The CSS preview mode reflects the priority order applied to style sheets vs JSON attributes as defined in the [JSON vs Style Sheet](stylesheets.html#json-vs-style-sheet) section.

Once a CSS preview mode is selected, objects are automatically displayed with the styles defined in a style sheet (if any).
> When copying or duplicating objects, only the CSS references (if any) and the JSON values are copied.

### Suporte CSS na lista de propriedades

In CSS Preview mode, if the value of an attribute has been defined in a style sheet, the attribute's name will appear with a CSS icon displayed next to it in the Property List. Por exemplo, os valores dos atributos definidos nesta folha de estilos:

```4d
.myButton {
font-family: comic sans;
font-size: 14;
stroke: #800080;
}
```

são apresentados com um ícone CSS na Lista de Propriedades:

![](../assets/en/FormEditor/cssPpropList.png)

An attribute value defined in a style sheet can be overridden in the JSON form description (except if the CSS includes the `!important` declaration, see below). In this case, the Property List displays the JSON form value in **bold**. You can reset the value to its style sheet definition with the **Ctrl + click** (Windows) or **Command + click** (macOs) shortcuts.
> If an attribute has been defined with the `!important` declaration for a group, an object within a group, or any object within a selection of multiple objects, that attribute value is locked and cannot be changed in the Property List.

#### Lista de propriedades Ícones CSS

| Ícone                                         | Descrição                                                                                                                                                          |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](../assets/en/FormEditor/cssIcon.png)      | Indica que um valor de atributo foi definido em uma folha de estilo                                                                                                |
| ![](../assets/en/FormEditor/cssImportant.png) | Indicates that an attribute value has been defined in a style sheet with the `!important` declaration                                                              |
| ![](../assets/en/FormEditor/cssIconMixed.png) | Displayed when an attribute value defined in a style sheet for at least one item in a group or a selection of multiple objects is different from the other objects |

## Criação de list box

You can create new entity selection list boxes quickly with the **List box builder**. The new list box can be used immediately or it can be edited via the Form Editor.

The List box builder lets you create and fill entity selection list boxes in a few simple operations.

### Usando o gerador de list box

1. Na barra de ferramentas do Editor de formulários, clique no ícone do construtor de List box:

 ![](../assets/en/FormEditor/listboxBuilderIcon.png)

 O gerador do list box é exibido:

 ![](../assets/en/FormEditor/listboxBuilder.png)

2. Selecione uma tabela na lista suspensa **Table**:

 ![](../assets/en/FormEditor/listboxBuilderTable.png)

3. Select the fields for the list box in the **Fields** area:

 ![](../assets/en/FormEditor/listboxBuilderFields.png)

 Por padrão, todos os campos são selecionados. You can select or deselect fields individually or use **Ctrl+click** (Windows) or **Cmd+click** (macOS) to select or deselect them all at once.

 Você pode alterar a ordem dos campos arrastando-os e soltando-os.

4. The expression to fill the list box's rows from the entity selection is prefilled:

 ![](../assets/en/FormEditor/listboxBuilderExpression.png)

 Esta expressão pode ser alterada se necessário.

5. Clicking on the **Copy** button will copy the expression for loading all records into memory:

 ![](../assets/en/FormEditor/listboxBuilderCode.png)

6. Click the the **Build widget** button to create the list box.

 ![](../assets/en/FormEditor/listboxBuilderBuild.png)

O list box final:

![](../assets/en/FormEditor/listboxBuilderListbox.png)


## Inserir campos

The **Insert fields** button inserts all fields (except object and blob type fields) of the form table in the form, along with their labels and with respect to interface standards. Esse assistente é um atalho para projetar formulários básicos de entrada ou formulários lista.

The **Insert fields** button is only available with table forms.

O desenho do formulário resultante depende do formulário:

- **Detail form**: clicking on the **Insert fields** button generates a form with a page design:

![](../assets/en/FormEditor/insertFields2.png)

- **List form**: clicking on the **Insert fields** button generates a list form design with fields organized on a single line and area markers:

![](../assets/en/FormEditor/insertFields3.png)




## Escudos

The 4D Form Editor uses shields to make viewing object properties easier. Pode encontrá-los na barra de ferramentas do formulário:

![](../assets/en/FormEditor/shields.png)

This function works as follows: Each shield is associated with a property (for example, **Views**, which means the object “is in the current view”). When you activate a shield, 4D displays a small icon (shield) in the upper left of each object of the form where the property is applied.

![](../assets/en/FormEditor/shield.png)

### Usando escudos

To activate a shield, click the *Shield* icon from the toolbar until the desired shield is selected. You can also click on the right side of the button and select the type of shield to display directly in the associated menu:

If you don't want to display shields, select **No Shields** in the selection menu.
> You can set which shields to display by default on the Forms Page of the application Preferences.

### Descrição do badge

Segue-se uma descrição de cada tipo de escudo:

| Ícone                                           | Nome                                | É exibido ...                                                                                                                        |
| ----------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| ![](../assets/en/FormEditor/objectMethod.png)   | Método objecto                      | Para objectos com um método objeto associado                                                                                         |
| ![](../assets/en/FormEditor/standardAction.png) | Acção padrão                        | Para objectos com uma acção padrão associada                                                                                         |
| ![](../assets/en/FormEditor/resizing.png)       | Redimensionamento                   | Para objectos com pelo menos uma propriedade de redimensionamento, indica a combinação de propriedades actuais                       |
| ![](../assets/en/FormEditor/entryOrder.png)     | Ordem de entrada                    | Para objectos enterráveis, indica o número da ordem de entrada                                                                       |
| ![](../assets/en/FormEditor/viewNumber.png)     | Vista actual                        | Para todos os objectos na vista actual                                                                                               |
| ![](../assets/en/FormEditor/cssShield.png)      | [Folha de estilo](stylesheets.html) | Para objectos com um ou mais valores de atributo anulados por uma folha de estilo.                                                   |
| ![](../assets/en/FormEditor/filter.png)         | Filtro                              | Para objectos enterráveis com um filtro de entrada associado                                                                         |
| ![](../assets/en/FormEditor/helpTip.png)        | Dica de Ajuda                       | Para objetos com uma mensagem de ajuda associada                                                                                     |
| ![](../assets/en/FormEditor/localized.png)      | Localizado                          | Para objetos cuja etiqueta possui uma referência (etiqueta começando com “:”). A referência pode ser do tipo recurso (STR#) ou XLIFF |
| ![](../assets/en/FormEditor/noShields.png)      | Sem Escudos                         | Nenhum escudo aparece                                                                                                                |

## Vistas

The 4D Form Editor enables you to build complex forms by distributing form objects among separate views that can then be hidden or shown as needed.

For example, you can distribute objects according to type (fields, variables, static objects, etc.). Any type of form object, including subforms and plug-in areas, can be included in views.

Não há limite para o número de vistas por formulário. Pode criar tantas vistas diferentes quantas as necessárias. Além disso, cada vista pode ser apresentada, ocultada e/ou bloqueada.

A gestão das vistas é efetuada através da paleta de vistas.

![](../assets/en/FormEditor/viewEditor.png)

### Aceder à paleta de vistas

Existem três formas de aceder à paleta de vistas:

- **Toolbar**: Click on the Views icon in the Form Editor toolbar. (This icon appears gray when at least one object belongs to a view other than the default view.)

 |                   Vista por defeito apenas                   |                 Com vistas adicionais                  |
 |:------------------------------------------------------------:|:------------------------------------------------------:|
 | ![](../assets/en/FormEditor/icon.png "Nenhuma vista em uso") | ![](../assets/en/FormEditor/icon2.png "Vistas em uso") |

- **Context menu** (form or object): Right-click anywhere in the Form Editor or an object, and select **Current View**

 ![](../assets/en/FormEditor/contextMenu.png)

The current view is indicated with a check mark (*e.g.*, "Work Address" in the image above)

- **Form menu**: Click on the **Form** menu and select **View List**

![](../assets/en/FormEditor/formMenu.png)

### Antes de começar

Aqui estão algumas coisas importantes que você deve saber antes de começar a trabalhar com vistas:

- **Context of use**: Views are a purely graphic tool which can only be used in the Form Editor; you cannot access views programmatically or in the Application environment.

- **Views and pages**: Objects of the same view can belong to different form pages; only objects of the current page (and of page 0 if it is visible) can be displayed, regardless of the view configuration.

- **Views and levels**: Views are independent of object levels; there is no display hierarchy among different views.

- **Views and groups**: Only objects belonging to the current view can be grouped.

- **Current and Default** views: The Default view is the first view of a form and cannot be deleted; the Current view is the view that is being edited and the name is displayed in bold text.

### Gestão da vistas

#### Criar vistas


Qualquer objecto criado num formulário é colocado na primeira vista ("Vista 1") do formulário. A primeira vista é **sempre** a vista por defeito, indicada por (Default) após o nome. The view's name can be changed (see [Renaming views](#renaming-views)), however it remains the default view.

![](../assets/en/FormEditor/createView.png)

Existem duas formas de adicionar vistas adicionais:

- Click on the **Add a new view** button at the bottom of the View palette:

![](../assets/en/FormEditor/addView.png)

- Right-click on an existing view and select **Insert view**:

![](../assets/en/FormEditor/addView2.png)

Não há limite para o número de vistas.

#### Renomear vistas

By default views are named as "View" + the view number, however you can change these names to improve readability and better suit your needs.

Para mudar o nome de uma vista, pode utilizar:

- Double-click directly on the view name (the selected view in this case). O nome torna-se então editável:

 ![](../assets/en/FormEditor/rename.png)

- Clique com o botão direito do rato no nome da vista. O nome torna-se então editável:

 ![](../assets/en/FormEditor/rename2.png)

#### Reordenação de visualizações

You can change the display order of views by dragging/dropping them within the View palette.

Note-se que a vista padrão não é alterada:

![](../assets/en/FormEditor/reorderView.png)

#### Eliminar vistas

Para mudar o nome de uma vista, pode utilizar:

- Click on the **Delete the selected view** button at the bottom of the View palette:

 ![](../assets/en/FormEditor/deleteView.png)

- Clique com o botão direito do rato no nome da vista, e seleccione **Apagar Vista**:

 ![](../assets/en/FormEditor/deleteView2.png)
> Se uma vista for apagada, quaisquer objectos nela contidos são automaticamente movidos para a vista por defeito.

### Usando vistas

Uma vez criadas as vistas, pode utilizar a paleta Vista para:

- Adicionar objecto às vistas,
- Mover objectos de uma vista para outra,
- Selecionar todos os objetos da mesma vista com um único clique,
- Mostrar ou ocultar objectos para cada vista,
- Bloquear os objectos de uma vista.

#### Adicionar objectos a vistas

Um objeto só pode pertencer a uma única vista.

To create an object in another view, simply select the view in the View palette (prior to creating the object) by clicking its name (an Edit icon is displayed for the [Current view](#before-you-begin) and the name appears in bold text):

![](../assets/en/FormEditor/addObject.png)

#### Mover objectos entre vistas

It's also possible to move one or more objects from one view to another. No formulário, selecionar o(s) objeto(s) cuja vista se pretende alterar. The view list indicates, using a symbol, the view to which the selection belongs:

![](../assets/en/FormEditor/symbol.png)
> A seleção pode conter vários objetos pertencentes a diferentes visualizações.

Simply select the destination view, right-click, and select **Move to**:

![](../assets/en/FormEditor/moveObject.png)

OU

Select the destination view of the selection and click **Move to** button at the bottom of the View palette:

![](../assets/en/FormEditor/moveObject3.png)

A seleção é então colocada na nova vista:

![](../assets/en/FormEditor/objNewView.png)

Você também pode mover um objeto para outra visualização por meio do menu de contexto do objeto. Right-click on the object, select **Move to view**, and select a view from the list of available views:

![](../assets/en/FormEditor/moveObject2.png)
> A [vista atual](#before-you-begin) é mostrado em negrito.

#### Seleccionar todos os objectos de uma vista

You can select all objects belong to the same view in the current page of the form. This function is useful for applying global changes to a set of objects.

To do this, right-click on the view in which you wish to select all the objects, click on **Select All**:

![](../assets/en/FormEditor/selectAll.png)

Também pode utilizar o botão na parte inferior da paleta de vistas:

![](../assets/en/FormEditor/selectAll2.png)

#### Mostrar ou esconder objectos de uma vista

You can show or hide objects belonging to a view at any time in the form's current page. Essa função pode ser usada, por exemplo, para focar em determinados objetos ao modificar o formulário.

By default, all views are shown, as indicated by the *Show/Hide* icon:

![](../assets/en/FormEditor/showHide.png)

Para ocultar uma vista, clique no ícone *Mostrar/Ocultar*. Em seguida, é escurecida e os objetos da vista correspondente deixam de ser mostrados no formulário:

![](../assets/en/FormEditor/hidden.png)
> A [vista atual](#before-you-begin) não pode ser ocultada.

Para mostrar uma vista oculta, basta selecioná-la ou clicar no ícone *Mostrar/Ocultar* para essa vista.

#### Bloqueio de objetos de uma vista

É possível bloquear os objectos de uma vista. Isto impede que sejam selecionados, alterados ou eliminados do formulário. Once locked, an object cannot be selected by a click, a rectangle, or the **Select Similar Objects** command of the context menu. Esta função é útil para evitar erros de tratamento.

By default, all views are unlocked, as indicated by the *Lock/Unlock* icon next to each view:

![](../assets/en/FormEditor/lockUnlock.png)

Para bloquear os objetos de uma visualização, clique no ícone *Bloquear/Desbloquear*. O cadeado está fechado, o que significa que a vista está agora bloqueada:

![](../assets/en/FormEditor/locked.png)
> A [vista atual](#before-you-begin) não pode ser bloqueada.

To unlock a view that is locked, simply select it or click on the *Lock/Unlock* icon for that view.

## Zoom

Pode fazer zoom no formulário atual. Switch to “Zoom” mode by clicking on the magnifying glass icon or clicking directly on the desired percentage bar (50%, 100%, 200%, 400% and 800%):

![](../assets/en/FormEditor/zoom.png)

- Quando se clica na lupa, o cursor transforma-se numa lupa. Pode então clicar no formulário para aumentar a visualização ou manter premida a tecla Shift e clicar para reduzir a percentagem de visualização.
- When you click on a percentage bar, the display is immediately modified.

No modo Zoom, todas as funções do editor de formulários permanecem disponíveis(*).

(*) For technical reasons, it is not possible to select list box elements (headers, columns, footers) when the Form editor is in Zoom mode.
