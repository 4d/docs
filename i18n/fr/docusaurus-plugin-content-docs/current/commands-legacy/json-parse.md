---
id: json-parse
title: JSON Parse
slug: /commands/json-parse
displayed_sidebar: docs
---

<!--REF #_command_.JSON Parse.Syntax-->**JSON Parse** ( *chaîneJSON* {; *type*}{; *} ) -> Résultat<!-- END REF-->
<!--REF #_command_.JSON Parse.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| chaîneJSON | Text | &#x1F852; | Chaîne en JSON à analyser |
| type | Integer | &#x1F852; | Type dans lequel convertir les valeurs |
| * | Opérateur | &#x1F852; | Ajouter la ligne et la position de chaque propriété si la valeur retournée est un objet |
| Résultat | Object, any | &#x1F850; | Valeurs extraites de la chaîne JSON |

<!-- END REF-->

#### Description 

```undefined
__symbols:{//description de l'objet
   myAtt.mySubAtt...:{ //chemin de la propriété
      line:10, //numéro de la ligne de la propriété
      offset:35 //position de la propriété à partir du début de la ligne
      }
   }
```

#### Exemple 1 

Exemples de conversions simples : 

```4d
 var $r : Real
 $r:=JSON Parse("42.17") //$r = 42,17 (réel)
 
 var $el : Integer
 $el:=JSON Parse("120.13";Is longint) //$el=120
 
 var $t : Text
 $t:=JSON Parse("\"Année 42\"";Is text) //$t="Année 42" (texte)
 
 var $o : Object
 $o:=JSON Parse("{\"name\":\"jean\"}")
     // $o = {"name":"jean"} (objet 4D)
 
 var $b : Boolean
 $b:=JSON Parse("{\"manager\":true}";Is Boolean) //$b=vrai
 
 var $h : Time
 $h:=JSON Parse("5120";Is time) //$h=01:25:20
```

#### Exemple 2 

Exemples de conversions de données de type date : 

```4d
 $test:=JSON Parse("\"1990-12-25T12:00:00Z\"")
     // $test=1990-12-25T12:00:000Z
 var $date;$date2;$date3 : Date
 $date:=JSON Parse("\"2008-01-01T12:00:000Z\"";Is date)
  //$date=01/01/08
 $date2:=JSON Parse("\"2017-07-13T23:00:00.000Z\"";Is date)
  //$date2=14/07/17 (fuseau horaire Paris)
 SET DATABASE PARAMETER(Dates dans objets;String type without time zone)
 $date3:=JSON Parse("\"2017-07-13T23:00:00.000Z\"";Is date)
  //$date3=13/07/17
```

#### Exemple 3 

Si le paramétrage courant de stockage de date est "type date", vous pouvez écrire :

```4d
 var $o : Object
 var $json : Text
 var $birthday : Date
 
 $json:="{\"name\":\"Marcus\",\"birthday\":\"2017-10-16\"}"
 $o:=JSON Parse($json)
 $birthday:=$o.birthday
  //$birthday=16/10/17
```

**Note :** Pour plus d'informations sur ce paramétrage, reportez-vous à l'option "Utiliser le type date au lieu du format date ISO dans les objets" dans le *Page Compatibilité*. 

#### Exemple 4 

Cet exemple montre l’utilisation conjointe des commandes [JSON Stringify](json-stringify.md) et **JSON Parse** :

```4d
 var $JSONContact : Text
 var $Contact;$Contact2 : Object
 $Contact:=New object("name";"Monroe";"firstname";"Alan")
 
  // JSON Stringify : conversion d’un objet JSON en chaîne JSON
 $JSONContact:=JSON Stringify($Contact)
 
  // JSON Parse : conversion d’une chaîne JSON en nouvel objet
 $Contact2:=JSON Parse($JSONContact)
```

#### Exemple 5 

Vous souhaitez créer une collection 4D à partir d'un tableau JSON :

```4d
 var $myCol : Collection
 $myCol:=JSON Parse("[\"Lundi\",10,\"Mardi\",11,\"Mercredi\",12,false]")
```

#### Exemple 6 

```undefined
{
    "alpha": 4552,
    "beta": [
        {
            "echo": 45,
            "delta": "text1" 
        },
        {
            "echo": 52,
            "golf": "text2" 
        }
    ]
}
```

#### Voir aussi 

[JSON PARSE ARRAY](json-parse-array.md)  
[JSON Stringify](json-stringify.md)  
[JSON Validate](json-validate.md)  
*Types champs et variables*  