type Props = {
  title: string;
  description: string;
};

export default function ProfileAdElement({ title, description }: Props) {
  return (
    <div className="border p-4 rounded-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm mt-2 text-[#0A2343]/80">{description}</p>
    </div>
  );
}
