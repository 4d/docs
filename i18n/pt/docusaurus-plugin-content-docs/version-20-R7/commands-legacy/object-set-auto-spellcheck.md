---
id: object-set-auto-spellcheck
title: OBJECT SET AUTO SPELLCHECK
slug: /commands/object-set-auto-spellcheck
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET AUTO SPELLCHECK.Syntax-->**OBJECT SET AUTO SPELLCHECK** ( {* ;} *objeto* ; *correAuto* )<!-- END REF-->
<!--REF #_command_.OBJECT SET AUTO SPELLCHECK.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| correAuto | Boolean | &#8594;  | True = correção automática,False= não correção automática |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET AUTO SPELLCHECK.Summary-->O comando **OBJECT SET AUTO SPELLCHECK** permite definir ou modificar dinamicamente o estado da opção **Correção ortográfica** dos objetos designados pelos parâmetros *objeto* e *\** para o processo atual.<!-- END REF--> Esta opção ativa ou desativa a correção ortográfica automática durante a entrada para o objeto (objetos de tipo texto unicamente).  
  
Se passa o parâmetro opcional*\** , indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, isto indica que o parâmetro *objeto* é uma variável. Neste caso, se passa uma referencia de variável em lugar de uma cadeia.  
  
Passe **True** em *correAuto* para ativar esta função para objeto e **False** para desativar-la. 

#### Ver também 

[OBJECT Get auto spellcheck](object-get-auto-spellcheck.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1173 |
| Thread-seguro | &cross; |


