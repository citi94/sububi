import { ArrowLeft, Star, Trophy, Target } from 'lucide-react'
import { Thema } from '../types/latin'
import { GameProgress, PlayerStats } from '../types/game'

interface ProgressDashboardProps {
  onBack: () => void
  themas: Thema[]
  progress: Record<number, GameProgress>
  stats: PlayerStats
}

export default function ProgressDashboard({ onBack, themas, progress, stats }: ProgressDashboardProps) {
  const completedThemas = Object.values(progress).filter(p => p.completed).length

  return (
    <div className="progress-dashboard">
      <div className="dashboard-header">
        <button onClick={onBack} className="back-btn">
          <ArrowLeft size={20} />
          Back to Menu
        </button>
        <h2>Your Progress</h2>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <Trophy size={32} />
          </div>
          <div className="stat-content">
            <h3>{completedThemas}</h3>
            <p>Themas Completed</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Target size={32} />
          </div>
          <div className="stat-content">
            <h3>{stats.totalScore}</h3>
            <p>Total Points</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Star size={32} />
          </div>
          <div className="stat-content">
            <h3>Level {stats.level}</h3>
            <p>Current Level</p>
          </div>
        </div>
      </div>

      <div className="progress-list">
        <h3>Thema Progress</h3>
        <div className="themas">
          {themas.map((thema) => {
            const themaProgress = progress[thema.id]
            const isCompleted = themaProgress?.completed || false
            const score = themaProgress?.score || 0
            const attempts = themaProgress?.attempts || 0
            
            return (
              <div key={thema.id} className="progress-item">
                <div className="thema-info">
                  <span className="thema-icon">{thema.icon}</span>
                  <div>
                    <h4>{thema.title}</h4>
                    <p>{thema.description}</p>
                  </div>
                </div>
                <div className="progress-status">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: isCompleted ? '100%' : attempts > 0 ? '50%' : '0%' }}
                    ></div>
                  </div>
                  <span className="status-text">
                    {isCompleted ? `✅ Completed (${score} pts)` : attempts > 0 ? '🔄 In Progress' : '🚀 Not Started'}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {stats.achievements.length > 0 && (
        <div className="achievements-section">
          <h3>🏆 Achievements</h3>
          <div className="achievements-grid">
            {stats.achievements.filter(a => a.unlocked).map(achievement => (
              <div key={achievement.id} className="achievement-badge">
                <span className="achievement-icon">{achievement.icon}</span>
                <div>
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .progress-dashboard {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem;
        }

        .dashboard-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .back-btn {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          padding: 0.75rem;
          border-radius: 12px;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: background 0.2s;
        }

        .back-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .dashboard-header h2 {
          color: white;
          margin: 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          backdrop-filter: blur(10px);
        }

        .stat-icon {
          background: linear-gradient(45deg, #667eea, #764ba2);
          padding: 1rem;
          border-radius: 12px;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-content h3 {
          color: white;
          margin: 0 0 0.25rem 0;
          font-size: 2rem;
        }

        .stat-content p {
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          font-size: 0.9rem;
        }

        .progress-list {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          margin-bottom: 2rem;
        }

        .progress-list h3 {
          color: white;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .themas {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .progress-item {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .thema-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
        }

        .thema-icon {
          font-size: 1.5rem;
        }

        .thema-info h4 {
          color: white;
          margin: 0 0 0.25rem 0;
          font-size: 1rem;
        }

        .thema-info p {
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          font-size: 0.85rem;
        }

        .progress-status {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.5rem;
          min-width: 150px;
        }

        .progress-bar {
          width: 120px;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(45deg, #4caf50, #8bc34a);
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        .status-text {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.8rem;
        }

        .achievements-section {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          backdrop-filter: blur(10px);
        }

        .achievements-section h3 {
          color: white;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .achievement-badge {
          background: rgba(255, 215, 0, 0.1);
          border: 1px solid rgba(255, 215, 0, 0.3);
          border-radius: 12px;
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .achievement-icon {
          font-size: 2rem;
        }

        .achievement-badge h4 {
          color: #ffd700;
          margin: 0 0 0.25rem 0;
          font-size: 0.9rem;
        }

        .achievement-badge p {
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          font-size: 0.8rem;
        }
      `}</style>
    </div>
  )
}