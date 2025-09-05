import React, { useState, useEffect } from 'react'
import { Trophy, X, Sparkles } from 'lucide-react'
import { Achievement } from '../types/game'

interface AchievementNotificationProps {
  achievement: Achievement
  onDismiss: () => void
  delay?: number
}

export function AchievementNotification({ achievement, onDismiss, delay = 1000 }: AchievementNotificationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    const hideTimer = setTimeout(() => {
      handleDismiss()
    }, delay + 5000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [delay])

  const handleDismiss = () => {
    setIsExiting(true)
    setTimeout(() => {
      onDismiss()
    }, 300)
  }

  return (
    <div className={`achievement-notification ${
      isVisible && !isExiting ? 'visible' : ''
    } ${
      isExiting ? 'exiting' : ''
    }`}>
      <div className="confetti">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`confetti-particle confetti-${i + 1}`}>
            {i % 4 === 0 ? '⭐' : i % 4 === 1 ? '✨' : i % 4 === 2 ? '💫' : '🌟'}
          </div>
        ))}
      </div>
      
      <button className="dismiss-btn" onClick={handleDismiss}>
        <X size={16} />
      </button>
      
      <div className="achievement-content">
        <div className="achievement-badge">
          <div className="achievement-icon">
            <span className="icon-emoji">{achievement.icon}</span>
          </div>
        </div>
        
        <div className="achievement-details">
          <div className="achievement-header">
            <Trophy className="trophy-icon" size={18} />
            <span className="achievement-label">Achievement Unlocked!</span>
          </div>
          <h3 className="achievement-title">{achievement.title}</h3>
          <p className="achievement-description">{achievement.description}</p>
        </div>
      </div>
      
      <style jsx>{`
        .achievement-notification {
          position: fixed;
          top: 20px;
          right: 20px;
          width: 380px;
          max-width: 90vw;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85));
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(20px);
          z-index: 10000;
          transform: translateX(420px) scale(0.8);
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          border: 2px solid #ffd700;
        }
        
        .achievement-notification.visible {
          transform: translateX(0) scale(1);
          opacity: 1;
        }
        
        .achievement-notification.exiting {
          transform: translateX(420px) scale(0.8);
          opacity: 0;
          transition: all 0.3s ease-in;
        }
        
        .confetti {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
          border-radius: 16px;
        }
        
        .confetti-particle {
          position: absolute;
          font-size: 1.2rem;
          opacity: 0;
          animation: confettiDance 3s ease-out forwards;
        }
        
        .confetti-1 { left: 10%; top: 20%; animation-delay: 0s; color: #ffd700; }
        .confetti-2 { left: 30%; top: 10%; animation-delay: 0.3s; color: #ff6b35; }
        .confetti-3 { left: 50%; top: 15%; animation-delay: 0.6s; color: #ff1493; }
        .confetti-4 { left: 70%; top: 25%; animation-delay: 0.9s; color: #00bfff; }
        .confetti-5 { left: 85%; top: 30%; animation-delay: 1.2s; color: #32cd32; }
        .confetti-6 { left: 20%; top: 70%; animation-delay: 1.5s; color: #ffd700; }
        .confetti-7 { left: 60%; top: 80%; animation-delay: 1.8s; color: #ff6b35; }
        .confetti-8 { left: 80%; top: 60%; animation-delay: 2.1s; color: #ff1493; }
        
        @keyframes confettiDance {
          0% {
            opacity: 0;
            transform: translateY(20px) rotate(0deg) scale(0.5);
          }
          20% {
            opacity: 1;
            transform: translateY(0) rotate(180deg) scale(1);
          }
          80% {
            opacity: 1;
            transform: translateY(-10px) rotate(360deg) scale(1.1);
          }
          100% {
            opacity: 0;
            transform: translateY(-30px) rotate(540deg) scale(0.8);
          }
        }
        
        .dismiss-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(0, 0, 0, 0.1);
          border: none;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: rgba(0, 0, 0, 0.5);
          transition: all 0.2s ease;
          z-index: 2;
        }
        
        .dismiss-btn:hover {
          background: rgba(0, 0, 0, 0.2);
          color: rgba(0, 0, 0, 0.8);
          transform: scale(1.1);
        }
        
        .achievement-content {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          position: relative;
          z-index: 1;
        }
        
        .achievement-badge {
          position: relative;
          flex-shrink: 0;
        }
        
        .achievement-icon {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ffd700, #ffed4e);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(255, 215, 0, 0.3);
          animation: iconBounce 2s ease-in-out infinite;
        }
        
        @keyframes iconBounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
          60% { transform: translateY(-2px); }
        }
        
        .icon-emoji {
          font-size: 1.8rem;
          position: relative;
          z-index: 2;
        }
        
        .achievement-details {
          flex: 1;
          min-width: 0;
        }
        
        .achievement-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        
        .trophy-icon {
          color: #ffd700;
          animation: trophyShine 2s ease-in-out infinite;
        }
        
        @keyframes trophyShine {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.3); }
        }
        
        .achievement-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: #ffd700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .achievement-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #333;
          margin: 0 0 0.25rem 0;
          line-height: 1.2;
        }
        
        .achievement-description {
          font-size: 0.9rem;
          color: #666;
          margin: 0;
          line-height: 1.3;
        }
        
        @media (max-width: 480px) {
          .achievement-notification {
            width: calc(100vw - 40px);
            right: 20px;
            left: 20px;
            padding: 1.25rem;
          }
          
          .achievement-content {
            flex-direction: column;
            text-align: center;
            gap: 0.75rem;
          }
          
          .achievement-badge {
            align-self: center;
          }
        }
      `}</style>
    </div>
  )
}