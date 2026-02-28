import { useState } from 'react';
import styles from './LoginScreen.module.css';

const LoginScreen = ({ onLogin }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleNumberClick = (num) => {
    if (pin.length < 6) {
      const newPin = pin + num;
      setPin(newPin);
      setError('');
    }
  };

  const handleBackspace = () => {
    setPin(pin.slice(0, -1));
    setError('');
  };

  const handleClear = () => {
    setPin('');
    setError('');
  };

  const handleSignIn = () => {
    if (pin.length >= 4 && pin.length <= 6) {
      onLogin();
    } else {
      setError('PIN must be 4-6 digits');
    }
  };

  const renderPinDots = () => {
    const dots = [];
    for (let i = 0; i < 6; i++) {
      dots.push(
        <div
          key={i}
          className={`${styles.pinDot} ${i < pin.length ? styles.filled : ''}`}
        />
      );
    }
    return dots;
  };

  return (
    <div className={styles.container}>
      {/* Left Panel - Illustration */}
      <div className={styles.leftPanel}>
        <div className={styles.illustrationWrapper}>
          <div className={styles.illustration}>
            <svg viewBox="0 0 400 300" className={styles.svg}>
              {/* Background blob */}
              <ellipse cx="200" cy="150" rx="160" ry="120" fill="#e8f4fc" />
              <ellipse cx="280" cy="80" rx="40" ry="30" fill="#d4ebf7" />
              <ellipse cx="320" cy="180" rx="25" ry="20" fill="#d4ebf7" />

              {/* Person */}
              <g transform="translate(100, 60)">
                {/* Hair */}
                <ellipse cx="60" cy="40" rx="35" ry="35" fill="#2d3748" />
                <path d="M25 40 Q25 80 60 85 Q95 80 95 40" fill="#2d3748" />

                {/* Face */}
                <ellipse cx="60" cy="50" rx="28" ry="30" fill="#fbd5d5" />

                {/* Eyes */}
                <ellipse cx="50" cy="48" rx="3" ry="4" fill="#2d3748" />
                <ellipse cx="70" cy="48" rx="3" ry="4" fill="#2d3748" />

                {/* Smile */}
                <path d="M52 62 Q60 68 68 62" stroke="#2d3748" strokeWidth="2" fill="none" />

                {/* Body/Shirt */}
                <path d="M30 85 Q30 130 60 135 Q90 130 90 85" fill="#5B7FFF" />

                {/* Arms */}
                <ellipse cx="25" cy="100" rx="12" ry="20" fill="#5B7FFF" />
                <ellipse cx="95" cy="100" rx="12" ry="20" fill="#5B7FFF" />

                {/* Hands */}
                <circle cx="25" cy="120" r="10" fill="#fbd5d5" />
                <circle cx="95" cy="120" r="10" fill="#fbd5d5" />
              </g>

              {/* Phone */}
              <g transform="translate(220, 100)">
                <rect x="0" y="0" width="50" height="80" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
                <rect x="5" y="10" width="40" height="55" rx="4" fill="#e8f4fc" />
                <circle cx="25" cy="72" r="4" fill="#e2e8f0" />
              </g>

              {/* Checkmark circle */}
              <g transform="translate(200, 160)">
                <circle cx="0" cy="0" r="20" fill="#48bb78" />
                <path d="M-8 0 L-3 5 L8 -6" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </g>

              {/* Decorative dots */}
              <circle cx="320" cy="100" r="5" fill="#5B7FFF" opacity="0.5" />
              <circle cx="340" cy="120" r="3" fill="#5B7FFF" opacity="0.3" />
              <circle cx="100" cy="200" r="4" fill="#5B7FFF" opacity="0.4" />
            </svg>
          </div>
        </div>

        <div className={styles.tagline}>
          <h1>Selling made easy</h1>
          <p>Provides various payment methods, perfect for those of you who are very cashless</p>
        </div>

        <div className={styles.dots}>
          <span className={`${styles.dot} ${styles.activeDot}`}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </div>

      {/* Right Panel - PIN Entry */}
      <div className={styles.rightPanel}>
        <div className={styles.pinSection}>
          <div className={styles.lockIcon}>
            <svg viewBox="0 0 24 24" fill="none" className={styles.lockSvg}>
              <path
                d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
                fill="#5B7FFF"
              />
              <path
                d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                stroke="#5B7FFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h2 className={styles.title}>Enter Pin</h2>
          <p className={styles.subtitle}>Your Pin is required to enable Touch ID</p>

          <div className={styles.pinDots}>
            {renderPinDots()}
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <div className={styles.numpad}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                className={styles.numBtn}
                onClick={() => handleNumberClick(String(num))}
              >
                {num}
              </button>
            ))}
            <button className={styles.numBtn} onClick={handleBackspace}>
              <svg viewBox="0 0 24 24" fill="none" className={styles.iconSvg}>
                <path
                  d="M21 4H8L1 12L8 20H21C21.5304 20 22.0391 19.7893 22.4142 19.4142C22.7893 19.0391 23 18.5304 23 18V6C23 5.46957 22.7893 4.96086 22.4142 4.58579C22.0391 4.21071 21.5304 4 21 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M18 9L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 9L18 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              className={styles.numBtn}
              onClick={() => handleNumberClick('0')}
            >
              0
            </button>
            <button className={styles.numBtn} onClick={handleClear}>
              <svg viewBox="0 0 24 24" fill="none" className={styles.iconSvg}>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <button
            className={`${styles.signInBtn} ${pin.length >= 4 ? styles.signInBtnActive : ''}`}
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
