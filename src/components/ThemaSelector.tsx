import { BookOpen, Trophy, Star, Sparkles, Crown, Medal } from 'lucide-react'
import { Thema } from '../types/latin'
import { GameProgress, PlayerStats } from '../types/game'

interface ThemaSelectorProps {
  themas: Thema[]
  onThemaSelect: (thema: Thema) => void
  onShowProgress: () => void
  progress: Record<number, GameProgress>
  stats: PlayerStats
}

export default function ThemaSelector({ themas, onThemaSelect, onShowProgress, progress, stats }: ThemaSelectorProps) {
  return (
    <div className="thema-selector">
      <div className="floating-stars">
        <Star className="star star-1" />
        <Sparkles className="star star-2" />
        <Star className="star star-3" />
        <Sparkles className="star star-4" />
        <Star className="star star-5" />
      </div>
      
      <div className="header">
        <div className="title-container">
          <Crown className="crown-icon" size={40} />
          <h1>🏛️ Latin Learning Adventure</h1>
          <Crown className="crown-icon" size={40} />
        </div>
        <p className="subtitle">Choose a topic to start your magical Latin journey!</p>
        <div className="encouragement-text">
          <span className="sparkle">✨</span>
          Ready to become a Latin champion?
          <span className="sparkle">✨</span>
        </div>
        <button 
          className="progress-btn"
          onClick={onShowProgress}
        >
          <Medal size={24} />
          <span>My Achievements</span>
          <div className="button-sparkle">⭐</div>
        </button>
      </div>
      
      <div className="thema-grid">
        {themas.map((thema, index) => (
          <div 
            key={thema.id}
            className="thema-card"
            onClick={() => onThemaSelect(thema)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="card-sparkles">
              <div className="sparkle-dot sparkle-1">✨</div>
              <div className="sparkle-dot sparkle-2">⭐</div>
              <div className="sparkle-dot sparkle-3">💫</div>
            </div>
            <div className="thema-icon-container">
              <div className="icon-glow"></div>
              <div className="thema-icon">{thema.icon}</div>
            </div>
            <h3>{thema.title}</h3>
            <p>{thema.description}</p>
            <div className="start-button">
              <Sparkles size={18} />
              <span>Let's Explore!</span>
              <div className="button-shine"></div>
            </div>
            <div className="card-border-glow"></div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .thema-selector {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          overflow-x: hidden;
        }

        /* Floating background stars */
        .floating-stars {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 0;
        }

        .star {
          position: absolute;
          color: rgba(255, 255, 255, 0.6);
          animation: twinkle 3s infinite ease-in-out;
        }

        .star-1 { top: 10%; left: 10%; animation-delay: 0s; }
        .star-2 { top: 20%; right: 15%; animation-delay: 1s; }
        .star-3 { top: 60%; left: 5%; animation-delay: 2s; }
        .star-4 { top: 70%; right: 20%; animation-delay: 0.5s; }
        .star-5 { top: 30%; left: 80%; animation-delay: 1.5s; }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 1;
        }

        .title-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .crown-icon {
          color: #ffd700;
          animation: bounce 2s infinite;
          filter: drop-shadow(0 0 10px #ffd700);
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }

        .header h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin: 0;
          background: linear-gradient(45deg, #ffd700 0%, #ff6b35 25%, #ff1493 50%, #00bfff 75%, #32cd32 100%);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: rainbowText 4s ease-in-out infinite;
          font-weight: 800;
          text-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
        }

        @keyframes rainbowText {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .subtitle {
          font-size: 1.4rem;
          color: #fff;
          margin-bottom: 1rem;
          font-weight: 600;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .encouragement-text {
          font-size: 1.1rem;
          color: #ffd700;
          margin-bottom: 2rem;
          font-weight: 600;
          animation: glow 2s ease-in-out infinite alternate;
        }

        .sparkle {
          display: inline-block;
          animation: sparkleRotate 2s linear infinite;
        }

        @keyframes sparkleRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes glow {
          from { text-shadow: 0 0 5px #ffd700, 0 0 10px #ffd700; }
          to { text-shadow: 0 0 10px #ffd700, 0 0 20px #ffd700, 0 0 30px #ffd700; }
        }

        .progress-btn {
          background: linear-gradient(45deg, #ff6b35 0%, #ffd700 50%, #ff1493 100%);
          background-size: 300% 300%;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          color: white;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
          font-size: 1.1rem;
          position: relative;
          overflow: hidden;
          animation: buttonGradient 3s ease infinite;
        }

        @keyframes buttonGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .progress-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 12px 35px rgba(255, 107, 53, 0.6);
        }

        .button-sparkle {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          animation: sparkleRotate 1s linear infinite;
        }

        .thema-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .thema-card {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 24px;
          padding: 2.5rem 2rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 3px solid transparent;
          backdrop-filter: blur(15px);
          position: relative;
          overflow: hidden;
          animation: cardFloat 6s ease-in-out infinite;
        }

        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-5px) rotate(0.5deg); }
          66% { transform: translateY(2px) rotate(-0.5deg); }
        }

        .thema-card:hover {
          transform: translateY(-15px) scale(1.05) rotate(2deg);
          border-color: #ffd700;
          box-shadow: 0 20px 40px rgba(255, 215, 0, 0.3), 0 0 50px rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.25);
        }

        .card-sparkles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .sparkle-dot {
          position: absolute;
          font-size: 1.2rem;
          animation: sparkleFloat 4s ease-in-out infinite;
        }

        .sparkle-1 { top: 15%; left: 15%; animation-delay: 0s; }
        .sparkle-2 { top: 20%; right: 20%; animation-delay: 1.3s; }
        .sparkle-3 { bottom: 25%; left: 25%; animation-delay: 2.6s; }

        @keyframes sparkleFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-10px) rotate(180deg); opacity: 1; }
        }

        .thema-icon-container {
          position: relative;
          display: inline-block;
          margin-bottom: 1.5rem;
        }

        .icon-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.3; }
        }

        .thema-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          display: block;
          position: relative;
          z-index: 2;
          transition: transform 0.3s ease;
        }

        .thema-card:hover .thema-icon {
          transform: scale(1.2) rotate(10deg);
        }

        .thema-card h3 {
          color: white;
          margin-bottom: 1rem;
          font-size: 1.4rem;
          font-weight: 700;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .thema-card p {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
          font-size: 1rem;
          line-height: 1.4;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        .start-button {
          background: linear-gradient(45deg, #32cd32 0%, #00bfff 50%, #ff1493 100%);
          background-size: 300% 300%;
          padding: 1rem 2rem;
          border-radius: 30px;
          color: white;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(50, 205, 50, 0.4);
          position: relative;
          overflow: hidden;
          font-size: 1.1rem;
          animation: buttonGradient 4s ease infinite;
        }

        .start-button:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(50, 205, 50, 0.6);
        }

        .button-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.5s;
        }

        .start-button:hover .button-shine {
          left: 100%;
        }

        .card-border-glow {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #ffd700, #ff6b35, #ff1493, #00bfff, #32cd32, #ffd700);
          background-size: 400% 400%;
          border-radius: 26px;
          opacity: 0;
          z-index: -1;
          animation: borderRotate 4s linear infinite;
          transition: opacity 0.3s ease;
        }

        .thema-card:hover .card-border-glow {
          opacity: 1;
        }

        @keyframes borderRotate {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .thema-selector { padding: 1rem; }
          .header h1 { font-size: 2.5rem; }
          .thema-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .thema-card { padding: 2rem 1.5rem; }
          .title-container { flex-direction: column; gap: 0.5rem; }
        }
      `}</style>
    </div>
  )
}