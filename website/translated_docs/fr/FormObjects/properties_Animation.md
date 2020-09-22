---
id: propertiesAnimation
title: Animation
---

---
## Recommencer la séquence

Les images sont affichées en boucle continue. Lorsque l'utilisateur atteint la dernière image et clique à nouveau, la première image apparaît, et ainsi de suite.


#### Grammaire JSON

| Nom                  | Type de données | Valeurs possibles |
| -------------------- | --------------- | ----------------- |
| loopBackToFirstFrame | boolean         | true, false       |

#### Objets pris en charge

[Bouton image](pictureButton_overview.md)



---
## Retour sur relâchement du clic

Affiche la première image en permanence, sauf lorsque l'utilisateur clique sur le bouton. Affiche la deuxième image jusqu'à ce que le bouton de la souris soit relâché. Ce mode vous permet de créer un bouton d'action avec une image différente pour chaque état (inactif et cliqué). Vous pouvez utiliser ce mode pour créer un effet 3D ou afficher n'importe quelle image illustrant l'action du bouton.


#### Grammaire JSON

| Nom                    | Type de données | Valeurs possibles |
| ---------------------- | --------------- | ----------------- |
| switchBackWhenReleased | boolean         | true, false       |

#### Objets pris en charge

[Bouton image](pictureButton_overview.md)





---
## Défilement continu sur clic

Permet à l'utilisateur de maintenir le bouton de la souris enfoncé pour afficher les images en continu (c'est-à-dire sous forme d'animation). Lorsque l'utilisateur atteint la dernière image, l'objet ne revient pas à la première image.

#### Grammaire JSON

| Nom                | Type de données | Valeurs possibles |
| ------------------ | --------------- | ----------------- |
| switchContinuously | boolean         | true, false       |

#### Objets pris en charge

[Bouton image](pictureButton_overview.md)




---
## Défilement tous les n ticks

Permet de parcourir le contenu du bouton d'image à la vitesse spécifiée (en graduations). Dans ce mode, toutes les autres options sont ignorées.

#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles |
| ---------- | --------------- | ----------------- |
| frameDelay | integer         | minimum : 0       |

#### Objets pris en charge

[Bouton image](pictureButton_overview.md)





---
## Bascule sur passage du curseur

Modifie le contenu du bouton image lorsque le curseur de la souris passe dessus. L'image initiale s'affiche lorsque le curseur quitte la zone du bouton.

#### Grammaire JSON

| Nom                | Type de données | Valeurs possibles |
| ------------------ | --------------- | ----------------- |
| switchWhenRollover | boolean         | true, false       |

#### Objets pris en charge

[Bouton image](pictureButton_overview.md)






---
## Use Last frame as disabled

Permet de définir la dernière vignette comme étant celle à afficher lorsque le bouton est désactivé. The thumbnail used when the button is disabled is processed separately by 4D: when you combine this option with "Switch Continuously" and "Loop Back to First Frame", the last picture is excluded from the sequence associated with the button and only appears when it is disabled.


#### Grammaire JSON

| Nom                    | Type de données | Valeurs possibles |
|:---------------------- | --------------- | ----------------- |
| useLastFrameAsDisabled | boolean         | true, false       |


#### Objets pris en charge

[Bouton image](pictureButton_overview.md)






