---
id: contextual-click
title: Contextual click
slug: /commands/contextual-click
displayed_sidebar: docs
---

<!--REF #_command_.Contextual click.Syntax-->**Contextual click**  : Boolean<!-- END REF-->
<!--REF #_command_.Contextual click.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Vrai si un clic contextuel a été détecté, sinon Faux |

<!-- END REF-->

#### Description 

<!--REF #_command_.Contextual click.Summary-->La commande **Contextual click** retourne Vrai si un clic de type contextuel a été effectué :

* Sous Windows et Mac OS, les clics contextuels sont effectués avec le bouton droit de la souris.<!-- END REF-->
* Sous Mac OS, des clics contexuels peuvent également être générés à l’aide de la combinaison **Control+clic**.

Cette commande doit être appelée uniquement dans le cadre de l’événement formulaire On Clicked. Il est donc nécessaire de vérifier en mode Développement que cet événement a bien été coché dans les Propriétés du formulaire et/ou de l’objet.

#### Exemple 

Cette méthode, associée à une zone de défilement, permet de changer la valeur d’un élément de tableau à l’aide d’un menu contextuel : 

```4d
 If(Contextual click)
    If(Pop up menu("Vrai;Faux")=1)
       monTableau{monTableau}:="Vrai"
    Else
       monTableau{monTableau}:="Faux"
    End if
 End if
```

#### Voir aussi 

[Form event code](form-event-code.md)  
[Right click](right-click.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 713 |
| Thread safe | &cross; |


