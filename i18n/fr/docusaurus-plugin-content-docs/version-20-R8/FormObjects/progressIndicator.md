---
id: progressIndicator
title: Indicateurs de progression
---

Un indicateur de progression (également appelé "thermomètre") est conçu pour afficher ou définir graphiquement des valeurs numériques ou date/heure.

![](../assets/en/FormObjects/progress1.png)

## Utiliser des indicateurs

Vous pouvez utiliser les jauges pour afficher ou définir des valeurs. Par exemple, si un indicateur de progression se voit affecter une valeur par une méthode, il affiche la valeur. Si l’utilisateur modifie manuellement la valeur indiquée par la jauge, la valeur contenue par l’objet est modifiée. Cette valeur peut être utilisée pour un autre objet tel qu’un champ, un objet saisissable ou un objet non saisissable.

La variable associée à l'indicateur contrôle l’affichage. Vous pouvez y placer des valeurs ou utiliser les valeurs qu’il stocke à l’aide des méthodes. Par exemple, la méthode suivante peut être utilisée pour contrôler un thermomètre :

```4d
 vTherm:=[Employees]Salary
```

Cette méthode affecte la valeur du champ Salary à la variable vTherm. Cette méthode est associée au champ Salary.

Réciproquement, vous pouvez utiliser un indicateur pour contrôler la valeur d’un champ. L’utilisateur se sert alors de l'indicateur pour saisir la valeur du champ. Dans ce cas la méthode devient :

```4d
 [Employees]Salary:=vTherm
```

La méthode affecte la valeur de l'indicateur au champ Salary. Lorsque l’utilisateur modifie la valeur affichée par l'indicateur, la valeur du champ Salary est modifiée.

## Thermomètre par défaut

![](../assets/en/FormObjects/indicator_progressBar.png)

Le thermomètre est l'indicateur de progression standard.

Vous pouvez afficher une barre de progression horizontale ou verticale. Ce paramètre est déterminé par la forme de l’objet que vous dessinez.

Plusieurs options graphiques sont disponibles : valeurs minimales/maximales, graduations, paliers.

### Propriétés prises en charge

[Barber shop](properties_Scale.md#barber-shop) - [Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) -[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Display graduation](properties_Scale.md#display-graduation) - [Enterable](properties_Entry.md#enterable) - [Execute object method](properties_Action.md#execute-object-method) - [Expression Type](properties_Object.md#expression-type) (only "integer", "number", "date", or "time") - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Italic](properties_Text.md#italic) - [Graduation step](properties_Scale.md#graduation-step) -[Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Label Location](properties_Scale.md#label-location) - [Left](properties_CoordinatesAndSizing.md#left) - [Maximum](properties_Scale.md#maximum) - [Minimum](properties_Scale.md#minimum) - [Number Format](properties_Display.md#number-format) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Step](properties_Scale.md#step) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## Barber shop

![](../assets/en/FormObjects/indicator.gif)

**Le barber shop** est une variante du thermomètre par défaut. Pour active cette variante, vous devez définir la propriété du [Barber shop](properties_Scale.md#barber-shop).

> En code JSON, supprimez simplement la propriété "max" de l'objet thermomètre par défaut pour activer le barber shop.

Le barber shop affiche une animation continue, telle que le [spinner](spinner.md). Les thermomètres “Barber shop” sont généralement utilisés pour indiquer à l’utilisateur que le programme est en train d’effectuer une opération longue. Lorsque le thermomètre est sélectionné, le thème ["Graduations"](properties_Scale.md) de la liste des propriétés est masqué.

A l’exécution du formulaire, l'objet n’est pas animé. Vous devez gérer l’animation en passant une valeur à [la variable ou expression qui lui est associée](properties_Object.md#variable-or-expression) :

- 1 = Démarrer l'animation,
- 0 = Stopper l’animation.

### Propriétés prises en charge

[Barber shop](properties_Scale.md#barber-shop) - [Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) -[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Enterable](properties_Entry.md#enterable) - [Execute object method](properties_Action.md#execute-object-method) - [Expression Type](properties_Object.md#expression-type) (only "integer", "number", "date", or "time") - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## Voir également

- [rulers](ruler.md)
- [steppers](stepper.md)
