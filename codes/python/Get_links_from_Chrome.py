import pygetwindow as gw
import pyautogui
import pyperclip
import time

# Check if Chrome is running
chrome_windows = gw.getWindowsWithTitle('Google Chrome')
if not chrome_windows:
    print("Google Chrome is not running.")
else:
    # Initialize an empty list to store the URLs
    urls = []

    for window in chrome_windows:
        # Activate the Chrome window
        window.activate()
        time.sleep(0.5)  # Wait for the window to be activated

        # Send keyboard shortcut to copy the URL from the address bar
        pyautogui.hotkey('Ctrl', 'l')
        pyautogui.hotkey('Ctrl', 'c')

        # Get the copied URL from the clipboard using pyperclip
        copied_url = pyperclip.paste()

        if copied_url.startswith('http') or copied_url.startswith('https'):
            urls.append(copied_url)

    # Display the list of opened links
    if not urls:
        print("No links are open in Google Chrome.")
    else:
        print("Opened links in Google Chrome:")
        for url in urls:
            print(url)
