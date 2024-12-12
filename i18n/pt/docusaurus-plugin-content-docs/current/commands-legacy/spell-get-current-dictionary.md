---
id: spell-get-current-dictionary
title: SPELL Get current dictionary
slug: /commands/spell-get-current-dictionary
displayed_sidebar: docs
---

<!--REF #_command_.SPELL Get current dictionary.Syntax-->**SPELL Get current dictionary**  : Integer<!-- END REF-->
<!--REF #_command_.SPELL Get current dictionary.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | ID do dicionário utilizado para a correção ortográfica |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.SPELL Get current dictionary.Summary-->O comando **SPELL Get current dictionary** devolve o número de ID do dicionário que está sendo utilizado.<!-- END REF-->

#### Exemplo 

Queremos mostrar a linguagem do dicionário atual: 

```4d
  // Lista dos dicionários carregados
 SPELL GET DICTIONARY LIST($IDs_al;$Codes_at;$Names_at)
 $curLangCode:=SPELL Get current dictionary
 $countryName:=$Names_at{Find in array($IDs_al;$curLangCode)}
  // Mostrar mensagens
 ALERT("Dicionário atual: "+$countryName) // Espanhol
```

#### Ver também 

[SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md)  