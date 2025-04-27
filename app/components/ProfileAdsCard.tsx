import ProfileAdElement from "./ProfileAdElement";

type Props = {
  title: string;
  ads: {
    title: string;
    description: string;
  }[];
};

export default function ProfileAdsCard({ title, ads }: Props) {
  return (
    <div className="w-full bg-[#D9E9FF] text-[#0A2343] p-8 rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      {ads.map((ad, index) => (
        <ProfileAdElement
          key={index}
          title={ad.title}
          description={ad.description}
        />
      ))}
    </div>
  );
}
