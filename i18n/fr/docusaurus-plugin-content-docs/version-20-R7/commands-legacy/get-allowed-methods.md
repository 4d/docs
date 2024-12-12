---
id: get-allowed-methods
title: GET ALLOWED METHODS
slug: /commands/get-allowed-methods
displayed_sidebar: docs
---

<!--REF #_command_.GET ALLOWED METHODS.Syntax-->**GET ALLOWED METHODS** ( *tabMéthodes* )<!-- END REF-->
<!--REF #_command_.GET ALLOWED METHODS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tabMéthodes | Text array | &#8592; | Tableau de noms de méthodes |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.GET ALLOWED METHODS.Summary-->La commande **GET ALLOWED METHODS** retourne dans le tableau *tabMéthodes* le nom des méthodes “autorisées” dans l’éditeur de formules, c’est-à-dire pouvant être utilisées lors de l’écriture d’une formule — ces méthodes sont listées à la fin de la liste des commandes dans l’éditeur.<!-- END REF--> 

Par défaut, aucune méthode n’est utilisable dans l’éditeur de formules. Les méthodes doivent avoir été explicitement autorisées via la commande [SET ALLOWED METHODS](../commands/set-allowed-methods.md). Si cette commande n’a pas été exécutée, **GET ALLOWED METHODS** retourne une chaîne vide.  
  
**GET ALLOWED METHODS** retourne précisément ce qui a été passé à la commande [SET ALLOWED METHODS](../commands/set-allowed-methods.md), c’est-à-dire un tableau alpha (la commande crée et dimensionne le tableau). En outre, si le caractère “joker” (@) a été utilisé pour désigner un groupe de méthodes, la chaîne contenant le caractère @ est retournée (et non les noms des méthodes du groupe). 

Cette commande est utile pour préserver le paramétrage de l’ensemble courant de méthodes autorisées avant l’exécution d’une formule dans un contexte spécifique (par exemple un état rapide). 

#### Exemple 

Cet exemple permet d’autoriser ponctuellement un ensemble de méthodes spécifiques pour la création d’un état rapide : 

```4d
  //Stockage du paramétrage courant
 GET ALLOWED METHODS(tabméthodes)
 
  //Définition des méthodes pour l’état
 tabméthodes_Etats{1}:="Etats_@"
 SET ALLOWED METHODS(tabméthodes_Etats)
 QR REPORT([Personnes];"MonEtat")
 
  //Rétablissement des paramètres courants
 SET ALLOWED METHODS(tabméthodes)
```

#### Voir aussi 

[SET ALLOWED METHODS](../commands/set-allowed-methods.md)  