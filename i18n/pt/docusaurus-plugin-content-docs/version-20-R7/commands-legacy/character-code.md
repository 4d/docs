---
id: character-code
title: Character code
slug: /commands/character-code
displayed_sidebar: docs
---

<!--REF #_command_.Character code.Syntax-->**Character code** ( *caractere* ) : Integer<!-- END REF-->
<!--REF #_command_.Character code.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| caractere | Text | &#8594;  | Caractere para o qual você quer conseguir o código |
| Resultado | Integer | &#8592; | Código dos caracteres |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Character code.Summary-->O comando Character code devolve o código Unicode UTF-16 (incluído entre 1 e 65535) de *umCaractere*.<!-- END REF-->   
  
Se houver mais de um caractere na cadeia, Character code devolve unicamente o código do primeiro caractere.  
  
A função [Char](char.md) é a contraparte de Character code Devolve o caractere designado por um código UTF-16.  

#### Exemplo 1 

Os caracteres em maiúsculas e minúsculas são considerados iguais dentro de uma comparação. Pode utilizar Character code para diferenciar entre os caracteres em maiúsculas e em minúsculas. Portanto, esta linha devolve True: 

```4d
 ("A"="a")
```
  
  
Por outro lado, esta linha devolve False:  
  
```4d
 (Character code("A")=Character code("a"))
```

#### Exemplo 2 

Este exemplo devolve o código do primeiro caractere da cadeia "ABC": 

```4d
 RecupCod:=Character code("ABC") // RecupCod assume o valor 65, o código do caractere de A
```

#### Exemplo 3 

O exemplo abaixo testa os retornos de carro e os tabuladores: 

```4d
 For($vlCar;1;Length(vtText))
    Case of
       :(vtText[[$vlCar]]=Char(Carriage return))
  // Fazer algo
       :(vtText[[$vlCar]]=Char(Tab))
  // Fazer outra coisa
       :(...)
  // ...
    End case
 End for
```

Quando for executado muitas vezes em textos longos, se executará mais rápido, quando for compilado, se for escrito desta forma:

```4d
 For($vlCar;1;Length(vtText))
    $vlCode:=Character code(vtText[[$vlCar]])
    Case of
       :($vlCode=Carriage return)
  // Fazer algo
       :($vlCode=Tab)
  // Fazer outra coisa
       :(...)
  // ...
    End case
 End for
```

  
O segundo código é executado mais rápido por duas razões: apenas referencia um caractere por iteração e utiliza comparações de inteiros longos ao invés de comparações de cadeias para testar os retornos de carro e as tabulações. Utilize esta técnica quando trabalhe com códigos comuns tais como CR e TAB.

#### Ver também 

[Char](char.md)  
*Símbolos de referência de caracteres*  