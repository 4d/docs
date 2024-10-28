---
id: object-set-events
title: OBJECT SET EVENTS
slug: /commands/object-set-events
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET EVENTS.Syntax-->**OBJECT SET EVENTS** ( {* ;} *objeto* ; *arrEventos* ; *modo* )<!-- END REF-->
<!--REF #_command_.OBJECT SET EVENTS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se for especificado, objeto é um nome de objeto (cadeia) Se for omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto ou "" para designar o formulário (se * for especificado) ou<br/>Campo ou variável (se * for omitido) |
| arrEventos | Integer array | &#8594;  | Array de eventos a definir |
| modo | Integer | &#8594;  | Modo de ativação dos eventos definidos em arrEventos |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.OBJECT SET EVENTS.Summary-->O comando **OBJECT SET EVENTS** modifica, para o processo atual, a configuração dos eventos formulário do formulário, dos objetos designados pelos parâmetros *objeto* e *\** .<!-- END REF-->

Se passar o parâmetro opcional *\** se indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passa uma referência de campo ou variável em vez de uma cadeia (campo ou variável objeto unicamente).  
Para definir a configuração de eventos para o formulário, passe o parâmetro opcional *\** e uma cadeia vazia "" em *objeto*, neste caso, você designa o formulário atual.

**Nota:** Se deseja modificar os eventos de um sub formulário relacionado com uma tabela, só pode utilizar a sintaxe baseada no nome do objeto.

No parâmetro *arrEventos*, passe um array inteiro longo que contenha a lista de eventos de formulários pré definidos ou personalizados que deseja modificar (se pode utilizar o parâmetro *modo* para especificar se a modificação consiste na ativação ou desativação dos eventos) . Para designar um evento pré definido a modificar, pode passar em cada elemento do array *arrEventos*, uma das seguintes constantes, que se encontram no tema "*Form event*":  
  
É importante levar em conta que o evento On Load não está incluído nesta lista: este evento não pode ser definido porque já foi gerado durante a execução do comando.

Em *arrEventos*, também pode passar todo valor correspondente a um evento personalizado. Neste caso, recomendamos utilizar valores negativos (ver o comando [CALL SUBFORM CONTAINER](call-subform-container.md)).

O parâmetro *modo* se utiliza para definir o tratamento global a realizar para os elementos do array. Para isso, pode passar uma das seguintes constantes, que se encontra no tema "*Propriedades dos objetos* ":

| Constante                       | Tipo          | Valor | Comentário                                                                                                |
| ------------------------------- | ------------- | ----- | --------------------------------------------------------------------------------------------------------- |
| Disable events others unchanged | Inteiro longo | 2     | Todos os eventos listados no array *arrEvents* se desativam; o estado de todos os outros eventos não muda |
| Enable events disable others    | Inteiro longo | 0     | Todos os eventos listados no array *arrEvents* se ativam; todos os outros eventos se desativam            |
| Enable events others unchanged  | Inteiro longo | 1     | Todos os eventos listados no array *arrEvents* se ativam; o estado de todos os outros eventos não muda    |

O comando **OBJECT SET EVENTS** pode dar lugar a ativação de eventos que não são compatíveis com o *objeto* (dependendo do tipo). Neste caso, simplesmente se ignoram os eventos.

Se um *objeto* é duplicado depois de uma chamada ao comando **OBJECT SET EVENTS**, a configuração resultante de ativação/desativação também é duplicada.

#### Exemplo 1 

Ativação de três eventos formulario para um conjunto de objetos list box e desativação de outros eventos:

```4d
 ARRAY LONGINT($MyEventsOnLB;3)
 $MyEventsOnLB {1}:=On After Sort
 $MyEventsOnLB {2}:=On Column Moved
 $MyEventsOnLB {3}:=On Column Resize
 OBJECT SET EVENTS(*;"MyLB@";$MyEventsOnLB;Enable events disable others)
  // Ativa 3 eventos e desativa todos os outros
```

#### Exemplo 2 

Desativação de três eventos formulário para um conjunto de objetos list box, sem modificar os outros eventos:

```4d
 ARRAY LONGINT($MyEventsOnLB;3)
 $MyEventsOnLB {1}:=On After Sort
 $MyEventsOnLB {2}:=On Column Moved
 $MyEventsOnLB {3}:=On Column Resize
 OBJECT SET EVENTS(*;"MyLB@";$MyEventsOnLB;Disable events others unchanged)
  // Desativa só 3 eventos
```

#### Exemplo 3 

Ativação de um evento formulário para um objeto, sem modificar os outros eventos:

```4d
 ARRAY LONGINT($MyEventsOnLB;1)
 $MyEventsOnLB {1}:=On Column Moved
 OBJECT SET EVENTS(*;"Col1";$MyEventsOnLB;Enable events others unchanged)
  // Ativa unicamente o evento
```

#### Exemplo 4 

Desativação de todos os eventos do formulário:  

```4d
 ARRAY LONGINT($MyFormEvents;0)
 OBJECT SET EVENTS(*;"";$MyFormEvents;Enable events disable others)
  // Desativa todos os eventos
```

#### Exemplo 5 

Desativação de um só evento do formulário sem modificar os outros:

```4d
 ARRAY LONGINT($MyFormEvents;1)
 $MyFormEvents{1}:=On Timer
 OBJECT SET EVENTS(*;"";$MyFormEvents;Disable events others unchanged)
  // Só desativa o evento
```

#### Ver também 

*Form event*  
[OBJECT GET EVENTS](object-get-events.md)  