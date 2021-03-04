# Java Coding Style

The coding style used by SciServer for Java files is derived from the [Google Java Style
Guide](https://google.github.io/styleguide/javaguide.html) and the corresponding [Eclipse XML formatter
file](https://github.com/google/styleguide/blob/gh-pages/eclipse-java-google-style.xml).  There are a few deviations
that are used, such as a line length of 120 (vs. 100) and the use of 4 space characters for indentation (vs. 2).
Verification of code compliance can be performed using the [Checkstyle](https://checkstyle.org/) tool with the related
style [XML configuration
file](https://github.com/sciserver/sciserver-guidelines/blob/main/coding-style/java/checkstyle.xml).

## IDE Integration

### Eclipse
Eclipse has built-in Java formatting support, which can be accessed via the `Window -> Preferences -> Java -> Code 
Style -> Formatter` dialog.  Select `Import...` and browse to the
[eclipse-java-google-style-sciserver.xml](https://github.com/sciserver/sciserver-guidelines/blob/main/coding-style/java/eclipse-java-google-style-sciserver.xml)
file found in your local copy of this repo.  Ensure that `GoogleStyle-SciServer` is selected as the Active profile.
Java source files can be formatted when open by selecting `Source -> Format`.  Please note that this will resolve many
code style issues, but will not bring all files into full compliance with the Checkstyle guidelines.

To validate Java source files in Eclipse using the Checkstyle guidelines, first install the [Eclipse Checkstyle
Plugin](https://checkstyle.org/eclipse-cs/).  It can be found in the Eclipse Marketplace via a search.  Once installed,
it is necessary to configure the plugin using the `Window -> Preferences -> Checkstyle` dialog.  Select `New...`,
change `Type:` to `External Configuration File`, browse to the checkstyle.xml file found in your local copy of this
repo, then provide a name, such as `GoogleStyle-SciServer`.  Next, select `Additional properties...`, then `Find
unresolved properties`.  For each of the properties that are found, set the `Value` to `null`.  Then click OK, OK
again, highlight your new configuration, and click `Set as Default`.  Then click `Apply and Close`.  Finally, follow
the instructions found at https://checkstyle.org/eclipse-cs/#!/project-setup to complete your project setup.  Assuming
your project is set to build automatically, linting will occur with each save and issues will be highlighted.  Be
warned, there may be a lot!

### Visual Studio Code
Instructions with different options for applying formatting and Checkstyle guidelines are found at
https://code.visualstudio.com/docs/java/java-linting, but there have been issues in getting either capability to
function as advertised.  If someone has better luck, please post your findings here.

## Adding to Gradle

To use in a gradle project, add this to the build.gradle:

```
plugins {
 id 'checkstyle'
}

checkstyle {
    toolVersion '8.39'
    config project.resources.text.fromUri("https://raw.githubusercontent.com/sciserver/sciserver-guidelines/main/coding-style/java/checkstyle.xml")
    maxWarnings 0
}
```

And possibly set the source dir if it is not "standard gradle"

```
checkstyleMain {
    source ='src'
}
```
