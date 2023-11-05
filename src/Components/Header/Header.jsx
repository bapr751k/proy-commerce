import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          Logo
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarColor04'
          aria-controls='navbarColor04'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarColor04'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <a className='nav-link active' href='#'>
                Inicio
                <span className='visually-hidden'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Productos
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Precios
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Acerca de...
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                data-bs-toggle='dropdown'
                href='#'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Departamentos
              </a>
              <div className='dropdown-menu'>
                <a className='dropdown-item' href='#'>
                  Action
                </a>
                <a className='dropdown-item' href='#'>
                  Another action
                </a>
                <a className='dropdown-item' href='#'>
                  Something else here
                </a>
                <div className='dropdown-divider' />
                <a className='dropdown-item' href='#'>
                  Separated link
                </a>
              </div>
            </li>
          </ul>

          <form className='d-flex'>
            <input
              className='form-control me-sm-2'
              type='search'
              placeholder='Buscar productos'
            />
            <button className='btn btn-secondary my-2 my-sm-0' type='submit'>
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header
