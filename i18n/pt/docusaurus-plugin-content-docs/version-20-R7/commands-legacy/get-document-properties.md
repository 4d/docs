---
id: get-document-properties
title: GET DOCUMENT PROPERTIES
slug: /commands/get-document-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET DOCUMENT PROPERTIES.Syntax-->**GET DOCUMENT PROPERTIES** ( *documento* ; *bloqueado* ; *invisivel* ; *criadoEm* ; *criadoAs* ; *modificadoEm* ; *modificadoAs* )<!-- END REF-->
<!--REF #_command_.GET DOCUMENT PROPERTIES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Text | &#8594;  | Nome do documento |
| bloqueado | Boolean | &#8592; | Bloqueado (TRUE) ou desbloqueado(false) |
| invisivel | Boolean | &#8592; | Invisível (True) ou visível (False) |
| criadoEm | Date | &#8592; | Data da criação |
| criadoAs | Time | &#8592; | Hora da criação |
| modificadoEm | Date | &#8592; | Última data de modificação |
| modificadoAs | Time | &#8592; | última hora de modificação |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET DOCUMENT PROPERTIES.Summary-->O comando GET DOCUMENT PROPERTIES retorna informação sobre o documento cujo nome ou rota se passa em *documento*.<!-- END REF-->  
  
Depois da chamada:  

* *bloqueado* retorna True se o documento está bloqueado. Um documento bloqueado não pode modificarse.
* *invisível* retorna True se o documento está oculto.
* *criado em* e *criado as* retornam a data ou hora de criação do documento.
* *modificado em* e *modificado as* retornam a data ou hora da última modificação do documento.

#### Exemplo 

Imagine que você tenha criado um banco de documentação e deseja exportar todos os registros criados no banco a um documento em disco. Como o banco é atualizado regularmente, você deseja escrever um algoritmo de exportação que cree ou recree cada documento no disco se o documento não existe ou se o registro correspondente ha sido modificado depois de que o documento fue grabado por última vez. Portanto, você deve comparar a data e a hora da modificação do documento (se houver) com seu registro correspondente. Para ilustrar este exemplo, utilizamos a seguinte tabela:

![](../assets/en/commands/pict840812.en.png)

Ao invés de guardar uma data e uma hora em cada registro, pode guardar um “marcador” que expresse o número de segundos transcorridos entre uma data anterior arbitrária (neste exemplo utilizamos o 1 de janeiro de 1995 a 00:00:00) e a data e a hora na qual o registro foi guardado.  

Em nosso exemplo, o campo *\[Documentos\]Marcador criação* contém o marcador de criação de quando o registro foi criado pela primeira vez e o campo *\[Documentos\]Marcador modificação* contém o marcador da última modificação do registro.  
  
O método de projeto **MarcadorTempo** calcula o marcador de tempo para uma data e horas específica ou para a data e hora atual se nenhum parâmetro for passado:

```4d
 [ // Método de Projeto Marcador de Tempo
  // MarcadorTempos { ( data ; Hora ) } -> Long
  // MarcadorTempos { ( data ; Hora ) } -> Número de segundos desde 1º Janeiro de 1995
 
 var $1;$vdData : Date
 var $2;$vhHora : Time
 var $0 : Integer
 
 If(Count parameters=0)
    $vdData:=Current date
    $vhHora:=Current time
 Else
    $vdData:=$1
    $vhHora:=$2
 End if
 $0:=(($vdData-!01/01/95!)*86400)+$vhHora
```

**Nota:** utilizando este método, pode codificar todas as datas e as horas desde *01/01/95* as *00:00:00* a *19/01/2063* as *03:14:07* o que cobre o intervalo de inteiros longos de 0 a 2^31 menos um.

Por outro lado, os métodos de projeto Marcador data e Marcador hora permitem extrair a data e a hora armazenadas em um marcador:

```4d
  // Método de projeto Marcador data
  // Marcador data ( Long ) -> Data
  // Marcador data ( Time stamp ) -> data extraída
 
 var $0 : Date
 var $1 : Integer
 
 $0:=!01/01/95!+($1\86400)
 
  // Time stamp to time Project Method
  // Time stamp to time ( Long ) -> Date
  // Time stamp to time ( Time stamp ) -> Extracted time
 
 var $0 : Time
 var $1 : Integer
 
 $0:=Time(Time string(†00:00:00†+($1%86400)))
```

Para garantir que os marcadores dos registros sejam atualizados corretamente, sem importar a maneira em que são criados ou modificados, devemos aplicar esta regra utilizando o trigger da tabela \[*Documentos*\]:

```4d
  // Trigger for table [Documents]
 Case of
    :(Trigger event=Save New Record Event)
       [Documents]Creation Stamp:=Time stamp
       [Documents]Modification Stamp:=Time stamp
    :(Trigger event=Save Existing Record Event)
       [Documents]Modification Stamp:=Time stamp
 End case
```

Quando esse método tiver sido implementado no banco de dados, nóste mos todo o que precisamos para escrever o método de projeto CRIAR DOCUMENTAÇÂO listado abaixo. Nós usamos **GET DOCUMENT PROPERTIES** e [SET DOCUMENT PROPERTIES](set-document-properties.md) para manipular as datas e horas de criação e modificação dos documentos.\`

```4d
 Metodo de projeto CRIAR DOCUMENTAÇAO
```

```4d
 C_STRING(255;$vsRota;$vsDocRotaNome;$vsDocNome)
 var $vlDoc : Integer
 var $vbOnWindows;$vbDoIt;$vbBloqueado;$vbInvisivel : Boolean
 var $vhDocRef;$vhCriadoAs;$vhModificadoAs : Time
 var $vdCriadoEm;$vdModificadoEm : Date
 
 If(Application type=4D Client)
  // Se estiver rodando 4D Client, salve os documentos
  // localmente na máquina Cliente onde 4D Client estiver localizado
    $vsRota:=Long name to path name(Application file)
 Else
  // Se não, salve os documentos onde o arquivo de dados estiver localizado
    $vsPath:=Long name to path name(Data file)
 End if
  // Salva os documentos num diretório nós chamamos arbitrariamente de "Documentação"
 $vsRota:=$vsRota+"Documentação"+Char(Directory symbol)
  // Se esse diretório não existir, ele será criado
 If(Test path name($vsRota)#Is a directory)
    CREATE FOLDER($vsRota)
 End if
  // Estabelece a lista dos documentos que já existem
  // porque temos que apagar os obsoletos, ou seja
  // os documentos cujos registros correspondentes foram apagados.
 ARRAY STRING(255;$asDocumento;0)
 DOCUMENT LIST($vsRota;$asDocumento)
  // Seleciona todos os registros da tabela [Documentos]
 ALL RECORDS([Documentos])
  // For each record
 $vlNbRegistros:=Records in selection([Documentos])
 $vlNbDocs:=0
 $vbOnWindows:=On Windows
 For($vlDoc;1;$vlNbRegistros)
  // Assuma que nós vamos (re)criar o documento em disco
    $vbDoIt:=True
  // Calcula o nome e o nome de rota de acesso do documento
    $vsDocName:="DOC"+String([Documentos]Numero;"00000")
    $vsDocRotaNome:=$vsRota+$vsDocNome
  // Esse documento já existe?
    If(Test path name($vsDocRotaNome+".HTM")=Is a document)
  // Se afirmativo, remove o documento da lista dos documentos
  // podem ser eliminados
       $vlElem:=Find in array($asDocumento;$vsDocNome+".HTM")
       If($vlElem>0)
          DELETE FROM ARRAY($asDocumento;$vlElem)
       End if
  // O documento foi salvo depois da última vez que o registro foi modificado?
       GET DOCUMENT PROPERTIES($vsDocRotaNome+".HTM";$vbBloqueado;$vbInvisivel;$vdCriadoEm;$vhCriadoAS;
       $vdModificadoEm;$vhModificadoAS)
       If(Time stamp($vdModificadoEm;$vhModificadoAs)>=[Documentos]Marcador de Modificação)
  // Se positivo, não é necessário recriar o documento
          $vbDoIt:=False
       End if
    Else
  // O documento não existe,  estabelece o valor das duas variáveis em zero
  // de maneira que saiba que precisa calculá-las antes de estabelecer as propriedades finais
  // do documento
       $vdModificadoEm:=!00/00/00!
       $vhModificadoAs:=†00:00:00†
    End if
  // É necessário (re)criar o documento?
    If($vbDoIt)
  // Se sim, incrementa o número dos documentos atualizados
       $vlNbDocs:=$vlNbDocs+1
  // Apaga o documento se já existir
       DELETE DOCUMENT($vsDocRotaNome+".HTM")
  // E o cria novamente
       If($vbOnWindows)
          $vhDocRef:=Create document($vsDocRotaNome;"HTM")
       Else
          $vhDocRef:=Create document($vsDocRotaNome+".HTM")
       End if
       If(OK=1)
  // Escreva aqui os conteúdos do documento
          CLOSE DOCUMENT($vhDocRef)
          If($vdModificadoEm=!00/00/00!)
  // O documento não existindo, estabeleça a data e hora de moficação
  // aos seus valores corretos
             $vdModificadoEm:=Current date
             $vhModificadoAs:=Current time
          End if
  // Muda as propriedades do documento de maneira que sua data e hora de criação
  // se tornam iguais as dos registros correspondentes
          SET DOCUMENT PROPERTIES($vsDocRotaNome+".HTM";$vbBloqueado;$vbInvisivel;
          Marcador de Data([Documentos]Criar Marcador);
          Marcador de Hora([Documentos]Criar Marcador);
          $vdModificadoEm;$vhModificadoAs)
       End if
    End if
  // Apenas pra saber o que está acontecendo
    SET WINDOW TITLE("Processing Document "+String($vlDoc)+" of "+String($vlNbRegistros))
    NEXT RECORD([Documentos])
 End for
  // Apagar os documentos obsoletos, em outras palavras
  // aqueles que ainda estiverem no array $asDocumento
 For($vlDoc;1;Size of array($asDocumento))
    DELETE DOCUMENT($vsRota+$asDocumento{$vlDoc})
    SET WINDOW TITLE("Apagar documento obsoleto: "+Char(34)+$asDocumento{$vlDoc}+Char(34))
 End for
  // e terminamos
 ALERT("Número de documentos processados: "+String($vlNbRegistros)+Char(13)+"Numero de documentos atualizados: "+String($vlNbDocs)+Char(13)+"Numero de documentos apagados: "+String(Size of array($asDocumento)))
```

#### Ver também 

[SET DOCUMENT PROPERTIES](set-document-properties.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 477 |
| Thread-seguro | &check; |
| Modificar variáveis | error |
| Proibido no servidor ||


