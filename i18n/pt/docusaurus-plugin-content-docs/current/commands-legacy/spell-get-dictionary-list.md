---
id: spell-get-dictionary-list
title: SPELL GET DICTIONARY LIST
slug: /commands/spell-get-dictionary-list
displayed_sidebar: docs
---

<!--REF #_command_.SPELL GET DICTIONARY LIST.Syntax-->**SPELL GET DICTIONARY LIST** ( *lingID* ; *lingArquivos* ; *lingNoms* )<!-- END REF-->
<!--REF #_command_.SPELL GET DICTIONARY LIST.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| lingID | Integer array | &#8592; | IDs únicos das linguagens |
| lingArquivos | Text array | &#8592; | Nomes dos arquivos de linguagem instalados |
| lingNoms | Text array | &#8592; | Nomes locais das linguagens |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.SPELL GET DICTIONARY LIST.Summary-->O comando **SPELL GET DICTIONARY LIST** devolve nos arrays *lingID*, *lingArquivos* e *lingNoms*, os IDs, os nomes de arquivos e os nomes dos linguagens correspondentes aos arquivos de dicionário Hunspell instalados no equipo.<!-- END REF-->  
  
**Nota**: Para maior informação sobre os dicionários Hunspell, consulte a seção *Correção ortográfica* no manual de *Referência de Desenho*. 

* *lingID* recebe os números de ID gerados automaticamente e utilizados com o comando [SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md).  
Note que os IDs são únicos e são baseados nos nomes de arquivos. Este comando se utiliza principalmente durante o desenvolvimento, não têm que regenerar os IDS cada vez que a base seja executada.
* *lingArquivos* recebe os nomes dos arquivos de dicionários instalados na máquina.
* *lingNoms* recebe os nomes das linguagens expressadas na linguagem atual da aplicação. Por exemplo, para um dicionário francês, o valor "français (France)" será devolvido em uma máquina configurada em francês e "French (France)" em um sistema inglês. O nome da linguagem é seguido por "- Hunspell". Este campo só é válido para os arquivos "conhecidos" por 4D. Para os arquivos não conhecidos (por exemplo, arquivos personalizados), é devolvido o nome "N/A - Hunspell". Este principio não lhe impede utilizar o dicionário (se o arquivo correspondente é válido), o ID devolvido pode ser passado ao comando [SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md).

#### Exemplo 

Você coloca "fr-classic+reform1990.aff" e "fr-classic+reform1990.dic" como também "fr-dentist.aff" e "fr-dentist.dic" no diretório Hunspell:

```4d
 ARRAY LONGINT($langID;0)
 ARRAY TEXT($dicName;0)
 ARRAY TEXT($langDesc;0)
 SPELL GET DICTIONARY LIST($langID;$dictName;$langDesc)
```

| **$langID** | **$dictName**         | **$langDesc**              |
| ----------- | --------------------- | -------------------------- |
| 65536       | en\_GB                | English (UK)               |
| 65792       | en\_US                | English (USA)              |
| 131072      | de\_DE                | German (Germany)           |
| 196608      | es\_ES                | Spanish                    |
| 262144      | fr\_FR                | French (France)            |
| 589824      | nb\_NO                | Norwegian Bokmal (Norway)  |
| 1074036166  | fr-classic+reform1990 | French (France) - Hunspell |
| 1073901273  | fr-dentist            | No description - Hunspell  |

#### Ver também 

[SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md)  