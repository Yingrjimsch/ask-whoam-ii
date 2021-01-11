
# ask-whoam-ii
```
            _                 _                                 _ _ 
   __ _ ___| | __   __      _| |__   ___   __ _ _ __ ___       (_|_)
  / _` / __| |/ /___\ \ /\ / / '_ \ / _ \ / _` | '_ ` _ \ _____| | |
 | (_| \__ \   <_____\ V  V /| | | | (_) | (_| | | | | | |_____| | |
  \__,_|___/_|\_\     \_/\_/ |_| |_|\___/ \__,_|_| |_| |_|     |_|_|
                                                                    
```

with ask-whoam-ii you can give every npm project your very own signature!

---

## How to use it:
1. Install the package in your project: `npm i ask-whoam-ii`
2. import the `init` method in any **.ts** file: `import { init } from 'ask-whoam-ii'`
3. Call init method with your key and value: `init('key', 'value'` where the key defines the text to be entered and the value defines your signature, which will be output.

## Release History
2020.01.11v0.1.1 - added `init`, `changeVal` `changeKey` `whoami` methods.


2020.01.08v0.1.0 - first implementation without customizable key value
