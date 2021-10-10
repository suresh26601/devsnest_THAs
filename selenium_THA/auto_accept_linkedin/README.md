# AUTO LINKEDIN REQUEST ACCEPTOR

> Python mudules which we need for automation

```py
import os
from time import sleep
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
```

> This is basically for linking with your system Chrome Browser and open the new tab on chrome.

```py
options = webdriver.ChromeOptions()
options.add_argument("user-data-dir={}\driver_data".format(os.getcwd()))

driver = webdriver.Chrome(ChromeDriverManager().install(), chrome_options=options)
```

> driver.get() takes the web link and go through on it.

```py
driver.get("https://linkedin.com")
```

> This will wait until you are not logged in.
> When you press '1' it passes for further code execution.

```py
while "1" != input("press 1 when signed in: "):
    pass
```

```py
driver.get("https://www.linkedin.com/mynetwork/")
```

> Returns the list of all elements which class attribute has following value using xpath.

```py
buttons=driver.find_elements_by_xpath('//button[@class="artdeco-button artdeco-button--2 artdeco-button--secondary ember-view invitation-card__action-btn"]')
```

> Selects each button element and checks that the button can accept the request or not by `area-label`'s value[0]=="Accept".

```py
for button in buttons:
    word=button.get_attribute("aria-label")
    if word.split(" ")[0] == "Accept":
        print("clicking...")
        button.click()
        print("click")
        sleep(2)
```

> After competing the execution it closes the chrome tab.

```py
driver.close()
```
