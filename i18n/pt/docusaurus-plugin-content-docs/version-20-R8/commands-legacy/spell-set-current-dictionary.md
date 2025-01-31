---
id: spell-set-current-dictionary
title: SPELL SET CURRENT DICTIONARY
slug: /commands/spell-set-current-dictionary
displayed_sidebar: docs
---

<!--REF #_command_.SPELL SET CURRENT DICTIONARY.Syntax-->**SPELL SET CURRENT DICTIONARY** ( *dicionário* )<!-- END REF-->
<!--REF #_command_.SPELL SET CURRENT DICTIONARY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| dicionário | Integer, Text | &#8594;  | Dicionário a ser usado para correção ortográfica |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SPELL SET CURRENT DICTIONARY.Summary-->O comando SPELL SET CURRENT DICTIONARYsubstitui o dicionário atual pelo especificado no parâmetro *dicionario*.<!-- END REF--> O dicionário atual é utilizado para a correção ortográfica integrada de 4D (para maior informação, consulte o *Manual de Desenho* de 4D), assim como também de 4D Write. A modificação do dicionário atual repercute em todos os processos do banco para a sessão, assim como nas áreas 4D Pro.  
  
Por padrão, 4D utiliza o dicionário:

* Em Windows, o dicionário Hunspell correspondente a linguagem da aplicação,
* Em OS X, o corretor ortográfico nativo.

**Nota**: Para maior informação sobre os dicionários Hunspell, consulte [SET DATABASE PARAMETER](set-database-parameter.md) . Para saber mais, veja *Configuração da correção ortográfica*. 

 Pode utilizar o parâmetro *dicionario* para mudar o dicionário. Pode passar:
* Um número de identificação de dicionário Hunspell (devolvido pelo comando [SPELL GET DICTIONARY LIST](spell-get-dictionary-list.md)),
* Um nome de dicionário Hunspell (que corresponde ao nome de arquivo do dicionário Hunspell, com ou sem a extensão),
* Um código de linguagem BCP 47, ISO 639-1 ou ISO 639-2\. Por exemplo, com o código de linguagem BCP 47, "en-US" designa Inglês Americano e "en-GB" designa Inglês Britânico. Estes códigos são dirigidos internamente ao dicionário atual correspondente (Hunspell ou nativo OS X).

**Nota de Compatibilidade:** Em versões anteriores de 4D, se suportaram os dicionários "Cordial". Por compatibilidade, ainda é possível passar um número de dicionário "Cordial" no parâmetro *dicionario* (valor ou constante do tema "*Dicionários*"). Neste caso, no entanto, o dicionário se dirige internamente a um dicionário Hunspell equivalente (ou o dicionário nativo em OS X).

#### Variáveis e conjuntos do sistema 

Se o *dicionario* for carregado corretamente, a variável sistema OK toma o valor 1; do contrário, toma o valor 0 e devolve um erro.

#### Exemplo 

Loading of the "fr-classic" dictionary found in the Hunspell folder:

```4d
 SPELL SET CURRENT DICTIONARY("fr-classic")
  // SPELL SET CURRENT DICTIONARY ("FR-classic.dic") is valid
```

#### Ver também 

[SPELL CHECKING](spell-checking.md)  
[SPELL Get current dictionary](spell-get-current-dictionary.md)  
[SPELL GET DICTIONARY LIST](spell-get-dictionary-list.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 904 |
| Thread-seguro | &cross; |
| Modificar variáveis | OK |


