interface Props {
    title: string;
    description: string;
    tech: string;
  }
  
  export default function ProjectCard({ title, description, tech }: Props) {
    return (
      <div className="bg-card p-6 rounded-2xl border border-gray-700 hover:shadow-glow transition duration-300 hover:-translate-y-2">
        <h3 className="text-xl font-semibold mb-2 text-accent">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <span className="text-sm text-gray-500">{tech}</span>
      </div>
    );
  }