---
id: spell-check-text
title: SPELL CHECK TEXT
slug: /commands/spell-check-text
displayed_sidebar: docs
---

<!--REF #_command_.SPELL CHECK TEXT.Syntax-->**SPELL CHECK TEXT** ( *texto* ; *posErr* ; *longErr* ; *posVerif* ; *arrSug* )<!-- END REF-->
<!--REF #_command_.SPELL CHECK TEXT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| texto | Text | &#8594;  | Texto a revisar |
| posErr | Integer | &#8592; | Posição do primeiro caracter da palavra desconhecida |
| longErr | Integer | &#8592; | Longitude da palavra desconhecida |
| posVerif | Integer | &#8594;  | Posição de inicio da verificação |
| arrSug | Text array | &#8592; | Lista de sugestões |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SPELL CHECK TEXT.Summary-->O comando **SPELL CHECK TEXT** verifica o conteúdo do parâmetro *texto* a partir do caracter *posVerif* e devolve a posição da primeira palavra desconhecida encontrada (se houver).<!-- END REF-->

Este comando devolve a posição do primeiro caracter desta palavra desconhecida em *posErr* e sua longitude em *longErr*. O array *arrSug* recebe la(s) sugestão(es) de correção de propostas pelo corretor ortográfico.

Se a verificação inicia sem erro e se encontra uma palavra desconhecida, a variável sistema OK toma o valor 0\. Se um erro de inicialização ocorre durante a verificação ou se não palavras desconhecidas serão encontradas, OK toma o valor 1.

**Note OS X:** Sob OS X, quando o corretor nativo se ativa, este comando não suporta a correção gramatical. 

#### Exemplo 

Queremos contar o número possível de erros em um texto:

```4d
 $pos:=1
 $errCount:=0
 ARRAY TEXT($tErrors;0)
 ARRAY TEXT($tSuggestions;0)
 Repeat
    SPELL CHECK TEXT($myText;$errPos;$errLength;$pos;$tSuggestions)
    If(OK=0)
       $errCount:=$errCount+1 // contador de erros
       $errorWord:=Substring($myText;$errPos;$errLength)
       APPEND TO ARRAY($tErrors;$errorWord) // array de erros
       $pos:=$errPos+$errLength  //continuar a verificação
    End if
 Until(OK=1)
  // Ao final $errCount=Size of array($tErrors)
```

#### Ver também 

[SPELL ADD TO USER DICTIONARY](spell-add-to-user-dictionary.md)  
[SPELL CHECKING](spell-checking.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1215 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


