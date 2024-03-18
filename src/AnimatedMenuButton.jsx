export default function AnimatedMenuButton ({
  mobileMenuOpen,
  setMobileMenuOpen,
  isHovered,
}) {
  return (
    <button
      type="button"
      className={`-m-2.5 -mx-0 p-2.5 enlarge ${isHovered
        ? 'enlarged'
        : ''}`}
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    >
      <input type="checkbox"
             checked={mobileMenuOpen}/>
      <span aria-hidden="true"></span>
      <span className="sr-only">Open main menu</span>
      <style jsx>{`
        button {
          position: relative;
        }

        button input {
          position: absolute;
          visibility: hidden;
          cursor: pointer;
        }

        button input:checked + span {
          background: transparent;
        }

        button input:checked + span:after {
          transform: translateY(-12px) rotate(45deg)
        }

        button input:checked + span:before {
          transform: translateY(12px) rotate(-45deg);
        }

        button span {
          position: absolute;
          width: 150%;
          height: 2px;
          background: #fff;
          transition: all 0.1s;
          right: -5px;
        }

        button span:before, button span:after {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          background: #fff;
          top: -12px;
          right: 0px;
          transition: all 0.3s;
        }

        button span:after {
          top: 12px;
        }
      `}</style>
    </button>
  )
}