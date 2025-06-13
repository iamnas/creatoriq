import { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { saveAs } from "file-saver";
import api from "../utils/api";
import { 
  TrendingUp, 
  Users, 
  Heart, 
  MessageCircle, 
  Clock, 
  Download, 
  Upload, 
  FileText, 
  BarChart3,
  Activity,
  Calendar,
  Zap,
  Loader2,
  AlertCircle
} from "lucide-react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Engagement {
  post: number;
  likes: number;
  comments: number;
}

interface AnalyticsData {
  followers: number[];
  engagement: Engagement[];
  bestPostTime: string;
}

export default function Analytics() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [uploadedData, setUploadedData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [uploadError, setUploadError] = useState("");

  useEffect(() => {
    api
      .get("/analytics", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Analytics fetch failed", err);
        setError("Failed to load analytics data");
        setLoading(false);
      });
  }, []);

  const handleJSONUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadError("");
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.followers && parsed.engagement && parsed.bestPostTime) {
          setUploadedData(parsed);
        } else {
          setUploadError("Invalid file format. Please ensure your JSON contains followers, engagement, and bestPostTime fields.");
        }
      } catch {
        setUploadError("Failed to parse JSON file. Please check the file format.");
      }
    };
    reader.readAsText(file);
  };

  const exportAsJSON = () => {
    const exportData = uploadedData || data;
    if (!exportData) return;
    
    const blob = new Blob(
      [JSON.stringify(exportData, null, 2)],
      { type: "application/json" }
    );
    saveAs(blob, "analytics-report.json");
  };

  const exportAsCSV = () => {
    const exportData = uploadedData || data;
    if (!exportData) return;

    let csv = "Metric,Value\n";
    csv += "Best Post Time," + exportData.bestPostTime + "\n\n";
    csv += "Day,Followers\n";
    exportData.followers.forEach((count, index) => {
      csv += `Day ${index + 1},${count}\n`;
    });
    csv += "\nPost,Likes,Comments\n";
    exportData.engagement.forEach((e) => {
      csv += `Post ${e.post},${e.likes},${e.comments}\n`;
    });

    const blob = new Blob([csv], { type: "text/csv" });
    saveAs(blob, "analytics-report.csv");
  };

  const activeData = uploadedData || data;

  // Calculate analytics insights
  const getInsights = (data: AnalyticsData) => {
    const totalFollowers = data.followers[data.followers.length - 1];
    const followerGrowth = data.followers[data.followers.length - 1] - data.followers[0];
    const growthPercentage = ((followerGrowth / data.followers[0]) * 100).toFixed(1);
    
    const totalLikes = data.engagement.reduce((sum, post) => sum + post.likes, 0);
    const totalComments = data.engagement.reduce((sum, post) => sum + post.comments, 0);
    const avgEngagement = ((totalLikes + totalComments) / data.engagement.length).toFixed(0);
    
    const bestPost = data.engagement.reduce((max, post) => 
      (post.likes + post.comments) > (max.likes + max.comments) ? post : max
    );

    return {
      totalFollowers,
      followerGrowth,
      growthPercentage,
      totalLikes,
      totalComments,
      avgEngagement,
      bestPost
    };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-purple-600 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading your analytics...</p>
        </div>
      </div>
    );
  }

  if (error && !activeData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Unable to Load Analytics</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const insights = activeData ? getInsights(activeData) : null;

  const followerChart = activeData ? {
    labels: activeData.followers.map((_, index) => `Day ${index + 1}`),
    datasets: [
      {
        label: "Followers",
        data: activeData.followers,
        fill: true,
        backgroundColor: "rgba(147, 51, 234, 0.1)",
        borderColor: "rgba(147, 51, 234, 1)",
        pointBackgroundColor: "rgba(147, 51, 234, 1)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
        tension: 0.4,
      },
    ],
  } : null;

  const engagementChart = activeData ? {
    labels: activeData.engagement.map((e) => `Post ${e.post}`),
    datasets: [
      {
        label: "Likes",
        data: activeData.engagement.map((e) => e.likes),
        backgroundColor: "rgba(236, 72, 153, 0.8)",
        borderRadius: 8,
      },
      {
        label: "Comments",
        data: activeData.engagement.map((e) => e.comments),
        backgroundColor: "rgba(147, 51, 234, 0.8)",
        borderRadius: 8,
      },
    ],
  } : null;

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
            weight: 500,
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          font: {
            size: 11,
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
          },
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4 shadow-lg">
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Analytics Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Track your Instagram performance and grow your audience
          </p>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Upload className="w-6 h-6 text-purple-600" />
            <h2 className="text-xl font-semibold text-gray-800">Upload Custom Data</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload JSON Analytics File
              </label>
              <input
                type="file"
                accept="application/json"
                onChange={handleJSONUpload}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 transition-colors cursor-pointer"
              />
            </div>
            {uploadedData && (
              <div className="flex items-center space-x-2 text-green-600 bg-green-50 px-3 py-2 rounded-lg">
                <Activity className="w-4 h-4" />
                <span className="text-sm font-medium">Custom data loaded</span>
              </div>
            )}
          </div>
          {uploadError && (
            <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-red-600" />
                <span className="text-sm text-red-700">{uploadError}</span>
              </div>
            </div>
          )}
        </div>

        {activeData && insights && (
          <>
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-800">{insights.totalFollowers.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">Total Followers</p>
                  </div>
                </div>
                <div className="flex items-center text-green-600">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">+{insights.growthPercentage}% growth</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-pink-100 rounded-xl">
                    <Heart className="w-6 h-6 text-pink-600" />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-800">{insights.totalLikes.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">Total Likes</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Across {activeData.engagement.length} posts</p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-800">{insights.totalComments.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">Total Comments</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Avg: {insights.avgEngagement} per post</p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <Zap className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-800">#{insights.bestPost.post}</p>
                    <p className="text-sm text-gray-500">Best Post</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{(insights.bestPost.likes + insights.bestPost.comments).toLocaleString()} engagements</p>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Follower Growth Chart */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Follower Growth</h3>
                </div>
                <div className="h-80">
                  <Line data={followerChart!} options={chartOptions} />
                </div>
              </div>

              {/* Engagement Chart */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Activity className="w-6 h-6 text-pink-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Post Engagement</h3>
                </div>
                <div className="h-80">
                  <Bar data={engagementChart!} options={chartOptions} />
                </div>
              </div>
            </div>

            {/* Best Time and Export */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Best Time to Post */}
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl p-6 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Optimal Posting Time</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-6 h-6" />
                  <span className="text-3xl font-bold">{activeData.bestPostTime}</span>
                </div>
                <p className="mt-2 text-purple-100">
                  Based on your audience's activity patterns
                </p>
              </div>

              {/* Export Options */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Download className="w-6 h-6 text-gray-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Export Data</h3>
                </div>
                <div className="space-y-4">
                  <button
                    onClick={exportAsJSON}
                    className="w-full flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <FileText className="w-5 h-5" />
                    <span className="font-medium">Export as JSON</span>
                  </button>
                  <button
                    onClick={exportAsCSV}
                    className="w-full flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <BarChart3 className="w-5 h-5" />
                    <span className="font-medium">Export as CSV</span>
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Download your analytics data for external analysis or reporting
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}