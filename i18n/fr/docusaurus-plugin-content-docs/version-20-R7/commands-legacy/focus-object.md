---
id: focus-object
title: Focus object
slug: /commands/focus-object
displayed_sidebar: docs
---

<!--REF #_command_.Focus object.Syntax-->**Focus object**  : Pointer<!-- END REF-->
<!--REF #_command_.Focus object.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Pointer | &#8592; | Pointeur vers l’objet ayant le focus |

<!-- END REF-->

#### Note de compatibilité 

<!--REF #_command_.Focus object.Summary-->Cette commande est conservée pour des raisons de compatibilité uniquement.<!-- END REF--> A compter de la version 12 de 4D, il est conseillé d'utiliser la commande [OBJECT Get pointer](object-get-pointer.md).

#### Description 

**Focus object** retourne un pointeur vers l’objet ayant le focus dans le formulaire courant. Si aucun objet n’a le focus, la commande retourne [Is nil pointer](is-nil-pointer.md). Vous pouvez utiliser **Focus object** pour effectuer une action dans un formulaire sans savoir quel objet est actuellement sélectionné. N'oubliez pas auparavant de tester si l'objet est du type voulu, à l'aide de la fonction [Type](type.md). 

**Note :** Lorsqu’elle est utilisée avec une list box, la fonction **Focus object** retourne un pointeur vers la list box ou la colonne de la list box en fonction du contexte. Pour plus d'informations, reportez-vous à la section *Gestion programmée des objets de type List box*. 

Cette commande ne peut pas être utilisée sur les champs dans les sous-formulaires.

**Note :** Cette commande n'a de sens qu'en cours de saisie. Son utilisation hors de ce contexte génère des messages d'erreur.

#### Exemple 

L'exemple suivant est une méthode objet pour un bouton. Cette méthode passe les données de l'objet courant en majuscules. L'objet doit être de type Texte ou Alpha (type 0 ou 24) :

```4d
 $pointeur :=Focus object //Obtenir le pointeur vers le dernier objet
 Case of
    :(Nil($pointeur)) //Aucun objet n'a le focus
       ...
    :((Type($pointeur->)=Is alpha field)|(Type($pointeur->)=Est une variable chaîne))
  //S'il s'agit d'un objet de type Texte ou Alpha
       $pointeur->:=Uppercase($pointeur->) //Mettre les données en majuscules
 End case
```

#### Voir aussi 

[OBJECT Get pointer](object-get-pointer.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 278 |
| Thread safe | &cross; |


