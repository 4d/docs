---
id: get-highlighted-records
title: GET HIGHLIGHTED RECORDS
slug: /commands/get-highlighted-records
displayed_sidebar: docs
---

<!--REF #_command_.GET HIGHLIGHTED RECORDS.Syntax-->**GET HIGHLIGHTED RECORDS** ( {*laTable* ;} *nomEnsemble* )<!-- END REF-->
<!--REF #_command_.GET HIGHLIGHTED RECORDS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle lire les enregistrements marqués Si omis, table du formulaire courant |
| nomEnsemble | Text | &#8594;  | Ensemble dans lequel stocker les enregistrements marqués |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.GET HIGHLIGHTED RECORDS.Summary-->La commande **GET HIGHLIGHTED RECORDS** stocke dans l’ensemble désigné par le paramètre *nomEnsemble* les enregistrements marqués (c'est-à-dire, les enregistrements “surlignés” par l'utilisateur dans le formulaire liste) de *laTable* passée en paramètre.<!-- END REF--> Si le paramètre *laTable* est omis, la table du formulaire ou du sous-formulaire courant est utilisée.

En mode Développement ou dans le cadre de l'exécution des commandes [DISPLAY SELECTION](display-selection.md) /[MODIFY SELECTION](modify-selection.md), cette commande peut être remplacée par l'appel de l'ensemble système UserSet, automatiquement maintenu par 4D. Toutefois, comme elle permet de désigner la table de laquelle récupérer les enregistrements marqués, la commande **GET HIGHLIGHTED RECORDS** peut en outre gérer les sélections d’enregistrements dans les sous-formulaires inclus. En effet dans ce cas, les sélections des sous-formulaires pouvant provenir de tables différentes, l'ensemble système UserSet n'est pas géré par 4D. Pour plus d'informations sur l'ensemble UserSet, reportez-vous à la section *Ensembles*.

La commande **GET HIGHLIGHTED RECORDS** peut être appelée hors du contexte d’un formulaire, cependant dans ce cas l’ensemble retourné est vide.   
L’ensemble désigné par le paramètre *nomEnsemble* peut être local/client, process ou interprocess. 

**Note :** Dans le cadre des sous-formulaires inclus, la commande **GET HIGHLIGHTED RECORDS** retourne un ensemble vide si le sous-formulaire ne dispose pas de la propriété de sélection **Multilignes**. Dans ce contexte, pour connaître la ligne sélectionnée, vous devez utiliser la commande [Selected record number](selected-record-number.md). 

#### Exemple 

Cette méthode indique combien d’enregistrements sont sélectionnés dans le sous-formulaire affichant les enregistrements de la table \[CDs\] :

```4d
 GET HIGHLIGHTED RECORDS([CDs];"$highlight")
 ALERT(String(Enregistrements dans ensemble("$highlight"))"+"enregistrements sélectionnés.")
 CLEAR SET("$highlight")
```

#### Variables et ensembles système 

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0\. 

#### Voir aussi 

[HIGHLIGHT RECORDS](highlight-records.md)  