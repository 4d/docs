---
id: bool
title: Bool
slug: /commands/bool
displayed_sidebar: docs
---

<!--REF #_command_.Bool.Syntax-->**Bool** ( *expression* ) : Boolean<!-- END REF-->
<!--REF #_command_.Bool.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| expression | Expression | &#8594;  | Expression à retourner sous forme de booléen |
| Résultat | Boolean | &#8592; | Expression sous forme booléenne |

<!-- END REF-->

#### Description 

<!--REF #_command_.Bool.Summary-->La commande **Bool** retourne l'expression que vous avez passée dans *expression* sous une forme booléenne.<!-- END REF-->

La commande peut retourner les valeurs suivantes, en fonction du type du résultat de l'évaluation de *expression* :

| **Type de résultat de expression** | **Résultat de la commande Bool**        |
| ---------------------------------- | --------------------------------------- |
| Indéfini                           | Faux                                    |
| Null                               | Faux                                    |
| Booléen                            | Faux si faux, Vrai sinon                |
| Numérique                          | Faux si 0, Vrai pour les autres valeurs |
| Autres types                       | Faux                                    |

Cette commande est utile lorsque le code attend toujours un booléen et que l'évaluation de *expression* peut parfois aboutir à un type différent (notamment **null** ou **indéfini**). 

#### Exemple 

Vous sélectionnez une valeur en fonction d'un attribut de champ objet, en anticipant la possibilité que l'attribut ne soit pas présent :

```4d
 var $married : Text
 $married:=Choose(Bool([Person]data.married);"Marié(e)";"Célibataire")
  //"Célibataire" s'il n'y a pas d'attribut "married" dans le champ
 ALERT("Le statut de cette personne est "+$married)
```

#### Voir aussi 

[Date](date.md)  
[Num](num.md)  
[String](string.md)  
[Time](time.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1537 |
| Thread safe | &check; |
| Interdite sur le serveur ||


