---
id: method-set-access-mode
title: METHOD SET ACCESS MODE
slug: /commands/method-set-access-mode
displayed_sidebar: docs
---

<!--REF #_command_.METHOD SET ACCESS MODE.Syntax-->**METHOD SET ACCESS MODE** ( *modo* )<!-- END REF-->
<!--REF #_command_.METHOD SET ACCESS MODE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| modo | Integer | &#8594;  | Modo de acesso aos objetos bloqueados |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.METHOD SET ACCESS MODE.Summary-->O comando **METHOD SET ACCESS MODE** permite definir o comportamento de 4D quando intenta acessar em escritura a um objeto que já foi carregado em modificação por outro usuário ou processo .<!-- END REF--> O alcance deste comando é a sessão atual.

Em *modo*, passe uma das seguintes constantes do tema *Design Object Access*:

| Constante                | Tipo          | Valor | Comentário                                                                                                                                                |
| ------------------------ | ------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| On object locked abort   | Inteiro longo | 0     | A carga do objeto se aborta (funcionamento por defeito)                                                                                                   |
| On object locked confirm | Inteiro longo | 2     | 4D mostra uma caixa de diálogo permitindo-lhe eleger entre intentar novamente o abortar. Em modo remoto, esta opção não é suportada (a carga se abandona) |
| On object locked retry   | Inteiro longo | 1     | 4D tenta carregar o objeto até que seja liberado                                                                                                          |


#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1191 |
| Thread-seguro | &cross; |


