import { useState } from "react";
import api from "../utils/api";
import axios from "axios";
import { Sparkles, Loader2, AlertCircle, CheckCircle2, Hash, MessageCircle, Zap, Copy, RefreshCw, Lightbulb } from "lucide-react";

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

const niches = [
    { value: "travel", label: "Travel", emoji: "✈️" },
    { value: "fashion", label: "Fashion", emoji: "👗" },
    { value: "fitness", label: "Fitness", emoji: "💪" },
    { value: "finance", label: "Finance", emoji: "💰" },
    { value: "food", label: "Food", emoji: "🍳" },
    { value: "tech", label: "Tech", emoji: "💻" }
];

export default function Generate() {
    const [topic, setTopic] = useState("");
    const [niche, setNiche] = useState("travel");
    const [loading, setLoading] = useState(false);
    const [idea, setIdea] = useState<Idea | null>(null);
    const [error, setError] = useState("");
    const [copiedField, setCopiedField] = useState<string | null>(null);

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

    const copyToClipboard = async (text: string, field: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedField(field);
            setTimeout(() => setCopiedField(null), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const generateNew = () => {
        setIdea(null);
        setError("");
        setTopic("");
    };

    const selectedNiche = niches.find(n => n.value === niche);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4 shadow-lg">
                        <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                        Generate Content Ideas
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Create engaging Instagram content with AI-powered suggestions
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Form Section */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
                                        Content Topic
                                    </label>
                                    <div className="relative">
                                        <Lightbulb className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                        <input
                                            id="topic"
                                            type="text"
                                            value={topic}
                                            onChange={(e) => setTopic(e.target.value)}
                                            placeholder="e.g., budget travel tips, morning routine, healthy recipes"
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white placeholder-gray-500"
                                            required
                                            disabled={loading}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="niche" className="block text-sm font-medium text-gray-700">
                                        Content Niche
                                    </label>
                                    <select 
                                        id="niche"
                                        value={niche} 
                                        onChange={(e) => setNiche(e.target.value)} 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                                        disabled={loading}
                                    >
                                        {niches.map((n) => (
                                            <option key={n.value} value={n.value}>
                                                {n.emoji} {n.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {loading ? (
                                        <div className="flex items-center justify-center space-x-2">
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            <span>Generating Ideas...</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center space-x-2">
                                            <Zap className="w-5 h-5" />
                                            <span>Generate Content Idea</span>
                                        </div>
                                    )}
                                </button>
                            </form>

                            {error && (
                                <div className="mt-6 flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    <span className="text-sm font-medium">{error}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="space-y-6">
                        {idea && (
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                                {!idea.isFetched && !idea.isFailed && (
                                    <div className="text-center py-8">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                                            <Loader2 className="w-8 h-8 text-purple-600 animate-spin" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            AI is crafting your content...
                                        </h3>
                                        <p className="text-gray-600">
                                            This may take a few moments. Please wait while we generate your personalized content idea.
                                        </p>
                                    </div>
                                )}

                                {idea.isFailed && (
                                    <div className="text-center py-8">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                                            <AlertCircle className="w-8 h-8 text-red-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            Generation Failed
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            We couldn't generate your content idea. Please try again.
                                        </p>
                                        <button
                                            onClick={generateNew}
                                            className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                                        >
                                            <RefreshCw className="w-4 h-4" />
                                            <span>Try Again</span>
                                        </button>
                                    </div>
                                )}

                                {idea.isFetched && (
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900">{idea.topic}</h3>
                                                <p className="text-purple-600 font-medium">{selectedNiche?.emoji} {selectedNiche?.label}</p>
                                            </div>
                                            <button
                                                onClick={generateNew}
                                                className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                                            >
                                                <RefreshCw className="w-4 h-4" />
                                                <span>New Idea</span>
                                            </button>
                                        </div>

                                        {/* Hook */}
                                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                                            <div className="flex items-start justify-between mb-2">
                                                <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                                                    <Zap className="w-4 h-4 text-purple-600" />
                                                    <span>Hook</span>
                                                </h4>
                                                <button
                                                    onClick={() => copyToClipboard(idea.hook, 'hook')}
                                                    className="text-gray-500 hover:text-gray-700 transition-colors"
                                                >
                                                    {copiedField === 'hook' ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                                                </button>
                                            </div>
                                            <p className="text-gray-700">{idea.hook}</p>
                                        </div>

                                        {/* Reel Idea */}
                                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4">
                                            <div className="flex items-start justify-between mb-2">
                                                <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                                                    <Sparkles className="w-4 h-4 text-blue-600" />
                                                    <span>Reel Concept</span>
                                                </h4>
                                                <button
                                                    onClick={() => copyToClipboard(idea.reelIdea, 'reel')}
                                                    className="text-gray-500 hover:text-gray-700 transition-colors"
                                                >
                                                    {copiedField === 'reel' ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                                                </button>
                                            </div>
                                            <p className="text-gray-700">{idea.reelIdea}</p>
                                        </div>

                                        {/* Caption */}
                                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                                            <div className="flex items-start justify-between mb-2">
                                                <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                                                    <MessageCircle className="w-4 h-4 text-green-600" />
                                                    <span>Caption</span>
                                                </h4>
                                                <button
                                                    onClick={() => copyToClipboard(idea.caption, 'caption')}
                                                    className="text-gray-500 hover:text-gray-700 transition-colors"
                                                >
                                                    {copiedField === 'caption' ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                                                </button>
                                            </div>
                                            <p className="text-gray-700 whitespace-pre-wrap">{idea.caption}</p>
                                        </div>

                                        {/* Hashtags */}
                                        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4">
                                            <div className="flex items-start justify-between mb-2">
                                                <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                                                    <Hash className="w-4 h-4 text-orange-600" />
                                                    <span>Hashtags</span>
                                                </h4>
                                                <button
                                                    onClick={() => copyToClipboard(idea.hashtags.join(' '), 'hashtags')}
                                                    className="text-gray-500 hover:text-gray-700 transition-colors"
                                                >
                                                    {copiedField === 'hashtags' ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                                                </button>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {idea.hashtags.map((tag, index) => (
                                                    <span key={index} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {!idea && !loading && (
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                                    <Sparkles className="w-8 h-8 text-gray-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Ready to Create
                                </h3>
                                <p className="text-gray-600">
                                    Enter your topic and niche to generate AI-powered content ideas for your Instagram.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}