interface CardProps {
  title: string;
  description: string;
  image: string;
}

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="bg-secondary rounded-lg overflow-hidden shadow-md">
      <img src={image} alt={title} className="h-32 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-textLight font-bold text-lg">{title}</h3>
        <p className="text-textLight text-sm">{description}</p>
      </div>
    </div>
  );
}
