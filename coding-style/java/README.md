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
