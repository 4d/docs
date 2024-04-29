---
id: splitters
title: Séparateur
---

Un séparateur divise un formulaire en deux zones. Il permet à l’utilisateur d’agrandir ou de réduire chaque zone en le déplaçant. Un séparateur peut être horizontal ou vertical. Il tient compte des propriétés de redimensionnement des objets, ce qui permet de personnaliser entièrement l’interface. Un séparateur peut être “pousseur” ou non

L’utilisation type du séparateur est le formulaire de sortie dans lequel les colonnes peuvent être redimensionnées :

![](../assets/en/FormObjects/split1.png)

Les caractéristiques générales des séparateurs sont les suivantes :

- Vous pouvez placer autant de séparateurs que vous voulez dans tout type de formulaire. De même, il est possible de mêler des séparateurs horizontaux et verticaux dans un même formulaire.
- Un séparateur peut traverser un objet. Celui-ci sera redimensionné lors du déplacement du séparateur.
- Les butées des séparateurs sont calculées de manière à ce que les objets déplacés restent entièrement visibles dans le formulaire ou ne passent pas sous/à côté d’un autre séparateur. When the [Pusher](properties_ResizingOptions.md#pusher) property is associated with a splitter, its movement to the right or downward does not encounter any stops.
- Les redimensionnements effectués dans les formulaires à l’aide des séparateurs ne sont conservés que durant l’affichage du formulaire. Une fois le formulaire refermé, les dimensions initiales sont restaurées.

Une fois inséré, un séparateur se présente sous la forme d’un trait. You can modify its [border style](properties_BackgroundAndBorder.md#border-line-style-dotted-line-type) to obtain a thinner line or [change its color](properties_BackgroundAndBorder.md##font-color-line-color).

#### Exemple JSON :

```4d
"mySplitter": {
	"type": "splitter",
	"left": 60,  
	"top": 160,   
	"width": 100,  
	"height": 20,  
	"splitterMode": "move"  //pusher
	}
```

### Propriétés prises en charge

[Border Line Style](properties_BackgroundAndBorder.md##border-line-style-dotted-line-type) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Color](properties_BackgroundAndBorder.md##font-color-line-color) - [Object Name](properties_Object.md#object-name) - [Pusher](properties_ResizingOptions.md#pusher) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Variable or Expression](properties_Object.md#variable-or-expression) -  [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## Interaction avec les propriétés des objets environnants

Dans un formulaire, les séparateurs interagissent sur les objets qui les entourent suivant les options de redimensionnement de ces objets :

| Options de redimensionnement du ou des objet(s) | Objet(s) au-dessus du séparateur horizontal ou à gauche du séparateur vertical (1) | Object(s) below an horizontal _non-Pusher_ splitter or to the right of a vertical _non-Pusher_ splitter                                                                                                                                         | Object(s) below an horizontal _Pusher_ splitter or to the right of a vertical _Pusher_ splitter                                                                                             |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aucun                                                              | Restent tel que                                                                                                          | Sont déplacés avec le séparateur (conservent leur position relative) jusqu’à la butée suivante. La butée du déplacement vers le bas ou vers la droite est soit le bord de la fenêtre, soit un autre séparateur. | Sont déplacés sans limites avec le séparateur (conservent leur position relative). Aucune butée n’est appliquée (cf. paragraphe suivant) |
| Redimensionnement                                                  | Gardent leur position d’origine mais sont redimensionnés en fonction de la nouvelle position du séparateur               |                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                |
| Déplacement                                                        | Se déplacent avec le séparateur                                                                                          |                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                |

_(1) You cannot drag the splitter past the right (horizontal) or bottom (vertical) side of an object located in this position._

> Un objet entièrement contenu dans le rectangle définissant le séparateur est déplacé en même temps que le séparateur lui-même.

## Gestion programmée des séparateurs

You can associate an object method with a splitter and it will be called with the `On Clicked` event throughout the entire movement.

A [variable](properties_Object.md#variable-or-expression) of the _Longint_ type is associated with each splitter. Cette variable peut être utilisée dans vos méthodes objet et/ou formulaire. Elle prend pour valeur le déplacement courant, en pixels, du séparateur.

- Si elle est négative : le déplacement a été effectué vers le haut ou vers la gauche,
- Si elle est positive : le déplacement a été effectué vers le bas ou vers la droite,
- Si elle est égale à 0 : le séparateur a été relâché à son emplacement d’origine.

Vous pouvez également déplacer le séparateur par programmation : il suffit de modifier la valeur de la variable associée. For example, if a vertical splitter is associated with a variable named `split1`, and if you execute the following statement: `split1:=-10`, the splitter will be moved 10 pixels to the left — as if the user did it manually. Le déplacement s’effectue au terme de l’exécution de la méthode objet ou formulaire contenant l’instruction.
