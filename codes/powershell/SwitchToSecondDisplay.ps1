# Detect the number of connected monitors
$monitorCount = (Get-WmiObject -Namespace root/wmi -Class WmiMonitorBasicDisplayParams).Count

# If there are at least two monitors, set the display to the second one
if ($monitorCount -ge 2) {
    $DisplaySettings = New-Object -ComObject WScript.Shell
    $DisplaySettings.SendKeys("%{F7}")
}
