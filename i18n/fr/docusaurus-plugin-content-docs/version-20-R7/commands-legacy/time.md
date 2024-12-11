---
id: time
title: Time
slug: /commands/time
displayed_sidebar: docs
---

<!--REF #_command_.Time.Syntax-->**Time** ( *valHeure* ) : Time<!-- END REF-->
<!--REF #_command_.Time.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| valHeure | Text, Integer | &#8594;  | Valeur à retourner sous forme d'heure |
| Résultat | Time | &#8592; | Heure définie par valHeure |

<!-- END REF-->

#### Description 

<!--REF #_command_.Time.Summary-->La fonction **Time** retourne, sous la forme d'une expression de type Heure, l'heure définie dans le paramètre *valHeure*.<!-- END REF-->

Le paramètre *valHeure* peut contenir soit :

* une chaîne contenant une heure exprimée dans l'un des formats d'heure standard de 4D correspondant à la langue de votre système (pour plus d'informations, reportez-vous à la description de la commande [String](string.md)).
* un entier long représentant un nombre de secondes écoulées depuis 00:00:00.

Note : Si l'évaluation de l'expression *valHeure* donne une valeur indéfinie, **Time** retourne une heure vide (00:00:00). Ce fonctionnement est utile lorsque le code attend toujours une heure alors que l'évaluation de *valHeure* peut parfois aboutir au type **indéfini** (cas par exemple des attributs d'objets).

#### Exemple 1 

L'exemple suivant affiche une boîte de dialogue d'alerte avec le message “1:00 P.M. = 13 heures 0 minute.” :

```4d
 ALERT("1:00 P.M. = "+String(Heure("13:00:00");Heures Minutes))
```

#### Exemple 2 

Vous pouvez exprimer toute valeur numérique sous forme d’heure :

```4d
 vHeure:=Time(10000)
     //vHeure vaut 02:46:40
 vHeure2:=Time((60*60)+(20*60)+5200)
     //vHeure2 vaut 02:46:40
```

#### Voir aussi 

[ARRAY TIME](array-time.md)  
[Bool](bool.md)  
[String](string.md)  
[Time string](time-string.md)  
[Timestamp](timestamp.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 179 |
| Thread safe | &check; |
| Interdite sur le serveur ||


