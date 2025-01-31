---
id: is-waiting-mouse-up
title: Is waiting mouse up
slug: /commands/is-waiting-mouse-up
displayed_sidebar: docs
---

<!--REF #_command_.Is waiting mouse up.Syntax-->**Is waiting mouse up**  : Boolean<!-- END REF-->
<!--REF #_command_.Is waiting mouse up.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Vrai si l'objet est en attente d'un relâchement souris, Faux sinon |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is waiting mouse up.Summary-->La commande **Is waiting mouse up** retourne **Vrai** si l'objet courant a été cliqué et que le bouton de la souris n'a pas été relâché, alors que la fenêtre contenant l'objet a le focus.<!-- END REF--> Sinon la commande retourne **Faux**, en particulier si la fenêtre contenant l'objet a perdu le focus avant que le bouton soit relâché. 

 Cette commande doit être appelée dans le contexte de l'objet courant. Elle est destinée à être utilisée conjointement avec l'événement formulaire On Mouse Up, disponible pour les champs et variables Image. Elle permet de gérer par programmation les cas où l'utilisateur clique et commence à effectuer un glisser dans une zone image (champ ou variable), et que cette action est interrompue par un événement extérieur, comme par exemple l'affichage d'une boîte de dialogue d'alerte. Dans ce cas, l'état interne de l'objet peut être suspendu indéfiniment car il attend l'événement On Mouse Up qui n'arrive jamais. Pour éviter ce problème, vous devez protéger votre code de déplacement de souris à l'aide de la commande **Is waiting mouse up** qui vous assure de son exécution dans un contexte valide.

#### Exemple 

Le code suivant peut être utilisé pour gérer le suivi de la souris dans un objet image :

```4d
  //Méthode objet de l'objet image
 var vLtracking : Integer //drapeau du mode Suivi
 Case of
    :(Form event code=On Clicked)
       If(Attente relâchement clic) // le bouton de la souris n'a pas été relâché
          vLtracking:=1 //nous sommes en mode Suivi
  //... Ecrivez ici le code d'initialisation pour la fonction de Suivi
       End if
    :(Form event code=On Mouse Move)
       If(vLtracking=1) //nous sommes en mode Suivi
          If(Not(Is waiting mouse up)) // on n'aura jamais le relâchement de la souris
             vLtracking:=0 // on stoppe le mode Suivi
  //... Ecrivez ici le code pour le traitement ou l'annulation de l'action de suivi
          Else //l'objet est toujours en attente du relâchement de la souris
  //... Ecrivez ici le code pour le suivi
          End if
       End if
    :(Form event code=Sur relâchement bouton) // le bouton de la souris a été relâché
  //... Ecrivez ici le code pour le suivi du relâchement souris
       vLtracking:=0 //Fin du suivi
 End case
```

#### Voir aussi 

[Form event code](../commands/form-event-code.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1422 |
| Thread safe | &cross; |


