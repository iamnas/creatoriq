import { useState } from "react";
import api from "../utils/api";
import axios from "axios";

interface Idea {
    id: string;
    topic: string;
    niche: string;
    reelIdea: string;
    hook: string;
    caption: string;
    hashtags: string[];
    isFetched?: boolean;
    isFailed?: boolean;
}

const niches = ["travel", "fashion", "fitness", "finance", "food", "tech"];

export default function Generate() {
    const [topic, setTopic] = useState("");
    const [niche, setNiche] = useState("travel");
    const [loading, setLoading] = useState(false);
    const [idea, setIdea] = useState<Idea | null>(null);
    const [error, setError] = useState("");

    const pollIdea = async (id: string) => {
        const retries = 10;
        const interval = 1500;

        for (let i = 0; i < retries; i++) {
            try {
                const res = await api.get(`/idea/?id=${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                if (res.data?.data?.reelIdea) {
                    setIdea({ ...res.data.data, isFetched: true });
                    return;
                }
            } catch (err) {
                // ignore until retries exhausted
                console.error(err);
            }
            await new Promise((r) => setTimeout(r, interval));
        }

        setIdea({ id, topic, niche, reelIdea: "", hook: "", caption: "", hashtags: [], isFetched: false, isFailed: true });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setIdea(null);

        try {
            const res = await api.post("/idea/generate-idea", { topic, niche }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            const ideaId = res.data.data.id;
            setIdea({ id: ideaId, topic, niche, reelIdea: "", hook: "", caption: "", hashtags: [], isFetched: false });
            pollIdea(ideaId);
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message || "Failed to generate idea.");
            } else {
                setError("An unexpected error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-4">
            <h2 className="text-2xl font-bold mb-4">🎯 Generate Content Idea</h2>
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded">
                <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Enter a topic (e.g., budget travel)"
                    className="w-full border p-2 rounded"
                    required
                />
                <select value={niche} onChange={(e) => setNiche(e.target.value)} className="w-full border p-2 rounded">
                    {niches.map((n) => (
                        <option key={n} value={n}>
                            {n.charAt(0).toUpperCase() + n.slice(1)}
                        </option>
                    ))}
                </select>
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white py-2 w-full rounded disabled:opacity-50"
                >
                    {loading ? "Generating..." : "Generate Idea"}
                </button>
            </form>

            {error && <p className="text-red-500 mt-4">{error}</p>}

            {idea && (
                <div className="mt-6 p-4 border rounded bg-gray-50">
                    {!idea.isFetched && !idea.isFailed && <p>⏳ Waiting for AI to finish...</p>}
                    {idea.isFailed && <p className="text-red-500">❌ Failed to fetch idea. Try again.</p>}
                    {idea.isFetched && (
                        <div>
                            <h3 className="text-xl font-semibold mb-2">{idea.topic}</h3>
                            <p className="mb-2"><strong>Hook:</strong> {idea.hook}</p>
                            <p className="mb-2"><strong>Caption:</strong> {idea.caption}</p>
                            <p className="mb-2"><strong>Reel Idea:</strong> {idea.reelIdea}</p>
                            <p className="mb-2"><strong>Hashtags:</strong> {idea.hashtags.join(" ")}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
