---
id: object-set-font
title: OBJECT SET FONT
slug: /commands/object-set-font
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FONT.Syntax-->**OBJECT SET FONT** ( * ; *objeto* : Text ; *fonte* : Text )<br/>**OBJECT SET FONT** ( *objeto* : Field, Variable ; *fonte* : Text )<!-- END REF-->
<!--REF #_command_.OBJECT SET FONT.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | se especificado, objeto é um nome de objeto (string), se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594; | Nome de objeto (se* é especificado) ou Campo ou Variável (se * é omitido) |
| fonte | Text | &#8594; | Nome da fonte ou número da fonte |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|14|Modificado|
|12|Renomear|
|6|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.OBJECT SET FONT.Summary-->OBJECT SET FONT mostra *objeto* utilizando a fonte especificada no parâmetro *fonte*.<!-- END REF--> O parâmetro *fonte* deve conter um nome de fonte válido.

Se especificar o parâmetro opcional *\**, indica um nome de objeto (uma cadeia) em *objeto*. Se omite o parâmetro opcional \*, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se especifica uma referência de um campo ou de uma variável (objetos campo ou variável unicamente) ao invés de uma string.

**Nota**: Se usar este comando em um objeto que use uma folha de estilo, a referência à folha de estilo é apagada automaticamente do objeto - mesmo se atribuir os mesmos atributos que da folha de estilo.

## Exemplo 1 

O exemplo a segior define a fonte de um botão chamado *bOK*: 

```4d
 OBJECT SET FONT(bOK;"Arial")
```

## Exemplo 2 

O exemplo a seguir define a fonte para todos os objetos de formulário cujo nome contenha "info": 

```4d
 OBJECT SET FONT(*;"@info@";"Times")
```

## Exemplo 3 

O seguinte exemplo utiliza a opção especial *%password*, desenhada para a entrada e visualização de campos de tipo “senha”. Quando passe "%password" no parâmetro *fonte*:

* cada caractere introduzido no objeto é mostrado com o mesmo símbolo,
* as ações "copiar" e "colar" se desativam no objeto.

**Nota:** pode utilizar a opção *%password* com os objetos de tipo campo, variável e combo box.

```4d
 OBJECT SET FONT([Users]Password;"%password")
```

## Ver também 

[Font file](../commands/font-file)  
[FONT LIST](../commands/font-list)  
*Interação de comandos genéricos com textos multi estilos*  
[OBJECT Get font](../commands/object-get-font)  
[OBJECT SET FONT SIZE](../commands/object-set-font-size)  
[OBJECT SET FONT STYLE](../commands/object-set-font-style)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 164 |
| Thread-seguro | no |


