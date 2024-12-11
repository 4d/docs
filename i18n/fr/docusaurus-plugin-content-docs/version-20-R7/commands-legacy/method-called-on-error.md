---
id: method-called-on-error
title: Method called on error
slug: /commands/method-called-on-error
displayed_sidebar: docs
---

<!--REF #_command_.Method called on error.Syntax-->**Method called on error** {( *portée* )} : Text<!-- END REF-->
<!--REF #_command_.Method called on error.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| portée | Integer | &#8594;  | Portée de la méthode de gestion d'erreur |
| Résultat | Text | &#8592; | Nom de la méthode d’appel sur erreur |

<!-- END REF-->

#### Description 

<!--REF #_command_.Method called on error.Summary-->La commande **Method called on error** retourne le nom de la méthode installée par la commande [ON ERR CALL](on-err-call.md) pour le process courant ou la *portée* définie.<!-- END REF-->

Dans le paramètre *portée*, passez le contexte d'exécution pour lequel vous voulez obtenir le nom de la méthode de gestion d'erreurs. Vous pouvez utiliser l'une des constantes suivantes :

| Constante                 | Valeur | Comment                                                                                     |
| ------------------------- | ------ | ------------------------------------------------------------------------------------------- |
| ek errors from components | 2      | Erreurs générées dans les composants (et non interceptées par les composants)               |
| ek global                 | 1      | Erreurs générées dans le contexte d'exécution global du projet                              |
| ek local                  | 0      | Erreurs générées dans le contexte d'exécution local (par défaut si paramètre *portée* omis) |

Si aucune méthode d’appel sur erreur n’a été installée pour la *portée*, une chaîne vide ("") est retournée.

#### Exemple 

Cette commande est particulièrement utile dans le cadre des composants, car elle permet de changer temporairement puis de rétablir les méthodes d’interception d’erreurs :

```4d
 $methCourante:=Method called on error
 ON ERR CALL("NouvelleMéthode")
  // Si le document ne peut être ouvert, une erreur est générée
 $ref:=Open document("MonDocument")
  // Réinstallation de la méthode précédente
 ON ERR CALL($methCourante)
```

#### Voir aussi 

*Gestionnaire d'erreur*  
[ON ERR CALL](on-err-call.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 704 |
| Thread safe | &check; |
| Interdite sur le serveur ||


