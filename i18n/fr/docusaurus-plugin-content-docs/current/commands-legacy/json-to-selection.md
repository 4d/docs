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
| laTable | Table | &#x1F852; | Table 4D dans laquelle copier les éléments |
| jsonTab | Texte | &#x1F852; | Tableau d'objets en JSON |

<!-- END REF-->

#### Description 

```undefined
"[{"attribut1":"valeur1","attribut2":"valeur2",...},...,{"attribut1":"valeurN","attribut2":"valeurN",...}]"
```

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