import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse, Dropdown } from 'react-bootstrap';
import { Trans } from 'react-i18next';

class Sidebar extends Component {

  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true}); 
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
      {path:'/error-pages', state: 'errorPagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  }

  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <a className="sidebar-brand brand-logo" href="index.html"><img src={require('../../assets/images/logo.svg')} alt="logo" /></a>
          <a className="sidebar-brand brand-logo-mini" href="index.html"><img src={require('../../assets/images/logo-mini.svg')} alt="logo" /></a>
        </div>
        <ul className="nav">
          <li className="nav-item profile">
            <div className="profile-desc">
              <div className="profile-pic">
                <div className="count-indicator">
                  <img className="img-xs rounded-circle " src={require('../../assets/images/faces/face15.jpg')} alt="profile" />
                  <span className="count bg-success"></span>
                </div>
                <div className="profile-name">
                  <h5 className="mb-0 font-weight-normal text-dark"><Trans>Henry Klein</Trans></h5>
                  <span><Trans>Gold Member</Trans></span>
                </div>
              </div>
              <Dropdown alignRight>
                <Dropdown.Toggle as="a" className="cursor-pointer no-caret">
                  <i className="mdi mdi-dots-vertical"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="sidebar-dropdown preview-list">
                  <a href="!#" className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon rounded-circle">
                        <i className="mdi mdi-settings text-primary"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1 text-small"><Trans>Account settings</Trans></p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="!#" className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon rounded-circle">
                        <i className="mdi mdi-onepassword  text-info"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1 text-small"><Trans>Change Password</Trans></p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="!#" className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon rounded-circle">
                        <i className="mdi mdi-calendar-today text-success"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1 text-small"><Trans>To-do list</Trans></p>
                    </div>
                  </a>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </li>
          <li className="nav-item nav-category">
            <span className="nav-link"><Trans>Navigation</Trans></span>
          </li>
          <li className={ this.isPathActive('/dashboard') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <Link className="nav-link" to="/dashboard">
              <span className="menu-icon"><i className="mdi mdi-speedometer"></i></span>
              <span className="menu-title"><Trans>Dashboard</Trans></span>
            </Link>
          </li>
          <li className={ this.isPathActive('/latest') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <Link className="nav-link" to="/latest">
              <span className="menu-icon"><i className="mdi mdi-speedometer"></i></span>
              <span className="menu-title"><Trans>Latest Updates</Trans></span>
            </Link>
          </li>
          <li className={ this.isPathActive('/lead') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.basicUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('basicUiMenuOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-laptop"></i>
              </span>
              <span className="menu-title"><Trans>Leads</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.basicUiMenuOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/lead/create') ? 'nav-link active' : 'nav-link' } to="/lead/create"><Trans>Add</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/leads') ? 'nav-link active' : 'nav-link' } to="/leads"><Trans>List</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/lead/processing') ? 'nav-link active' : 'nav-link' } to="/lead/processing"><Trans>Processing</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/lead/transfered') ? 'nav-link active' : 'nav-link' } to="/lead/transfered"><Trans>Transfered</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/lead/activity') ? 'nav-link active' : 'nav-link' } to="/lead/activity"><Trans>Activity</Trans></Link></li>

                </ul>
              </div>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/user') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.formElementsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('formElementsMenuOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-playlist-play"></i>
              </span>
              <span className="menu-title"><Trans>Employees</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.formElementsMenuOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/users') ? 'nav-link active' : 'nav-link' } to="/users"><Trans>List</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/user/contacts') ? 'nav-link active' : 'nav-link' } to="/user/contacts"><Trans>Contacts</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/user/roles') ? 'nav-link active' : 'nav-link' } to="/user/roles"><Trans>Roles</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/user/permissions') ? 'nav-link active' : 'nav-link' } to="/user/permissions"><Trans>Permissions</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/user/trashed') ? 'nav-link active' : 'nav-link' } to="/user/trashed"><Trans>Archive</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/scholar') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.tablesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('tablesMenuOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-table-large"></i>
              </span>
              <span className="menu-title"><Trans>Scholars</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.tablesMenuOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/scholar/create') ? 'nav-link active' : 'nav-link' } to="/scholar/create"><Trans>Add</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/scholars') ? 'nav-link active' : 'nav-link' } to="/scholars"><Trans>List</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/scholar/profile') ? 'nav-link active' : 'nav-link' } to="/scholar/profile"><Trans>Contacts</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/scholar/trashed') ? 'nav-link active' : 'nav-link' } to="/scholar/trashed"><Trans>Archive</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/query') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.chartsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('chartsMenuOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-chart-bar"></i>
              </span>
              <span className="menu-title"><Trans>Queries</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.chartsMenuOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/queryies') ? 'nav-link active' : 'nav-link' } to="/queryies"><Trans>List</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/query/processing') ? 'nav-link active' : 'nav-link' } to="/query/processing"><Trans>Processing</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/query/converted') ? 'nav-link active' : 'nav-link' } to="/query/converted"><Trans>Converted</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/query/followup') ? 'nav-link active' : 'nav-link' } to="/query/followup"><Trans>Follow Up</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/query/activity') ? 'nav-link active' : 'nav-link' } to="/query/activity"><Trans>Activity</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/query/trashed') ? 'nav-link active' : 'nav-link' } to="/query/trashed"><Trans>Archive</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/query/areas') ? 'nav-link active' : 'nav-link' } to="/query/areas"><Trans>Expertise / Areas</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/work') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.iconsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('iconsMenuOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-contacts"></i>
              </span>
              <span className="menu-title"><Trans>Works</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.iconsMenuOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/works') ? 'nav-link active' : 'nav-link' } to="/works"><Trans>List</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/work/due') ? 'nav-link active' : 'nav-link' } to="/work/due"><Trans>Due Payment</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/work/processing') ? 'nav-link active' : 'nav-link' } to="/work/processing"><Trans>Processing</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/work/completed') ? 'nav-link active' : 'nav-link' } to="/work/completed"><Trans>Completed</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/work/activity') ? 'nav-link active' : 'nav-link' } to="/work/activity"><Trans>Activity</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/work/trashed') ? 'nav-link active' : 'nav-link' } to="/work/trashed"><Trans>Archive</Trans></Link></li>

                </ul>
              </div>
            </Collapse>
          </li>
          
          <li className={ this.isPathActive('/meeting') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('userPagesMenuOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-security"></i>
              </span>
              <span className="menu-title"><Trans>Meetings</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.userPagesMenuOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/meetings') ? 'nav-link active' : 'nav-link' } to="/meetings"><Trans>List</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/meeting/scheduled') ? 'nav-link active' : 'nav-link' } to="/meeting/scheduled"><Trans>Scheduled</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/meeting/attended') ? 'nav-link active' : 'nav-link' } to="/meeting/attended"><Trans>Completed</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/meeting/activity') ? 'nav-link active' : 'nav-link' } to="/meeting/activity"><Trans>Activites</Trans></Link></li>

                </ul>
              </div>
            </Collapse>
          </li>

          <li className={ this.isPathActive('/module') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.modulesOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('modulesOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-security"></i>
              </span>
              <span className="menu-title"><Trans>Modules</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.modulesOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/modules') ? 'nav-link active' : 'nav-link' } to="/modules"><Trans>List</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/module/updaterequire') ? 'nav-link active' : 'nav-link' } to="/module/updaterequire"><Trans>Update Require</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/module/processing') ? 'nav-link active' : 'nav-link' } to="/module/processing"><Trans>Processing</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/module/completed') ? 'nav-link active' : 'nav-link' } to="/module/completed"><Trans>Completed</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/module/task') ? 'nav-link active' : 'nav-link' } to="/module/task"><Trans>Tasks</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/module/activity') ? 'nav-link active' : 'nav-link' } to="/module/activity"><Trans>Activites</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li>

          <li className={ this.isPathActive('/team') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.teamsOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('teamsOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-security"></i>
              </span>
              <span className="menu-title"><Trans>Teams</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.teamsOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/team/create') ? 'nav-link active' : 'nav-link' } to="/team/create"><Trans>Add</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/teams') ? 'nav-link active' : 'nav-link' } to="/teams"><Trans>List</Trans></Link></li>
                  
                </ul>
              </div>
            </Collapse>
          </li>

          <li className={ this.isPathActive('/report') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.reportsOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('reportsOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-security"></i>
              </span>
              <span className="menu-title"><Trans>Reports</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.reportsOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/reports') ? 'nav-link active' : 'nav-link' } to="/reports"><Trans>Insights</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/report/scholar') ? 'nav-link active' : 'nav-link' } to="/report/scholar"><Trans>Scholar</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/report/employee') ? 'nav-link active' : 'nav-link' } to="/report/employee"><Trans>Employee</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li>

          <li className={ this.isPathActive('/transaction') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.accountOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('accountOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-security"></i>
              </span>
              <span className="menu-title"><Trans>Accounts</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.accountOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/transaction/todo') ? 'nav-link active' : 'nav-link' } to="/transaction/todo"><Trans>Pending</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/transactions') ? 'nav-link active' : 'nav-link' } to="/transactions"><Trans>Transaction</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/transaction/incomings') ? 'nav-link active' : 'nav-link' } to="/transaction/incomings"><Trans>Incomings</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/transaction/user') ? 'nav-link active' : 'nav-link' } to="/transaction/user"><Trans>Employee</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/transaction/scholar') ? 'nav-link active' : 'nav-link' } to="/transaction/scholar"><Trans>Scholars</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/transaction/expenses') ? 'nav-link active' : 'nav-link' } to="/transaction/expenses"><Trans>Expenses</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/transaction/invoice') ? 'nav-link active' : 'nav-link' } to="/transaction/invoice"><Trans>Invoice</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/transaction/refund') ? 'nav-link active' : 'nav-link' } to="/transaction/refund"><Trans>Refund</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/transaction/activity') ? 'nav-link active' : 'nav-link' } to="/transaction/activity"><Trans>Activity</Trans></Link></li>

                </ul>
              </div>
            </Collapse>
          </li>

          <li className={ this.isPathActive('/config') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.settingsOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('settingsOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-security"></i>
              </span>
              <span className="menu-title"><Trans>Settings</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.settingsOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/config/config') ? 'nav-link active' : 'nav-link' } to="/config/config"><Trans>Configuration</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/config/backup') ? 'nav-link active' : 'nav-link' } to="/config/backup"><Trans>Backup</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li>

          

          <li className={ this.isPathActive('/profile') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.myaccountOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('myaccountOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-security"></i>
              </span>
              <span className="menu-title"><Trans>My Account</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.myaccountOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/profile') ? 'nav-link active' : 'nav-link' } to="/profile"><Trans>Profile</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/logout') ? 'nav-link active' : 'nav-link' } to="/logout"><Trans>Logout</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li>

          <li className="nav-item nav-category">
            <span className="nav-link"><Trans>More</Trans></span>
          </li>
          <li className={ this.isPathActive('/error-pages') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.errorPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('errorPagesMenuOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-lock"></i>
              </span>
              <span className="menu-title"><Trans>Error Pages</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.errorPagesMenuOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/error-pages/error-404') ? 'nav-link active' : 'nav-link' } to="/error-pages/error-404">404</Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/error-pages/error-500') ? 'nav-link active' : 'nav-link' } to="/error-pages/error-500">500</Link></li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li className="nav-item menu-items">
            <a className="nav-link" href="http://bootstrapdash.com/demo/corona-react-free/documentation/documentation.html" rel="noopener noreferrer" target="_blank">
              <span className="menu-icon">
                <i className="mdi mdi-file-document-box"></i>
              </span>
              <span className="menu-title"><Trans>Documentation</Trans></span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);