import Header from "@/components/layouts/Header";
import styles from "./page.module.css";
import Footer from "@/components/layouts/Footer";

export default function Home() {
  return (
    <>
    <Header />
    <div>
      {/* Hero Section */}
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Welcome to Club Management</h1>
          <p className="col-md-8 fs-4">Manage your club members and bookings with our easy-to-use platform.</p>
          <button className="btn btn-primary btn-lg" type="button">Get Started</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="row g-4 py-5">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Member Management</h5>
              <p className="card-text">Easily manage your club members, their profiles, and memberships.</p>
              <button className="btn btn-outline-primary">Learn More</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Booking System</h5>
              <p className="card-text">Streamline your facility bookings and event management.</p>
              <button className="btn btn-outline-primary">Book Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Reports & Analytics</h5>
              <p className="card-text">Get insights into your club's performance and member activities.</p>
              <button className="btn btn-outline-primary">View Reports</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
