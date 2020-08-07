---
id: propertiesAnimation
title: Animation
---

---
## Recommencer la séquence

Pictures are displayed in a continuous loop. When the user reaches the last picture and clicks again, the first picture appears, and so forth.


#### Grammaire JSON

| Nom                  | Type de données | Valeurs possibles |
| -------------------- | --------------- | ----------------- |
| loopBackToFirstFrame | boolean         | true, false       |

#### Objets pris en charge

[Bouton image](pictureButton_overview.md)



---
## Retour sur relâchement du clic

Displays the first picture all the time except when the user clicks the button. Displays the second picture until the mouse button is released. This mode allows you to create an action button with a different picture for each state (idle and clicked). You can use this mode to create a 3D effect or display any picture that depicts the action of the button.


#### Grammaire JSON

| Nom                    | Type de données | Valeurs possibles |
| ---------------------- | --------------- | ----------------- |
| switchBackWhenReleased | boolean         | true, false       |

#### Objets pris en charge

[Bouton image](pictureButton_overview.md)





---
## Défilement continu sur clic

Allows the user to hold down the mouse button to display the pictures continuously (i.e., as an animation). When the user reaches the last picture, the object does not cycle back to the first picture.

#### Grammaire JSON

| Nom                | Type de données | Valeurs possibles |
| ------------------ | --------------- | ----------------- |
| switchContinuously | boolean         | true, false       |

#### Objets pris en charge

[Bouton image](pictureButton_overview.md)




---
## Défilement tous les n ticks

Enables cycling through the contents of the picture button at the specified speed (in ticks). In this mode, all other options are ignored.

#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles |
| ---------- | --------------- | ----------------- |
| frameDelay | integer         | minimum : 0       |

#### Objets pris en charge

[Bouton image](pictureButton_overview.md)





---
## Bascule sur passage du curseur

Modifies the contents of the picture button when the mouse cursor passes over it. The initial picture is displayed when the cursor leaves the button’s area.

#### Grammaire JSON

| Nom                | Type de données | Valeurs possibles |
| ------------------ | --------------- | ----------------- |
| switchWhenRollover | boolean         | true, false       |

#### Objets pris en charge

[Bouton image](pictureButton_overview.md)






---
## Use Last frame as disabled

Enables setting the last thumbnail as the one to display when the button is disabled. The thumbnail used when the button is disabled is processed separately by 4D: when you combine this option with "Switch Continuously" and "Loop Back to First Frame", the last picture is excluded from the sequence associated with the button and only appears when it is disabled.


#### Grammaire JSON

| Nom                    | Type de données | Valeurs possibles |
|:---------------------- | --------------- | ----------------- |
| useLastFrameAsDisabled | boolean         | true, false       |


#### Objets pris en charge

[Bouton image](pictureButton_overview.md)






