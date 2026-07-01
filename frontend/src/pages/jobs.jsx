import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api.get("/jobs/")
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Available Jobs</h2>

      <div className="row">
        {jobs.map((job) => (
          <div className="col-md-4 mb-3" key={job.id}>
            <div className="card shadow">
              <div className="card-body">
                <h4>{job.title}</h4>
                <p><strong>{job.company}</strong></p>
                <p>{job.location}</p>
                <p>₹ {job.salary}</p>
                <Link
  to={`/jobs/${job.id}`}
  className="btn btn-primary"
>
  View Details
</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Jobs;