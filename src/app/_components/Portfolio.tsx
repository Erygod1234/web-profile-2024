import React from "react";
import Card from "./common/Card";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <Card title="Portfolio">
      <div>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://github.com/Erygod1234/Wu-coe-camp-2024.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Wu-coe-camp-2024
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Erygod1234/web-profile-2024.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              web-profile-2024 - Personal Website
            </a>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default Portfolio;
