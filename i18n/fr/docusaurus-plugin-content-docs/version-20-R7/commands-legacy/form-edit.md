---
id: form-edit
title: FORM EDIT
slug: /commands/form-edit
displayed_sidebar: docs
---

<!--REF #_command_.FORM EDIT.Syntax-->**FORM EDIT** ( {*uneTable* ;} *formulaire* )<!-- END REF-->
<!--REF #_command_.FORM EDIT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| uneTable | Table | &#8594;  | Table appartenant au formulaire ou, si omise : table par défaut ou formulaire projet |
| formulaire | Text | &#8594;  | Nom du formulaire |

<!-- END REF-->

#### Description 

<!--REF #_command_.FORM EDIT.Summary-->La commande **FORM EDIT** ouvre le *formulaire* associé à *uneTable* dans l'éditeur de formulaire 4D.<!-- END REF--> A noter que vous devez avoir accès à l'environnement de développement, sinon l'erreur -9804 ("Impossible d'ouvrir le formulaire") sera générée.

La commande est asynchrone : elle retourne immédiatement à la méthode appelée et n'attend pas l'ouverture du formulaire.

Si vous passez le paramètre optionnel *uneTable*, vous indiquez la table associée à *formulaire*. Si vous omettez ce paramètre, vous indiquez que *formulaire* est un formulaire projet.

Dans le paramètre *formulaire*, passez le nom du formulaire à ouvrir dans l'éditeur de formulaire 4D. Si vous passez un nom qui n'existe pas, l'erreur 81 est générée ("Le formulaire n’a pas été trouvé").

#### Exemple 

Pour ouvrir la table *Contacts* du formulaire *Addresses* :

```4d
 FORM EDIT([Contacts];"Addresses")
```

Pour ouvrir le formulaire projet *ContactList* :

```4d
 FORM EDIT("ContactList")
```

#### Voir aussi 

*Commandes du thème Accès objets développement*  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1749 |
| Thread safe | &cross; |


