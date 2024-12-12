---
id: application-file
title: Application file
slug: /commands/application-file
displayed_sidebar: docs
---

<!--REF #_command_.Application file.Syntax-->**Application file**  : Text<!-- END REF-->
<!--REF #_command_.Application file.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Nome longo da aplicação ou arquivo 4D executável |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Application file.Summary-->O comando Application file retorna o nome longo do arquivo executável ou da aplicação 4D que está sendo utilizada.<!-- END REF-->

Em Windows  
Se você está utilizando por exemplo 4D localizado em \\PROGRAMS\\4D no disco E, o comando retorna E:\\PROGRAMS\\4D\\4D.EXE..

Em Macintosh  
Se você está executando, por exemplo, 4D na pasta Programas do disco Macintosh HD, o comando retorna Macintosh HD:Programs:4D.app.

#### Exemplo 

Ao iniciar seu banco de dados em Windows, você precisa verificar se uma biblioteca DLL se encontra localizada no mesmo nível do arquivo executável 4D. No método de banco de dados  de sua aplicação você pode escrever:

```4d
 If(Is Windows&(Application type#4D Server))
    var $appPath : Object
    $appPath:=Path to object(Application file)
    If(Test path name(($appPath.parentFolder)+"XRAYCAPT.DLL")#Is a document)
       ALERT("XRAYCAPT.DLL is missing. The X-ray capture capability will not be available.")
    End if
 End if
```

#### Ver também 

[Data file](data-file.md)  
[Structure file](structure-file.md)  