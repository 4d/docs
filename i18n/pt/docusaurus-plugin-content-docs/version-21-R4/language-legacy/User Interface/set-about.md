---
id: set-about
title: SET ABOUT
slug: /commands/set-about
displayed_sidebar: docs
---

<!--REF #_command_.SET ABOUT.Syntax-->**SET ABOUT** ( *textoElem* : Text ; *metodo* : Text )<!-- END REF-->
<!--REF #_command_.SET ABOUT.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| textoElem | Text | &#8594; | Novo item do menu Sobre |
| metodo | Text | &#8594; | Nome de método a executar quando o item de menu for escolhido |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|2004.4|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.SET ABOUT.Summary-->O comando SET ABOUT muda o comando de menu Sobre 4D do menu **Ajuda** (Windows) ou do menu **Aplicação** (macOS) em *textoItem*.<!-- END REF-->

Depois de chamar este comando, quando o usuário selecionar este comando de menu no modo Desenho ou Aplicação, *metodo* é chamado. Geralmente, este método mostra uma caixa de diálogo que dá informação sobre a versão de seu banco.  
  
Este comando é utilizado com 4D (local e remoto), 4D Desktop e 4D Server. Um novo processo é criado quando roda numa máquina servidor.

Nota: em Windows, este comando modifica a linhaa "Sobre 4D" no menu Ajuda criado pelo comando [SET HELP MENU](../commands/set-help-menu).

## Exemplo 1 

O exemplo abaixo substitui o comando de menu Sobre 4D pelo comando de menu Sobre o programador. O método SOBRE mostra uma caixa personalizada "Sobre": 

```4d
 SET ABOUT(“Sobre o programador…”;“Sobre”)
```

## Exemplo 2 

O exemplo abaixo reinicializa o comando de menu Sobre 4D: 

```4d
 SET ABOUT("Sobre 4D";"")
```

## Ver também 

[SET HELP MENU](../commands/set-help-menu)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 316 |
| Thread-seguro | no |


