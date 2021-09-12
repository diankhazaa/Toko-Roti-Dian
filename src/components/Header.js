import { Link } from 'react-router-dom'
import { AnimateOnChange } from 'react-animation'
import { useContext } from 'react'
import { CartContext } from 'contexts/CartContext'
import { NotificationContext } from 'contexts/NotificationContext'
import { AuthContext } from 'contexts/AuthContext'
import 'react-confirm-alert/src/react-confirm-alert.css'

const Header = () => {
  const { getTotalQuantity } = useContext(CartContext)
  const { getTotalMessage } = useContext(NotificationContext)
  const { me } = useContext(AuthContext)
  const totalQuantity = getTotalQuantity()
  const totalMessage = getTotalMessage()
  return (
    <>
      <header className="navbar navbar-expand-md navbar-light d-print-none">
        <div className="container-xl">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
            <Link to="/">
              <img
                src="data:image/jpeg;base64,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"
                width="110"
                height="32"
                alt="Tabler"
                className="navbar-brand-image px-2"
              />
            </Link>
            Dian Jaya Bakery
          </h1>
          <div className="navbar-nav flex-row order-md-last">
            {me && (
              <div className="nav-item dropdown d-none d-md-flex me-3">
                <Link
                  to="/carts"
                  className="nav-link px-0 carts-icon"
                  data-bs-toggle="dropdown"
                  tabIndex="-1"
                  aria-label="Show notifications"
                >
                  <AnimateOnChange
                    animationIn="bounceIn"
                    animationOut="bounceOut"
                    durationOut={500}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="6" cy="19" r="2" />
                      <circle cx="17" cy="19" r="2" />
                      <path d="M17 17h-11v-14h-2" />
                      <path d="M6 5l14 1l-1 7h-13" />
                    </svg>
                    <span className="badge bg-red">{totalQuantity}</span>
                  </AnimateOnChange>
                </Link>
              </div>
            )}
            {me && (
              <div className="nav-item dropdown d-none d-md-flex me-3">
                <Link
                  to="/notifications"
                  className="nav-link px-0 carts-icon"
                  data-bs-toggle="dropdown"
                  tabIndex="-1"
                  aria-label="Show notifications"
                >
                  <AnimateOnChange
                    animationIn="bounceIn"
                    animationOut="bounceOut"
                    durationOut={500}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                      <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                    </svg>
                    <span className="badge bg-red">{totalMessage}</span>
                  </AnimateOnChange>
                </Link>
              </div>
            )}

            <div className="nav-item d-none d-md-flex me-3">
              <div className="btn-list">
                {!me && (
                  <Link to="/login" className="btn btn-outline-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                      <path d="M20 12h-13l3 -3m0 6l-3 -3" />
                    </svg>
                    Login
                  </Link>
                )}
              </div>
            </div>

            {me && (
              <div className="nav-item">
                <Link
                  to="/account"
                  className="nav-link d-flex lh-1 text-reset p-0"
                >
                  <div className="d-none d-xl-block ps-2">
                    <div>{me.name}</div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
