---
id: on-drop-database-method
title: On Drop database method
slug: /commands/on-drop-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Drop database method.Syntax-->**On Drop database method**<!-- END REF-->
<!--REF #_command_.On Drop database method.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### 

<!--REF #_command_.On Drop database method.Summary-->O On Drop database method está disponível em aplicações 4D locais ou remotas.<!-- END REF-->

Este método de banco é executado automaticamente no caso de se soltar objetos na aplicação 4D fora de um contexto formulário ou diálogo. Dependendo da plataforma e do tipo de aplicação, são suportados diferentes tipos de soltar

| **Ação**                                    | **Plataforma(s)**   | **Comentário**                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Soltar em uma área vazia da janela MDI      | Windows             | Não disponível quando o banco de dados for executado em modo SDI já que não há nenhuma janela MDI neste contexto (consulte a seção *Modo SDI em Windows*).                                                                                                                                                                      |
| Soltar no icone 4D em Dock                  | macOS               |                                                                                                                                                                                                                                                                                                                                 |
| Soltar no icone 4D no escritorio do sistema | Windows(\*) e macOS | **On Drop database method** é chamada unicamente, se a aplicação já tiver sido lançada, exceto no caso das aplicações fusionadas com 4D Desktop. Neste caso, o método banco de dados é chamado mesmo quando o banco de dados não tiver sido lançado. Isto significa que é possível definir firmas de documentos personalizadas. |

(\*) Não compatível com 4D Developer 64 bits em Windows porque esta ação inicia uma nova instância de aplicação (funcionalidade de sistema).

 Em Mac OS, deve pressionar as teclas **Opção**+**Comando** ao soltar para que se chame o método de banco. 

#### Exemplo 

Este exemplo pode ser utilizado para abrir um documento 4D Write que foi soltado fora de um formulário:   
  
```4d
  //Método de banco On Drop
 arquivoSolto:=Get file from pasteboard(1)
 If(Position(".4W7";droppedFile)=Length(arquivoSolto)-3)
    areaExterna:=Open external window(100;100;500;500;0;arquivoSolto;"_4D Write")
    WR OPEN DOCUMENT(areaExterna;arquivoSolto)
 End if
```

#### Ver também 

*Arrastar e Soltar*  