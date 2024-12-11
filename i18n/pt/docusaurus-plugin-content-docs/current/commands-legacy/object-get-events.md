---
id: object-get-events
title: OBJECT GET EVENTS
slug: /commands/object-get-events
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET EVENTS.Syntax-->**OBJECT GET EVENTS** ( {* ;} *objeto* ; *arrEvents* )<!-- END REF-->
<!--REF #_command_.OBJECT GET EVENTS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto "" para designar o formulário (se for especificado *) ou<br/>Campo ou variável (se for omitido *) |
| arrEvents | Integer array | &#8592; | Array de eventos desativados |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT GET EVENTS.Summary-->O comando **OBJECT GET EVENTS** permite obter a configuração atual dos eventos formulário do formulário, do objeto ou dos objetos designado(s) pelos parâmetros *objeto* e *\**.<!-- END REF--> 

Os eventos formulário se podem ativar/desativar, já seja utilizando a lista de propriedades ou utilizando o comando [OBJECT SET EVENTS](object-set-events.md) é chamado no processo atual.

Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passa uma referência de campo ou variável no lugar de uma cadeia (campo ou variável objeto unicamente).   
Para obter a configuração dos eventos do formulário para o próprio formulário, passe o parâmetro opcional *\** e uma cadeia vazia "" em *objeto*: neste caso, você designa o formulário atual.

**Nota:** Se deseja obter os eventos de um subformulário relacionados com uma tabela, só pode ser utilizada a sintaxe baseada no nome do objeto.

Passe um array inteiro longo no parâmetro *arrEvents*. Quando se executa o comando, se atribui o tamanho a este array automaticamente e recebe todos os eventos formulário pré-definidos ou personalizados que foram ativados para o objeto ou o formulário. Pode comparar os valores recebidos com as constantes do tema "*Form event*".  
  
Tenha em conta que o array *arrEvents* se devolve vazio sem que nenhum método objeto esteja associado ao objeto ou se nenhum método formulário se associa ao formulário.

#### Exemplo 

Você quer ativar dois eventos e obter a lista de eventos para um objeto:

```4d
 ARRAY LONGINT($ArrCurrentEvents;0)
 ARRAY LONGINT($ArrEnabled;2)
 $ArrEnabled{1}:=On Header Click
 $ArrEnabled{2}:=On Footer Click
 OBJECT SET EVENTS(*;"Col1";$ArrEnabled;Enable events others unchanged)
 OBJECT GET EVENTS(*;"Col1";$ArrCurrentEvents)
```

#### Ver também 

[OBJECT SET EVENTS](object-set-events.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1238 |
| Thread-seguro | &check; |
| Proibido no servidor ||


