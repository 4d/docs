---
id: object-set-action
title: OBJECT SET ACTION
slug: /commands/object-set-action
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET ACTION.Syntax-->**OBJECT SET ACTION** ( {* ;} *objeto* ; *acao* )<!-- END REF-->
<!--REF #_command_.OBJECT SET ACTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se for especificado, objeto é um nome de objeto (cadeia) Se for omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado ) ou<br/>Campo ou variável (se * for omitido) |
| acao | Text | &#8594;  | Ação para associar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET ACTION.Summary-->O comando **OBJECT SET ACTION** modifica, para o processo atual, a ação estandarte associada ao objeto ou aos objetos designado(s) pelos parâmetros *objeto* e *\** .<!-- END REF-->  
  
**Nota:** As ações padrão também podem configuradas para a sessão no editor de Formulários usando a lista de Propriedades (ver *Ações padrões* no manual de Referência Design).   

  
Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável no lugar de uma cadeia (campo ou variável objeto unicamente).  
  
No parâmetro *acao*, passe uma string contendo o nome da ação padrão associada com o objeto. Opcionalmente a ação pode ter parâmetros. para saber mais veja a seção *Ações padrões* no manual dereferência 4D Design. Pode também passar umas das constantes abaixo, encontradas no tema "*Ação estandarte*":  
  
| Constante                | Valor              | Comentário                                                                        |
| ------------------------ | ------------------ | --------------------------------------------------------------------------------- |
| ak accept                | accept             |                                                                                   |
| ak add subrecord         | addSubrecord       |                                                                                   |
| ak automatic splitter    | automaticSplitter  |                                                                                   |
| ak cancel                | cancel             |                                                                                   |
| ak clear                 | clear              | O alvo dessa ação é sempre o objeto que tem o foco do teclado                     |
| ak compute expressions   | computeExpressions | Atualiza todas as expressões dinâmicas na área                                    |
| ak copy                  | copy               | O alvo dessa ação é sempre o objeto que tem o foco do teclado                     |
| ak cut                   | cut                | O alvo dessa ação é sempre o objeto que tem o foco do teclado                     |
| ak database settings     | databaseSettings   | Mostra o diálogo de Configuração do banco de dados padrão.                        |
| ak delete record         | deleteRecord       |                                                                                   |
| ak delete subrecord      | deleteSubrecord    |                                                                                   |
| ak display subrecord     | displaySubrecord   |                                                                                   |
| ak edit subrecord        | editSubrecord      |                                                                                   |
| ak first page            | firstPage          |                                                                                   |
| ak first record          | firstRecord        |                                                                                   |
| ak font bold             | fontBold           | Alterna o atributo de fonte em negrito                                            |
| ak font color dialog     | color/showDialog   | Mostra o diálogo da cor de fonte do sistema                                       |
| ak font italic           | fontItalic         | Ativa o atributo de fonte em cursiva                                              |
| ak font linethrough      | fontLinethrough    | Ativa o atributo de fonte riscado                                                 |
| ak font show dialog      | font/showDialog    | Mostra o diálogo de seletor de fonte de sistema                                   |
| ak font show dialog      | font/showDialog    | システムフォントカラーピッカーダイアログボックスを表示します。                                                   |
| ak font style            | fontStyle          | Mostra o submenu de estilo de fonte padrão                                        |
| ak font style            | fontStyle          | 標準のフォントスタイルサブメニューを表示します。                                                          |
| ak font underline        | fontUnderline      | Ativa o atributo de fonte de sublinhado                                           |
| ak freeze expressions    | freezeExpressions  | Congela todas as expressões dinâmicas na área                                     |
| ak goto page             | gotoPage           | parâmetro: "?value=pageNumber"                                                    |
| ak last page             | lastPage           |                                                                                   |
| ak last record           | lastRecord         |                                                                                   |
| ak msc                   | msc                | Mostra a janela *Centro de segurança e manutenção*.                               |
| ak next page             | nextPage           |                                                                                   |
| ak next record           | nextRecord         |                                                                                   |
| ak none                  | ""                 |                                                                                   |
| ak open back url         | openBackURL        | Abre a URL anterior na sequência de navegação realizada pelo usuário na área Web. |
| ak open forward url      | openForwardURL     | Abre a seguinte URL na sequência de navegação realizada pelo usuário na área Web. |
| ak paste                 | paste              | O alvo dessa ação é sempre o objeto que tem o foco do teclado                     |
| ak previous page         | previousPage       |                                                                                   |
| ak previous record       | previousRecord     |                                                                                   |
| ak quit                  | quit               | Mostra um diálogo de confirmação "Tem certeza?",se confirmar, sai da aplicação 4D |
| ak redo                  | redo               | O alvo dessa ação é sempre o objeto que tem o foco do teclado                     |
| ak refresh current url   | refreshCurrentURL  | Recarrega os conteúdos atuais da área Web.                                        |
| ak return to design mode | design             | Traz as janelas e las barras de menu do ambiente Desenho 4D ao primeiro plano.    |
| ak select all            | selectAll          | O alvo dessa ação é sempre o objeto que tem o foco do teclado                     |
| ak show clipboard        | showClipboard      |                                                                                   |
| ak show reference        | visibleReferences  | Exibe todas as expressões dinâmicas como referências                              |
| ak stop loading url      | stopLoadingURL     | Pára o carregamento da página ou objetos da URL atual na área Web.                |
| ak undo                  | undo               | O alvo dessa ação é sempre o objeto que tem o foco do teclado                     |
  
  
Nota de Compatibildade: Constantes legados (com o prefixo \_o\_ no tema) estão obsoletas desde 4D v16 R3\. Entretanto são ainda mantidas por compatibilidade. 

#### Exemplo 

Se quiser associar a ação padrão **Validate** com um botão:

```4d
 OBJECT SET ACTION(*;"bValidate";ak accept)
```

#### Ver também 

[OBJECT Get action](object-get-action.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1259 |
| Thread-seguro | &cross; |


