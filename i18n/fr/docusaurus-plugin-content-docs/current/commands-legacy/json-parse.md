---
id: json-parse
title: JSON Parse
slug: /commands/json-parse
displayed_sidebar: docs
---

<!--REF #_command_.JSON Parse.Syntax-->**JSON Parse** ( *chaîneJSON* {; *type*}{; *} ) : any<!-- END REF-->
<!--REF #_command_.JSON Parse.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| chaîneJSON | Text | &#8594;  | Chaîne en JSON à analyser |
| type | Integer | &#8594;  | Type dans lequel convertir les valeurs |
| * | Opérateur | &#8594;  | Ajouter la ligne et la position de chaque propriété si la valeur retournée est un objet |
| Résultat | Object, any | &#8592; | Valeurs extraites de la chaîne JSON |

<!-- END REF-->

#### Description 

<!--REF #_command_.JSON Parse.Summary-->La commande **JSON Parse** analyse (parse) le contenu d’une chaîne formatée en JSON et en extrait des valeurs que vous pouvez stocker dans un champ ou une variable 4D.<!-- END REF--> Cette commande désérialise des données JSON ; elle effectue l’action inverse de la commande [JSON Stringify](json-stringify.md).

Passez dans *chaîneJSON* la chaîne au format JSON dont vous souhaitez analyser le contenu. Cette chaîne doit être correctement formatée, sinon une erreur de parsing est générée. **JSON Parse** peut donc être utilisée pour valider du JSON. 

**Note :** Si vous utilisez des pointeurs, vous devez appeler la commande [JSON Stringify](json-stringify.md) avant **JSON Parse**. 

Par défaut, si vous omettez le paramètre *type*, 4D tentera de convertir la valeur obtenue dans le type de la variable ou du champ utilisé pour stocker le résultat (s’il est défini). Sinon, 4D tentera de déduire le type. Vous pouvez également forcer l’interprétation du type en passant le paramètre *type* : passez une des constantes suivantes du thème *Types champs et variables* :

| Constante     | Type        | Valeur |
| ------------- | ----------- | ------ |
| Is Boolean    | Entier long | 6      |
| Is collection | Entier long | 42     |
| Is date       | Entier long | 4      |
| Is longint    | Entier long | 9      |
| Is object     | Entier long | 38     |
| Is real       | Entier long | 1      |
| Is text       | Entier long | 2      |
| Is time       | Entier long | 11     |

**Notes :** 

* Les valeurs de type numérique doivent être incluses dans l'intervalle ±10.421e±10
* Dans les valeurs de type texte, tous les caractères spéciaux doivent être échappés, y compris les guillemets (cf. exemples)
* Par défaut lorsque vous utilisez la constante Is date, la commande considère que la chaîne date contient une heure locale et non GMT. Vous pouvez modifier ce fonctionnement à l'aide du sélecteur Dates inside objects de la commande \[#cmd id="642"/\].
* A compter de 4D v16 R6, si le paramétrage courant de stockage des dates "type date", les chaînes date JSON au format "YYYY-MM-DD" sont automatiquement retournées sous forme de valeurs de type date par la commande **JSON Parse**. Pour plus d'informations sur ce paramétrage, veuillez vous reporter à l'option "Utiliser le type date au lieu du format date ISO dans les objets" dans la *Page Compatibilité*.
* Une valeur de type heure peut être retournée à partir d'un nombre dans une chaîne. Par défaut, 4D considère que la valeur est un nombre de secondes.

Si vous passez le paramètre optionnel *\** et si le paramètre *chaîneJSON* représente un objet, l'objet retourné contiend une propriété supplémentaire nommée *\_\_symbols* qui fournit le chemin, l'emplacement de la ligne et la position dans la ligne de chaque propriété et sous-propriété de l'objet. Cette information est utile pour le débogage. La structure de la propriété *\_\_symbols* est la suivante :

```json
__symbols:{//description de l'objet
   myAtt.mySubAtt...:{ //chemin de la propriété
      line:10, //numéro de la ligne de la propriété
      offset:35 //position de la propriété à partir du début de la ligne
      }
   }
```

**Note :** Le paramètre *\** est ignoré si la valeur retournée n'est pas de type objet.

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

Vous souhaitez analyser la chaîne suivante et obtenir le chemin et la position de chaque propriété :

```json
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

Vous pouvez écrire :

```4d
 var $obInfo : Object
 $obInfo=JSON Parse("json_string";Is object;*) //* pour ajouter la propriété __symbols
  //dans l'objet $obInfo retourné
```

L'objet *$obInfo* contient :

```json
{alpha:4552,
beta:[{echo:45,delta:text1},{echo:52,golf:text2}],
__symbols:{alpha:{line:2,offset:4},
beta:{line:3,offset:4},
beta[0].echo:{line:5,offset:12},
beta[0].delta:{line:6,offset:12},
beta[1].echo:{line:9,offset:12},
beta[1].golf:{line:10,offset:12}}}
```

#### Voir aussi 

[JSON PARSE ARRAY](json-parse-array.md)  
[JSON Stringify](json-stringify.md)  
[JSON Validate](json-validate.md)  
*Types champs et variables*  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1218 |
| Thread safe | &check; |
| Interdite sur le serveur ||


