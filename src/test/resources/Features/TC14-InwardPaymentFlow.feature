#Author: Suvarna
Feature: Inward Payment flow feature

  @TC_14_02_PositiveInwardFlow
  Scenario Outline: Inward Payment flow
    Then validate whether payment move to QueuedToAccountVerification status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>","<gpkey>"
    Then validate whether payment move to SignatureCheck status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to SignatureCheckApprove using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to QueuedToPosting status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to Completed using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"

    Examples: 
      | ValueDateperiod | PaymentType        | Reference | SubRef | ChequeNo | AccountNumber |
      |                 | ACH CHEQUE RECEIVE | Cheque No | EQUAL  | 50000012 |     					 |

  @TC_14_04_VIPInwardpaymentFlow
  Scenario Outline: VIP Inward payment Flow
    Then validate whether payment move to QueuedToAccountVerification status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>","<gpkey>"
    Then validate whether payment move to SignatureCheck status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to SignatureCheckApprove using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to QueuedToPosting status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to QueuedToVipChequeAcceptance using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to QueuedToOutfile status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to PendingAck status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"

    Examples: 
      | ValueDateperiod | PaymentType        | Reference | SubRef | ChequeNo | AccountNumber |
      |                 | ACH CHEQUE RECEIVE | Cheque No | EQUAL  | 50000066 |     					 |

  @TC_14_07_InwardPaymentReturnfromSignatureCheck
  Scenario Outline: Inward Payment Return from SignatureCheck flow
    Then validate whether payment move to QueuedToAccountVerification status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>","<gpkey>"
    Then validate whether payment move to SignatureCheck status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to SignatureCheckApprove after gets rejected from SignatureCheck queue using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>","<ReasonCode1>","<ReasonCode2>","<ReasonCode3>","<ReasonCode4>","<ReasonCode5>","<ReasonCode6>","<ReasonCode7>","<ReasonCode8>","<ReasonCode9>","<ReasonCode10>","<ReasonCode11>","<ReasonCode12>","<ReasonCode13>","<ReasonCode14>","<ReasonCode15>"
    Then validate whether payment move to QueuedToContraPosting using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to QueuedToReturnCreation using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to Rejected using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"

    Examples: 
      | ValueDateperiod | PaymentType        | Reference | SubRef | ChequeNo | AccountNumber | ReasonCode1           | ReasonCode2          | ReasonCode3              | ReasonCode4             | ReasonCode5            | ReasonCode6     | ReasonCode7              | ReasonCode8                 | ReasonCode9   | ReasonCode10              | ReasonCode11  | ReasonCode12        | ReasonCode13                 | ReasonCode14                         | ReasonCode15                   |
      |                 | ACH CHEQUE RECEIVE | Cheque No | EQUAL  | 50000013 |     | 01-Stop Payment Check | 02-Insufficient Fund | 04-The Account is closed | 05-Un-matched signature | 07-Un-endorsable check | 08-Missing date | 09-Presented before date | 10-Un-Authorized alteration | 11-Giro error | 14-Missing Clearing Stamp | 16-Wrong Date | 17-Collateral Check | 18-Witness Signature Missing | 15-Amount Numbers and Words mismatch | 23-Crossed check un-compliance |

  @TC_14_10_InwardPaymentReturnflowReturnfromInsufficientFund
  Scenario Outline: Inward Payment Return from InsufficientFund flow
    Then validate whether payment move to QueuedToAccountVerification status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>","<gpkey>"
    Then validate whether payment move to SignatureCheck status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to SignatureCheckApprove using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to QueuedToPosting status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to InsufficientFund status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to InsufficientFundApprove status after gets rejected from InsufficientFund queue using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>","<ReasonCode1>","<ReasonCode2>","<ReasonCode3>","<ReasonCode4>","<ReasonCode5>","<ReasonCode6>","<ReasonCode7>","<ReasonCode8>","<ReasonCode9>","<ReasonCode10>","<ReasonCode11>","<ReasonCode12>","<ReasonCode13>","<ReasonCode14>","<ReasonCode15>"
    Then validate whether payment move to QueuedToContraPosting from InsufficientFundApprove using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to QueuedToReturnCreation using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to Rejected using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"

    Examples: 
      | ValueDateperiod | PaymentType        | Reference | SubRef | ChequeNo | AccountNumber | ReasonCode1           | ReasonCode2          | ReasonCode3              | ReasonCode4             | ReasonCode5            | ReasonCode6     | ReasonCode7              | ReasonCode8                 | ReasonCode9   | ReasonCode10              | ReasonCode11  | ReasonCode12        | ReasonCode13                 | ReasonCode14                         | ReasonCode15                   |
      |                 | ACH CHEQUE RECEIVE | Cheque No | EQUAL  | 50000059 |     | 01-Stop Payment Check | 02-Insufficient Fund | 04-The Account is closed | 05-Un-matched signature | 07-Un-endorsable check | 08-Missing date | 09-Presented before date | 10-Un-Authorized alteration | 11-Giro error | 14-Missing Clearing Stamp | 16-Wrong Date | 17-Collateral Check | 18-Witness Signature Missing | 15-Amount Numbers and Words mismatch | 23-Crossed check un-compliance |

  @TC_14_13_DuplicateCheque
  Scenario Outline: Inward Payment flow for Duplicate Cheque
    Then check whether Inward Payment is duplicate using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate list displayed for duplicate cheques "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Given User is into the system
    Then validate whether payment move to QueuedToAccountVerification status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>","<gpkey>"
    Then validate whether payment move to SignatureCheck status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to SignatureCheckApprove using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to QueuedToPosting status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to Completed using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"

    Examples: 
      | ValueDateperiod | PaymentType        | Reference | SubRef | ChequeNo | AccountNumber |
      |                 | ACH CHEQUE RECEIVE | Cheque No | EQUAL  | 50000056 |               |

  @TC_14_15_DuplicateToQualifyReceiveCheque
  Scenario Outline: Inward Payment flow for sending Duplicate Cheque to Qualify Receive queue
    Then check whether Inward Payment is duplicate using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then to send payment to Qualify Receive queue using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>","<Reason>"
    Then validate whether payment move to Qualify Receive queue using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"

    Examples: 
      | ValueDateperiod | PaymentType        | Reference | SubRef | ChequeNo | AccountNumber | Reason |
      |                 | ACH CHEQUE RECEIVE | Cheque No | EQUAL  | 50000051 |               | Return |
      |                 | ACH CHEQUE RECEIVE | Cheque No | EQUAL  | 50000052 |               | Return |

  @TC_14_18_QualifyReceiveCheque
  Scenario Outline: Inward Payment flow which is in Qualify Receive queue
    Then check whether Inward Payment is in Qualify receive using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate list displayed for Qualify Receive cheques "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>","<CheckkAccNo>","<ValueDate>","<PayerBICCode>"
    Then validate whether payment move to QueuedToAccountVerification status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>","<gpkey>"
    Then validate whether payment move to SignatureCheck status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to SignatureCheckApprove using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to QueuedToPosting status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to InsufficientFund status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to InsufficientFundApprove using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to QueuedToPosting using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to Completed state using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"

    Examples: 
      | ValueDateperiod | PaymentType        | Reference | SubRef | ChequeNo | AccountNumber | ValueDate | PayerBICCode | CheckkAccNo |
      |                 | ACH CHEQUE RECEIVE | Cheque No | EQUAL  | 50000051 |               | 12/11/19  | TNBCPS20006  |  1001005616 |

  @TC_14_20_ReturnfromQualifyReceive
  Scenario Outline: Inward Payment return flow from Qualify Receive queue
    Then check whether Inward Payment is in Qualify receive using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then to return cheque from Qualify Receive queue using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>","<ReasonCode1>","<ReasonCode2>","<ReasonCode3>","<ReasonCode4>","<ReasonCode5>","<ReasonCode6>","<ReasonCode7>","<ReasonCode8>","<ReasonCode9>","<ReasonCode10>","<ReasonCode11>","<ReasonCode12>","<ReasonCode13>","<ReasonCode14>","<ReasonCode15>"
    Then validate whether payment move to QueuedToReturnCreation status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to Rejected status from Qualify Receive using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"

    Examples: 
      | ValueDateperiod | PaymentType        | Reference | SubRef | ChequeNo | AccountNumber | ReasonCode1           | ReasonCode2          | ReasonCode3              | ReasonCode4             | ReasonCode5            | ReasonCode6     | ReasonCode7              | ReasonCode8                 | ReasonCode9   | ReasonCode10              | ReasonCode11  | ReasonCode12        | ReasonCode13                 | ReasonCode14                         | ReasonCode15                   |
      |                 | ACH CHEQUE RECEIVE | Cheque No | EQUAL  | 50000052 |               | 01-Stop Payment Check | 02-Insufficient Fund | 04-The Account is closed | 05-Un-matched signature | 07-Un-endorsable check | 08-Missing date | 09-Presented before date | 10-Un-Authorized alteration | 11-Giro error | 14-Missing Clearing Stamp | 16-Wrong Date | 17-Collateral Check | 18-Witness Signature Missing | 15-Amount Numbers and Words mismatch | 23-Crossed check un-compliance |

  @TC_14_22_InwardPaymentflowwithExceptionfromQueuedToPosting
  Scenario Outline: Inward Payment flow with QueuedToPosting Exception
    Then validate whether payment move to QueuedToAccountVerification status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>","<gpkey>"
    Then validate whether payment move to SignatureCheck status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to SignatureCheckApprove using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to QueuedToPosting status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to Exception status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to Exception to Approve status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to Completed status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"

    Examples: 
      | ValueDateperiod | PaymentType        | Reference | SubRef | ChequeNo | AccountNumber |
      |                 | ACH CHEQUE RECEIVE | Cheque No | EQUAL  | 50000060 |               |

  @TC_14_24_InwardPaymentflowwithExceptionfromQueuedToPostingReject
  Scenario Outline: Inward Payment flow with QueuedToPosting Exception(Reject from Exception queue)
    Then validate whether payment move to QueuedToAccountVerification status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>","<gpkey>"
    Then validate whether payment move to SignatureCheck status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to SignatureCheckApprove using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to QueuedToPosting status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to Exception status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to Exception to Approve status by rejecting payment from Exception using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>","<ReasonCode1>","<ReasonCode2>","<ReasonCode3>","<ReasonCode4>","<ReasonCode5>","<ReasonCode6>","<ReasonCode7>","<ReasonCode8>","<ReasonCode9>","<ReasonCode10>","<ReasonCode11>","<ReasonCode12>","<ReasonCode13>","<ReasonCode14>","<ReasonCode15>"
    Then validate whether payment move to QueuedToContraPosting status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to Exception from QueuedToContraPosting status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to Exception to Approve status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to QueuedToReturnCreation status using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"
    Then validate whether payment move to Rejected using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"

    Examples: 
      | ValueDateperiod | PaymentType        | Reference | SubRef | ChequeNo | AccountNumber | ReasonCode1           | ReasonCode2          | ReasonCode3              | ReasonCode4             | ReasonCode5            | ReasonCode6     | ReasonCode7              | ReasonCode8                 | ReasonCode9   | ReasonCode10              | ReasonCode11  | ReasonCode12        | ReasonCode13                 | ReasonCode14                         | ReasonCode15                   |
      |                 | ACH CHEQUE RECEIVE | Cheque No | EQUAL  | 50000061 |               | 01-Stop Payment Check | 02-Insufficient Fund | 04-The Account is closed | 05-Un-matched signature | 07-Un-endorsable check | 08-Missing date | 09-Presented before date | 10-Un-Authorized alteration | 11-Giro error | 14-Missing Clearing Stamp | 16-Wrong Date | 17-Collateral Check | 18-Witness Signature Missing | 15-Amount Numbers and Words mismatch | 23-Crossed check un-compliance |

  @TC_14_26_StopChequefunctionality
  Scenario Outline: Check Stop cheque functionality for Inward flow
    Then To check whether cheque details get added in Stop cheque list using "<Issuer>","<BranchCode>","<Currency>","<MinimumChequeNumber>","<MaximumChequeNumber>","<AccountNumber>" fields
    Then To check whether stop cheque functionality is working properly or not using "<ValueDateperiod>","<PaymentType>","<Reference>","<SubRef>","<ChequeNo>","<AccountNumber>"

    Examples: 
      | Issuer   | BranchCode | Currency | MinimumChequeNumber | MaximumChequeNumber | AccountNumber | ValueDateperiod | PaymentType        | Reference | SubRef | ChequeNo |
      | ALDNPS20 |        480 | EUR      |            50000015  |            50000015  |     |                 | ACH CHEQUE RECEIVE | Cheque No | EQUAL  | 50000015  |
