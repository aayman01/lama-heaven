import OfferCard from "@/components/OfferCard";

export default function Home() {
  return (
    <div>
      Welcome to lama heaven
      <div className="w-[1110px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {[1, 2, 3].map((id) => (
          <OfferCard key={id} id={id} />
        ))}
      </div>
    </div>
  );
}
