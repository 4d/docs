---
id: openaiproviders
title: OpenAIProviders
---

# OpenAIProviders

## 概要

`OpenAIProviders` クラスは、設定をロードし、`provider:model` フォーマットのモデル文字列の解決を管理することで、AI プロバイダー設定を管理します。

完全な使用法のドキュメンテーションについては、[プロバイダーモデルエイリアス](../provider-model-aliases.md) の章を参照してください。

## 説明

このクラスを使用すると、以下の様な方法でマルチプロバイダーのサポートを可能にします:

- 単一のJSON ファイルからプロバイダー設定をロードする
- プロバイダーやモデルID にマップされる、名前付けされたモデルをロードする
- `provider:model` シンタックスを完全なAPI 設定へと解決する
- 単純に名前だけで名前付けされたモデルエイリアスを完全なプロバイダー + モデル設定に解決する

`OpenAI` クラスはインスタンス化された際に自動的にプロバイダー設定をロードします。

## コンストラクター

```4d
var $providers := cs.AIKit.OpenAIProviders.new()
```

`AIProviders.json` ファイルからプロバイダー設定をロードする、新しいインスタンスを作成します。 ファイルの場所とフォーマットについての詳細に関しては、プロバイダーエイリアスのドキュメンテーション内の[設定ファイル](../provider-model-aliases.md#設定ファイル) の章を参照してください。

**重要:**

- 最初の既存ファイルのみがロードされます。 複数のファイルが結合されることはありません。
- 設定はインスタンス化時に一度だけ読み込まれます。 `AIProviders.json` ファイルがインスタンス化後に変更された場合、その変更は既存のインスタンスには反映されません。 更新された設定をリロードするためには、`OpenAIProviders` のインスタンスを新しく作成する必要があります。

## 効果

### OpenAIクラスとの統合

```4d
var $client := cs.AIKit.OpenAI.new()

// provider:model シンタックスのモデルエイリアスを使用する
var $result := $client.chat.completions.create($messages; {model: "openai:gpt-5.1"})
var $result := $client.chat.completions.create($messages; {model: "anthropic:claude-3-opus"})
var $result := $client.chat.completions.create($messages; {model: "local:llama3"})
```

### プロバイダーへの直接アクセス

```4d
var $providers := cs.AIKit.OpenAIProviders.new()

// 特定のプロバイダー設定を取得
var $config := $providers.get("openai")
// {baseURL: "...", apiKey: "...", modelAliases: [...], ...} あるいは Null を返す

// 全てのプロバイダー名を取得
var $names := $providers.list()
// ["openai", "anthropic", "mistral", "local"] を返す
```

## 関数

### get()

**get**(*name* : Text) : Object

名前で指定してプロバイダー設定を取得します。

| 引数     | 型      | 説明                                     |
| ------ | ------ | -------------------------------------- |
| *name* | Text   | プロバイダー名                                |
| 戻り値    | Object | プロバイダー設定オブジェクト、あるいは見つからなかった場合には `Null` |

#### 例題

```4d
var $config := $providers.get("openai")
If ($config # Null)
    // $config.baseURL、 $config.apiKey、 などを使用

    // それを使用してクライアントをビルド可能
    var $client:=cs.AIKit.OpenAI.new($config)
End if
```

### list()

**list**() : Collection

全てのプロバイダー名を取得します。

| 引数  | 型          | 説明             |
| --- | ---------- | -------------- |
| 戻り値 | Collection | プロバイダー名のコレクション |

#### 例題

```4d
var $names := $providers.list()
// Returns: ["openai", "anthropic", ...] を返します

For each ($name; $names)
    var $config := $providers.get($name)
End for each
```

### modelAliases()

**modelAliases**() : Collection

設定されたモデルエイリアスを全て取得します。

| 引数  | 型          | 説明                    |
| --- | ---------- | --------------------- |
| 戻り値 | Collection | モデルエイリアスオブジェクトのコレクション |

コレクションの各オブジェクトは以下のプロパティを格納しています:

| プロパティ      | 型    | 説明                  |
| ---------- | ---- | ------------------- |
| `name`     | Text | モデルエイリアス名           |
| `provider` | Text | プロバイダー名             |
| `model`    | Text | プロバイダーに対して使用するモデルID |

#### 例題

```4d
var $models := $providers.modelAliases()
// [{name: "my-gpt", provider: "openai", model: "gpt-5.1"}, ...] を返します

For each ($model; $models)
    // $m.name, $m.provider, $m.model
End for each
```

## モデル解決

モデル解決には二つのシンタックスがサポートされています:

### プロバイダーエイリアス(`provider:model`)

プロバイダーとモデル名を直接指定します:

```4d
var $client := cs.AIKit.OpenAI.new()
$client.chat.completions.create($messages; {model: "openai:gpt-5.1"})
```

これは内部的には以下の様に解決されます:

1. `"openai:gpt-5.1"` を provider=`"openai"` および model=`"gpt-5.1"` へと分解します
2. `"openai"` プロバイダー設定を検索します
3. `baseURL` と `apiKey`を取得します
4. 解決された設定を使用してAPI リクエストを作成します

**例題:**

- `"openai:gpt-5.1"` → OpenAI プロバイダーのgpt-5.1 モデルを使用せよ
- `"anthropic:claude-3-opus"` → Anthropic プロバイダーのclaude-3-opus を使用せよ
- `"local:llama3"` → local プロバイダーのllama3 モデルを使用せよ

### モデルエイリアス(単に名前)

設定のセクションから単に名前だけを使用して名前付きモデルを指定:

```4d
var $client := cs.AIKit.OpenAI.new()
$client.chat.completions.create($messages; {model: "my-gpt"})
```

これは内部的には以下の様に解決されます:

1. `"my-gpt"` を`models` 設定内で検索します
2. その`provider` (例: `"openai"`) および`model` (例: `"gpt-5.1"`) を探します
3. プロバイダーを解決して、`baseURL` および `apiKey` を取得します
4. 解決された設定を使用してAPI リクエストを作成します

**例題:**

- `"my-gpt"` → モデルエイリアス "my-gpt" を使用(それに設定されたプロバイダーとモデルへと解決します)
- `"my-embedding"` → 埋め込みの操作に "my-embedding" のモデルエイリアスを使用します
