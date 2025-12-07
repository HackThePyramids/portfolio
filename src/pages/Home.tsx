import { lazy, Suspense } from 'react'
import './Home.css'

const AnimatedBackground = lazy(() => import('../components/AnimatedBackground'))

export default function Home() {
  return (
    <div className="home-page">
      <Suspense fallback={null}>
        <AnimatedBackground />
      </Suspense>
      <div className="home-content">
        <div className="terminal-box">
          <div className="terminal-header">
            <span className="command-line">{`> whoami`}</span>
          </div>

          <div className="intro-section">
            <h1 className="intro-title">HAI :3</h1>

            <div className="bio-text">
              <p>I'm Alma! A:</p>
              <ul className="bio-list">
                <li>14 year old</li>
                <li>clueless</li>
                <li>coder/H@XX0R!!! guy</li>
              </ul>
            </div>

            <p className="tagline">pretty sure i make things.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
