---
id: structure-file
title: Structure file
slug: /commands/structure-file
displayed_sidebar: docs
---

<!--REF #_command_.Structure file.Syntax-->**Structure file** {( * )} : Text<!-- END REF-->
<!--REF #_command_.Structure file.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Retorna o arquivo de estrutura do banco de dados local |
| Resultado | Text | &#8592; | Nome longo do arquivo de estrutura do banco de dados |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Structure file.Summary-->O comando Structure file retorna o nome completo do arquivo de estrutura do banco de dados com o qual você está trabalhando atualmente.<!-- END REF-->

* Com bancos de dados binários, o comando retorna a rota para o arquivo **.4db**.
* Com bancos de dados projeto, o comando retorna a rota para o arquivo **.4dproject**.

**Nota:** No caso específico de um banco de dados que foi compilado e se fundiu com 4D Desktop, este comando retorna o caminho do arquivo (da aplicação executável) no Windows e Mac OS. No Mac OS, este arquivo está localizado dentro do pacote de software, na pasta \[Contents:Mac OS\]. Isto deriva de um mecanismo antigo e é mantido por razões de compatibilidade. Se você deseja obter o nome completo do pacote de software em si, é preferível usar o comando [Application file](application-file.md). A técnica consiste em testar o aplicativo usando o comando [Application type](application-type.md), em seguida, a execução de Structure file ou [Application file](application-file.md), dependendo do contexto.

**ATENÇÃO:** Se você chamar este comando durante a execução de 4D Client, apenas o nome do arquivo de estrutura é retornada; o nome completo não é devolvido.

O parâmetro opcional *\** é útil no caso de uma arquitetura usando componentes: ele pode ser usado para determinar a estrutura (host ou componente) para os quais você deseja obter o nome completo, dependendo do contexto em que o comando é chamado::

* Quando o comando é chamado de um componente:

 \- Se o parâmetro *\** for passado, o comando retorna o nome completo do arquivo de estrutura do banco de dados do host,  
  
 \- Se o parâmetro *\** não for passado, o comando retorna o nome completo do arquivo estrutura do componente.

O arquivo de estrutura do componente corresponde ao arquivo .4db or .4dc do componente encontrado na pasta "Components" do banco de dados. No entanto, um componente também pode ser instalado como um alias/atalho ou uma pasta/pacote .4dbase:   
  
 \- No caso de um componente instalado como um alias/atalho, o comando retorna o caminho do db original .4db ou do arquivo .4dc (o alias ou atalho é resolvido).

 \- No caso de um componente instalado em uma pasta/pacote .4dbase, o comando retorna o caminho do arquivo .4db ou .4dc localizado dentro desta pasta/pacote.  
  
• Quando o comando é chamado de um método de banco de dados do host, ele sempre retorna o nome completo do arquivo de estrutura do banco de dados de host, independentemente de haver ou não o parâmetro *\**.

#### Exemplo 1 

Este exemplo exibe o nome e localização do arquivo de estrutural atualmente em uso:

```4d
 var $fullpath : Object
 var $name;$path : Text
 If(Application type#4D Remote mode)
    $fullpath:=Path to object(Structure file)
    $name:=$fullpath.name
    $path:=$fullpath.parentFolder
    ALERT("You are currently using the database "+Char(34)+$name+Char(34)+" located at "+Char(34)+$path+Char(34)+".")
 Else
    ALERT("You are connected to the database "+Char(34)+Structure file+Char(34))
 End if
```

#### Exemplo 2 

O exemplo a seguir pode ser usado para descobrir se o método é chamado de um componente:

```4d
 var $0 : Boolean
 $0:=(Structure file#Structure file(*))
  // $0=True se o método é chamado desde um componente
```

#### Ver também 

[Application file](application-file.md)  
[COMPONENT LIST](component-list.md)  
[Data file](data-file.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 489 |
| Thread-seguro | &check; |


