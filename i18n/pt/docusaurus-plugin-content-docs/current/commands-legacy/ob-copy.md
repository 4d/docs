---
id: ob-copy
title: OB Copy
slug: /commands/ob-copy
displayed_sidebar: docs
---

<!--REF #_command_.OB Copy.Syntax-->**OB Copy** ( *objeto* {; resolvePont | {; *opção* {; *groupWith*}}} )  : Object<!-- END REF-->
<!--REF #_command_.OB Copy.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objeto | Object, Campo Object | &#8594;  | Objeto estruturado |
| resolvePont | Boolean | &#8594;  | True = resolve os ponteiros, False ou se omitido = não resolve ponteiros |
| opção | Integer | &#8594;  | ck shared: retorna um objeto partilhado, ck resolve pointers: resolve os ponteiros antes de copiar |
| groupWith | Collection, Object | &#8594;  | Coleção partilhada ou objeto para ser agrupado com o objeto retornado |
| Resultado | Object | &#8592; | Cópia de objeto |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OB Copy.Summary-->O comando **OB Copy** devolve um objeto que contém uma cópia completa das propriedades, sub objetos e valores de *objeto*.<!-- END REF-->
  
Se o *objeto* conter valores de tipo de ponteiro, por padrão a cópia também contém os ponteiros. No entanto, pode resolver os ponteiros ao momento da cópia passando **True** no parâmetro *resolvePont*. Neste caso, cada ponteiro presente como valor em objeto se avalia ao momento da cópia e utiliza seu valor não referenciado.

**Nota:** se propriedades de *objeto* são objetos compartilhados ou coleções compartilhadas, eles se tornam objetos ou coleções padrão (não compartilhados) na cópia retornada. Use a segunda sintaxe se quiser retornar elementos partilhados (ver abaixo)

* Segunda sintaxe: **OB Copy(object{; option{; groupWith}})**

Se passado, o parâmetro *opção* pode conter uma das constantes abaixo (ou ambas):

| **opção**           | **Descrição**                                                                                                                                                                                                                                                                                                         |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ck resolve pointers | se o objeto original conter valores de tipo ponteiro, como padrão a cópia também contém os ponteiros. Entretanto, pode resolver os ponteiros quando copiar (passando ck resolve pointers. Neste caso, cada ponteiro presente no objeto é avaliado quando copiar e seu valor sem referência for usado.                 |
| ck shared           | como padrão **OB Copy** retorna um objeto normal (não partilhado), mesmo se o comando for aplicado para um objeto partiilhado. Passe a constante ck shared para criar um objeto partilhado. Nesse caso, pode usar o parâmetro *groupWith* para associar o objeto partilhado com outra coleção ou objeto (ver abaixo). |

O parâmetro *groupWith* permite que determine uma coleção ou um objeto com o qual o objteo resultante deveria ser associado.

**Notas:** 

* **OB Copy** pode ser usado com um objeto de seleção de entidades. De forma predeterminada, se omitir ck shared, se devolve uma selección de entidades *não compartida*. Se passar ck shared, se devolve uma seleção de entidades compartida. Neste contexto, a opção *agruparCom* é inútil já que uma seleção de entidades não tem um *identificador de bloqueio*.
* O mesmo principio se aplica às seleções de entidades armazenadas dentro das propriedades de *objeto*. Entretanto, o comando se otimiza quando se passa ck shared e uma seleção de entidades aninhada é *compaível*: a mesma referência de seleção de entidades se devolve no objeto resultante.
* Os objetos almazém de dados, a classe de dados e entidade não podem ser copiados. Se chamar ao comando **OB Copy** com eles, se devolve um valor Null.

#### Exemplo 1 

Você quer duplicar um objeto que contém valores simples:

```4d
 var $Object : Object
 var $JsonString : Text
 
 ARRAY OBJECT($arraySel;0)
 ALL RECORDS([Product])
 While(Not(End selection([Product])))
    OB SET($Object;"id";[Product]ID_Product)
    OB SET($Object;"Product Name";[Product]Product_Name)
    OB SET($Object;"Price";[Product]Price)
    OB SET($Object;"Tax rate";[Product]Tax_rate)
    $ref_value:=OB Copy($Object) //direct copy
    APPEND TO ARRAY($arraySel;$ref_value)
  //o conteúdo de $ref_value é idêntico ao do $Object
    NEXT RECORD([Product])
 End while
  //o conteúdo de $ref_value
 $JsonString:=JSON Stringify array($arraySel)
```

#### Exemplo 2 

Duplique um objeto que contenha ponteiros:

```4d
 var $ref : Object
 
 OB SET($ref;"name";->[Company]name) //object with pointers
 OB SET($ref;"country";->[Company]country)
 ARRAY OBJECT($sel;0)
 ARRAY OBJECT($sel2;0)
 
 ALL RECORDS([Company])
 
 While(Not(End selection([Company])))
    $ref_comp:=OB Copy($ref) // copy without evaluating pointers
  // $ref_comp={"name":"->[Company]name","country":"->[Company]Country"}
    $ref_comp2:=OB Copy($ref;True) //copy with evaluation of pointers
  // $ref_comp={"name":"4D SAS","country":"France"}
    APPEND TO ARRAY($sel;$ref_comp)
    APPEND TO ARRAY($sel2;$ref_comp2)
    NEXT RECORD([Company])
 End while
 
 $Object:=JSON Stringify array($sel)
 $Object2:=JSON Stringify array($sel2)
 
  // $Object = [{"name":"","country":""},{"name":"","country":""},...]
  // $Object2 = [{"name":"4D SAS","country":"France"},{"name":"4D, Inc","country":"USA"},{"name":"Catalan","country":"France"}...]
```

#### Exemplo 3 

Para copiar o objeto normal (não compartilhado) *$person* no objeto partilhado *$sharedObject*, precisamos criar uma cópia partilhada do objeto (*$sharedObject*).

```4d
 var $person;$copy;$sharedObject : Object
 var $text : Text
 
 $text:=Document to text(Get 4D folder(Current resources folder)+"person.txt")
 $person:=JSON Parse($text) //$person é um objeto padrão
 $sharedObject:=New shared object()
 $copy:=OB Copy($person;ck shared) //$copy é um objeto padrão
 
  //assim pode ser copiado em  $sharedObject
 Use($sharedObject)
    $sharedObject.person:=$copy
 End use
```

#### Exemplo 4 

*$obj* contém um ponteiro (propriedade "name") no registro atual do campo "name".

```4d
 var $obj;$objWithPtr;$sharedObjWithPtr : Object
 $obj:=New object()
 
  //$obj é um objeto com um ponteiro
 OB SET($obj;"name";->[Persons]name)
 
 ALL RECORDS([Persons])
  //Agora há um registro atual na tabela [Persons] de forma que [Persons]name é preenchido
  //
  // Se quisermos copiar $obj como um objeto padrão com avaliação de ponteiros
  // fazemos isto:
 $objWithPtr:=OB Copy($obj;True)
  //
  // Se quisermos copiar $obj como um objeto compartilhado com avaliação de ponteiros
  // fazemos isto:
 $sharedObjWithPtr:=OB Copy($obj;ck resolve pointers+ck shared)
```

#### Exemplo 5 

Imagine que queira copiar *$sharedObj* em *$sharedCol mas* como eles pertencem a grupos compartilhados diferentes, uma cópia direta resultaria em um erro. Primeiro deve copiar *$sharedObj* e designar *$sharedColl como um grupo compartilhado para a cópia*. 

```4d
 var $sharedObj;$objCopy : Object
 var $sharedColl : Collection
 
  //$sharedObj pertence a um grupo compartilhado
 $sharedObj:=New shared object("lastname";"Smith";"address";New shared object("city";"New York"))
  //$sharedColl pertence a outro grupo partilhado
 $sharedColl:=New shared collection(New shared object("lastname";"Brown"))
 
 $objCopy:=OB Copy($sharedObj;ck shared;$sharedColl)
  //$objCopy agora está no mesmo grupo partilhado que  $sharedColl
 
  //assim $objCopy pode ser copiado em  $sharedColl sem erros
 Use($sharedColl)
    $sharedColl.push($objCopy)
 End use
```

#### Ver também 

[OB Get](ob-get.md)  
*Objetos compartidos e Coleções compartidas*  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1225 |
| Thread-seguro | &check; |
| Proibido no servidor ||


