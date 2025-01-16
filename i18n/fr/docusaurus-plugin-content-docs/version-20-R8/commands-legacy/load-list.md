---
id: load-list
title: Load list
slug: /commands/load-list
displayed_sidebar: docs
---

<!--REF #_command_.Load list.Syntax-->**Load list** ( *nomListe* ) : Integer<!-- END REF-->
<!--REF #_command_.Load list.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomListe | Text | &#8594;  | Nom de liste créée dans l'éditeur d'énumérations |
| Résultat | Integer | &#8592; | Numéro de référence de la liste nouvellement créée |

<!-- END REF-->

#### Description 

<!--REF #_command_.Load list.Summary-->La commande **Load list** crée une liste hiérarchique dont le contenu est copié depuis la liste *nomListe* créée en mode Développement, dans l'éditeur d'énumérations.<!-- END REF--> La fonction retourne le numéro de référence de la liste nouvellement créée. 

Pour connaître les énumérations définies dans la base, utilisez la commande [LIST OF CHOICE LISTS](list-of-choice-lists.md). Pour savoir si la liste a correctement été chargée, utilisez la fonction [Is a list](is-a-list.md) avec le numéro de référence retourné par **Load list**.

Notez que la nouvelle liste est une copie de la liste définie en mode Développement. Par conséquent, toute modification apportée à cette nouvelle liste n'affectera pas la liste définie en mode Développement. De même, toute modification ultérieure de l'énumération n'affecte pas la liste que vous venez de créer. 

Si vous modifiez la liste nouvellement créée et voulez enregistrer ces modifications, utilisez la commande [SAVE LIST](save-list.md). 

Si vous n'avez plus besoin de la liste, n'oubliez pas d'appeler [CLEAR LIST](clear-list.md) pour la supprimer. Sinon, elle reste en mémoire jusqu'à la fin de la session de travail ou jusqu'à ce que le process dans lequel la liste a été créée soit détruit.

**Astuce :** Si vous associez une liste à un objet de formulaire (liste hiérarchique, onglet ou menu hiérarchique) à l'aide du menu **Enumération** dans la Liste des propriétés, il est inutile d'appeler **Load list** ou [CLEAR LIST](clear-list.md) dans la méthode de l'objet. 4D charge et efface la liste automatiquement pour vous.

#### Exemple 

Imaginons que vous créez une base pour le marché international. Vous voulez pouvoir changer la langue utilisée. Dans un formulaire, vous présentez une liste hiérarchique *listeHL* qui propose les langues disponibles. En mode Développement, vous avez préparé des listes différentes, par exemple “Options US” pour la version anglaise, “Options FR” pour la version française, “Options ES” pour la version espagnole, etc. De plus, vous maintenez la variable interprocess *<>gaLangueCourante* dans laquelle vous stockez un code de langue sur 2 caractères, par exemple “US” pour la version anglaise, “FR” pour la version française, “ES” pour la version espagnole, etc. Pour vous assurer que la liste correcte sera chargée en utilisant la langue choisie, vous pouvez écrire :

```4d
  // Méthode objet de la liste hiérarchique listeHL
 Case of
    :(FORM Event=On Load)
       var listeHL : Integer
       listeHL:=Load list("Options"+<>gaLangueCourante)
    :(FORM Event=On Unload)
       CLEAR LIST(listeHL;*)
 End case
```

#### Voir aussi 

[CLEAR LIST](clear-list.md)  
[Is a list](is-a-list.md)  
[SAVE LIST](save-list.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 383 |
| Thread safe | &cross; |


