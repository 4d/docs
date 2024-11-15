---
id: is-compiled-mode
title: Is compiled mode
slug: /commands/is-compiled-mode
displayed_sidebar: docs
---

<!--REF #_command_.Is compiled mode.Syntax-->**Is compiled mode** {( * )} : Boolean<!-- END REF-->
<!--REF #_command_.Is compiled mode.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Retourner l'information de la base hôte |
| Résultat | Boolean | &#8592; | Mode compilé (Vrai), mode interprété (Faux) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is compiled mode.Summary-->La fonction **Is compiled mode** teste si la base tourne en mode compilé (Vrai) ou en mode interprété (Faux).<!-- END REF-->

Le paramètre facultatif *\** est utile dans le cadre d'une architecture utilisant des composants : il permet de déterminer la base (hôte ou composant) dont vous souhaitez connaître le mode d'exécution. 

* Lorsque la commande est appelée depuis un composant :  
   * si le paramètre *\** est passé, la commande retourne [True](true.md) ou [False](false.md) en fonction du mode d’exécution de la base hôte,  
   * si le paramètre *\** n’est pas passé, la commande retourne [True](true.md) ou [False](false.md) en fonction du mode d’exécution du composant.
* Lorsque la commande est appelée depuis une méthode d’une base hôte, elle retourne toujours [True](true.md) ou [False](false.md) en fonction du mode d’exécution de la base hôte.

#### Exemple 

Dans une de vos méthodes, vous avez placé du code pour déboguer la base lorsque vous êtes en mode interprété. Vous pouvez précéder ce code d'un test qui appelle la fonction **Is compiled mode** :

```4d
  // ...
 If(Not(Is compiled mode))
  // Mettre du code pour déboguer votre base ici
 End if
  // ...
```

#### Voir aussi 

[IDLE](idle.md)  
[Undefined](undefined.md)  