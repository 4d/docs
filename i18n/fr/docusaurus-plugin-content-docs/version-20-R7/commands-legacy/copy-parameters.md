---
id: copy-parameters
title: Copy parameters
slug: /commands/copy-parameters
displayed_sidebar: docs
---

<!--REF #_command_.Copy parameters.Syntax-->**Copy parameters** {( *startFrom* )} : Collection<!-- END REF-->
<!--REF #_command_.Copy parameters.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| startFrom | Integer | &#8594;  | Starting index (included) |
| Résultat | Collection | &#8592; | New collection containing parameters actually passed |

<!-- END REF-->

#### Description 

<!--REF #_command_.Copy parameters.Summary-->La commande Copy parameters retourne une nouvelle collection contenant tous les paramètres passés à une méthode ou à une fonction.<!-- END REF--> Cette commande est utile lorsque vous devez transférer un certain nombre de paramètres d'une méthode ou d'une fonction à une autre méthode ou fonction. 

Dans le paramètre facultatif *startFrom*, vous pouvez passer l'index du paramètre à partir duquel vous souhaitez commencer à collecter les paramètres à transférer. Le paramètre *startFrom* lui-même est inclus. 

Lorsque la commande **Copy parameters** est appelée à l'intérieur d'une formule, elle retourne les paramètres passés explicitement à l'aide de *apply()* ou *call()* (et non ceux passés à la méthode ou fonction parente). 

**Copy parameters** retourne une collection vide si :

* elle n'est pas appelée dans une méthode ou fonction qui a été appelée par une autre méthode ou fonction,
* aucun paramètre n'a été passé à la méthode ou à la fonction parente.

#### Exemple 1 

Appeler une fonction différente en fonction du premier paramètre et passer d'autres paramètres à cette fonction :

```4d
 Function selectTask($task Text)
 Case of
    :($task="Task1")
       This.task1(Copy parameters(2))
    :($task="Task2")
       This.task2(Copy parameters(2))
 End case
```

Ou, appeler une autre fonction ou un autre objet avec **apply()** passer les paramètres :

```4d
 Function doSomething($param Text;$extraParameters Variant)
 This.delegate.doSomething.apply(This.delegate;Copy parameters)
```

#### Exemple 2 

Puisque la commande retourne une collection, elle peut être utilisée avec **.join()** pour générer une liste html par exemple :

```4d
  // Classe
 
 Function list($typeText)->Text
  //le type de liste est "u" ou "o"
 var $value : Collection
 $value:=Copy parameters(2)
 $html:="<"+$type+"l>
* "  
 $html+=$value.join("
* ")  
 $html+="
"
 return$html
 
  // Méthode
 
 $htmlList:=$c.list("u";"Alpha";"Bravo";"Charlie")
  // $htmlList = 
* Alpha
* Bravo
* Charlie

```

#### Voir aussi 

[Count parameters](count-parameters.md)  