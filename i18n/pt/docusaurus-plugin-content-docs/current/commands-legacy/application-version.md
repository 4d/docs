---
id: application-version
title: Application version
slug: /commands/application-version
displayed_sidebar: docs
---

<!--REF #_command_.Application version.Syntax-->**Application version** {( *buildNum* {; *} )} : Text<!-- END REF-->
<!--REF #_command_.Application version.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| buildNum | Integer | &#8592; | Número de build |
| * | Operador | &#8594;  | Se passar número de versão longo, caso contrário número de versão curto |
| Resultado | Text | &#8592; | Número de versão em uma string codificada |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Application version.Summary-->O comando Application version retorna uma cadeia codificada que dá o número da versão do ambiente 4D que está sendo utilizado.<!-- END REF--> 

\- Se você não passar o parâmetro opcional \*, é retornada uma cadeia de 4 caracteres, com o seguinte formato:

| **Caracteres** | **Descrição**     |
| -------------- | ----------------- |
| 1-2            | Número de versão  |
| 3              | Número de "R"     |
| 4              | Número de revisão |

Se você passar o parâmetro opcional \*, retorna uma cadeia de 8 caracteres, com o seguinte formato:

| **Caracteres**                                            | **Descrição**                      |
| --------------------------------------------------------- | ---------------------------------- |
| 1                                                         | "F" representa uma versão final    |
| "B" representa uma versão beta                            |                                    |
| Os outros caracteres representam uma versão interna de 4D |                                    |
| 2-3-4                                                     | Número de compilação interno de 4D |
| 5-6                                                       | Número de versão                   |
| 7                                                         | Número de "R"                      |
| 8                                                         | Número de revisão                  |

**Nota de Compatibilidade (4D v14)**

A numeração de versões mudou a partir da versão 14 de 4D:

* o **número de "R"** é o número da versão "R" de 4D, por exemplo 3 para a versão R3 (contém 0 para a versão do bug fix),
* o **número de revisão** é o número da versão do bug fix da aplicação 4D (contém 0 para uma versão "R").

Nas versões anteriores de 4D, o número de "release" determinava a revisão e o número de revisão era sempre 0.

Exemplos para um número pequeno de versão: 

| **Versão** | **Valor Retornado** |                                     |
| ---------- | ------------------- | ----------------------------------- |
| 4D v13.1   | "1310"              | *Antigo sistema de numeração*       |
| 4D v14 R2  | "1420"              | 4D v14 "Release R2                  |
| 4D v14 R3  | "1430"              | 4D v14 "Release R3                  |
| 4D v14.1   | "1401"              | Primeira versão "bug fix" de 4D v14 |
| 4D v14.2   | "1402"              | Segunda versão "bug fix" de 4D v14  |

Exemplos para um número longo de versão : 

| **Versão**      | **Valor Retornado** |
| --------------- | ------------------- |
| 4D v12.5 beta   | "B0011250"          |
| 4D v14 beta R2  | "B0011420"          |
| 4D v14 final R3 | "F0011430"          |
| 4D v14.1 beta   | "B0011401"          |

O comando Application version pode retornar uma informação adicional no parâmetro opcional *numBuild*: o número de "build" da versão atual da aplicação 4D. Este é um número de compilação interno que pode ser utilizado para controle de versões ou durante as mudanças com os serviços técnicos de 4D.

**Nota**: No caso das aplicações compiladas e fusionadas com 4D Volume Licence, o número de build retornado não é significativo. Neste contexto, a informação de versão é administrada pelo desenvolvedor.

#### Exemplo 1 

Este exemplo mostra o número de versão do ambiente 4D:

```4d
 $vs4Dversion:=Application version
 ALERT("Você está utilizando a versão "+String(Num(Substring($vs4Dversion;1;2)))+"."+
 $vs4Dversion[[3]]+"."+$vs4Dversion[[4]])
```

#### Exemplo 2 

Este exemplo faz um teste para verificar se você está usando uma versão final:

```4d
 If(Substring(Application version(*);1;1)#"F")
    ALERT("Por favor use uma versão final de 4D com este banco")
    QUIT 4D
 End if
```

#### Exemplo 3 

Você quer usar o número pequeno de versão da aplicação retornado pelo comando para mostrar o nome do "release" da aplicaçao 4D. Para fazer isso, simplesmente execute o código abaixo:

```4d
 var $Lon_build : Integer
 var $Txt_info;$Txt_major;$Txt_minor;$Txt_release;$Txt_version : Text
 
 $Txt_version:=Application version($Lon_build)
 
 $Txt_major:=$Txt_version[[1]]+$Txt_version[[2]] //número de versão, por exemplo14
 $Txt_release:=$Txt_version[[3]] //Rx
 $Txt_minor:=$Txt_version[[4]] //.x
 
 $Txt_info:="4D v"+$Txt_major
 If($Txt_release="0") //4D v14.x
    $Txt_info:=$Txt_info+Choose($Txt_minor#"0";"."+$Txt_minor;"")
 
 Else //4D v14 Rx
    $Txt_info:=$Txt_info+" R"+$Txt_release
 End if
```

#### Ver também 

[Application type](application-type.md)  
[Version type](version-type.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 493 |
| Thread-seguro | &check; |
| Proibido no servidor ||


