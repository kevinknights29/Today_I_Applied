import React from "react";

const Listing = () => {
  return (
    <div>
      <ul>
        <li>
          <div className="listing">
            <div className="details">
              <table>
                <tr>
                  <th>👤 Role</th>
                  <td>Data Engineer</td>
                </tr>
                <tr>
                  <th>🏢 Company</th>
                  <td>P&amp;G</td>
                </tr>
                <tr>
                  <th>📍 Location</th>
                  <td>Panama City, Panama</td>
                </tr>
              </table>
            </div>
            <div className="application">
              <button onclick="window.open('https://www.pgcareers.com/global/en/job/R000088388/Data-Engineer?source=RS_LINKEDIN', '_blank')">
                Apply
              </button>
            </div>
            <div className="tags">
              <span>#engineering#</span>
            </div>
            <div className="reactions">
              <button>👍 24</button>
              <button>🚩 0</button>
              <button>✅ 1</button>
              <button>💬 0</button>
            </div>
          </div>
        </li>
        <li>
          <div className="listing">
            <div className="details">
              <table>
                <tr>
                  <th>👤 Role</th>
                  <td>Associate Security Engineer</td>
                </tr>
                <tr>
                  <th>🏢 Company</th>
                  <td>Hitachi Rail</td>
                </tr>
                <tr>
                  <th>📍 Location</th>
                  <td>Panama City, Panamá, Panama</td>
                </tr>
              </table>
            </div>
            <div className="application">
              <button onclick="window.open('https://careers.hitachi.com/jobs/11888033-associate-security-engineer', '_blank')">
                Apply
              </button>
            </div>
            <div className="tags">
              <span>#engineering#</span>
            </div>
            <div className="reactions">
              <button>👍 4</button>
              <button>🚩 1</button>
              <button>✅ 2</button>
              <button>💬 0</button>
            </div>
          </div>
        </li>
        <li>
          <div className="listing">
            <div className="details">
              <table>
                <tr>
                  <th>👤 Role</th>
                  <td>Data Analyst</td>
                </tr>
                <tr>
                  <th>🏢 Company</th>
                  <td>Experien</td>
                </tr>
                <tr>
                  <th>📍 Location</th>
                  <td>Panama City, Panamá, Panama</td>
                </tr>
              </table>
            </div>
            <div className="application">
              <button onclick="window.open('https://jobs.smartrecruiters.com/Experian/743999941405913-analista-de-data?source=Linkedin', '_blank')">
                Apply
              </button>
            </div>
            <div className="tags">
              <span>#data#</span>
            </div>
            <div className="reactions">
              <button>👍 0</button>
              <button>🚩 6</button>
              <button>✅ 0</button>
              <button>💬 0</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Listing;
