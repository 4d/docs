---
id: json-parse-array
title: JSON PARSE ARRAY
slug: /commands/json-parse-array
displayed_sidebar: docs
---

<!--REF #_command_.JSON PARSE ARRAY.Syntax-->**JSON PARSE ARRAY** ( *chaîneJSON* ; *tab* )<!-- END REF-->
<!--REF #_command_.JSON PARSE ARRAY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| chaîneJSON | Text | &#8594;  | Chaîne en JSON à analyser |
| tab | Array | &#8592; | Tableau contenant le résultat de l’analyse de la chaîne JSON |

<!-- END REF-->

#### Description 

<!--REF #_command_.JSON PARSE ARRAY.Summary-->La commande **JSON PARSE ARRAY** analyse (*parse*) le contenu d’une chaîne formatée en JSON et place les données extraites dans le tableau *tab*.<!-- END REF--> Cette commande désérialise des données JSON ; elle effectue l’action inverse de la commande [JSON Stringify array](json-stringify-array.md).

Passez dans *chaîneJSON* la chaîne au format JSON dont vous souhaitez analyser le contenu. Cette chaîne doit être correctement formatée, sinon une erreur d'analyse est générée. 

Passez dans *tab* le tableau du type souhaité devant recevoir le résultat de l’analyse.

**Note :** A compter de 4D v16 R4, la commande **JSON PARSE ARRAY** pourra généralement être remplacée par un appel à la commande [JSON Parse](json-parse.md) qui retourne une **collection**. Les collections sont basées sur les tableaux JSON et permettent de stocker des données de types variés, ce qui procure plus de souplesse que les tableaux. 

#### Exemple 

Dans cet exemple, les données des champs des enregistrements d’une table sont extraites puis placées dans des tableaux d’objets :

```4d
 var $ref : Object
 ARRAY OBJECT($sel;0)
 ARRAY OBJECT($sel2;0)
 var v_String : Text
 
 OB SET($ref;"name";->[Company]Company Name)
 OB SET($ref;"city";->[Company]City)
 
 While(Not(End selection([Company])))
       $ref_company:=OB Copy($ref;True)
       APPEND TO ARRAY($sel;$ref_company)
              // $sel{1}={"name":"4D SAS","city":"Clichy"}
              // $sel{2}={"name":"MyComp","city":"Lyon"}
              // ...
       NEXT RECORD([Company])
 End while
 
 v_String:=JSON Stringify array($sel)
     // v_String= [{"name":"4D SAS","city":"Clichy"},{"name":"MyComp","city":"Lyon"}...]
 JSON PARSE ARRAY(v_String;$sel2)
           // $sel2{1}={"name":"4D SAS","city":"Clichy"}
           // $sel2{2}={"name":"MyComp","city":"Lyon"}
           //...
```

#### Voir aussi 

[JSON Parse](json-parse.md)  
[JSON Stringify array](json-stringify-array.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1219 |
| Thread safe | &check; |
| Interdite sur le serveur ||


