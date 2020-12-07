$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/TC09-User.feature");
formatter.feature({
  "name": "To Test Create User Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@RegressionUserMenu"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Create User",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_09_01_AddUserScenario"
    }
  ]
});
formatter.step({
  "name": "user goes to administration and users and click on Add menu",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \"\u003cUserName\u003e\" and \"\u003cFullName\u003e\" and selects \"\u003cProfile\u003e\" ,\"\u003cAuthMatrix\u003e\" and enters \"\u003cPassword\u003e\"  \"\u003cVerify Password\u003e\" and clicks on Ok button",
  "keyword": "And "
});
formatter.step({
  "name": "user goes to Approve screen and approves the record",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "FullName",
        "Profile",
        "AuthMatrix",
        "Password",
        "Verify Password"
      ]
    },
    {
      "cells": [
        "Checker5",
        "Test User8",
        "Admin",
        "",
        "secure",
        "secure"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Create User",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegressionUserMenu"
    },
    {
      "name": "@TC_09_01_AddUserScenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user goes to administration and users and click on Add menu",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateUserStepDefinition.user_goes_to_administration_and_users_and_click_on_Add_menu()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //input[@class\u003d\u0027btn btn-success\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-4\u0027, revision: \u0027c2d955b49e\u0027\nSystem info: host: \u0027SUVARNA\u0027, ip: \u0027192.168.0.5\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 83.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20201112153044, moz:geckodriverVersion: 0.28.0, moz:headless: false, moz:processID: 12416, moz:profile: C:\\Users\\MONTRAN\\AppData\\Lo..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 6.3, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b4f2229a-fcf0-49e1-8864-92def8f60ccd\n*** Element info: {Using\u003dxpath, value\u003d//input[@class\u003d\u0027btn btn-success\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:451)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:394)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.tnbc.qa.pages.HomePage.createUser(HomePage.java:759)\r\n\tat StepDefinition.CreateUserStepDefinition.user_goes_to_administration_and_users_and_click_on_Add_menu(CreateUserStepDefinition.java:25)\r\n\tat ✽.user goes to administration and users and click on Add menu(file:src/test/resources/Features/TC09-User.feature:7)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Checker5\" and \"Test User8\" and selects \"Admin\" ,\"\" and enters \"secure\"  \"secure\" and clicks on Ok button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateUserStepDefinition.user_enters_and_and_selects_and_enters_and_clicks_on_Ok_button(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "user goes to Approve screen and approves the record",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateUserStepDefinition.user_goes_to_Approve_screen_and_approves_the_record()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});