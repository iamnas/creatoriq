import { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { saveAs } from "file-saver";
import api from "../utils/api";

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

  useEffect(() => {
    api
      .get("/analytics", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.error("Analytics fetch failed", err));
  }, []);

  const handleJSONUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.followers && parsed.engagement && parsed.bestPostTime) {
          setUploadedData(parsed);
        } else {
          alert("Invalid file format");
        }
      } catch {
        alert("Failed to parse JSON");
      }
    };
    reader.readAsText(file);
  };

  const exportAsJSON = () => {
    const blob = new Blob(
      [JSON.stringify(uploadedData || data, null, 2)],
      {
        type: "application/json",
      }
    );
    saveAs(blob, "analytics-report.json");
  };

  const exportAsCSV = () => {
    const active = uploadedData || data;
    if (!active) return;

    let csv = "Followers:\n" + active.followers.join(",") + "\n\n";
    csv += "Post,Likes,Comments\n";
    active.engagement.forEach((e) => {
      csv += `${e.post},${e.likes},${e.comments}\n`;
    });

    const blob = new Blob([csv], { type: "text/csv" });
    saveAs(blob, "analytics-report.csv");
  };

  const activeData = uploadedData || data;
  if (!activeData)
    return <p className="text-center mt-10">Loading analytics...</p>;

  const followerChart = {
    labels: ["Day 1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        label: "Followers",
        data: activeData.followers,
        fill: false,
        borderColor: "#3b82f6",
        tension: 0.4,
      },
    ],
  };

  const engagementChart = {
    labels: activeData.engagement.map((e) => `Post ${e.post}`),
    datasets: [
      {
        label: "Likes",
        data: activeData.engagement.map((e) => e.likes),
        backgroundColor: "#10b981",
      },
      {
        label: "Comments",
        data: activeData.engagement.map((e) => e.comments),
        backgroundColor: "#f59e0b",
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-4 mt-10 space-y-8">
      <h2 className="text-2xl font-bold">📊 Instagram Analytics</h2>

      <input
        type="file"
        accept="application/json"
        onChange={handleJSONUpload}
        className="block mb-4"
      />

      <div>
        <h3 className="font-semibold mb-2">📈 Follower Growth</h3>
        <Line data={followerChart} />
      </div>

      <div>
        <h3 className="font-semibold mb-2">❤️ Engagement (Last 5 Posts)</h3>
        <Bar data={engagementChart} />
      </div>

      <div className="p-4 bg-blue-100 text-blue-900 rounded shadow">
        🕖 <strong>Best Time to Post:</strong> {activeData.bestPostTime}
      </div>

      <div className="flex gap-4">
        <button
          onClick={exportAsCSV}
          className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600"
        >
          📄 Export as CSV
        </button>

        <button
          onClick={exportAsJSON}
          className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
        >
          📥 Export as JSON
        </button>
      </div>
    </div>
  );
}
