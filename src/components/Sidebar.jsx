import React from 'react'
import home from '../img/home.png'
import message from '../img/message.png'
import task from '../img/message.png'
import member from '../img/profile-2user.png'
import setting from '../img/setting-2.png'
import add from '../img/add-square.png'

export default function Sidebar() {
  return (
    <div>
      <nav>
        <table className='sideItems'>
          <tr>
            <td className='p-2'><img src={home}/></td>
            <td className='p-2'>Home</td>
          </tr>

          <tr>
            <td className='p-2'><img src={message} /></td>
            <td className='p-2'>Messages</td>
          </tr>

          <tr>
            <td className='p-2'><img src={task} /></td>
            <td className='p-2'>Tasks</td>
          </tr>

          <tr>
            <td className='p-2'><img src={member} /></td>
            <td className='p-2'>Member</td>
          </tr>

          <tr>
            <td className='p-2'><img src={setting} /></td>
            <td className='p-2'>Settings</td>
          </tr>
        </table>
        <div className='side-hr-line'></div>
        <p className='myProjects'>MY PROJECTS</p>
        <img src={add} className='add'/>
        <table>
          <tr>
            <td></td>
            <td>Mobile App</td>
            <td>...</td>
          </tr>

          <tr>
            <td></td>
            <td>Website Redesign</td>
            <td>...</td>
          </tr>

          <tr>
            <td></td>
            <td>Design System</td>
            <td>...</td>
          </tr>

          <tr>
            <td></td>
            <td>Wireframes</td>
            <td>...</td>
          </tr>
        </table>
      </nav>
    </div>
  )
}
