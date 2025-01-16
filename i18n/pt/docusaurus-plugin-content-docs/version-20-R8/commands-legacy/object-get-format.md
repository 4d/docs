---
id: object-get-format
title: OBJECT Get format
slug: /commands/object-get-format
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get format.Syntax-->**OBJECT Get format** ( {* ;} *objeto* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get format.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string), se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se* é especificado) ou Campo ou Variável (se * é omitido) |
| Resultado | Text | &#8592; | Exibir formato de objeto |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT Get format.Summary-->O comando **OBJECT Get format** devolve o formato de saída atual aplicado ao objeto especificado no parâmetro *objeto*.<!-- END REF-->

Se passa o parâmetro opcional *\**, indica um nome de objeto (neste caso, passe uma string em *objeto*). Se omite este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, não passa uma string, mas uma referência de campo ou de variável.

Este comando devolve o formato de saída atual do objeto, ou seja o formato definido no ambiente Desenho ou utilizando o comando [OBJECT SET FORMAT](object-set-format.md) . **OBJECT Get format** funciona com todos os tipos de objetos de formulário (campos ou variáveis) que aceitam um formato de saída: booleano, data, hora, imagem, string, numérico, como também com grades de botões, dials, termômetros, réguas, menus imagem suspenso, botões imagem e botões 3D. Para maior informação sobre formatos de saída destes objetos, consulte a documentação do comando [OBJECT SET FORMAT](object-set-format.md) . 

**Nota:** se aplica o comando a um conjunto de objetos, o formulário, se devolve o formulário do último objeto selecionado.  
  
Quando o comando **OBJECT Get format** se aplica a objetos de tipo data, hora ou imagem (formatos definidos como constantes), a string que se devolve corresponde ao código caractere da constante. Para obter o valor da constante, simplesmente aplique a função [Character code](character-code.md) ao resultado (ver exemplo a continuação). 

#### Exemplo 1 

Este exemplo lhe permite obter o valor da constante do formato aplicado a variável imagem chamada “minhafoto”: 

```4d
 C_STRING(2;$formato)
 OBJECT SET FORMAT(*;"minhafoto";Char(On background))
  //Aplicação do formato de fundo (valor = 3)
 $formato:=OBJECT Get format(*;"mifoto")
 ALERT("Formato número:"+String(Character code($formato)))
  //Mostrar o valor "3"
```

#### Exemplo 2 

Este exemplo lhe permite obter o formato aplicado ao campo booleano \[Membros\]Estado\_civil: 

```4d
 C_STRING(30;$formato)
 $formato:=OBJECT Get format([Membros]Estado_civil)
 ALERT($formato) //Visualizar formato, por exemplo "Casado;Solteiro"
```

#### Exemplo 3 

Customized formats are returned untouched:

```4d
 var $format : Text
 OBJECT SET FORMAT(*;"timeinput";":m") //":" is required for single-char patterns
 $format:=OBJECT Get format(*;"timeinput") // ":m"
```

#### Ver também 

[OBJECT SET FORMAT](object-set-format.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 894 |
| Thread-seguro | &cross; |


