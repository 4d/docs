---
id: web-service-set-parameter
title: WEB SERVICE SET PARAMETER
slug: /commands/web-service-set-parameter
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE SET PARAMETER.Syntax-->**WEB SERVICE SET PARAMETER** ( *nom* ; *valeur* {; *typeSOAP*} )<!-- END REF-->
<!--REF #_command_.WEB SERVICE SET PARAMETER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nom | Text | &#8594;  | Nom du paramètre à inclure dans la requête SOAP |
| valeur | Variable | &#8594;  | Variable 4D contenant la valeur du paramètre |
| typeSOAP | Text | &#8594;  | Type SOAP du paramètre |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB SERVICE SET PARAMETER.Summary-->La commande **WEB SERVICE SET PARAMETER** permet de définir un paramètre utilisé pour une requête SOAP cliente.<!-- END REF--> Appelez autant de fois cette commande qu’il y a de paramètres dans la requête.

Passez dans *nom* le nom du paramètre tel qu’il doit apparaître dans la requête SOAP.

Passez dans *valeur* la variable 4D contenant la valeur du paramètre. Dans le cadre des méthodes proxy, cette variable est généralement *$1*, *$2*, *$3*, etc., correspondant à un paramètre 4D passé à la méthode proxy lors de son appel. Il est toutefois possible d’utiliser des variables intermédiaires.

**Note :** Chaque variable ou tableau 4D utilisé(e) doit être préalablement déclaré(e) à l’aide des commandes des thèmes *Compilateur* et *Tableaux*.

Par défaut, 4D détermine automatiquement le type SOAP le plus approprié pour le paramètre *nom* en fonction du contenu de *valeur*. L’indication du type est incluse dans la requête.  
Toutefois, vous pouvez vouloir “forcer” la définition du type SOAP du paramètre. Dans ce cas, vous pouvez passer le paramètre optionnel *typeSOAP* ; vous devez utiliser une des chaînes de caractères suivantes (types de données primaires) :

| **typeSOAP** | **Description**                                                                  |
| ------------ | -------------------------------------------------------------------------------- |
| string       | Chaîne                                                                           |
| int          | Entier long                                                                      |
| boolean      | Booléen                                                                          |
| float        | Réel 32 bits                                                                     |
| decimal      | Réel avec décimale                                                               |
| double       | Réel 64 bits                                                                     |
| duration     | Durée en années mois jours heures minutes secondes, par exemple : P1Y2M3DT10H30M |
| datetime     | Date et heure au format ISO8601, par exemple 2003-05-31T13:20:00                 |
| time         | Heure, par exemple 13:20:00                                                      |
| date         | Date, par exemple 2003-05-31                                                     |
| gyearmonth   | Année et mois (calendrier grégorien), par exemple 2003-05                        |
| gyear        | Année (calendrier grégorien), par exemple 2003                                   |
| gmonthday    | Mois et jour (calendrier grégorien), par exemple --05-31                         |
| gday         | Jour (calendrier grégorien), par exemple ---31                                   |
| gmonth       | Mois (calendrier grégorien), par exemple --10--                                  |
| hexbinary    | Valeur exprimée en hexadécimal                                                   |
| base64binary | BLOB                                                                             |
| anyuri       | Uniform Resource Identifier (URI), par exemple : http://www.societe.com/page     |
| qname        | Nom XML qualifié (espace de nommage et partie locale)                            |
| notation     | Attribut Notation                                                                |

**Notes:** 

* * Pour plus d’informations sur les types de données XML, reportez-vous à l’URL <http://www.w3.org/TR/xmlschema-2/>  
   * Cette commande ne prend pas en charge les objets blob (type 4D.Blob). Reportez-vous à la section *Passer des blobs et des objets blob en commandes 4D* sur developer.4d.com.

#### Exemple 

Cet exemple définit deux paramètres : 

```4d
 var $1 : Text
 var $2 : Text
 WEB SERVICE SET PARAMETER("ville";$1)
 WEB SERVICE SET PARAMETER("pays";$2)
```

#### Voir aussi 

[WEB SERVICE CALL](web-service-call.md)  
[WEB SERVICE GET RESULT](web-service-get-result.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 777 |
| Thread safe | &check; |


