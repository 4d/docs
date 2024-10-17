---
id: reload-external-data
title: RELOAD EXTERNAL DATA
slug: /commands/reload-external-data
displayed_sidebar: docs
---

<!--REF #_command_.RELOAD EXTERNAL DATA.Syntax-->**RELOAD EXTERNAL DATA** ( *oCampo* )<!-- END REF-->
<!--REF #_command_.RELOAD EXTERNAL DATA.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| oCampo | Text, Blob, Picture, Object | &#8594;  | Campo para definir a localização de armazenamento |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.RELOAD EXTERNAL DATA.Summary-->O comando **RELOAD EXTERNAL DATA** permite recarregar em memória o conteúdo de um arquivo de armazenamento externo associado a um campo de tipo BLOB, Imagem ou Texto.<!-- END REF-->  
  
Este comando é útil quando o campo de um registro já carregado em memória é modificado no disco por outra aplicação (os arquivos de armazenamento externo dos campos sempre são acessíveis em escritura). Por exemplo, uma imagem utilizada em um campo Imagem pode ser modificada por um editor gráfico e logo de guardar-se no disco.  
  
A continuação deve recarregar os dados utilizando o comando **RELOAD EXTERNAL DATA** para atualizar o conteúdo do campo se for mostrado no formulário.

**Nota**: o comando **RELOAD EXTERNAL DATA** só funciona em 4D local ou 4D Server. Não é possível recarregar individualmente um campo com 4D em modo remoto. Neste contexto, é necessário recarregar todos os registros (utilizando o comando [LOAD RECORD](load-record.md) por exemplo).

#### Ver também 

[SET EXTERNAL DATA PATH](set-external-data-path.md)  