---
id: ob-is-defined
title: OB Is defined
slug: /commands/ob-is-defined
displayed_sidebar: docs
---

<!--REF #_command_.OB Is defined.Syntax-->**OB Is defined** ( *objeto* {; *propriedade*} ) : Boolean<!-- END REF-->
<!--REF #_command_.OB Is defined.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objeto | Object, Campo Object | &#8594;  | Objeto estruturado |
| propriedade | Text | &#8594;  | Se passar = propriedade a verificar, se omitir = verificar o objeto |
| Resultado | Boolean | &#8592; | Se a propriedade se omite: True se objeto está definido, caso contrário False.<br/>Se a propriedade passar: True se propriedade está definida, caso contrário False |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OB Is defined.Summary-->O comando**OB Is defined** devolve **True** se *objeto* ou *propriedade* se definem e **False** em caso contrário.<!-- END REF-->deve ter sido criado com o comando [C\_OBJECT](c-object.md) ou designar um campo objeto 4D..  
  
Por padrão, se omitir o parâmetro *propriedade*, o comando comprova que *objeto* esteja definido. Um objeto está definido se seu conteúdo foi inicializado.  
  
**Nota**: um objeto pode estar definido, porém vazio. Para saber se um objeto não está definido ou está vazio, utilize o comando [OB Is empty](ob-is-empty.md).  
  
Se passar o parâmetro *propriedade*, o comando comprova se existe esta propriedade em *objeto*. Tenha em conta que o parâmetro *propriedade* é sensível as maiúsculas e minúsculas.

#### Exemplo 1 

Sintaxe provando a inicialização de um objeto:

```4d
 var $object : Object
 $def:=OB Is defined($object) // $def=false since $object não está incializado
 
 OB SET($object;"Name";"Martin")
 OB REMOVE($object;"Name")
 $def2:=OB Is defined($object) // $def2=true já que $object está vazio {} mas foi inicializado
```

#### Exemplo 2 

Prova da existência de uma propriedade:

```4d
 var $ref : Object
 OB SET($ref;"name";"smith";"age";42)
  //...
 If(OB Is defined($ref;"age"))
  //...
 End if
```

Esta prova é equivalente a:

```4d
 If(OB Get type($Object;"name")#Is undefined)
```

#### Ver também 

[OB Is empty](ob-is-empty.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1231 |
| Thread-seguro | &check; |
| Proibido no servidor ||


