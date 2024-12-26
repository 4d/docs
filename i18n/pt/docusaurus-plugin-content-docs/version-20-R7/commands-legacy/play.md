---
id: play
title: PLAY
slug: /commands/play
displayed_sidebar: docs
---

<!--REF #_command_.PLAY.Syntax-->**PLAY** ( *nomeObjeto* {; *canal*} )<!-- END REF-->
<!--REF #_command_.PLAY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeObjeto | Text | &#8594;  | Nome d arquivo de som ou recurso de Mac OS "snd" ou string vazia de som de sistema para parar a ação assincrônica |
| canal | Integer | &#8594;  | Se especificado, canal de sintetizadr e execução assincrônica; se omitido, execução sincrônica |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.PLAY.Summary-->O comando PLAY permite reproduzir arquivos de som ou multimídia.<!-- END REF--> Passe a rota de acesso completa do arquivo que deseja reproduzir em *nomeObjeto*. Em Mac OS, o comando também pode ser utilizado para reproduzir uma fonte de som ou um som sistema. 

* Para reproduzir um arquivo, passe seu nome e rota de acesso em *nomObjeto*. Pode passar uma rota de acesso completa ou relativa ao arquivo de estrutura do banco.  
Os principais formatos de arquivos de som e multimídia são compatíveis: .WAV, .MP3, .AVI, .AIFF (Mac OS), etc. Em Mac OS, o comando é compatível particularmente com os formatos Core Audio.
* (apenas para OS X) Para reproduzir um som de sistema, passe seu nome diretamente no parâmetro objectName.

Nota: os recursos 'snd', utilizados em Mac OS 9 e superiores, já não são suportados.  

O parâmetro *canal* especifica o canal do sintetizador Macintosh. Se não for especificado o *canal*, o *canal* será utilizado para sons digitalizados simples e é sincrônico. Sincrônico significa que todos os processos são parados até que o som termine. Se canal for igual a 0, o canal é utilizado para sons digitalizados simples e é assincrônico. Assincrônico significa que o processo não são parados e que o som é reproduzido no fundo.  
  
Para parar um som assincrônico, utilize a próxima instrução:

```4d
 PLAY("";0)
```

  
#### Exemplo 1 

O exemplo abaixo mostra como reproduzir um arquivo WAV em Windows:  
  
```4d
 $DocRef :=Open document("";"WAV";Read Mode)
 If(OK=1)
    CLOSE DOCUMENT($DocRef)
    PLAY(Document;0) //reproduzir assincronicamente
 End if
```

  
#### Exemplo 2 

O código de exemplo abaixo reproduz um som do sistema em OS X:

```4d
 PLAY("Submarine.aiff")
```

#### Ver também 

[BEEP](beep.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 290 |
| Thread-seguro | &cross; |


