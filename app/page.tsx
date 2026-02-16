import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="pt-28 space-y-32">

      {/* HERO */}
      <section className="min-h-[70vh] flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Hi, I'm <span className="text-accent">Mateo López</span>
        </h1>
        <p className="mt-6 text-gray-400 max-w-xl text-lg">
          Software Engineer focused on backend systems, databases,
          networking and simulation models.
        </p>
        <div className="mt-8">
          <a
            href="#projects"
            className="bg-accent px-6 py-3 rounded-xl font-medium hover:shadow-glow transition"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectCard
            title="Inventory Simulation"
            description="Monte Carlo simulation for inventory optimization."
            tech="Python · Streamlit · MySQL"
          />
          <ProjectCard
            title="Network Topology Lab"
            description="ISP routing and segmented LAN visibility."
            tech="Cisco · Networking"
          />
          <ProjectCard
            title="Student Data Analysis"
            description="SQL analysis of mental health datasets."
            tech="PostgreSQL · Analytics"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 max-w-3xl leading-relaxed">
          Engineer with strong background in software systems,
          databases, and network architectures. Passionate about
          performance optimization and system modeling.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="pb-20">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-400">
          mateo@email.com
        </p>
      </section>
    </div>
  );
}
