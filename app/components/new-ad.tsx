import { useState } from "react";

type NewAdFormProps = {
    onSave: (ad: {
        title: string;
        description: string;
        city: string;
        location: string;
        startDate: string;
        endDate: string;
        userId: string;
        image: string;
    }) => void;
    onCancel: () => void;
};

export function NewAdForm({ onSave, onCancel }: NewAdFormProps) {
    const [form, setForm] = useState({
        title: "",
        description: "",
        city: "",
        location: "",
        startDate: "",
        endDate: "",
        userId: "",
        image: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (!form.title || !form.description) {
            alert("Tittel og beskrivelse må fylles ut.");
            return;
        }
        onSave(form);
    };

    return (
        <div className="fixed inset-0 flex h-screen items-center justify-center bg-[#0A2343] text-black bg- bg-opacity-40 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4">
                <h2 className="text-xl font-bold">Ny annonse</h2>

                <input
                    name="title"
                    type="text"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Tittel"
                    className="w-full border rounded p-2"
                />
                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Beskrivelse"
                    className="w-full h-24 border rounded p-2 resize-none"
                />
                <input
                    name="location"
                    type="text"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="Lokasjon"
                    className="w-full border rounded p-2"
                />
                <input
                    name="startDate"
                    type="date"
                    value={form.startDate}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                />
                <input
                    name="endDate"
                    type="date"
                    value={form.endDate}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                />
                <div className="flex justify-end gap-2 pt-2">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
                    >
                        Avbryt
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 rounded bg-[#1767CE] text-white hover:bg-blue-600 transition"
                    >
                        Lagre
                    </button>
                </div>
            </div>
        </div>
    );
}
