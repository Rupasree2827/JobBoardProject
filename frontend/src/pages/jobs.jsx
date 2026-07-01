import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api
      .get("/jobs/")
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-primary">Available Jobs</h1>

      <div className="row">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div className="col-md-4 mb-4" key={job.id}>
              <div className="card shadow-lg h-100 border-0">
                <div className="card-body">
                  <h3 className="text-primary">{job.title}</h3>

                  <hr />

                  <p>
                    <strong>🏢 Company:</strong> {job.company}
                  </p>

                  <p>
                    <strong>📍 Location:</strong> {job.location}
                  </p>

                  <p>
                    <strong>💰 Salary:</strong> ₹ {job.salary}
                  </p>

                  <p>
                    <strong>💼 Job Type:</strong> {job.job_type}
                  </p>

                  <Link
                    to={`/jobs/${job.id}`}
                    className="btn btn-primary w-100 mt-2"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <h4>No jobs available.</h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default Jobs;