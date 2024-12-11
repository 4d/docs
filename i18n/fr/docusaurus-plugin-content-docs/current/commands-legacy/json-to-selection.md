---
id: json-to-selection
title: JSON TO SELECTION
slug: /commands/json-to-selection
displayed_sidebar: docs
---

<!--REF #_command_.JSON TO SELECTION.Syntax-->**JSON TO SELECTION** ( *laTable* ; *jsonTab* )<!-- END REF-->
<!--REF #_command_.JSON TO SELECTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table 4D dans laquelle copier les éléments |
| jsonTab | Text | &#8594;  | Tableau d'objets en JSON |

<!-- END REF-->

#### Description 

<!--REF #_command_.JSON TO SELECTION.Summary-->La commande **JSON TO SELECTION** copie le contenu du tableau d'objets JSON *jsonTab* vers la sélection d’enregistrements de *laTable*.<!-- END REF--> 

Le paramètre *jsonTab* est un [texte](# "Une chaine de caractères jusqu'à 2 Go") représentant un tableau d'objets JSON contenant un ou plusieurs élément(s). Le format attendu est du type :

```json
"[{"attribut1":"valeur1","attribut2":"valeur2",...},...,{"attribut1":"valeurN","attribut2":"valeurN",...}]"
```

Si une sélection existe pour *laTable* au moment de l’appel, les éléments du tableau JSON sont copiés dans les enregistrements en fonction de l’ordre du tableau et de l’ordre des enregistrements. Si le nombre d’éléments définis dans le tableau JSON est supérieur au nombre d’enregistrements de la sélection courante, de nouveaux enregistrements sont créés. Les enregistrements, qu’ils soient nouveaux ou existants, sont automatiquement sauvegardés.

**Note :** Cette commande prend en charge les champs de type objet : les données JSON sont automatiquement converties. 

**Attention :** Comme **JSON TO SELECTION** remplace les informations éventuellement présentes dans les enregistrements existants, cette commande doit être utilisée avec prudence. 

Si un enregistrement est verrouillé par un autre process pendant l’exécution de la commande, il n’est pas modifié. Tous les enregistrements verrouillés sont placés dans l’*Ensemble système LockedSet*. Après l'exécution de **JSON TO SELECTION**, vous pouvez tester si l’ensemble *LockedSet* contient des enregistrements qui étaient verrouillés.

#### Exemple 

Utilisation de la commande **JSON TO SELECTION** pour ajouter des enregistrements dans la table \[Company\] : 

```4d
 var $Object1;$Object2;$Object3;$Object4 : Object
 var $ObjectString : Text
 ARRAY OBJECT($arrayObject;0)
 
 OB SET($Object1;"ID";"200";"Company Name";"4D SAS";"City";"Clichy")
 APPEND TO ARRAY($arrayObject;$Object1)
 
 OB SET($Object2;"ID";"201";"Company Name";"APPLE";"City";"Paris")
 APPEND TO ARRAY($arrayObject;$Object2)
 
 OB SET($Object3;"ID";"202";"Company Name";"IBM";"City";"London")
 APPEND TO ARRAY($arrayObject;$Object3)
 
 OB SET($Object4;"ID";"203";"Company Name";"MICROSOFT";"City";"New York")
 APPEND TO ARRAY($arrayObject;$Object4)
 
 $ObjectString:=JSON Stringify array($arrayObject)
 
     // $ObjectString = "[{"ID":"200","City":"Clichy","Company Name":"4D
     // SAS"},{"ID":"201","City":"Paris","Company Name":"APPLE"},{"ID":"202",
     //"City":"London","Company Name":"IBM"},{"ID":"203","City":"New
     //York","Company Name":"MICROSOFT"}]"
 
 JSON TO SELECTION([Company];$ObjectString)
     // vous créez 4 enregistrements dans la table [Company], remplissant les
     //champs ID, Company name et city
```

#### Voir aussi 

[Selection to JSON](selection-to-json.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1235 |
| Thread safe | &check; |
| Interdite sur le serveur ||


