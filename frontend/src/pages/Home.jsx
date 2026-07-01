function Home() {
  return (
    <div className="container mt-5">

      <div className="text-center mb-5">

        <h1 className="display-3 fw-bold text-primary">
          Find Your Dream Job
        </h1>

        <p className="lead">
          Search thousands of jobs from top companies.
        </p>

        <button className="btn btn-primary btn-lg">
          Browse Jobs
        </button>

      </div>

      <h2 className="mb-4">
        Featured Jobs
      </h2>

      <div className="row">

        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h4>Python Developer</h4>
              <p>Infosys</p>
              <button className="btn btn-outline-primary">
                View Details
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h4>React Developer</h4>
              <p>TCS</p>
              <button className="btn btn-outline-primary">
                View Details
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h4>AI Engineer</h4>
              <p>Accenture</p>
              <button className="btn btn-outline-primary">
                View Details
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;