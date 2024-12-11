---
id: printing-page
title: Printing page
slug: /commands/printing-page
displayed_sidebar: docs
---

<!--REF #_command_.Printing page.Syntax-->**Printing page**  : Integer<!-- END REF-->
<!--REF #_command_.Printing page.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Integer | &#8592; | Numéro de la page en cours d'impression |

<!-- END REF-->

#### Description 

<!--REF #_command_.Printing page.Summary-->**Printing page** retourne le numéro de la page en cours d'impression.<!-- END REF--> Cette fonction vous permet de numéroter automatiquement les pages d'une impression en cours à l'aide de [PRINT SELECTION](print-selection.md) ou du menu Impression dans le mode Développement.

#### Exemple 

L'exemple suivant change la position des numéros de page sur un état pour que l'état puisse être reproduit au format recto-verso. Le formulaire pour l'état comporte deux variables qui affichent les numéros de page. Une variable dans le coin bas à gauche (*vNumGauche*) imprime les numéros de page pairs. Une autre variable dans le coin bas à droite (*vNumDroite*) imprime les numéros de page impairs. L'exemple teste si le numéro de page est pair ou impair, puis utilise et efface les variables appropriées : 

```4d
 Case of
    :(FORM Event=On Printing Footer)
       If((Printing page% 2)=0) // Modulo vaut 0 pour un numéro de page pair
          vNumGauche:=String(Page impression) // Fixer le numéro de page à gauche
          vNumDroite:="" // Effacer le numéro de page droit
       Else // Else, le numéro de page est impair
          vNumGauche:="" // Effacer le numéro de page gauche
          vNumDroite:=String(Page impression) // Fixer le numéro de page à droite
       End if
 End case
```

#### Voir aussi 

[PRINT SELECTION](print-selection.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 275 |
| Thread safe | &check; |
| Interdite sur le serveur ||


