---
id: object-set-font-size
title: OBJECT SET FONT SIZE
slug: /commands/object-set-font-size
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FONT SIZE.Syntax-->**OBJECT SET FONT SIZE** ( * ; *objeto* : Text ; *tamanho* : Integer )<br/>**OBJECT SET FONT SIZE** ( *objeto* : Variable, Field ; *tamanho* : Integer )<!-- END REF-->
<!--REF #_command_.OBJECT SET FONT SIZE.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | se especificado, objeto é um nome de objeto (string), se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594; | Nome de objeto (se* é especificado) ou Variável (se * é omitido) |
| tamanho | Integer | &#8594; | Tamanho da fonte em pontos |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|12|Renomear|
|6|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.OBJECT SET FONT SIZE.Summary-->OBJECT SET FONT SIZE define o tamanho da fonte dos objetos de formulário especificados por *objeto* utilizando o tamanho de fonte que se passa em *tamanho*.<!-- END REF-->

Se especificar o parâmetro opcional *\**, indica um nome de objeto (uma string) em *objeto*. Se omite o parâmetro opcional \*, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, você especifica uma referência de um campo ou de uma variável (objetos campo ou variável unicamente) ao invés de uma string. Para maior informação sobre nomes de objetos, consulte a seção *Propriedades dos objetos*

O *tamanho* pode ser qualquer inteiro entre 1 e 255\. Se o tamanho de fonte exato no existe, os caracteres são redimensionados proporcionalmente.

A área para o objeto, como se definiu no formulário, deve ser suficientemente grande para mostrar os dados no novo tamanho. Do contrário, o texto pode ser truncado ou não ser visualizado.

Nota: Se usar este comando ou um objeto que esteja usando uma folha de estilo, a referência para a folha de estilo é apagada automaticamente do objeto - mesmo se atribuir os mesmos atributtos à folha de estilo.

## Exemplo 1 

O exemplo a seguir define o tamanho de fonte para uma variável chamada *vtInfo*: 

```4d
 OBJECT SET FONT SIZE(vtInfo;14)
```

## Exemplo 2 

O exemplo a seguir define o tamanho de fonte para todos os objetos de formulário cujo nome começa por "hl": 

```4d
 OBJECT SET FONT SIZE(*;"hl@";14)
```

  

## Ver também 

*Interação de comandos genéricos com textos multi estilos*  
[OBJECT Get font size](../commands/object-get-font-size)  
[OBJECT SET FONT](../commands/object-set-font)  
[OBJECT SET FONT STYLE](../commands/object-set-font-style)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 165 |
| Thread-seguro | no |


