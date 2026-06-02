$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$projectRoot = Split-Path -Parent $PSScriptRoot
$appPath = Join-Path $projectRoot "index.html"

if (-not (Test-Path $appPath)) {
  Write-Host "Could not find index.html at:"
  Write-Host $appPath
  exit 1
}

if (Test-Path $edgePath) {
  Start-Process $edgePath -ArgumentList "`"$appPath`""
} elseif (Test-Path $chromePath) {
  Start-Process $chromePath -ArgumentList "`"$appPath`""
} else {
  Write-Host "Could not find Edge or Chrome."
  Write-Host "Open this file manually instead:"
  Write-Host $appPath
}
