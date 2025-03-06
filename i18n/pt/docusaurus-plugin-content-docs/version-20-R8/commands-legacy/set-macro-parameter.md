---
id: set-macro-parameter
title: SET MACRO PARAMETER
slug: /commands/set-macro-parameter
displayed_sidebar: docs
---

<!--REF #_command_.SET MACRO PARAMETER.Syntax-->**SET MACRO PARAMETER** ( *seletor* ; *paramTexto* )<!-- END REF-->
<!--REF #_command_.SET MACRO PARAMETER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| seletor | Integer | &#8594;  | Seleção a usar |
| paramText | Text | &#8594;  | Texto enviado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET MACRO PARAMETER.Summary-->O comando SET MACRO PARAMETER insere o texto *paramText* no método desde o qual é chamado.<!-- END REF-->  

Se for selecionado texto no método, o parâmetro *seletor* permite definir se o texto *paramText* deve substituir todo o método ou apenas o texto selecionado. Em *seletor*, pode passar uma das seguintes constantes, do tema “”:

| Constante               | Tipo          | Valor |
| ----------------------- | ------------- | ----- |
| Full method text        | Inteiro longo | 1     |
| Highlighted method text | Inteiro longo | 2     |

Se nenhum texto tiver sido selecionado, *paramText* é inserido no método.

#### Nota 

 Para que os comandos [GET MACRO PARAMETER](get-macro-parameter.md "GET MACRO PARAMETER") e SET MACRO PARAMETER funcionem corretamente, o novo atributo “version” deve ser declarado na própria macro desta forma:

```xml
<macro name="MyMacro" version="2">
--- Text of macro ---
</macro>
```

#### Exemplo 

Esta macro cria um novo texto que será devolvido ao método que faz a chamada: 

```4d
 var $texto_entrada : Text
 var $texto_saída : Text
 GET MACRO PARAMETER(Highlighted method text;$texto_entrada)
  //Suponha que o texto selecionado seja uma tabela, ex. “[Clientes]”
 $texto_saída:=""
 $texto_saída:=$texto_saída+Command name(47)+"("+$texto_entrada+")" // Selecionar todos ([Clientes])
 $texto_saída:=$texto_saída+"$i:="+Command name(76)+"("+$texto_entrada+")" // $i:=Records in selection([Clientes])
 SET MACRO PARAMETER(Highlighted method text;$texto_saída)
  //Substitui o texto selecionado pelo novo código
```

#### Ver também 

[GET MACRO PARAMETER](get-macro-parameter.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 998 |
| Thread-seguro | &cross; |


