import { getKeyAchievements } from '../lib/projects';

export function KeyAchievementsSection() {
  const achievements = getKeyAchievements();

  return (
    <section aria-labelledby="logros-clave" className="space-y-4">
      <div>
        <h2 id="logros-clave" className="text-2xl font-semibold">
          Logros clave
        </h2>
        <p className="text-sm text-gray-600">
          Métricas consolidadas de proyectos y trayectoria profesional.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((achievement) => (
          <article key={achievement.title} className="rounded-xl border border-gray-200 p-4 shadow-sm">
            <p className="text-sm text-gray-500">{achievement.title}</p>
            <p className="text-2xl font-bold">{achievement.value}</p>
            <p className="text-sm text-gray-600">{achievement.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
