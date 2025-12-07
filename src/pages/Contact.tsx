import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="terminal-box-contact">
          <div className="terminal-header-contact">
            <span className="command-line-contact">{`> cat contacts.txt`}</span>
          </div>

          <div className="contact-content">
            <h1 className="contact-title">lets talk bizness O-O</h1>

            <div className="contact-methods">
              <div className="contact-method">
                <p className="contact-prompt">
                  DM me on the 'cord: <span className="contact-emphasis">@not_not_available</span>
                </p>
              </div>

              <div className="contact-divider">or</div>

              <div className="contact-method">
                <p className="contact-prompt">
                  Send me some mail:{' '}
                  <a href="mailto:i7qkuxmo9@mozmail.com" className="contact-link">
                    i7qkuxmo9@mozmail.com
                  </a>
                </p>
              </div>
            </div>

            <p className="contact-note">(I'll make shtuff for moneys, talk to me!!!!)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
