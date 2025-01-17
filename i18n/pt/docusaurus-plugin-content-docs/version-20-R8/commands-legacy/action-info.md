---
id: action-info
title: Action info
slug: /commands/action-info
displayed_sidebar: docs
---

<!--REF #_command_.Action info.Syntax-->**Action info** ( *ação* {; *alvo*} ) : Object<!-- END REF-->
<!--REF #_command_.Action info.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| ação | Text | &#8594;  | Nome da ação padrão ou padrão incluindo parâmetro se exigido |
| alvo | Integer | &#8594;  | Define o alvo da ação para obter informação: formulário principal ou atual |
| Resultado | Object | &#8592; | Objeto que contém status da ação como propriedade booleana: isEnabled, isVisible, isChecked, isMixed, isUnkownState |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Action info.Summary-->O comando **Action info** devolve várias informações, incluida a disponibilidade e o estado, sobre a *ação* definida no *objetivo*, de acordo com o contexto da aplicação atual.<!-- END REF-->

Em *ação*, passe o nome da ação padrão a verificar. Pode ser uma string ou uma constante de tema *Ação estandarte*. Algumas ações aceitam parâmetros. Neste caso, deve utilizar o padrão seguinte: *actionName?parameterName=parameterValue.* Exemplo: *"gotoPage?value=2"*

Ações 4D disponíveis estão listadas na seção *Ações padrões* do manual 4D Design Reference.

**Nota**: Ações especificas adicionais são oferecidas para documentos 4D Write Pro. Estão detalhadas na seção *Usando ações padrão* do manual 4D Write Pro Reference manual.

Pode passar em *objetivo* o contexto de formulário no qual se deve executar a *ação*, se estiver disponível. Pode utilizar uma das seguintes constantes de tema *Ação estandarte*:

| Constante       | Tipo          | Valor | Comentário                                                                                                                                                                 |
| --------------- | ------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ak current form | Inteiro longo | 1     | O formulário atual é o formulário onde se chamou a ação. Poderia ser o formulário principal ou um formulário tipo paleta diante do formulário principal do processo atual. |
| ak main form    | Inteiro longo | 2     | O formulário principal é o documento mais a frente ou o formulário diálogo do processo, excluindo qualquer janela flutuante ou pop up                                      |

**Nota:** se for omitido o *objetivo*, se utiliza por padrão o contexto ak current form.

O comando **Action info** devolve informação em forma de um objeto que contenha as seguintes propriedades:

| **Propriedad**e | **Tipo** | **Descrição**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ativado         | Booleano | true se puder invocar a ação, falso se contrário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| estado          | Text   | O valor pode ser uma das seguintes strings:<table><tbody><tr><td>"selecionada"</td><td>a ação está selecionada, o que significa que a propriedad está definida. Exemplo: o texto selecionado está em negrito, a propriedade "estado" da ação padrão ak font bold contém "selecionado"</td></tr><tr><td>"não selecionado"</td><td> a ação padrão não está selecionada, o que significa que a propriedade não está definida. Exemplo: o texto selecionado não está em negrito, a propriedade "estado" da ação padrão ak font bold contém "não selecionado". </td></tr><tr><td>"combinada"</td><td>a ação é combinada, o que significa que a propriedade está parcialmente definida. Exemplo: arte de texto selecionado está em "negrito", a propriedade "estado" da ação padrão ak font bold contém "combinada".</td></tr></tbody></table> |
| título          | Text     | Nome atual localizado da etiqueta de ação. Exemplo: "Undo <last action>"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| visível         | Booleano | true se a ação for visível no formulário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| value           | Text   | Valor atual do parâmetro ação string (se houver). Por exemplo, se a ação padrão for "fontSize?value=10pt", a propriedade *valor* contém "10pt"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

\] 

Se não pode ser determinado o estado da ação (por exemplo, se não afetar a nenhum objeto ou comando de menu), o comando devolve um objeto nulo (indefinido).

#### Exemplo 

Se quiser saber se a ação copiar está disponível (ou seja, se foram selecionados alguns dados):

```4d
 var $actionInfo : Object
 var $isEnabled : Boolean
 $actionInfo:=Action info(ak copy)
 If(OB Is defined($actionInfo.enabled)) //a ação é definida no processo
    If(OB Get($actionInfo;"enabled"))
  //a ação copiar está disponível
    End if
 End if
```

#### Ver também 

[INVOKE ACTION](invoke-action.md)  
[SET LIST ITEM PARAMETER](set-list-item-parameter.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1442 |
| Thread-seguro | &cross; |


