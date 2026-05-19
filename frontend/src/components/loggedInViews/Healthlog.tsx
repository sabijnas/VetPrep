import { useEffect, useState } from "react";
import ErrorAlert from "../ErrorAlert";

type HealthLog = {
  id: number;
  event: string;
  date: string;
  note: string;
  imagePath?: string;
};

type HealthlogProps = {
  userId: number;
  refreshKey: number;
};

const formatDate = (value: string) => {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return parsed.toLocaleDateString("sv-SE");
};

const Healthlog = ({ userId, refreshKey }: HealthlogProps) => {
  const [logs, setLogs] = useState<HealthLog[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let isActive = true;

    const fetchLogs = async () => {
      try {
        const res = await fetch(`http://localhost:5229/api/healthlogs/${userId}`);
        const data = await res.json();

        if (isActive) {
          setLogs(data);
        }
      } catch {
        if (isActive) {
          setLogs([]);
        }
      }
    };

    void fetchLogs();

    return () => {
      isActive = false;
    };
  }, [userId, refreshKey]);

  const handleDelete = async (id: number) => {
    const res = await fetch(`http://localhost:5229/api/healthlogs/${id}`, {
    method: "DELETE",  
    })

    if (!res.ok) {
      setError("Kunde inte ta bort loggen");
      return;
    }

    setError("");
    setLogs((current) => current.filter((log) => log.id !== id));
  }

  return (
    <div id="healthlog-content" className="healthlog-list">
      <ErrorAlert message={error}/>
      {logs.map((log) => (
        <div key={log.id} className="healthlog-card">
          <div className="healthlog-row">
            <p className="healthlog-title">{log.event}</p>
            <i className="fa-solid fa-pen-to-square healthlog-action no-print"></i>
          </div>

          <p className="healthlog-date">{formatDate(log.date)}</p>

          <div className="healthlog-under-row">
            <p className="healthlog-note">{log.note}</p>
            <i className="fa-regular fa-trash-can healthlog-action no-print"
            onClick={() => handleDelete(log.id)}></i>
          </div>

          {log.imagePath && (
            <img
              src={`http://localhost:5229${log.imagePath}`}
              alt="log"
              className="healthlog-image"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Healthlog;