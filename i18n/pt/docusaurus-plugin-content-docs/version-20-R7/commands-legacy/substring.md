---
id: substring
title: Substring
slug: /commands/substring
displayed_sidebar: docs
---

<!--REF #_command_.Substring.Syntax-->**Substring** ( *fonte* ; *aPartirDe* {; *numCars*} ) : Text<!-- END REF-->
<!--REF #_command_.Substring.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| fonte | Text | &#8594;  | Cadeia da qual se tira a substring |
| aPartirDe | Integer | &#8594;  | Posição do primeiro caractere |
| numCars | Integer | &#8594;  | Número de caracteres a pegar |
| Resultado | Text | &#8592; | Substring de fonte |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Substring.Summary-->O comando **Substring** devolve a parte de *fonte* definida por *aPartirDe* e *numCars*.<!-- END REF-->  
  
O parâmetro *aPartirDe* indica o primeiro caractere da cadeia a devolver, e *numCars* define o número de caracteres a devolver.  
  
Se *aPartirDe* mais *numCars* é maior que o número de caracteres na cadeia ou se *numCars* não estiver especificado, **Substring** devolve todos os caracteres da cadeia a partir do caractere especificado por *aPartirDe*. Se *aPartirDe* for superior ao número de caracteres na cadeia, **Substring** devolve uma cadeia vazia ("").  
  
**Atenção**: quando se utiliza este comando em um contexto multi-estilo, deve converter os eventuais caracteres de fim de linha Windows ('\\r\\n') em caracteres de fim de linha simples ('\\r') para que o processamento seja válido. Isto se deve ao mecanismo que normaliza os finais de linha 4D para ter certeza a compatibilidade multi-plataforma para os textos. Para obter mais informação, consulte *Normalização automática de fins de linhas*.

#### Exemplo 1 

Este exemplo ilustra a utilização de **Substring**. Os resultados são atribuídos à variável *vsResult*. 

```4d
 vsResult:=Substring("08/04/62";4;2) // vsResult toma o valor "04"
 vsResult:=Substring("Emergencia";1;6) // vsResult toma o valor "Emerge"
 vsResult:=Substring(var;2) // vsResult toma o valor de todos os caracteres exceto o primeiro
```

#### Exemplo 2 

  
O seguinte método de projeto adiciona os parágrafos que são encontrados no texto (passado como primeiro parâmetro) a uma array de tipo texto ou alfa (cujo ponteiro é passado como segundo parâmetro):   
  
```4d
  // EXTRACT PARAGRAPHS
  // EXTRACT PARAGRAPHS ( texto ; Ponteiro )
  // EXTRACT PARAGRAPHS ( Texto a analisar ; -> Array de parágrafos )
 
 var $1 : Text
 var $2 : Pointer
 
 $vlElem:=Size of array($2->)
 Repeat
    $vlElem:=$vlElem+1
    INSERT IN ARRAY($2->;$vlElem)
    $vlPos:=Position(Char(Carriage return);$1)
    If($vlPos>0)
       $2->{$vlElem}:=Substring($1;1;$vlPos-1)
       $1:=Substring($1;$vlPos+1)
    Else
       $2->{$vlElem}:=$1
    End if
 Until($1="")
```

#### Ver também 

[Position](position.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 12 |
| Thread-seguro | &check; |
| Proibido no servidor ||


