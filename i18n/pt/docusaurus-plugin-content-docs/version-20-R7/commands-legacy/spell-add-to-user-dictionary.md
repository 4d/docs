---
id: spell-add-to-user-dictionary
title: SPELL ADD TO USER DICTIONARY
slug: /commands/spell-add-to-user-dictionary
displayed_sidebar: docs
---

<!--REF #_command_.SPELL ADD TO USER DICTIONARY.Syntax-->**SPELL ADD TO USER DICTIONARY** ( *palavras* )<!-- END REF-->
<!--REF #_command_.SPELL ADD TO USER DICTIONARY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| palavras | Text, Text array | &#8594;  | Palavra ou lista de palavras para agregar ao dicionário do usuário |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.SPELL ADD TO USER DICTIONARY.Summary-->O comando **SPELL ADD TO USER DICTIONARY** agrega uma ou mais palavras ao dicionário usuário atual.<!-- END REF-->  
  
O dicionário usuário é um dicionário que contém palavras agregadas pelo usuário ao dicionário atual. Este dicionário é um arquivo chamado *UserDictionaryxxx.dic* (donde *xxx* representa o ID do dicionário atual) que se cria automaticamente na pasta 4D atual. Existe um dicionário usuário por cada dicionário atual utilizado.   
  
Pode passar em *palavras* uma cadeia texto ou um array texto com as palavras a adicionar ao dicionário usuário. Se uma das palavras já está no dicionário, será ignorada pelo comando.

#### Exemplo 

Adição de nomes próprios ao dicionário de usuário:

```4d
 ARRAY TEXT($arrTwords;0)
 APPEND TO ARRAY($arrTwords;"4D")
 APPEND TO ARRAY($arrTwords;"Wakanda")
 APPEND TO ARRAY($arrTwords;"Clichy")
 SPELL ADD TO USER DICTIONARY($arrTwords)
```

#### Ver também 

[SPELL CHECK TEXT](spell-check-text.md)  