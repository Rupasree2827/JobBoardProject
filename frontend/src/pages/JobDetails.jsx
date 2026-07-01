import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    api.get(`/jobs/${id}/`)
      .then((response) => {
        setJob(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!job) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2>{job.title}</h2>
        <h4>{job.company}</h4>

        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Salary:</strong> ₹ {job.salary}</p>
        <p><strong>Job Type:</strong> {job.job_type}</p>
        <p><strong>Description:</strong></p>
        <p>{job.description}</p>
      </div>
    </div>
  );
}

export default JobDetails;