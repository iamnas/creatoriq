import { useEffect, useState } from "react";
import api from "../utils/api";
import {
    Lightbulb,
    Hash,
    MessageCircle,
    Copy,
    Search,
    Filter,
    Calendar,
    Eye,
    Share2,
    Download,
    ChevronDown,
    Loader2,
    Sparkles,
    TrendingUp
} from "lucide-react";

interface Idea {
    id: string;
    topic: string;
    niche: string;
    reelIdea: string;
    hook: string;
    caption: string;
    hashtags: string[];
    createdAt?: string;
    isBookmarked?: boolean;
}

const niches = ["travel", "fashion", "fitness", "finance", "food", "tech"];
const nicheIcons = {
    travel: "✈️",
    fashion: "👗",
    fitness: "💪",
    finance: "💰",
    food: "🍽️",
    tech: "💻"
};

const nicheColors = {
    travel: "bg-blue-100 text-blue-800",
    fashion: "bg-pink-100 text-pink-800",
    fitness: "bg-green-100 text-green-800",
    finance: "bg-yellow-100 text-yellow-800",
    food: "bg-orange-100 text-orange-800",
    tech: "bg-purple-100 text-purple-800"
};

export default function Ideas() {
    const [ideas, setIdeas] = useState<Idea[]>([]);
    const [filteredIdeas, setFilteredIdeas] = useState<Idea[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedNiche, setSelectedNiche] = useState("all");
    const [sortBy, setSortBy] = useState("newest");
    const [expandedIdea, setExpandedIdea] = useState<string | null>(null);
    const [copiedId, setCopiedId] = useState<string | null>(null);

    useEffect(() => {
        fetchIdeas();
    }, []);

    useEffect(() => {
        filterAndSortIdeas();
    }, [ideas, searchTerm, selectedNiche, sortBy]);

    const fetchIdeas = async () => {
        try {
            const res = await api.get("/idea", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            setIdeas(res.data.data);
        } catch (error) {
            console.error("Failed to load ideas:", error);
        } finally {
            setLoading(false);
        }
    };

    const filterAndSortIdeas = () => {
        const filtered = ideas.filter(idea => {
            const matchesSearch = idea.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
                idea.hook.toLowerCase().includes(searchTerm.toLowerCase()) ||
                idea.caption.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesNiche = selectedNiche === "all" || idea.niche === selectedNiche;
            return matchesSearch && matchesNiche;
        });

        // Sort ideas
        filtered.sort((a, b) => {
            switch (sortBy) {
                case "oldest":
                    return new Date(a.createdAt || "").getTime() - new Date(b.createdAt || "").getTime();
                case "topic":
                    return a.topic.localeCompare(b.topic);
                case "niche":
                    return a.niche.localeCompare(b.niche);
                default: // newest
                    return new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime();
            }
        });

        setFilteredIdeas(filtered);
    };

    const copyToClipboard = async (text: string, id: string, type: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedId(`${id}-${type}`);
            setTimeout(() => setCopiedId(null), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const toggleExpanded = (ideaId: string) => {
        setExpandedIdea(expandedIdea === ideaId ? null : ideaId);
    };

    const exportIdea = (idea: Idea) => {
        const content = `
📝 Topic: ${idea.topic}
🎯 Niche: ${idea.niche}
🎬 Reel Idea: ${idea.reelIdea}
🪝 Hook: ${idea.hook}
📋 Caption: ${idea.caption}
🏷️ Hashtags: ${idea.hashtags.join(" ")}
        `.trim();

        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${idea.topic.replace(/\s+/g, '-')}-idea.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 animate-spin text-purple-600 mx-auto mb-4" />
                    <p className="text-gray-600 text-lg">Loading your brilliant ideas...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4 shadow-lg">
                        <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                        My Content Ideas
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Your creative content library - {filteredIdeas.length} ideas ready to inspire
                    </p>
                </div>

                {/* Search and Filter Bar */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search your ideas..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                            />
                        </div>

                        {/* Niche Filter */}
                        <div className="relative">
                            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <select
                                value={selectedNiche}
                                onChange={(e) => setSelectedNiche(e.target.value)}
                                className="pl-10 pr-8 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 appearance-none bg-white cursor-pointer"
                            >
                                <option value="all">All Niches</option>
                                {niches.map((niche) => (
                                    <option key={niche} value={niche}>
                                        {nicheIcons[niche as keyof typeof nicheIcons]} {niche.charAt(0).toUpperCase() + niche.slice(1)}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                        </div>

                        {/* Sort */}
                        <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="pl-10 pr-8 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 appearance-none bg-white cursor-pointer"
                            >
                                <option value="newest">Newest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="topic">By Topic</option>
                                <option value="niche">By Niche</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* Ideas Grid */}
                {filteredIdeas.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                            <Lightbulb className="w-10 h-10 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {searchTerm || selectedNiche !== "all" ? "No ideas found" : "No ideas yet"}
                        </h3>
                        <p className="text-gray-600 mb-6">
                            {searchTerm || selectedNiche !== "all"
                                ? "Try adjusting your search or filter criteria"
                                : "Start generating some amazing content ideas!"}
                        </p>
                        {(!searchTerm && selectedNiche === "all") && (
                            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                                <Sparkles className="w-5 h-5 mr-2" />
                                Generate Your First Idea
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredIdeas.map((idea) => (
                            <div
                                key={idea.id}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
                            >
                                {/* Card Header */}
                                <div className="p-6 pb-4">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                                {idea.topic}
                                            </h3>
                                            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${nicheColors[idea.niche as keyof typeof nicheColors]}`}>
                                                <span className="mr-1">{nicheIcons[idea.niche as keyof typeof nicheIcons]}</span>
                                                {idea.niche.charAt(0).toUpperCase() + idea.niche.slice(1)}
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            <button
                                                onClick={() => exportIdea(idea)}
                                                className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100"
                                                title="Export idea"
                                            >
                                                <Download className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => toggleExpanded(idea.id)}
                                                className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Hook Preview */}
                                    <div className="mb-4">
                                        <div className="flex items-center mb-2">
                                            <TrendingUp className="w-4 h-4 text-purple-500 mr-2" />
                                            <span className="text-sm font-medium text-gray-700">Hook</span>
                                        </div>
                                        <p className="text-gray-600 text-sm line-clamp-2">
                                            {idea.hook}
                                        </p>
                                    </div>

                                    {/* Hashtags Preview */}
                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {idea.hashtags.slice(0, 3).map((tag, index) => (
                                            <span
                                                key={index}
                                                className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                                            >
                                                <Hash className="w-3 h-3 mr-1" />
                                                {tag.replace('#', '')}
                                            </span>
                                        ))}
                                        {idea.hashtags.length > 3 && (
                                            <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
                                                +{idea.hashtags.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                {expandedIdea === idea.id && (
                                    <div className="px-6 pb-6 border-t border-gray-100 pt-4 animate-in slide-in-from-top-2 duration-300">
                                        {/* Reel Idea */}
                                        <div className="mb-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center">
                                                    <Sparkles className="w-4 h-4 text-pink-500 mr-2" />
                                                    <span className="text-sm font-medium text-gray-700">Reel Idea</span>
                                                </div>
                                                <button
                                                    onClick={() => copyToClipboard(idea.reelIdea, idea.id, 'reel')}
                                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                                >
                                                    <Copy className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <p className="text-gray-600 text-sm bg-gray-50 p-3 rounded-lg">
                                                {idea.reelIdea}
                                            </p>
                                        </div>

                                        {/* Caption */}
                                        <div className="mb-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center">
                                                    <MessageCircle className="w-4 h-4 text-blue-500 mr-2" />
                                                    <span className="text-sm font-medium text-gray-700">Caption</span>
                                                </div>
                                                <button
                                                    onClick={() => copyToClipboard(idea.caption, idea.id, 'caption')}
                                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                                >
                                                    <Copy className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <p className="text-gray-600 text-sm bg-gray-50 p-3 rounded-lg">
                                                {idea.caption}
                                            </p>
                                        </div>

                                        {/* All Hashtags */}
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center">
                                                    <Hash className="w-4 h-4 text-green-500 mr-2" />
                                                    <span className="text-sm font-medium text-gray-700">
                                                        Hashtags ({idea.hashtags.length})
                                                    </span>
                                                </div>
                                                <button
                                                    onClick={() => copyToClipboard(idea.hashtags.join(' '), idea.id, 'hashtags')}
                                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                                >
                                                    <Copy className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <div className="flex flex-wrap gap-1 bg-gray-50 p-3 rounded-lg">
                                                {idea.hashtags.map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="inline-flex items-center px-2 py-1 bg-white text-gray-600 text-xs rounded border"
                                                    >
                                                        #{tag.replace('#', '')}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Card Footer */}
                                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                                    <div className="flex items-center justify-between">
                                        <button
                                            onClick={() => toggleExpanded(idea.id)}
                                            className="text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors"
                                        >
                                            {expandedIdea === idea.id ? 'Show Less' : 'View Details'}
                                        </button>
                                        <div className="flex items-center space-x-3">
                                            {copiedId && copiedId.startsWith(idea.id) && (
                                                <span className="text-xs text-green-600 font-medium">
                                                    Copied!
                                                </span>
                                            )}
                                            <div className="flex items-center space-x-2">
                                                <button
                                                    onClick={() => copyToClipboard(idea.hook, idea.id, 'hook')}
                                                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-white"
                                                    title="Copy hook"
                                                >
                                                    <Copy className="w-4 h-4" />
                                                </button>
                                                <button
                                                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-white"
                                                    title="Share idea"
                                                >
                                                    <Share2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}