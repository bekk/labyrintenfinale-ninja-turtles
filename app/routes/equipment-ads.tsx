import { useState } from "react";
import { AdCard } from "~/components/ad-card";
import { NewAdForm } from "~/components/new-ad";
import { advertisements as initialAdvertisements } from "~/components/types/advertisement";

export default function EquipmentAds() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false);
    const [ads, setAds] = useState(initialAdvertisements);

    const handleSave = (newAd: {
        title: string;
        description: string;
        city: string;
        location: string;
        startDate: string;
        endDate: string;
        userId: string;
        image: string;
    }) => {
        const now = new Date();
        const createdAt = now.toISOString().split("T")[0];

        const newAdWithDefaults = {
            ...newAd,
            id: Date.now().toString(),
            createdAt,
            isCompany: false,
            isEquipment: true,
            image: "app/components/images/drone.png",
        };

        setAds([newAdWithDefaults, ...ads]);
        setIsOpen(false);
    };

    const filteredAds = ads.filter((ad) => {
        if (!ad.isEquipment) return false;

        const lowerCaseSearch = searchTerm.toLowerCase();

        return (
            ad.location.toLowerCase().includes(lowerCaseSearch) ||
            ad.title.toLowerCase().includes(lowerCaseSearch) ||
            ad.userId.toLowerCase().includes(lowerCaseSearch) ||
            ad.description.toLowerCase().includes(lowerCaseSearch) ||
            ad.city.toLowerCase().includes(lowerCaseSearch)
        );
    });

    return (
        <div className="p-8 space-y-8">
            <div className="flex justify-between mb-6">
                <h2>Utstyr</h2>

                <div className="flex gap-4">
                    <input
                        id="search"
                        type="text"
                        placeholder="Søk ..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 border rounded w-fit"
                    />
                    <button
                        onClick={() => setIsOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 rounded bg-[#1767CE] text-white hover:bg-blue-600 transition cursor-pointer"
                    >
                        Registrer tilgjengelighet
                    </button>
                </div>
            </div>

            {isOpen && (
                <NewAdForm
                    onSave={handleSave}
                    onCancel={() => setIsOpen(false)}
                />
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredAds.length > 0 ? (
                    filteredAds.map((ad) => (
                        <AdCard key={ad.id} ad={ad} />
                    ))
                ) : (
                    <p>Fant ingen utstyr som matcher søket.</p>
                )}
            </div>
        </div>
    );
}
