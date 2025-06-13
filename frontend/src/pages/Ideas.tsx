import { useEffect, useState } from "react";
import api from "../utils/api";

interface Idea {
    id: string;
    topic: string;
    niche: string;
    reelIdea: string;
    hook: string;
    caption: string;
    hashtags: string[];
}

export default function Ideas() {
    const [ideas, setIdeas] = useState<Idea[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get("/idea", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((res) => {
                setIdeas(res.data.data);
            })
            .catch(() => alert("Failed to load ideas"))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="max-w-3xl mx-auto p-4 mt-10">
            <h2 className="text-2xl font-bold mb-4">🧠 My Content Ideas</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="space-y-4">
                    {ideas.map((idea) => (
                        <div key={idea.id} className="p-4 border rounded bg-white shadow-sm">
                            <h3 className="font-semibold text-lg">{idea.topic} - <span className="text-sm text-gray-500">{idea.niche}</span></h3>
                            <p><strong>Hook:</strong> {idea.hook}</p>
                            <p><strong>Caption:</strong> {idea.caption}</p>
                            <p><strong>Reel Idea:</strong> {idea.reelIdea}</p>
                            <p><strong>Hashtags:</strong> {idea.hashtags.join(" ")}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
