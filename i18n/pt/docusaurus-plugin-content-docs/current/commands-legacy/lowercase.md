---
id: lowercase
title: Lowercase
slug: /commands/lowercase
displayed_sidebar: docs
---

<!--REF #_command_.Lowercase.Syntax-->**Lowercase** ( *cadeia* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Lowercase.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| cadeia | Text | &#8594;  | Cadeia que vai passar para minúsculas |
| * | Operador | &#8594;  | Se passado: manter os acentos |
| Resultado | Text | &#8592; | Cadeia em letras minúsculas |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Lowercase.Summary-->**Lowercase** devolve uma *cadeia* de caracteres igual ao parâmetro *cadeia* com todos os caracteres alfabéticos convertidos para minúsculas.<!-- END REF-->  

O parâmetro opcional *\**, se for passado, indica que os eventuais caracteres acentuados presentes no parâmetro *cadeia* devem ser devolvidas como caracteres em minúsculas com acentos. Como padrão, quando se omite este parâmetro, os caracteres acentuados “perdem” seus acentos depois de que se realiza a conversão.

#### Exemplo 1 

O seguinte método de projeto converte a maiúsculas o primeiro caractere da string ou do texto recebido como parâmetro. Por exemplo, Nom:= Maius ("mário") devolve "Mário". 

```4d
  //Método de projeto Maius
  // Maius( String) -> String 
 
 $0:=Lowercase($1)
 If(Length($0)>0)
    $0[[1]]:=Uppercase($0[[1]])
 End if
```

#### Exemplo 2 

Este exemplo compara os resultados obtidos de acordo com se é passado ou não o parâmetro *\**: 

```4d
 $minhacadeia:=Lowercase("DÉJÀ VU") // $minhastring é "deja vu"
 $minhacadeia:=Lowercase("DÉJÀ VU";*) // $minhacadeia é "déjà vu"
```

#### Ver também 

[Uppercase](uppercase.md)  