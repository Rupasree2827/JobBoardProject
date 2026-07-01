import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-5">

      <div className="text-center py-5 bg-light rounded shadow">

        <h1 className="display-4 fw-bold text-primary">
          Job Board Portal
        </h1>

        <p className="lead mt-3">
          Find your dream job with our Full Stack Job Board application.
        </p>

        <p>
          Built using Django REST Framework and React.
        </p>

        <Link to="/jobs" className="btn btn-primary btn-lg mt-3">
          Browse Jobs
        </Link>

      </div>

      <div className="row mt-5">

        <div className="col-md-4">
          <div className="card shadow text-center p-4">
            <h2>💼</h2>
            <h4>Browse Jobs</h4>
            <p>Search available jobs posted by employers.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow text-center p-4">
            <h2>👨‍💻</h2>
            <h4>Easy Apply</h4>
            <p>Apply for jobs quickly using our platform.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow text-center p-4">
            <h2>🚀</h2>
            <h4>Career Growth</h4>
            <p>Discover opportunities to build your career.</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;