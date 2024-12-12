---
id: convert-path-posix-to-system
title: Convert path POSIX to system
slug: /commands/convert-path-posix-to-system
displayed_sidebar: docs
---

<!--REF #_command_.Convert path POSIX to system.Syntax-->**Convert path POSIX to system** ( *rotaPosix* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Convert path POSIX to system.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rotaPosix | Text | &#8594;  | Nome de rota POSIX |
| * | Operador | &#8594;  | Opção de codificação |
| Resultado | Text | &#8592; | Rota de acesso expressa em sintaxe de sistema |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Convert path POSIX to system.Summary-->O comando Convert path POSIX to system converte uma rota de acesso expressa com a sintaxe POSIX (Unix) em uma rota expressa com a sintaxe sistema.<!-- END REF-->   
  
Passe no parâmetro *rotaPosix* a rota de acesso completa a um arquivo ou pasta, expressa com a sintaxe POSIX. Esta rota deve ser absoluta (deve começar com o caractere "/"). Deve passar uma rota disco; não é possível passar uma rota rede (começando, por exemplo com ftp://ftp.mysite.fr).

O comando retorna a rota de acesso completa do arquivo ou do arquivo expresso na sintaxe do sistema atual.   
  
O parâmetro opcional \* permite indicar se o parâmetro *rotaPosix* estiver codificado. Se este for o caso, deve passar este parâmetro, do contrário a conversão não será válida. O comando retorna a rota de acesso sem codificação.

#### Exemplo 1 

Exemplos em Mac OS:

```4d
 $path:=Convert path POSIX to system("/Volumes/machd/file 2.txt")
  //retorna "machd:file 2.txt"
 $path:=Convert path POSIX to system("/Volumes/machd/file%202.txt";*)
  //retorna "machd:file 2.txt"
 $path:=Convert path POSIX to system("/file 2.txt")
  //retorna "machd:file 2.txt" si machd for o disco de inicio
```

#### Exemplo 2 

Exemplos em Windows:

```4d
 $path:=Convert path POSIX to system("c:/docs/file 2.txt")
  //retorna "c:\\docs\\file 2.txt"
 $path:=Convert path POSIX to system("c:/docs/file%202.txt";*)
  //retorna "c:\\docs\\file 2.txt"
```

#### Ver também 

[Convert path system to POSIX](convert-path-system-to-posix.md)  
[Object to path](object-to-path.md)  
[Path to object ](path-to-object.md)  