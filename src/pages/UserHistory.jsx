import { useEffect, useState } from "react";
import axios from "axios";

const UserHistory = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const key = localStorage.getItem("accessToken");
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserHistory = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${baseURL}/api/v1/user/history`, {
          headers: {
            Authorization: `Bearer ${key}`,
            "Content-Type": "application/json",
          },
        });
        setHistory(response.data.data);
      } catch (error) {
        console.error("Error fetching user history:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getUserHistory();
  }, [key]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  // Helper function to render response (string or array)
  const renderResponse = (response) => {
    if (Array.isArray(response)) {
      return (
        <ul className="list-disc list-inside space-y-1">
          {response.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      );
    } else if (typeof response === "object" && response !== null) {
      // Handle object case
      return (
        <ul className="list-disc list-inside space-y-1">
          {Object.entries(response).map(([key, value], index) => (
            <li key={index} className="text-gray-700">
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      );
    }
    return <p className="text-gray-700">{response}</p>;
  };

  return (
    <div className="font-sans max-w-full sm:max-w-4xl mx-auto p-4 sm:p-6 min-h-screen">
      <h1 className="mt-[5rem] text-3xl font-bold text-gray-800 mb-6 text-center">
        Your History
      </h1>

      {/* Mobile view */}
      <div className="md:hidden space-y-4 flex flex-col gap-8">
        {history.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-orange-500 text-white p-3 font-semibold">
              {item.type}
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-2">
                {new Date(item.createdAt).toLocaleString()}
              </p>
              {renderResponse(item.response)}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop view */}
      <div className="hidden md:block overflow-hidden">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-3 text-left text-sm font-semibold">Date</th>
              <th className="p-3 text-left text-sm font-semibold">Type</th>
              <th className="p-3 text-left text-sm font-semibold">Response</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr
                key={item._id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="p-3 text-sm text-gray-600">
                  {new Date(item.createdAt).toLocaleString()}
                </td>
                <td className="p-3 text-sm font-medium text-gray-800">
                  {item.type}
                </td>
                <td className="p-3 text-sm">{renderResponse(item.response)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {history.length === 0 && (
        <p className="text-center text-gray-600 mt-8">No history available.</p>
      )}
    </div>
  );
};

export default UserHistory;