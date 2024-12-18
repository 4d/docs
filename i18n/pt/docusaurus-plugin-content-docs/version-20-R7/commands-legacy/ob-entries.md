---
id: ob-entries
title: OB Entries
slug: /commands/ob-entries
displayed_sidebar: docs
---

<!--REF #_command_.OB Entries.Syntax-->**OB Entries** ( *objeto* ) : Collection<!-- END REF-->
<!--REF #_command_.OB Entries.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objeto | Object | &#8594;  | Objeto para retornar conteúdos |
| Resultado | Collection | &#8592; | Coleção de objetos com propriedades key/value |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OB Entries.Summary-->O comando **OB Entries** retorna uma coleção de objetos contendo os conteúdos de *objeto* como pares de propriedade key/value.<!-- END REF--> 

Cada objeto retornado contém as propriedades abaixo:

| **Propriedade** | **Tipo** | **Descrição**                               |
| --------------- | -------- | ------------------------------------------- |
| key             | string   | nomes de propriedade enumeráveis do objeto  |
| value           | variant  | valor de propriedades enumeráveis do objeto |

Só os nomes de propriedade de primeiro-nível são retornados (nomes de propriedade de sub-objetos não são retornados). A ordem de propriedades dentro das coleções retornadas segue a ordem de definição das propriedades.

#### Exemplo 

Usando um objeto com um map hash (sistema key/value) oferece um acesso rápido e direto aos dados, como quando se usa um índice (por exemplo se nós precisássemos da idade de Mary, poderíamos escrever: $persons\["Mary"\])

```4d
 var $individual;$persons : Object
 var $names;$ages : Collection
 
 $persons:=New object
 $persons["John"]:=42
 $persons["Andy"]:=24
 $persons["Mary"]:=30
 $persons["Paul"]:=50
 
 ALERT("The average age is "+String(OB Values($persons).average()))
 ALERT("There are "+String(OB Keys($persons).length)+" persons")
 
 $ages:=OB Entries($persons).query("value>:1";25)
 ALERT("There are "+String($ages.length)+" persons who are over 25")
 
 ALERT("Their names are: "+$ages.extract("key").join("-"))
```

#### Ver também 

[OB Keys](ob-keys.md)  
[OB Values](ob-values.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1720 |
| Thread-seguro | &cross; |


