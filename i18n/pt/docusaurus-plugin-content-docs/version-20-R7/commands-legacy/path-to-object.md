---
id: path-to-object
title: Path to object
slug: /commands/path-to-object
displayed_sidebar: docs
---

<!--REF #_command_.Path to object.Syntax-->**Path to object**  ( *rota* {; *tipoRota*} ) : Object<!-- END REF-->
<!--REF #_command_.Path to object.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rota | Text | &#8594;  | Nome da rota |
| tipoRota | Integer | &#8594;  | Sintaxe do tipo de rota: System (padrão) ou Posix |
| Resultado | Object | &#8592; | Objeto que descreve o conteúdo da rota. |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Path to object.Summary-->O comando **Path to object**  devolve um objeto que contenha as propriedades específicas da *rota* que passou no parâmetro.<!-- END REF--> 

De forma pré-determinada, se omitir o parâmetro *tipoRota*, se assumirá que passou uma *rota* de sistema que contém separadores de sistema ("\\" em Windows, ":" em macOS). Se passou uma *rota* Posix que contenha separadores de Posix ("/") ou deseja expressar o tipo de rota, passe uma das constantes abaixo no parâmetro *tipoRota*:

| Constante      | Tipo          | Valor | Comentário                                                                                          |
| -------------- | ------------- | ----- | --------------------------------------------------------------------------------------------------- |
| Path is POSIX  | Inteiro longo | 1     | A rota ou caminho é expressa usando a sintaxe Posix                                                 |
| Path is system | Inteiro longo | 0     | (Pré-determinado) A rota ou caminho é expressa usando a sintaxe atual do sistema (Windows ou macOS) |

O comando devolve um objeto resultante de analizar a *rota*. As propriedades abaixo estão disponíveis:

| **Propriedade** | **Tipo** | **Descrição**                                                                                              |
| --------------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| parentFolder    | Texto    | Informação do diretório para a rota. O último caractere é sempre um separador de pastas.                   |
| name            | Texto    | Nome de arquivo ou pasta final da rota especificada, sem extensão.                                         |
| extension       | Texto    | Extensão do nome final de arquivo ou pasta. Sempre começa por ".". String vazia "" se não houver extensão. |
| isFolder        | Booleano | True se o nome for um nome de pasta, do contrário, do contrário (o valor pré-determinado é false)          |

Vai se supor que passou uma rota de pasta se o último caractere da *rota for* um separador correspondente ao tipo de rota (por exemplo, "\\" em Windows). Do contrário, se suporá que passou um nome de arquivo. A extensão, se não estiver vazia, é retornada independente de se a rota representa um arquivo ou pasta, Em qualquer caso, é necessário concatenar o nome e extensão para recuperar o nome completo.

Lembre que Path to object só maneja strings. Tampouco comprova se a rota for válida com respeito ao tipo de rota, nem a existência real de nenhum arquivo ou pasta.

#### Exemplo 1 

Os exemplos abaixo mostram vários resultados com rotas de arquivos:

```4d
 var $o : Object
 $o:=Path to object("C:\\first\\second\\fileZ") //em Windows
  //$o.parentFolder="C:\\first\\second\\"
  //$o.name="fileZ"
  //$o.extension=""
  //$o.isFolder=false
```

```4d
 var $o : Object
 $o:=Path to object("osx:Users:john:Documents:Comments.text)  //en macOS
  //$o.parentFolder="osx:Users:john:Documents:"
  //$o.name="Comments"
  //$o.extension=".text"
  //$o.isFolder=false
```

```4d
 var $o : Object
 $o:=Path to object("\\images\\jan\\pict1.png";Path is system) //em Windows
  //$o.parentFolder="\\images\\jan\\"
  //$o.name="pict1"
  //$o.extension=".png"
  //$o.isFolder=false
```

Definindo uma rota a uma pasta:

```4d
 var $o : Object
 $o:=Path to object("osx:Users:oscargoldman:Desktop:Databases:") //macOS
  //$o.parentFolder="osx:Users:oscargoldman:Desktop:"
  //$o.name="Databases"
  //$o.extension=""
  //$o.isFolder=True
```

```4d
 var $o : Object
 $o:=Path to object("C:\\4D\\Main\\216410\\64\\4D\\4D.user\\")  //windows
  //$o.parentFolder="C:\\4D\\Main\\216410\\64\\4D\\"
  //$o.name="4D"
  //$o.extension=".user"
  //$o.isFolder=true
```

```4d
 var $o : Object
 $o:=Path to object("/first/second.bundle/";Path is POSIX)
  //$o.parentFolder="/first/"
  //$o.name="second"
  //$o.extension=".bundle"
  //$o.isFolder=true
```

Se a rota for um diretório raiz, *parentFolder* está vazio:

```4d
 var $o : Object
 $o:=Path to object("C:\\")  //em windows
  //$o.parentFolder=""
  //$o.name="c:"
  //$o.extension=""
  //$o.isFolder=true
```

```4d
 var $o : Object
 $o:=Path to object("osx:") //en macOS
  //$o.parentFolder=""
  //$o.name="osx"
  //$o.extension=""
  //$o.isFolder=true
```

Se a última parte da rota for ".something", se considera como um nome de arquivo:

```4d
 var $o : Object
 $o:=Path to object("/folder/.invisible";Path is POSIX)
  //$o.parentFolder="/folder/"
  //$o.name=".invisible"
  //$o.extension=""
  //$o.isFolder=false
```

#### Exemplo 2 

É possível combinar este comando com [Object to path](object-to-path.md) para mudar o nome de um arquivo em uma rota:

```4d
 var $o : Object
 var $path : Text
 $o:=Path to object("C:\\4D\\resources\\images\\4D.jpg")
  //$o.parentFolder="C:\\4D\\resources\\images\\"
  //$o.name="4D"
  //$o.extension=".jpg"
  //$o.isFolder=false
 
 $o.name:="4DOld"
 $path:=Object to path($o)
  //$path="C:\4D\resources\images\4DOld.jpg"
```

#### Exemplo 3 

Se quiser saber a quantidade de subpastas em uma rota:

```4d
 var $o : Object
 var $path : Text
 var $vCount : Integer
 $path:=Select folder //permite que o usuário selecione uma pasta
 $o:=Path to object($path)
 Repeat
    $o:=Path to object($o.parentFolder)
    $vCount:=$vCount+1
 Until($o.parentFolder="")
 ALERT("The path depth is: "+String($count))
```

#### Ver também 

[Convert path POSIX to system](convert-path-posix-to-system.md)  
[Convert path system to POSIX](convert-path-system-to-posix.md)  
[File](file.md)  
[Folder ](folder.md)  
[Object to path](object-to-path.md)  
[Test path name](test-path-name.md)  