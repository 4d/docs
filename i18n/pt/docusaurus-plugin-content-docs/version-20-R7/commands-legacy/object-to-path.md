---
id: object-to-path
title: Object to path
slug: /commands/object-to-path
displayed_sidebar: docs
---

<!--REF #_command_.Object to path.Syntax-->**Object to path** ( *objRota* ) : Text<!-- END REF-->
<!--REF #_command_.Object to path.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objRota | Object | &#8594;  | Objeto que descreve os conteúdos da rota |
| Resultado | Text | &#8592; | Nome da rota |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Object to path.Summary-->O comando **Object to path** devolve um nome de rota (string) em função da informação de rota que passou no parâmetro *objRota*.<!-- END REF--> As rotas abaixo são suportadas:

* Rota de sistema (Windows ou macOS) ou rota Posix. O tipo de rota está definido pelo último caractere da propriedade parentFolder (ver a seguir).
* Rota relativa ou rota absoluta (ver *Via de acesso absoluta ou relativa* para saber mais).

Em *objRota*, passe um objeto que define a rota que deseja gerar. Deve conter as propriedades abaixo:

| **Propriedade** | **Tipo** | **Descrição**                                                                                                                                                                                                                                                                        |
| --------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| parentFolder    | Texto    | Informação de diretório para a rota. P último caractere deve ser um separador de pasta. O comando usa este caractere para conhecer o tipo de rota. Se se tratar de um separador Posix ("/"), a rota é criada com os separadores Posix; do contrário, se usar o separador de sistema. |
| name            | Texto    | Nome final de arquivo ou pasta da rota especificada sem extensão.                                                                                                                                                                                                                    |
| extension       | Texto    | Extensão de nome final de arquivo ou pasta. Começa com "." (pode ser omitido). String vazia "" se não houver extensão.                                                                                                                                                               |
| isFolder        | Booleano | True se o nome for um nome de pasta, do contrário, false (o valor pré-determinado for false)                                                                                                                                                                                         |

Geralmente, *objRota* será gerado com o comando [Path to object ](path-to-object.md), entretanto, o objeto pode ser gerado com qualquer meio. Lembre que **Object to path** só maneja strings. Tampouco comprova se a rota é válida com respeito ao tipo de rota, nem a existência real de nenhum arquivo ou pasta.

#### Exemplo 

Se quisermos duplicar e mudar o nome de um arquivo em sua própria pasta

```4d
 var $o : Object
 $o:=New object
 var $path : Text
 $path:="C:\\MyDocs\\file.txt"
 
 $o:=Path to object($path)
 $o.name:=$o.name+"_copy"
 COPY DOCUMENT($path;Object to path($o))
```

#### Ver também 

[Convert path POSIX to system](convert-path-posix-to-system.md)  
[Convert path system to POSIX](convert-path-system-to-posix.md)  
[File](file.md)  
[Folder ](folder.md)  
[Path to object ](path-to-object.md)  
[Test path name](test-path-name.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1548 |
| Thread-seguro | &check; |
| Proibido no servidor ||


