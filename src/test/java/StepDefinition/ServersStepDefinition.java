package StepDefinition;

import com.tnbc.qa.base.TestBase;
import com.tnbc.qa.pages.EnvironmentPage;
import com.tnbc.qa.pages.HomePage;
import com.tnbc.qa.pages.LoginPage;
import com.tnbc.qa.util.Windowhandle;
import io.cucumber.java.en.Then;

public class ServersStepDefinition extends TestBase{
	LoginPage loginPage = new LoginPage();
	HomePage homePage = new HomePage();
	EnvironmentPage environmentPage;
	Windowhandle win;

	@Then("User goes to Environment and Open Run menu")
	public void user_goes_to_Environment_and_Open_Run_menu() throws InterruptedException {
	   driver.switchTo().frame("toc");
	   environmentPage=homePage.clickonEnvironmentRunLink();
	   environmentPage.clickonEnvironmentokbutton();
	}

	@Then("Check envEventServer")
	public void check_envEventServer() throws InterruptedException {
		environmentPage.checkenvEventServer();
	}

	@Then("Check emailServer")
	public void check_emailServer() throws InterruptedException {
		environmentPage.checkemailServer();
	}

	@Then("Check AutoSODServer")
	public void check_AutoSODServer() throws InterruptedException {
		environmentPage.checkAutoSODServer();
	}

	@Then("Check AutoEODServer")
	public void check_AutoEODServer() throws InterruptedException {
		environmentPage.checkAutoEODServer();
	}
	
	@Then("Check Vip_Cheque_Acceptance_Server")
	public void check_Vip_Cheque_Acceptance_Server() throws InterruptedException {
		environmentPage.checkVip_Cheque_Acceptance_Server();
	}

	@Then("Check BatchChequePaymentCreationServer")
	public void check_BatchChequePaymentCreationServer() throws InterruptedException {
		environmentPage.checkBatchChequePaymentCreationServer();
	}

	@Then("Check Batch_Modification_Server")
	public void check_Batch_Modification_Server() throws InterruptedException {
		environmentPage.checkBatch_Modification_Server();
	}

	@Then("Check Cheque_Outward_Payment_Creation_Server")
	public void check_Cheque_Outward_Payment_Creation_Server() throws InterruptedException {
		environmentPage.checkCheque_Outward_Payment_Creation_Server();
	}

	@Then("Check Return_Creation_Server")
	public void check_Return_Creation_Server() throws InterruptedException {
		environmentPage.checkReturn_Creation_Server();
	}

	@Then("Check ACH_Clearing_File_Input_Server")
	public void check_ACH_Clearing_File_Input_Server() throws InterruptedException {
		environmentPage.checkACH_Clearing_File_Input_Server();
	}

	@Then("Check ACH_Clearing_Inward_Payment_Creation_Server")
	public void check_ACH_Clearing_Inward_Payment_Creation_Server() throws InterruptedException {
		environmentPage.checkACH_Clearing_Inward_Payment_Creation_Server();
	}

	@Then("Check ACH_Response_Process_Server")
	public void check_ACH_Response_Process_Server() throws InterruptedException {
		environmentPage.checkACH_Response_Process_Server();
	}

	@Then("Check File_Routing_Server")
	public void check_File_Routing_Server() throws InterruptedException {
		environmentPage.CheckFile_Routing_Server();
	}

	@Then("Check AchClearingMQOutputServer")
	public void check_AchClearingMQOutputServer() throws InterruptedException {
		environmentPage.checkAchClearingMQOutputServer();
	}

	@Then("Check AchClearingMQInputServer")
	public void check_AchClearingMQInputServer() throws InterruptedException {
		environmentPage.checkAchClearingMQInputServer();
	}

	@Then("Check ATM_Processing_ChequeData_Server")
	public void check_ATM_Processing_ChequeData_Server() throws InterruptedException {
		environmentPage.checkATM_Processing_ChequeData_Server();
	}

	@Then("Check Cheque_Leaf_Creation_Server")
	public void check_Cheque_Leaf_Creation_Server() throws InterruptedException {
		environmentPage.checkCheque_Leaf_Creation_Server();
	}

	@Then("Check Cheque_Inventory_File_Download_Server")
	public void check_Cheque_Inventory_File_Download_Server() throws InterruptedException {
		environmentPage.checkCheque_Inventory_File_Download_Server();
	}

	@Then("Check PDC_Data_Migration_Server")
	public void check_PDC_Data_Migration_Server() throws InterruptedException {
		environmentPage.checkPDC_Data_Migration_Server();
	}

	@Then("Check PDC_FileBean_ChequeData_Server")
	public void check_PDC_FileBean_ChequeData_Server() throws InterruptedException {
		environmentPage.checkPDC_FileBean_ChequeData_Server();
	}

	@Then("Check Cheque_Migration_Image_Tagging_Server")
	public void check_Cheque_Migration_Image_Tagging_Server() throws InterruptedException {
		environmentPage.checkCheque_Migration_Image_Tagging_Server();
	}

	@Then("Check Account_Verification_Server")
	public void check_Account_Verification_Server() throws InterruptedException {
		environmentPage.checkAccount_Verification_Server();
	}

	@Then("Check Out_Present_Cheque_Server")
	public void check_Out_Present_Cheque_Server() throws InterruptedException {
		environmentPage.checkOut_Present_Cheque_Server();
	}

	@Then("Check Out_Reply_Cheque_Server")
	public void check_Out_Reply_Cheque_Server() throws InterruptedException {
		environmentPage.checkOut_Reply_Cheque_Server();
	}

	@Then("Check Add_PDC_Server")
	public void check_Add_PDC_Server() throws InterruptedException {
		environmentPage.checkAdd_PDC_Server();
	}

	@Then("Check Delete_PDC_Server")
	public void check_Delete_PDC_Server() throws InterruptedException {
		environmentPage.checkDelete_PDC_Server();
	}

	@Then("Check PDC_Amendment_Server")
	public void check_PDC_Amendment_Server() throws InterruptedException {
		environmentPage.checkPDC_Amendment_Server();
	}

	@Then("Check PDC_Replacement_Server")
	public void check_PDC_Replacement_Server() throws InterruptedException {
		environmentPage.checkPDC_Replacement_Server();
	}

	@Then("Check PDC_Contra_Posting_Server")
	public void check_PDC_Contra_Posting_Server() throws InterruptedException {
		environmentPage.checkPDC_Contra_Posting_Server();
	}

	@Then("Check Posting_Server")
	public void check_Posting_Server() throws InterruptedException {
		environmentPage.checkPosting_Server();
	}

	@Then("Check Contra_Posting_Server")
	public void check_Contra_Posting_Server() throws InterruptedException {
		environmentPage.checkContra_Posting_Server();
		environmentPage.LogOut();
		driver.quit();
	}
	
}
