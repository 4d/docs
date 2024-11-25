---
id: convert-path-system-to-posix
title: Convert path system to POSIX
slug: /commands/convert-path-system-to-posix
displayed_sidebar: docs
---

<!--REF #_command_.Convert path system to POSIX.Syntax-->**Convert path system to POSIX** ( *rotaSistema* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Convert path system to POSIX.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rotaSistema | Text | &#8594;  | Rota de acesso absoluta ou relativa, expressa em sintaxe de sistema |
| * | Operador | &#8594;  | Opção de codificação |
| Resultado | Text | &#8592; | Absolute pathname expressed in POSIX syntax |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Convert path system to POSIX.Summary-->O comando Convert path system to POSIX converte uma rota expressa com a sintaxe sistema em uma rota expressa com a sintaxe POSIX (Unix).<!-- END REF-->  

Passe no parâmetro *rotaSistema* a rota de acesso a um arquivo ou pasta, expressa com a sintaxe sistema (Mac OS ou Windows). Esta rota pode ser absoluta ou relativa a pasta do banco (pasta que contém o arquivo de estrutura do banco). Não é obrigatório que os elementos da rota existam realmente no disco no momento da execução do comando (o comando não testa a validade da rota de acesso).  
  
O comando retorna a rota de acesso completa do arquivo ou da pasta expressa na sintaxe POSIX. O comando sempre retorna uma rota absoluta, sem importar o tipo da rota passada em *rotaSistema*. Se passa um caminho relativo em rotaSistema, 4D completa o valor devolvido ao adicionar a rota de acesso a pasta do banco.   
  
O parâmetro opcional *\** permite definir a codificação da rota POSIX. Por padrão, Convert path system to POSIX não codifica os caracteres especiais da rota POSIX. Se passa o parâmetro *\**, os caracteres especiais se traduzem (por exemplo, "My folder" se converte em "Minha%20pasta").

#### Exemplo 1 

Exemplos em Mac OS

```4d
 $path:=Convert path system to POSIX("machd:file 2.txt")
  //machd é o disco de início
  //devolve "/file 2.txt"
 $path:=Convert path system to POSIX("disk2:file 2.txt")
  //disk2 é um disco adicional (sem início)
  //devolve "/Volumes/disk2/file 2.txt"
 $path:=Convert path system to POSIX("machd:file 2.txt";*)
  //devolve "/file%202.txt"
 $path:=Convert path system to POSIX(":resources:images") //rota relativa
  //devolve "/User/mark/Documents/videodatabase/resources/images"
 $path:=Convert path system to POSIX("resources:images") //rota relativa
  //devolve "/resources/images"
```

#### Exemplo 2 

Exemplo em Windows

```4d
 $path:=Convert path system to POSIX("c:\docs\file 2.txt")
  //returns "c:/docs/file 2.txt"
 $path:=Convert path system to POSIX("\\srv\tempo\file.txt")
  //returns "//srv/tempo/file.txt"
```

#### Ver também 

[Convert path POSIX to system](convert-path-posix-to-system.md)  
[Object to path](object-to-path.md)  
[Path to object ](path-to-object.md)  
[Test path name](test-path-name.md)  