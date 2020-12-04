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
        "50000083",
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
  "name": "validate whether payment move to QueuedToAccountVerification status using \"\",\"ACH CHEQUE RECEIVE\",\"Cheque No\",\"EQUAL\",\"50000083\",\"\",\"\u003cgpkey\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "InwardPaymentFlowStepDefinition.validate_whether_payment_move_to_QueuedToAccountVerification_status_using(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "validate whether payment move to SignatureCheck status using \"\",\"ACH CHEQUE RECEIVE\",\"Cheque No\",\"EQUAL\",\"50000083\",\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "InwardPaymentFlowStepDefinition.validate_whether_payment_move_to_SignatureCheck_status_using(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "validate whether payment move to SignatureCheckApprove using \"\",\"ACH CHEQUE RECEIVE\",\"Cheque No\",\"EQUAL\",\"50000083\",\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "InwardPaymentFlowStepDefinition.validate_whether_payment_move_to_SignatureCheckApprove_using(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "validate whether payment move to QueuedToPosting status using \"\",\"ACH CHEQUE RECEIVE\",\"Cheque No\",\"EQUAL\",\"50000083\",\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "InwardPaymentFlowStepDefinition.validate_whether_payment_move_to_QueuedToPosting_status_using(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "validate whether payment move to Completed using \"\",\"ACH CHEQUE RECEIVE\",\"Cheque No\",\"EQUAL\",\"50000083\",\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "InwardPaymentFlowStepDefinition.validate_whether_payment_move_to_Completed_using(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
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