import React from 'react'
const Sidebar = () =>  {
  return (
    <div className="sidebar">
      <div className="sidebar-block">
        <h3>Мои социальные сети</h3>
        <ul className="socials">
          <a className="socials-link" href="https://instagram.com/glebgubckin/" target="_blank"><li>Instagram</li></a>
          <a className="socials-link" href="https://t.me/glebgubckin" target="_blank"><li>Telegram</li></a>
          <a className="socials-link" href="https://github.com/glebgubckin" target="_blank"><li>GitHub</li></a>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar