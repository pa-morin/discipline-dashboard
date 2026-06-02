$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$stageDir = Join-Path $projectRoot ".netlify-deploy"

if (Test-Path $stageDir) {
  Remove-Item -LiteralPath $stageDir -Recurse -Force
}

New-Item -ItemType Directory -Force -Path $stageDir | Out-Null

$siteFiles = @(
  "index.html",
  "app.js",
  "style.css",
  "goals.json"
)

foreach ($file in $siteFiles) {
  $source = Join-Path $projectRoot $file
  if (-not (Test-Path $source)) {
    throw "Missing required deploy file: $file"
  }

  Copy-Item -LiteralPath $source -Destination (Join-Path $stageDir $file) -Force
}

Write-Host "Staged Netlify deploy files in $stageDir"
Write-Host $stageDir

