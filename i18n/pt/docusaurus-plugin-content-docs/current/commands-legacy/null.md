---
id: "null"
title: "Null"
slug: /commands/null
displayed_sidebar: docs
---

<!--REF #_command_.Null.Syntax-->**Null**  : Null<!-- END REF-->
<!--REF #_command_.Null.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Null | &#8592; | Null value |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Null.Summary-->**Null** devolve o valor **null** de tipo *null*.<!-- END REF-->

Esta função permite afetar ou comparar o valor **null** dos seguintes elementos da linguagem 4D:

| **Elementos da linguagem**                                   | **Comentários**                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Valores de propriedades de objetos                           | A comparação de **Null** com uma propriedade de objeto devolvido True se o valor da propriedade for null, senão false. Para simplificar o código, comparar Null também retorna true se a propriedade não existir no objeto (ou seja [Undefined](undefined.md)), ver exemplo 4\. |
| Elementos de coleções                                        | Quando uma coleção for expandida adicionando elementos não adjacentes, todos os elementos intermediários obtêm automaticamente o valor **null**.                                                                                                                                |
| Variáveis de tipo objeto ([C\_OBJECT](c-object.md))          | Ver (\*) abaixo                                                                                                                                                                                                                                                                 |
| Variáveis de tipo coleção ([C\_COLLECTION](c-collection.md)) | Ver (\*) abaixo                                                                                                                                                                                                                                                                 |
| Variáveis de tipo ponteiro ([C\_POINTER](c-pointer.md))      | Ver (\*) abaixo                                                                                                                                                                                                                                                                 |
| Variáveis de tipo imagem ([C\_PICTURE](c-picture.md))        | (\*) Atribuir o valor null a uma variável deste tipo apaga seu conteúdo. Neste caso, tem o mesmo efeito que chamar ao comando [CLEAR VARIABLE](clear-variable.md)                                                                                                               |
| Variáveis variant ([C\_VARIANT](c-variant.md))               |                                                                                                                                                                                                                                                                                 |

**Nota:** este comando não pode ser utilizado com campos escalares do banco de dados. Os valores Null nos campos do banco de dados são gerenciados pelo motor SQL e são gestionados através dos comandos [Is field value Null](is-field-value-null.md) e [SET FIELD VALUE NULL](set-field-value-null.md).

#### Exemplo 1 

Se quiser atribuir e testar o valor **null** com as propriedades dos objetos:

```4d
 var vEmp : Object
 vEmp:=New object
 vEmp.name:="Smith"
 vEmp.children:=Null
 
 If(vEmp.children=Null) //true
 End if
 If(vEmp.name=Null) //false
 End if
 If(vEmp.parent=Null) //true
 End if
```

**Nota:** este exemplo requer que a notação objeto esteja ativada no banco de dados.

#### Exemplo 2 

Se quiser atribuir e comparar o valor **null** a um elemento coleção:

```4d
 var myCol : Collection
 myCol:=New collection(10;20;Null)
 ...
 If(myCol[2]=Null)
  // se o 3ro elemento for  null
    ...
 End if
```

#### Exemplo 3 

Esses exemplos mostram as várias formas de atribuir ou comaprar o valor **null** a variáveis: 

```4d
  //variável objeto
 var $o : Object
 $o:=New object
 $o:=Null //equivalente a CLEAR VARIABLE($o)
 If($o#Null) //equivalente a If (OB Is defined($o))
 End if
```

```4d
  //variável coleção
 var $c : Collection
 $c:=New collection
 $c:=Null //equivalente a CLEAR VARIABLE($c)
 If($c#Null)
 End if
```

```4d
  //variável ponteiro
 var $p : Pointer
 $p:=->$v
 $p:=Null //equivalente a CLEAR VARIABLE($p)
 If($p=Null) //equivalente a If (Is Nil pointer($p))
 End if
```

```4d
  //Variável imagem
 var $i : Picture
 $i:=$vpicture
 $i:=Null //equivalente a CLEAR VARIABLE($i)
 If($i#Null) //equivalente a If (Picture size($i)#0)
 End if
```

#### Exemplo 4 

Abaixo os diferentes resultados do comando [Undefined](undefined.md) assim como do comando [Null](null.md) com propriedades de objeto, dependendo do contexto:

```4d
 var vEmp : Object
 vEmp:=New object
 vEmp.name:="Smith"
 vEmp.children:=Null
 
 $undefined:=Null(vEmp.name) // False
 $null:=(vEmp.name=Null) //False
 
 $undefined:=Null(vEmp.children) // False
 $null:=(vEmp.children=Null) //True
 
 $undefined:=Null(vEmp.parent) // True
 $null:=(vEmp.parent=Null) //True
```

#### Ver também 

[Is field value Null](is-field-value-null.md)  
[OB SET NULL](ob-set-null.md)  
[SET FIELD VALUE NULL](set-field-value-null.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1517 |
| Thread-seguro | &check; |
| Proibido no servidor ||


