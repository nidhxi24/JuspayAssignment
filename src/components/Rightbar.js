import "./Rightbar.css";
import { ReactComponent as Bug } from "../icons/Bug.svg";
import { ReactComponent as User1 } from "../icons/User1.svg";
import { ReactComponent as Broadcast1 } from "../icons/Broadcast1.svg";
import { ReactComponent as ActivityPerson1 } from "../icons/ActivityPerson1.svg";
import { ReactComponent as ActivityPerson2 } from "../icons/ActivityPerson2.svg";
import { ReactComponent as Female05 } from "../icons/Female05.svg";
import { ReactComponent as Male07 } from "../icons/Male07.svg";
import { ReactComponent as Male11 } from "../icons/Male11.svg";
import { ReactComponent as Female15 } from "../icons/Female15.svg";
import { ReactComponent as Male08 } from "../icons/Male08.svg";
import { ReactComponent as Male06 } from "../icons/Male06.svg";
import { ReactComponent as Female08 } from "../icons/Female08.svg";
import { ReactComponent as Female09 } from "../icons/Female09.svg";
import { ReactComponent as D03 } from "../icons/3D03.svg";


export default function Rightbar() {
  const notifications = [
    { icon: <Bug width={24} height={24} />, text: "You have a bug that needs...", time: "Just now" },
    { icon: <User1 width={24} height={24}/>, text: "New user registered", time: "59 minutes ago" },
    { icon: <Bug width={24} height={24} />, text: "You have a bug that needs...", time: "12 hours ago" },
    { icon: <Broadcast1 width={24} height={24}/>, text: "Andi Lane subscribed to you", time: "Today, 11:59 AM" },
  ];

  const activities = [
    { icon: <ActivityPerson1 width={24} height={24}/>, text: "You have a bug that needs...", time: "Just now" },
    { icon: <Female05 width={24} height={24}/>, text: "Released a new version", time: "59 minutes ago" },
    { icon: <ActivityPerson2 width={24} height={24}/>, text: "Submitted a bug", time: "12 hours ago" },
    { icon: <Male07 width={24} height={24}/>, text: "Modified A data in Page X", time: "Today, 11:59 AM" },
    { icon: <Male11 width={24} height={24}/>, text: "Deleted a page in Project X", time: "Feb 2, 2023" },
  ];

  const contacts = [
    { icon: <Female15 width={24} height={24}/>, text: "Natali Craig" },
    { icon: <Male08 width={24} height={24}/>, text: "Drew Cano"},
    { icon: <Male06 width={24} height={24}/>, text: "Orlando Diggs" },
    { icon: <Female08 width={24} height={24}/>, text: "Andi Lane" },
    { icon: <Female09 width={24} height={24}/>, text: "Kate Morrison"},
    { icon: <D03 width={24} height={24}/>, text: "Koray Okumus"},
  ];

  return (
    <div className="rightbar">
      <div className="panel">
        <h3>Notifications</h3>
        <ul>
          {notifications.map((n, i) => (
            <li key={i}>
              <span 
              >{n.icon}</span>
              <div className="info">
                <p>{n.text}</p>
                <small>{n.time}</small>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="panel">
        <h3>Activities</h3>
        <ul>
          {activities.map((a, i) => (
            <li key={i}>
              <span 
              >{a.icon}</span>
              <div className="info">
                <p>{a.text}</p>
                <small>{a.time}</small>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="panel">
        <h3>Contacts</h3>
        <ul>
          {contacts.map((c, i) => (
            <li key={i}>
            <span 
            >{c.icon}</span>
            <div className="info">
              <p>{c.text}</p>
            </div>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
