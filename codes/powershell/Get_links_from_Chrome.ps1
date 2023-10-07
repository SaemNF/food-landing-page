# Check if Chrome is running
$chromeProcesses = Get-Process | Where-Object { $_.Name -eq "chrome" }

if ($chromeProcesses.Count -eq 0) {
    Write-Host "Google Chrome is not running."
}
else {
    # Initialize an empty array to store the URLs
    $urls = @()

    foreach ($process in $chromeProcesses) {
        # Get the Chrome window's title
        $chromeWindowTitle = $process.MainWindowTitle

        # Check if it's a Chrome window with a webpage title (not just the browser itself)
        if ($chromeWindowTitle -ne "Google Chrome") {
            $urls += $chromeWindowTitle
        }
    }

    # Display the list of opened links
    if ($urls.Count -eq 0) {
        Write-Host "No links are open in Google Chrome."
    }
    else {
        Write-Host "Opened links in Google Chrome:"
        $urls | ForEach-Object { Write-Host $_ }
    }
}
