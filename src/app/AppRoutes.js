import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Login from "./user-pages/Login"
import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));

const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));

const Mdi = lazy(() => import('./icons/Mdi'));

const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));


const Latest = lazy(()=> import('./our_Files/Latest'));
//Leads routing
const LeadAdd = lazy(()=> import('./our_Files/Leads/Add'));
const LeadList = lazy(()=> import('./our_Files/Leads/List'));
const LeadProcessing = lazy(()=> import('./our_Files/Leads/Processing'));
const LeadTransfered =lazy(()=> import('./our_Files/Leads/Transfered'));
const LeadActivity =lazy(()=> import('./our_Files/Leads/Activity'));
const LeadConversion =lazy(()=> import ('./our_Files/Leads/LeadConversion'));
const LeadEdit =lazy(()=> import ('./our_Files/Leads/LeadEdit'));


//Employee routing
const EmployeeList =lazy(()=> import('./our_Files/Employees/List'));
const EmployeeContacts =lazy(()=> import('./our_Files/Employees/Contacts'));
const EmployeeRoles =lazy(()=> import('./our_Files/Employees/UserRoles'));
const EmployeePermissions =lazy(()=> import('./our_Files/Employees/Permissions'));
const EmployeeArchive =lazy(()=> import('./our_Files/Employees/Archive'));
const EmployeeAdd=lazy(()=> import('./our_Files/Employees/Addemp'));
const RoleEdit=lazy(()=> import('./our_Files/Employees/RoleEdit'));
const RoleAdd=lazy(()=> import('./our_Files/Employees/RoleAdd'));
const PermissionsEdit=lazy(()=> import('./our_Files/Employees/PermissionsEdit'));
const PermissionsAdd=lazy(()=> import('./our_Files/Employees/PermissionsAdd'));




//Scholars routing

const ScholarAdd =lazy(()=> import('./our_Files/Scholars/Add'));
const ScholarList =lazy(()=> import('./our_Files/Scholars/List'));
const ScholarContacts =lazy(()=> import('./our_Files/Scholars/Contacts'));
const ScholarArchive =lazy(()=> import('./our_Files/Scholars/Archive'));

//Queries routing
const QueriesList =lazy(()=> import('./our_Files/Queries/List'));
const QueriesProcessing =lazy(()=> import('./our_Files/Queries/Processing'));
const QueriesConverted =lazy(()=> import('./our_Files/Queries/Converted'));
const QueriesFollowUp =lazy(()=> import('./our_Files/Queries/FollowUp'));
const QueriesActivity =lazy(()=> import('./our_Files/Queries/Activity'));
const QueriesArchive =lazy(()=> import('./our_Files/Queries/Archive'));
const QueriesAreas =lazy(()=> import('./our_Files/Queries/Areas'));

//Works routing
const WorksList =lazy(()=> import('./our_Files/Works/List'));
const WorksDuePayments =lazy(()=> import('./our_Files/Works/DuePayments'));
const WorksProcessing =lazy(()=> import('./our_Files/Works/Processing'));
const WorksCompleted =lazy(()=> import('./our_Files/Works/Completed'));
const WorksActivity =lazy(()=> import('./our_Files/Works/Activity'));
const WorksArchive =lazy(()=> import('./our_Files/Works/Archive'));

//Meetings routing
const MeetingList =lazy(()=> import('./our_Files/Meetings/List'));
const MeetingSchedule =lazy(()=> import('./our_Files/Meetings/Schedule'));
const MeetingCompleted =lazy(()=> import('./our_Files/Meetings/Completed'));
const MeetingActivity =lazy(()=> import('./our_Files/Meetings/Activity'));


//Modules routing
const ModulesList =lazy(()=> import('./our_Files/Modules/List'));
const ModulesUpdateRequire =lazy(()=> import('./our_Files/Modules/UpdateRequire'));
const ModulesProcessing =lazy(()=> import('./our_Files/Modules/Processing'));
const ModulesCompleted =lazy(()=> import('./our_Files/Modules/Completed'));
const ModulesTask =lazy(()=> import('./our_Files/Modules/Task'));
const ModulesActivity =lazy(()=> import('./our_Files/Modules/Activity'));

//Team routing
const TeamAdd =lazy(()=> import('./our_Files/Team/Add'));
const TeamList =lazy(()=> import('./our_Files/Team/List'));

//Report routing
const ReportInsights =lazy(()=> import('./our_Files/Reports/Insights'));
const ReportScholar =lazy(()=> import('./our_Files/Reports/Scholar'));
const ReportEmployee =lazy(()=> import('./our_Files/Reports/Employee'));

//Account routing
const AccountPending =lazy(()=> import('./our_Files/Accounts/Pending'));
const AccountTransactions =lazy(()=> import('./our_Files/Accounts/Transactions'));
const AccountIncomings =lazy(()=> import('./our_Files/Accounts/Incomings'));
const AccountEmployees =lazy(()=> import('./our_Files/Accounts/Employee'));
const AccountScholars =lazy(()=> import('./our_Files/Accounts/Scholar'));
const AccountExpenses =lazy(()=> import('./our_Files/Accounts/Expenses'));
const AccountInvoice =lazy(()=> import('./our_Files/Accounts/Invoice'));  
const AccountRefund =lazy(()=> import('./our_Files/Accounts/Refund'));  
const AccountActivity =lazy(()=> import('./our_Files/Accounts/Activity'));  

//Settings routing
const SettingsConfig =lazy(()=> import('./our_Files/Settings/Config'));  
const SettingsBackup =lazy(()=> import('./our_Files/Settings/Backup'));  

//My Account routing
const MyAccountProfile =lazy(()=> import('./our_Files/My_Account/Profile'));  





class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />
         

          <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/typography" component={ Typography } />

          <Route path="/form-Elements/basic-elements" component={ BasicElements } />

          <Route path="/tables/basic-table" component={ BasicTable } />

          <Route path="/icons/mdi" component={ Mdi } />

          <Route path="/charts/chart-js" component={ ChartJs } />


          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />

          <Route path="/latest" component={ Latest }/>

        {/* lead */}
          <Route exact path="/leads" component={ LeadList }/>
          <Route path="/lead/create" component={ LeadAdd }/>
          <Route exact path="/lead/processing" component={ LeadProcessing } />
          <Route exact path ="/lead/transfered" component={LeadTransfered} />
          <Route exact path ="/lead/activity" component={LeadActivity} />
          <Route exact path="/lead/conversion" component={LeadConversion}/>
          <Route exact path="/lead/edit" component={LeadEdit}/>


          {/* Employees */}
          <Route exact path ="/users" component={EmployeeList} />
          <Route exact path ="/user/contacts" component={EmployeeContacts} />
          <Route exact path ="/user/roles" component={EmployeeRoles} />
          <Route exact path ="/user/permissions" component={EmployeePermissions} />
          <Route exact path ="/user/trashed" component={EmployeeArchive} />
          <Route exact path ="/user/add" component={EmployeeAdd} />
          <Route exact path ="/roles/edit" component={RoleEdit} />
          <Route exact path ="/roles/create" component={RoleAdd} />
          <Route exact path ="/permissions/edit" component={PermissionsEdit} />
          <Route exact path ="/permissions/create" component={PermissionsAdd} />




          {/* Scholars */}
          <Route exact path ="/scholar/create" component={ScholarAdd} />
          <Route exact path ="/scholars" component={ScholarList} />
          <Route exact path ="/scholar/profile" component={ScholarContacts} />
          <Route exact path ="/scholar/trashed" component={ScholarArchive} />

           {/* Queries */}
           <Route exact path ="/queryies" component={QueriesList} />
           <Route exact path ="/query/processing" component={QueriesProcessing} />
           <Route exact path ="/query/converted" component={QueriesConverted} />
           <Route exact path ="/query/followup" component={QueriesFollowUp} />
           <Route exact path ="/query/activity" component={QueriesActivity} />
           <Route exact path ="/query/trashed" component={QueriesArchive} />
           <Route exact path ="/query/areas" component={QueriesAreas} />

           {/* Works */}
           <Route exact path ="/works" component={WorksList} />
           <Route exact path ="/work/due" component={WorksDuePayments} />
           <Route exact path ="/work/processing" component={WorksProcessing} />
           <Route exact path ="/work/completed" component={WorksCompleted} />
           <Route exact path ="/work/activity" component={WorksActivity} />
           <Route exact path ="/work/trashed" component={WorksArchive} />

           {/* Meetings */}
           <Route exact path ="/meetings" component={MeetingList} />
           <Route exact path ="/meeting/scheduled" component={MeetingSchedule} />
           <Route exact path ="/meeting/attended" component={MeetingCompleted} />
           <Route exact path ="/meeting/activity" component={MeetingActivity} />

           {/* Modules */}
           <Route exact path ="/modules" component={ModulesList} />
           <Route exact path ="/module/updaterequire" component={ModulesUpdateRequire} />
           <Route exact path ="/module/processing" component={ModulesProcessing} />
           <Route exact path ="/module/completed" component={ModulesCompleted} />
           <Route exact path ="/module/task" component={ModulesTask} />
           <Route exact path ="/module/activity" component={ModulesActivity} />
           
           {/* Team */}
           <Route exact path ="/team/create" component={TeamAdd} />
           <Route exact path ="/teams" component={TeamList} />

           {/* Report */}
           <Route exact path ="/reports" component={ReportInsights} />
           <Route exact path ="/report/scholar" component={ReportScholar} />
           <Route exact path ="/report/employee" component={ReportEmployee} />

          {/* Account */}
          <Route exact path ="/transaction/todo" component={AccountPending} />
          <Route exact path ="/transactions" component={AccountTransactions} />
          <Route exact path ="/transaction/incomings" component={AccountIncomings} />
          <Route exact path ="/transaction/user" component={AccountEmployees} />
          <Route exact path ="/transaction/scholar" component={AccountScholars} />
          <Route exact path ="/transaction/expenses" component={AccountExpenses} />
          <Route exact path ="/transaction/invoice" component={AccountInvoice} />
          <Route exact path ="/transaction/refund" component={AccountRefund} />
          <Route exact path ="/transaction/activity" component={AccountActivity} />

          {/* Setting */}
          <Route exact path ="/config/config" component={SettingsConfig} />
          <Route exact path ="/config/backup" component={SettingsBackup} />

          {/* My Account */}
          <Route exact path ="/profile" component={MyAccountProfile} />





          <Redirect to="/dashboard"/>
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;