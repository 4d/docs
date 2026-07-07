---
id: object-set-style-sheet
title: OBJECT SET STYLE SHEET
slug: /commands/object-set-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET STYLE SHEET.Syntax-->**OBJECT SET STYLE SHEET** ( * ; *objeto* : Text ; *nomFolhaEstilo* : Text )<br/>**OBJECT SET STYLE SHEET** ( *objeto* : Variable, Field ; *nomFolhaEstilo* : Text )<!-- END REF-->
<!--REF #_command_.OBJECT SET STYLE SHEET.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594; | Nome de objeto (se * for especificado) ou<br/>Campo ou variável (se * for omitido) |
| nomFolhaEstilo | Text | &#8594; | Nome da folha de estilo |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|15 R3|Modificado|
|14|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.OBJECT SET STYLE SHEET.Summary-->O comando **OBJECT SET STYLE SHEET** modifica, para o processo atual, a folha de estilo associada ao objeto(s) designado(s) pelos parâmetros *objeto* e *\** .<!-- END REF--> Uma folha de estilo modifica a fonte, o tamanho de fonte e o estilo de fonte.

Ao passar o parâmetro opcional *\** se indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro objeto é um campo ou uma variável. Neste caso, passa uma referência de campo ou variável no lugar de uma cadeia (campo ou variável objeto unicamente).

Passe no parâmetro *nomFolhaEstilo*, o nome da folha de estilo a aplicar ao *objeto*. Também pode passar:

* O nome de uma folha de estilos existente (se a folha de estilo não existe, se devolve um erro, que pode interceptar utilizando um método instalado pelo comando [ON ERR CALL](../commands/on-err-call)).
* Uma cadeia vazia ("") para não aplicar a folha destilo e ao *objeto.*
* uma das constantes a seguir encontradas no tema "*Estilos de fonte*" para aplicar a folha de estilos automática:  

| Constante                         | Tipo   | Valor                               | Comentário                                                                                                 |  
| --------------------------------- | ------ | ----------------------------------- | ---------------------------------------------------------------------------------------------------------- |  
| Automatic style sheet             | Cadeia | \_\_automatic\_\_                   | Usado como padrão para todos os objetos                                                                    |  
| Automatic style sheet\_additional | Cadeia | \_\_automatic\_additional\_text\_\_ | Suportado por texto estático, campos e variaáveis somente. Usado para texto adicional em caixas de diálogo |  
| Automatic style sheet\_main       | Cadeia | \_\_automatic\_main\_text\_\_       | Suportado apenas para texto estático, campos e variáveis. Usado para texto principal em caixas de diálogo. |

Se uma folha de estilo já tinha sido associada ao objeto em modo Desenho, a chamada deste comando a substitui para o processo atual.

Se durante a sessão, utiliza os comandos [ST SET ATTRIBUTES](../commands/st-set-attributes), [ST SET TEXT](../commands/st-set-text) ou [OBJECT SET FONT](../commands/object-set-font), [OBJECT SET FONT SIZE](../commands/object-set-font-size) no *objeto* com o propósito de modificar sua fonte ou o tamanho de fonte, a referência a folha de estilos se apaga automaticamente do objeto - inclusive se atribui os mesmos atributos que os da folha de estilos. No entanto, se modificar o estilo (negrito, cursiva, etc.), por exemplo com os comandos [ST SET ATTRIBUTES](../commands/st-set-attributes) ou [OBJECT SET FONT STYLE](../commands/object-set-font-style), se adicionam estas novas propriedades a folha de estilo pela duração da sessão.

### Nota de compatibilidade 

Em **arquitetura de projeto**, só as três folhas de estilo automáticas são compatíveis com esse comando  
  

## Ver também 

*Estilos de fonte*  
[GET STYLE SHEET INFO](../commands/get-style-sheet-info)  
[LIST OF STYLE SHEETS](../commands/list-of-style-sheets)  
[OBJECT Get style sheet](../commands/object-get-style-sheet)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1257 |
| Thread-seguro | no |


