---
id: ob-entries
title: OB Entries
slug: /commands/ob-entries
displayed_sidebar: docs
---

<!--REF #_command_.OB Entries.Syntax-->**OB Entries** ( *objet* ) : Collection<!-- END REF-->
<!--REF #_command_.OB Entries.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objet | Object | &#8594;  | Objet retournant le contenu |
| Résultat | Collection | &#8592; | Collection d'objets avec les propriétés key/value |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.OB Entries.Summary-->La commande **OB Entries** retourne une collection d'objets dont le contenu correspond à l'*objet* comme une paire de propriétés key/value.<!-- END REF--> 

Chaque objet retourné contient les propriétés suivantes :

| **Propriété** | **Type** | **Description**                              |
| ------------- | -------- | -------------------------------------------- |
| key           | string   | Nom de la propriété énumérable de l'objet    |
| value         | variant  | Valeur de la propriété énumerable de l'objet |

Seuls les noms de propriétés de premier niveau sont retournés (les noms des propriétés des sous-objets ne sont pas retournés). L'ordre des propriétés de la collection retournée suit l'ordre de défintion des propriétés.

#### Exemple 

L'utilisation d'un objet comme une hashmap (système clé/valeur) permet d'accéder rapidement et directement aux données, tout comme l'utilisation d'un index (ex : si nous souhaitons connaitre l'âge de Marie, nous écrivons $persons\["Marie"\])

```4d
 var $individual;$persons : Object
 var $names;$ages : Collection
 
 $persons:=New object
 $persons["John"]:=42
 $persons["Andy"]:=24
 $persons["Marie"]:=30
 $persons["Paul"]:=50
 
 ALERT("La moyenne d'âge est de "+String(OB Valeurs($persons).average()))
 ALERT("On compte"+String(OB Cles($persons).length)+" personnes")
 
 $ages:=OB Entries($persons).query("value>:1";25)
 ALERT("On compte"+String($ages.length)+" personnes âgées de plus de 25 ans")
 
 ALERT("Elles s'appellent : "+$ages.extract("key").join("-"))
```

#### Voir aussi 

[OB Keys](ob-keys.md)  
[OB Values](ob-values.md)  