# Replace markdown links from [name.md] to [../commands/name]

# Process docs/language-legacy
$docsPath = "c:\git\GitHub\docs\docs\language-legacy"
$files = Get-ChildItem -Path $docsPath -Filter "*.md" -Recurse

$count = 0
foreach($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $originalContent = $content
    
    # Replace pattern: ](name.md) to ](../commands/name)
    # This regex matches ](name.md) and captures the command name without extension
    $content = $content -replace '\]\(([a-zA-Z0-9_-]+)\.md\)', '](../commands/$1)'
    
    # Only write if content changed
    if($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        $count++
        Write-Host "Updated: $($file.FullName)"
    }
}

Write-Host "Total files updated in docs/language-legacy: $count"

# Process i18n
$i18nPath = "c:\git\GitHub\docs\i18n"
$i18nFiles = Get-ChildItem -Path $i18nPath -Filter "*.md" -Recurse | Where-Object { $_.FullName -match "docusaurus-plugin-content-docs\\current\\language-legacy" }

$count2 = 0
foreach($file in $i18nFiles) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $originalContent = $content
    
    # Replace pattern
    $content = $content -replace '\]\(([a-zA-Z0-9_-]+)\.md\)', '](../commands/$1)'
    
    # Only write if content changed
    if($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        $count2++
        Write-Host "Updated: $($file.FullName)"
    }
}

Write-Host "Total files updated in i18n: $count2"
Write-Host "Grand total: $($count + $count2) files"
