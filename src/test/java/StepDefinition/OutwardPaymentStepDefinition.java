package StepDefinition;

import com.tnbc.qa.base.TestBase;
import com.tnbc.qa.constants.IntfConstants;
import com.tnbc.qa.pages.EnvironmentPage;
import com.tnbc.qa.pages.HomePage;
import com.tnbc.qa.pages.LoginPage;
import com.tnbc.qa.pages.OutwardPaymentPage;
import com.tnbc.qa.util.Windowhandle;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class OutwardPaymentStepDefinition extends TestBase {

	LoginPage loginPage = new LoginPage();
	HomePage homePage = new HomePage();
	EnvironmentPage envPage;
	OutwardPaymentPage outwardPage;
	EnvironmentPage environmentPage;
	Windowhandle win;

	// -----------------Cheque Outward Positive Flow--------------//

	@Given("user checks whether payment move to QueuedToPayment status using {string} and {string} in cheque data entry list menu")
	public void user_checks_whether_payment_move_to_QueuedToPayment_status_using_and_in_cheque_data_entry_list_menu(
			String ChequeNo, String PayerAccount) throws InterruptedException {
		driver.switchTo().frame("toc");
		outwardPage = homePage.clickonChequeDataEntryLink();
		outwardPage.chqDataEntryFilter(ChequeNo, PayerAccount);
	}

	@Then("user enable Cheque_Outward_Payment_Creation_Server and check whether Cheque data entry gets completed using {string} and {string}")
	public void user_enable_Cheque_Outward_Payment_Creation_Server_and_check_whether_Cheque_data_entry_gets_completed_using_and(
			String string, String string2) throws InterruptedException {
		Initialization();
		win = new Windowhandle(driver);
		loginPage = new LoginPage();
		homePage = loginPage.login(prop.getProperty("username1"), prop.getProperty("password1"));
		driver.switchTo().frame("toc");
		environmentPage = homePage.clickonEnvironmentRunLink();
		environmentPage.clickonEnvironmentokbutton();
		environmentPage.checkCheque_Outward_Payment_Creation_Server();
		environmentPage.LogOut();
		driver.quit();
	}

	@Then("user validate whether payment move to QueuedToAccountVerification status using filter {string},{string},{string},{string} in payment list menu")
	public void user_validate_whether_payment_move_to_QueuedToAccountVerification_status_using_filter_in_payment_list_menu(
			String ValueDateperiod, String Reference, String SubRef, String ChequeNo) throws InterruptedException {
		Initialization();
		win = new Windowhandle(driver);
		loginPage = new LoginPage();
		homePage = loginPage.login(prop.getProperty("username"), prop.getProperty("password"));
		driver.switchTo().frame("toc");
		outwardPage = homePage.checkPayment1();
		outwardPage = outwardPage.checkInitialPaymentstatus(ValueDateperiod, Reference, SubRef, ChequeNo);
	}

	@Then("user validate whether payment move to QueuedToOutPresentCheque status using filter {string},{string},{string},{string} in payment list menu")
	public void user_validate_whether_payment_move_to_QueuedToOutPresentCheque_status_using_filter_in_payment_list_menu(
			String ValueDateperiod, String Reference, String SubRef, String ChequeNo) throws InterruptedException {
		outwardPage = outwardPage.QueuedToAccountVerificationToApprove(win, ValueDateperiod, Reference, SubRef,
				ChequeNo);
		Initialization();
		win = new Windowhandle(driver);
		loginPage = new LoginPage();
		homePage = loginPage.login(prop.getProperty("username1"), prop.getProperty("password1"));
		driver.switchTo().frame("toc");
		outwardPage = homePage.paymentapproveLink();
		outwardPage = outwardPage.approvePayment(ValueDateperiod, Reference, SubRef, ChequeNo);
		Initialization();
		win = new Windowhandle(driver);
		loginPage = new LoginPage();
		homePage = loginPage.login(prop.getProperty("username"), prop.getProperty("password"));
		driver.switchTo().frame("toc");
		outwardPage = homePage.checkPayment1();
		outwardPage = outwardPage.checkPaymentstatus(ValueDateperiod, Reference, SubRef, ChequeNo);

	}

	@Then("user validate whether payment move to QueuedToOutFile status filter {string},{string},{string},{string} in payment list menu")
	public void user_validate_whether_payment_move_to_QueuedToOutFile_status_filter_in_payment_list_menu(
			String ValueDateperiod, String Reference, String SubRef, String ChequeNo) throws InterruptedException {
		outwardPage = outwardPage.movetoQueuedToOutFile(ValueDateperiod, Reference, SubRef, ChequeNo);
	}

	@Then("user To validate whether payment move to PendingAck status filter {string},{string},{string},{string} in payment list menu")
	public void user_To_validate_whether_payment_move_to_PendingAck_status_filter_in_payment_list_menu(
			String ValueDateperiod, String Reference, String SubRef, String ChequeNo) throws InterruptedException {
		Thread.sleep(IntfConstants.TIMEOUT);
		outwardPage = outwardPage.checkPaymentstatus(ValueDateperiod, Reference, SubRef, ChequeNo);
		outwardPage.outwardPageLogOut();

	}

	// -------------Duplicate Flow Method---------------//

	@Given("user disable Cheque_Outward_Payment_Creation_Server in enviornment server")
	public void user_disable_Cheque_Outward_Payment_Creation_Server_in_enviornment_server()
			throws InterruptedException {
		Initialization();
		win = new Windowhandle(driver);
		loginPage = new LoginPage();
		homePage = loginPage.login(prop.getProperty("username1"), prop.getProperty("password1"));
		driver.switchTo().frame("toc");
		environmentPage = homePage.clickonEnvironmentRunLink();
		environmentPage.clickonEnvironmentokbutton();
		environmentPage.switchInactiveCheque_Outward_Payment();
		environmentPage.LogOut();

	}

	@Given("user validate whether payment move to Duplicate status using filter {string},{string},{string},{string} in payment list menu")
	public void user_validate_whether_payment_move_to_Duplicate_status_using_filter_in_payment_list_menu(
			String ValueDateperiod, String Reference, String SubRef, String ChequeNo) throws InterruptedException {
		Initialization();
		win = new Windowhandle(driver);
		loginPage = new LoginPage();
		homePage = loginPage.login(prop.getProperty("username1"), prop.getProperty("password1"));
		driver.switchTo().frame("toc");
		outwardPage = homePage.checkPayment1();
		outwardPage = outwardPage.checkInitialDuplicateStatus(ValueDateperiod, Reference, SubRef, ChequeNo);

	}

	@Then("user goes to Duplicate menu use the filter {string},{string},{string},{string} and click on Allow duplicate button and click on confirm button")
	public void user_goes_to_Duplicate_menu_use_the_filter_and_click_on_Allow_duplicate_button_and_click_on_confirm_button(
			String ValueDateperiod, String Reference, String SubRef, String ChequeNo) throws InterruptedException {
		Initialization();
		win = new Windowhandle(driver);
		loginPage = new LoginPage();
		homePage = loginPage.login(prop.getProperty("username"), prop.getProperty("password"));
		driver.switchTo().frame("toc");
		outwardPage = homePage.duplicateMenu();
		outwardPage = outwardPage.allowDuplicate(ValueDateperiod, Reference, SubRef, ChequeNo);

	}

	//---Common step Approve the record----//
	@Then("user goes to approve menu use the filter {string},{string},{string},{string} and approves the payment")
	public void user_goes_to_approve_menu_use_the_filter_and_approves_the_payment(String ValueDateperiod,
			String Reference, String SubRef, String ChequeNo) throws InterruptedException {
		Initialization();
		win = new Windowhandle(driver);
		loginPage = new LoginPage();
		homePage = loginPage.login(prop.getProperty("username1"), prop.getProperty("password1"));
		driver.switchTo().frame("toc");
		outwardPage = homePage.paymentapproveLink();
		outwardPage = outwardPage.approvePayment(ValueDateperiod, Reference, SubRef, ChequeNo);
	}

	// -----------------------Repair Flow Methods------------------------------------//

	@Then("user validate whether payment move to Repair status using filter {string},{string},{string},{string} in payment list menu")
	public void user_validate_whether_payment_move_to_Repair_status_using_filter_in_payment_list_menu(String ValueDateperiod,
			String Reference, String SubRef, String ChequeNo) throws InterruptedException {

		Initialization();
		win=new Windowhandle(driver);
		loginPage=new LoginPage();
		homePage=loginPage.login(prop.getProperty("username1"), prop.getProperty("password1"));
		driver.switchTo().frame("toc");
		outwardPage= homePage.checkPayment1();
		outwardPage=outwardPage.checkInitialRepairStatus(ValueDateperiod, Reference, SubRef, ChequeNo);
	}

	@Then("user goes to Repair menu use the filter {string},{string},{string},{string} repair the payment {string} click on Ok button and click on confirm button")
	public void user_goes_to_Repair_menu_use_the_filter_repair_the_payment_click_on_Ok_button_and_click_on_confirm_button(String ValueDateperiod,
			String Reference, String SubRef, String ChequeNo, String date) throws InterruptedException {
	    Initialization();
	    win=new Windowhandle(driver);
	    loginPage=new LoginPage();
	    homePage=loginPage.login(prop.getProperty("username"), prop.getProperty("password"));
	    driver.switchTo().frame("toc");
	    outwardPage=homePage.repairMenu();
	    outwardPage=outwardPage.repairPayment(ValueDateperiod, Reference, SubRef, ChequeNo, date);    
	}


}
