---
id: set-print-preview
title: SET PRINT PREVIEW
slug: /commands/set-print-preview
displayed_sidebar: docs
---

<!--REF #_command_.SET PRINT PREVIEW.Syntax-->**SET PRINT PREVIEW** ( *vistaprevia* )<!-- END REF-->
<!--REF #_command_.SET PRINT PREVIEW.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| vistaprevia | Boolean | &#8594;  | Pré-visualização em tela (TRUE), ou sem vista prévia (FALSE) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET PRINT PREVIEW.Summary-->SET PRINT PREVIEW lhe permite selecionar ou desmarcar por programação a opção de pré-visualização em tela.<!-- END REF--> Se passar TRUE em *vistaprevia*, se selecionar Pré-visualização em tela, se passar FALSE, será desmarcado. Este parâmetro é local para um processo e não afeta a impressão de outros processos ou usuários.

**Nota:** em Windows, é possível definir o formato da vista prévia de impressão utilizando o comando [SET PRINT OPTION](set-print-option.md).

#### Exemplo 

O exemplo a seguir seleciona a opção Pré-visualização em tela para mostrar os resultados de uma pesquisa em tela, e depois a desmarca.

```4d
 QUERY([Clientes])
 If(OK=1)
    SET PRINT PREVIEW(True)
    PRINT SELECTION([Clientes];*)
    SET PRINT PREVIEW(False)
 End if
```

#### Ver também 

[Get print preview](get-print-preview.md)  
[Is in print preview](is-in-print-preview.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 364 |
| Thread-seguro | &check; |
| Proibido no servidor ||


