---
id: volume-attributes
title: VOLUME ATTRIBUTES
slug: /commands/volume-attributes
displayed_sidebar: docs
---

<!--REF #_command_.VOLUME ATTRIBUTES.Syntax-->**VOLUME ATTRIBUTES** ( *volume* ; *tamanho* ; *usado* ; *livre* )<!-- END REF-->
<!--REF #_command_.VOLUME ATTRIBUTES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| volume | Text | &#8594;  | Nome volume |
| tamanho | Real | &#8592; | Tamanho do volume expresso em bytes |
| usado | Real | &#8592; | Espaço usado expresso em bytes |
| livre | Real | &#8592; | Espaço livre expresso em bytes |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.VOLUME ATTRIBUTES.Summary-->O comando VOLUME ATTRIBUTES retorna em bytes o tamanho, o espaço utilizado e o espaço livre do volume cujo nome se passa em *volume*.<!-- END REF-->  

**Nota**: se *volume* indica um volume remoto não montado, a variável OK toma o valor 0 e os três parâmetros retornam -1.

#### Exemplo 

Sua aplicação inclui algumas operações por lotes que são executadas na noite ou os fins de semana para armazenar arquivos temporários grandes em disco. Para que este processo seja tão automático e flexível quanto seja possível, você escreve uma rotina que pesquisará automaticamente o primeiro volume cujo espaço livre seja suficiente para seus arquivos temporários. Você pode escrever o seguinte método de projeto:  
  
```4d
  // Método de projeto Buscar volume para espaço
  // Buscar volume para espaço ( Real ) -> Alfa
  // Buscar volume para espaço ( Espaço necessário em bytes ) -> Nome do volume ou string vazia
 
 C_STRING(31;$0)
 C_STRING(255;$vsDocNome)
 var $vlNbVolumens;$vlVolumens : Integer
 var $1;$vlTamanho;$vlUtilizado;$vlLivre : Real
 var $vhDocRef : Time
 
  // Inicializar o resultado da função
 $0:=""
  // Proteger todas as operações de entrada/saida com um método de interrupção de erros
 ON ERR CALL("ERROR METHOD")
  // Obter a lista dos volumens
 ARRAY STRING(31;$asVolumens;0)
 gError:=0
 VOLUME LIST($asVolumens)
 If(gError=0)
  // Se rodar em Windows, ignorar os dois leitores de diskettes
    If(On Windows)
       $vlVolume:=Find in array($asVolumens;"A:\\")
       If($vlVolume>0)
          DELETE FROM ARRAY($asVolumene;$vlVolume)
       End if
       $vlVolume:=Find in array($asVolumene;"B:\\")
       If($vlVolume>0)
          DELETE FORM ARRAY($asVolumene;$vlVolume)
       End if
    End if
    $vlNbVolumes:=Size of array($asVolumes)
  // Para cada volume
    For($vlVolume;1;$vlNbVolumes)
  // Obter o tamanho, o espaço utilizado e o espaço livre
       gError:=0
       VOLUME ATTRIBUTES($asVolumes{$vlVolume};$vlTamanho;$vlUtilizado;$vlLivre)
       If(gError=0)
  // O espaço livre é suficiente (mais de 32K extra) ?
          If($vlLivre>=($1+32768))
  // Se for assim, verificar se o volume não está bloqueado..
             $vsDocNome:=$asVolumes{$vlVolume}+Char(Directory symbol)+"XYZ"+String(Random)+".TXT"
             $vhDocRef:=Create document($vsDocNome)
             If(OK=1)
                CLOSE DOCUMENT($vhDocRef)
                DELETE DOCUMENT($vsDocNome)
  // Se tudo estiver bem, devolver o nome do volume
                $0:=$asVolumes{$vlVolume}
                $vlVolume:=$vlNbVolumes+1
             End if
          End if
       End if
    End for
 End if
 ON ERR CALL("")
```

Quando tiver sido adicionado este método de projeto a sua aplicação, pode escrever:

```4d
 $vsVolume:=Buscar volume para espaço(100*1024*1024)
 If($vsVolume#"")
  // Continuar
 Else
    ALERT("É necessário um volume com pelo menos 100 MB de espaço livre!")
 End if
```

#### Ver também 

[VOLUME LIST](volume-list.md)  