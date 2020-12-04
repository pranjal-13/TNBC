$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/TC14-InwardPaymentFlow.feature");
formatter.feature({
  "name": "Inward Payment flow feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Inward Payment flow",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_14_02_PositiveInwardFlow"
    }
  ]
});
formatter.step({
  "name": "validate whether payment move to QueuedToAccountVerification status using \"\u003cValueDateperiod\u003e\",\"\u003cPaymentType\u003e\",\"\u003cReference\u003e\",\"\u003cSubRef\u003e\",\"\u003cChequeNo\u003e\",\"\u003cAccountNumber\u003e\",\"\u003cgpkey\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "validate whether payment move to SignatureCheck status using \"\u003cValueDateperiod\u003e\",\"\u003cPaymentType\u003e\",\"\u003cReference\u003e\",\"\u003cSubRef\u003e\",\"\u003cChequeNo\u003e\",\"\u003cAccountNumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "validate whether payment move to SignatureCheckApprove using \"\u003cValueDateperiod\u003e\",\"\u003cPaymentType\u003e\",\"\u003cReference\u003e\",\"\u003cSubRef\u003e\",\"\u003cChequeNo\u003e\",\"\u003cAccountNumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "validate whether payment move to QueuedToPosting status using \"\u003cValueDateperiod\u003e\",\"\u003cPaymentType\u003e\",\"\u003cReference\u003e\",\"\u003cSubRef\u003e\",\"\u003cChequeNo\u003e\",\"\u003cAccountNumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "validate whether payment move to Completed using \"\u003cValueDateperiod\u003e\",\"\u003cPaymentType\u003e\",\"\u003cReference\u003e\",\"\u003cSubRef\u003e\",\"\u003cChequeNo\u003e\",\"\u003cAccountNumber\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ValueDateperiod",
        "PaymentType",
        "Reference",
        "SubRef",
        "ChequeNo",
        "AccountNumber"
      ]
    },
    {
      "cells": [
        "",
        "ACH CHEQUE RECEIVE",
        "Cheque No",
        "EQUAL",
        "50000012",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Inward Payment flow",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_14_02_PositiveInwardFlow"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "validate whether payment move to QueuedToAccountVerification status using \"\",\"ACH CHEQUE RECEIVE\",\"Cheque No\",\"EQUAL\",\"50000012\",\"\",\"\u003cgpkey\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "InwardPaymentFlowStepDefinition.validate_whether_payment_move_to_QueuedToAccountVerification_status_using(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate whether payment move to SignatureCheck status using \"\",\"ACH CHEQUE RECEIVE\",\"Cheque No\",\"EQUAL\",\"50000012\",\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "InwardPaymentFlowStepDefinition.validate_whether_payment_move_to_SignatureCheck_status_using(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate whether payment move to SignatureCheckApprove using \"\",\"ACH CHEQUE RECEIVE\",\"Cheque No\",\"EQUAL\",\"50000012\",\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "InwardPaymentFlowStepDefinition.validate_whether_payment_move_to_SignatureCheckApprove_using(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate whether payment move to QueuedToPosting status using \"\",\"ACH CHEQUE RECEIVE\",\"Cheque No\",\"EQUAL\",\"50000012\",\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "InwardPaymentFlowStepDefinition.validate_whether_payment_move_to_QueuedToPosting_status_using(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate whether payment move to Completed using \"\",\"ACH CHEQUE RECEIVE\",\"Cheque No\",\"EQUAL\",\"50000012\",\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "InwardPaymentFlowStepDefinition.validate_whether_payment_move_to_Completed_using(String,String,String,String,String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d85.0.4183.121)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 10.0.18363 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00274.0.0-alpha-4\u0027, revision: \u0027c2d955b49e\u0027\nSystem info: host: \u0027LAPTOP-I46Q2QIK\u0027, ip: \u0027192.168.4.177\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.35.528161 (5b82f2d2aae0ca..., userDataDir: C:\\Users\\MONTRAN\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 85.0.4183.121, webStorageEnabled: true}\nSession ID: 75876dedbd65599b2e20ebc3a3bf0dac\n*** Element info: {Using\u003dname, value\u003dpayTranPrim}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:217)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:169)\r\n\tat org.openqa.selenium.remote.codec.jwp.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:41)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:83)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:47)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:311)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy18.getAttribute(Unknown Source)\r\n\tat com.tnbc.qa.pages.PaymentFlow.filterScreen(PaymentFlow.java:180)\r\n\tat com.tnbc.qa.pages.PaymentFlow.filterwithGpkey(PaymentFlow.java:207)\r\n\tat com.tnbc.qa.pages.PaymentFlow.movetoCompleted(PaymentFlow.java:437)\r\n\tat StepDefinition.InwardPaymentFlowStepDefinition.validate_whether_payment_move_to_Completed_using(InwardPaymentFlowStepDefinition.java:119)\r\n\tat ✽.validate whether payment move to Completed using \"\",\"ACH CHEQUE RECEIVE\",\"Cheque No\",\"EQUAL\",\"50000012\",\"\"(file:src/test/resources/Features/TC14-InwardPaymentFlow.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});