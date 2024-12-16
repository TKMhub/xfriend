// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export function ProgressTracker() {
  const courses = [
    { name: "Web Development Fundamentals", progress: 75 },
    { name: "JavaScript Mastery", progress: 50 },
    { name: "React Essentials", progress: 25 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Progress</h2>
      <div className="space-y-6">
        {courses.map((course, index) => (
          <div key={index} className="flex items-center">
            <div className="w-16 h-16 mr-4">
              {/* <CircularProgressbar
                value={course.progress}
                text={`${course.progress}%`}
                styles={buildStyles({
                  textSize: "24px",
                  pathColor: "#006036",
                  textColor: "#006036",
                  trailColor: "#d6d6d6",
                })}
              /> */}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {course.name}
              </h3>
              <p className="text-sm text-gray-600">
                {course.progress}% completed
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
