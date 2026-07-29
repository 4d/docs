---
id: provider-model-aliases
title: プロバイダー & モデルエイリアス
---

# プロバイダー & モデルエイリアス

OpenAI クライアントはプロバイダーとモデルエイリアスをサポートし、これによりプロバイダー設定や名前付けされたモデルエイリアスをJSON ファイル内に定義して、シンプルなシンタックスを使用してそれらを参照することができます。

## 概要

API エンドポイントと認証情報をコード内にハードコーディングするのではなく、以下の様なことを行うことができます:

- プロバイダー設定をJSON ファイル内で定義する
- `provider:model` シンタックスを使用してプロバイダーとモデルを直接指定する
- 名前付けされたモデルエイリアスを定義し、プロバイダーとモデルID にマップする
- 名前付けされたモデルエイリアスを名前(例: `my-gpt`) だけで使用する
- プロバイダー間(OpenAI、Anthropic、ローカルな Ollama、など)を 簡単に切り替える

## 設定ファイル

クライアントは、既存のファイルから(優先度順で)最初に見つかったプロバイダー設定ファイルを自動的に読み込みます:

| 優先順位                     | 場所        | ファイルパス                                       |
| ------------------------ | --------- | -------------------------------------------- |
| 1 (高) | userData  | `<data folder>/Settings/AIProviders.json`    |
| 2                        | user      | `<package folder>/Settings/AIProviders.json` |
| 3 (低) | structure | `/SOURCES/AIProviders.json`                  |

**重要:** **既存のファイルの最初のもの** のみがロードされます。 複数のファイルが結合されることはありません。

### 設定ファイルフォーマット

```json
{
  "providers": {
    "provider_name": {
      "baseURL": "https://api.example.com/v1",
      "apiKey": "optional-key",
      "organization": "optional-org-id",
      "project": "optional-project-id"
    }
  },
  "models": {
    "model_alias_name": {
      "provider": "provider_name",
      "model": "actual-model-id"
    }
  }
}
```

### プロバイダーフィールド

| フィールド          | 型    | 必須 | 説明                                            |
| -------------- | ---- | -- | --------------------------------------------- |
| `baseURL`      | Text | ◯  | API エンドポイント URL                               |
| `apiKey`       | Text | ×  | API キーの値                                      |
| `organization` | Text | ×  | 組織の ID (オプション、OpenAI特有)    |
| `project`      | Text | ×  | プロジェクト ID (オプション、OpenAI特有) |

### モデルエイリアスフィールド

| フィールド      | 型    | 必須 | 説明                                                      |
| ---------- | ---- | -- | ------------------------------------------------------- |
| `provider` | Text | ◯  | プロバイダー名(`providers` 内に存在している必要があります) |
| `model`    | Text | ◯  | プロバイダーによって使用されているモデル ID                                 |

### 設定例

```json
{
  "providers": {
    "openai": {
      "baseURL": "https://api.openai.com/v1"
    },
    "anthropic": {
      "baseURL": "https://api.anthropic.com/v1"
    },
    "local": {
      "baseURL": "http://localhost:11434/v1"
    },
    "mistral": {
      "baseURL": "https://api.mistral.ai/v1",
      "apiKey": "your-mistral-key"
    }
  },
  "models": {
    "my-gpt": {
      "provider": "openai",
      "model": "gpt-5.1"
    },
    "my-claude": {
      "provider": "anthropic",
      "model": "claude-3-5-sonnet-20241022"
    },
    "my-embedding": {
      "provider": "openai",
      "model": "text-embedding-3-small"
    }
  }
}
```

## API呼び出しの使用状況

### モデルパラメーターのフォーマット

二つのシンタックスがサポートされています:

| シンタックス                | 説明                                            |
| --------------------- | --------------------------------------------- |
| `provider:model_name` | プロバイダーエイリアス - プロバイダーとモデルを直接指定します              |
| `model_alias`         | モデルエイリアス — 命名されたモデルを`models` 設定から名前を使用して参照します |

#### プロバイダーエイリアスシンタックス

`provider:model_name` シンタックスを、モデル引数を受け取る任意のAPI 呼び出し内で使用します:

```4d
var $client := cs.AIKit.OpenAI.new()

// チャット補完
var $result := $client.chat.completions.create($messages; {model: "openai:gpt-5.1"})
var $result := $client.chat.completions.create($messages; {model: "anthropic:claude-3-opus"})
var $result := $client.chat.completions.create($messages; {model: "local:llama3"})

// 埋め込み
var $result := $client.embeddings.create("text"; "openai:text-embedding-3-small")
var $result := $client.embeddings.create("text"; "local:nomic-embed-text")

// 画像生成
var $result := $client.images.generate("prompt"; {model: "openai:dall-e-3"})
```

#### モデルエイリアスシンタックス

設定ファイル内の`models` セクション内で定義されている名前付けされたモデルを、単純に名前だけを使用して参照します。 プロバイダー、モデルID、そして認証情報は、自動的に解決されます:

```4d
var $client := cs.AIKit.OpenAI.new()

// 名前付けされたモデルエイリアスを使用
var $result := $client.chat.completions.create($messages; {model: "my-gpt"})
var $result := $client.chat.completions.create($messages; {model: "my-claude"})

// 名前づけされたモデルエイリアスでの埋め込み
var $result := $client.embeddings.create("text"; "my-embedding")
```

### 動作する仕組み

#### プロバイダーエイリアス(`provider:model`)

`provider:model` シンタックスを使用するとき、クライアントは以下の様なことを自動的に行っています:

1. モデル文字列を**解析**し、プロバイダー名とモデル名を取得します
   - 例: `"openai:gpt-5.1"` → provider=`"openai"`, model=`"gpt-5.1"`

2. ロードされたJSON ファイル内で、プロバイダー設定を**検索** します
   - `baseURL`、 `apiKey`、 `organization`、 `project`といった情報を取得します

3. 解決された設定を使用して**API リクエストを作成** します
   - 正しい`apiKey` で、プロバイダーの`baseURL` にリクエストを送信します

#### モデルエイリアス(単に名前)

設定エイリアスに合致した単純なモデル名を使用する場合、クライアントは以下の様なことを自動的に行っています:

1. 設定の`models` セクション内からモデルエイリアスを**検索** します
   - 例: `"my-gpt"` → `provider: "openai"`, `model: "gpt-5.1"` であるエントリーを探します

2. 割り当てられたプロバイダーを**解決** し、`baseURL` および `apiKey` を取得します

3. プロバイダーのエンドポイントと、保存されたモデルID を使用して**API リクエストを作成** します

### 単純なモデル名を使用する

プロバイダーの接頭辞を**使用せずに**モデル名を指定した場合、クライアントはコンストラクターの設定を使用します:

```4d
// コンストラクターの設定を使用
var $client := cs.AIKit.OpenAI.new({apiKey: "sk-..."; baseURL: "https://api.openai.com/v1"})
var $result := $client.chat.completions.create($messages; {model: "gpt-5.1"})

// プロバイダーエイリアスを上書きする
var $result := $client.chat.completions.create($messages; {model: "anthropic:claude-3-opus"})

// モデルエイリアスを上書きする(単純な名前)
var $result := $client.chat.completions.create($messages; {model: "my-gpt"})
```

## 例題

### 複数のプロバイダーを使用したチャットアプリケーション

```4d
var $client := cs.AIKit.OpenAI.new()
var $messages := []
$messages.push({role: "user"; content: "What is the capital of France?"})

// OpenAI を使用
var $result := $client.chat.completions.create($messages; {model: "openai:gpt-5.1"})

// Anthropic を使用
var $result := $client.chat.completions.create($messages; {model: "anthropic:claude-3-5-sonnet"})

// ローカルの Ollama を使用
var $result := $client.chat.completions.create($messages; {model: "local:llama3.2"})
```

### 複数のプロバイダーを使用した埋め込み

```4d
var $client := cs.AIKit.OpenAI.new()
var $text := "Hello world"

// OpenAI 埋め込みを使用
var $embedding1 := $client.embeddings.create($text; "openai:text-embedding-3-small")

// ローカルな埋め込みを使用
var $embedding2 := $client.embeddings.create($text; "local:nomic-embed-text")
```

## 設定管理

プロバイダー設定はまた、[4D ストラクチャー設定](https://developer.4d.com/docs/settings/ai) を使用するか、またはJSON ファイルを直接編集することでも管理することができます。

**プロバイダーの追加または編集:**

1. 4Dストラクチャー設定を使用する(推奨)、または
2. 適切なJSON ファイル(userData、user、またh structure)を編集する
3. アプリケーションを再起動し、変更を読み込むために新しいOpenAI クライアントインスタンスを作成する

**推奨されるファイルの場所:**

- **ユーザー特有の設定:** `<data folder>/Settings/AIProviders.json`
- **アプリケーションのデフォルト設定:** `/SOURCES/AIProviders.json`

### リロード機能はなし

クライアントが一度インスタンス化されてしまったら、プロバイダー設定をリロードすることはできません。 設定の変更を反映させるためには:

```4d
// 設定が変更された - 新しいクライアントを作成
var $client := cs.AIKit.OpenAI.new()
```

## セキュリティ上の注意事項

4D をクライアント/サーバーモードで使用している場合、API トークンおよび資格情報をクライアントマシンに漏れることから保護するために、AI 関連のコードは全てサーバー側で実行することが **強く推奨されます**。

## 一般的な使用例

### Ollama を使用したローカルな開発

```json
{
  "providers": {
    "local": {
      "baseURL": "http://localhost:11434/v1"
    }
  }
}
```

```4d
var $client := cs.AIKit.OpenAI.new()
var $result := $client.chat.completions.create($messages; {model: "local:llama3.2"})
```

### 名前付けされたモデルエイリアス

モデルを一度定義すれば、名前だけでどこからでもそれを使用することができます:

```json
{
  "providers": {
    "openai": {
      "baseURL": "https://api.openai.com/v1",
      "apiKey": "your-openai-key"
    },
    "anthropic": {
      "baseURL": "https://api.anthropic.com/v1",
      "apiKey": "your-anthropic-key"
    }
  },
  "models": {
    "chat": {
      "provider": "openai",
      "model": "gpt-5.1"
    },
    "fast": {
      "provider": "anthropic",
      "model": "claude-3-5-haiku-20241022"
    },
    "embedding": {
      "provider": "openai",
      "model": "text-embedding-3-small"
    }
  }
}
```

```4d
var $client := cs.AIKit.OpenAI.new()

// 名前付けされたモデルエイリアスを使用 — プロバイダーやモデルIDを覚えておく必要はありません
var $result := $client.chat.completions.create($messages; {model: "chat"})
var $result := $client.chat.completions.create($messages; {model: "fast"})
var $embedding := $client.embeddings.create("text"; "embedding")
```

### 設定されたモデルを全て表示

```4d
var $providers := cs.AIKit.OpenAIProviders.new()
var $models := $providers.modelAliases()
// [{name: "chat", provider: "openai", model: "gpt-5.1"}, ...] を返します
```

### 複数のクラウドプロバイダーを使用したプロダクション

```json
{
  "providers": {
    "openai": {
      "baseURL": "https://api.openai.com/v1",
      "apiKey": "your-openai-key"
    },
    "anthropic": {
      "baseURL": "https://api.anthropic.com/v1",
      "apiKey": "your-anthropic-key"
    },
    "azure": {
      "baseURL": "https://your-resource.openai.azure.com",
      "apiKey": "your-azure-key"
    }
  }
}
```

### プロバイダー特有の組織

```json
{
  "providers": {
    "openai-team-a": {
      "baseURL": "https://api.openai.com/v1",
      "organization": "org-team-a-id"
    },
    "openai-team-b": {
      "baseURL": "https://api.openai.com/v1",
      "organization": "org-team-b-id"
    }
  }
}
```

```4d
// 別々の組織へルーティング
var $resultA := $client.chat.completions.create($messages; {model: "openai-team-a:gpt-5.1"})
var $resultB := $client.chat.completions.create($messages; {model: "openai-team-b:gpt-5.1"})
```

## 関連するドキュメンテーション

- [OpenAI Class](Classes/OpenAI.md) - メインのクライアントクラス
- [OpenAIProviders Class](Classes/OpenAIProviders.md) - プロバイダー設定管理用
- [Compatible OpenAI APIs](compatible-openai.md) - 互換性のあるプロバイダーの一覧
