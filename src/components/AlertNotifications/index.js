import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'

import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="alert-notifications-container">
    <h1>Alert Notifications</h1>
    <Notification>
      <AiFillCheckCircle className="success-icon" />
      <div className="notification-text">
        <h1 className="notification-heading">Success</h1>
        <p className="notification-description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>

    <Notification>
      <RiErrorWarningFill className="error-icon" />
      <div className="notification-text">
        <h1 className="notification-heading">Error</h1>
        <p className="notification-description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>

    <Notification>
      <MdWarning className="warning-icon" />
      <div className="notification-text">
        <h1 className="notification-heading">Warning</h1>
        <p className="notification-description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>

    <Notification>
      <MdInfo className="info-icon" />
      <div className="notification-text">
        <h1 className="notification-heading">Info</h1>
        <p className="notification-description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  </div>
)

export default AlertNotifications

/*
import {Component} from 'react'

import Notification from '../Notification'

import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'

import {MdInfo} from 'react-icons/md'

import {MdWarning} from 'react-icons/md'

import {GrFormClose} from 'react-icons/gr'

import './index.css'

const AlertNotifications = () => (
  <div>
    <Notification>
      <AiFillCheckCircle />
      <div>
        <h2 className="notification-heading"></h2>
        <p className="notification-description"></p>
      </div>
      <GrFormClose />
    </Notification>

    <Notification>
      <RiErrorWarningFill />
      <div>
        <h2 className="notification-heading"></h2>
        <p className="notification-description"></p>
      </div>
      <GrFormClose />
    </Notification>

    <Notification>
      <MdWarning />
      <div>
        <h2 className="notification-heading"></h2>
        <p className="notification-description"></p>
      </div>
      <GrFormClose />
    </Notification>

    <Notification>
      <MdInfo />
      <div>
        <h2 className="notification-heading"></h2>
        <p className="notification-description"></p>
      </div>
      <GrFormClose />
    </Notification>
  </div>
)

export default AlertNotifications

/* const NotificationList = [
  {
    id: 'Succes',
    alert: 'Succes',
    alertMessage: 'You can access all the files in the folder',
    icon: '<FaCircleCheck />',
  },
  {
    id: 'Error',
    alert: 'Error',
    alertMessage:
      'Sorry,you are not authorized to have access to delete the file',
    icon: '<MdError />',
  },
  {
    id: 'Warning',
    alert: 'Warning',
    alertMessage: 'Viewers of this file can see comments and suggestions',
    icon: '<MdWarning />',
  },
  {
    id: 'Info',
    alert: 'Info',
    alertMessage: 'Anyone on the internet can view these files',
    icon: '<IoMdInformationCircle />',
  },
]

class AlertNotifications extends Component {
  render() {
    return (
      <div className="alert-app-container">
       
        <ul className="alert-container">
          {NotificationList.map(eachNotification => (
            <Notification
              eachNotificationDetails={eachNotification}
              key={eachNotification.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
*/
