import React from 'react';

const Fees = () => {
  return (
    <div className="itic-page-container">
      <section className="pnit-page-header text-center">
        <h1>Tuition & Financial Information</h1>
        <p>Transparent pricing schedules designed for institutional sponsorship and private professionals.</p>
      </section>

      <section className="pnit-section container">
        <div className="table-responsive">
          <table className="pnit-custom-table">
            <thead>
              <tr>
                <th>Program / Course Category</th>
                <th>Duration</th>
                <th>Local Fee (GHS)</th>
                <th>International Fee (USD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Cybersecurity</strong></td>
                <td>8 Weeks</td>
                <td>GHS 7,500</td>
                <td>$750</td>
              </tr>
              <tr>
                <td><strong>Networking & Systems</strong></td>
                <td>8 Weeks</td>
                <td>GHS 11,000</td>
                <td>$1,100</td>
              </tr>
              <tr>
                <td><strong>Software Development</strong></td>
                <td>24 weeks</td>
                <td>Contact Us</td>
                <td>Contact Us</td>
              </tr>
              <tr>
                <td><strong>IT Bootcamp</strong></td>
                <td>1 week intensive</td>
                <td>GHS 5000</td>
                <td>$500</td>
              </tr>
              <tr>
                <td><strong>IT Fundamentals</strong></td>
                <td>8 Weeks</td>
                <td>GHS 9,500</td>
                <td>$950</td>
              </tr>
              <tr>
                <td><strong>Python Programming</strong></td>
                <td>12 Weeks</td>
                <td>GHS 9,500</td>
                <td>$950</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pnit-notice-box" style={{ marginTop: '2.5rem' }}>
          <h4>Important Funding & Payment Notes:</h4>
          <ul>
            <li>All fees cover course materials, examinations, certificates, and daily executive refreshments (for in-person tracks).</li>
            <li>We offer a 10% discount for institutional group bookings consisting of 5 or more candidates.</li>
            <li>Flexible payment structures are available upon application and administrative review.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Fees;