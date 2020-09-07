Insomnia REST Plugin
--------------------

Generate merchant token for Nicepay payment gateway.

## Required environment variables

```
{
  "timestampTrx": "{% now 'custom', 'YYYYMMDDHHMMSS' %}",
  "iMid": "IONPAYTEST",
  "mKey": "--YOURKEY--"
}
```

## Installation

Download the `master.zip` of this repo, and move the extracted folder into:

+ **MacOS**: ~/Library/Application\ Support/Insomnia/plugins/
+ **Windows**: %APPDATA%\Insomnia\plugins\
+ **Linux**: $XDG_CONFIG_HOME/Insomnia/plugins/ or ~/.config/Insomnia/plugins/

Then in Insomnia, go to `Preference > Plugins` and click _Reload Plugins_. 
You may need to run `npm install` inside the directory to install dependency packages.

## Reference

[Insomia Plugin Documentation](https://support.insomnia.rest/article/26-plugins)
