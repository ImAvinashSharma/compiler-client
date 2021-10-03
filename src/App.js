import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import stubs from "./defaultStubs";
import Editor from "./Editor";
import moment from "moment";

function App() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("cpp");
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");
  const [status, setStats] = useState("");
  const [jobId, setjobId] = useState("");
  const [jobDetails, setJobDetails] = useState(null);
  useEffect(() => {
    const defaultLanguage = localStorage.getItem("defaultLanguage") || "cpp";
    setLanguage(defaultLanguage);
  }, []);
  useEffect(() => {
    setCode(stubs[language]);
  }, [language]);
  const setDefaultLanguage = () => {
    localStorage.setItem("defaultLanguage", language);
  };
  const handleSubmit = async () => {
    const payload = {
      language,
      code,
      input
    };
    try {
      setjobId("");
      setStats("");
      setOutput("");
      const { data } = await axios.post("http://localhost:8080/run", payload);
      setjobId(data.jobId);
      let intervalId;
      intervalId = setInterval(async () => {
        const { data: dataRes } = await axios.get("http://localhost:8080/status", { params: { id: data.jobId } });
        const { success, job, error } = dataRes;
        if (success) {
          const { status: jobStatus, output: jobOutput } = job;
          setStats(jobStatus);
          setJobDetails(job);
          if (jobStatus === "pending") return;
          setOutput(jobOutput);
          clearInterval(intervalId);
        } else {
          setStats("Error: Please retry");
          console.log(error);
          setOutput(error);
          clearInterval(intervalId);
        }
      }, 1000);
    } catch ({ response }) {
      if (response) {
        const errMsg = response.data;
        setOutput(errMsg);
      } else {
        setOutput("Error Connecting to server");
      }
    }
  };
  const renderTimeDetails = () => {
    if (!jobDetails) {
      return "";
    }
    let { submittedAt, startedAt, completedAt } = jobDetails;
    let result = "";
    submittedAt = moment(submittedAt).toString();
    result += `Job Submitted At: ${submittedAt}  `;
    if (!startedAt || !completedAt) return result;
    const start = moment(startedAt);
    const end = moment(completedAt);
    const diff = end.diff(start, "seconds", true);
    result += `Execution Time: ${diff}s`;
    return result;
  };
  return (
    <div className="App">
      <h1>Online Code Compiler</h1>
      <div>
        <i>Language:</i>
        <select
          value={language}
          onChange={e => {
            let shouldSwitch = window.confirm("Are you sure you want to change language? WARNING: Your current code will be lost.");
            if (shouldSwitch) {
              setLanguage(e.target.value);
            }
          }}
        >
          <option value="cpp">C++</option>
          <option value="c">C</option>
          <option value="py">Python</option>
        </select>
      </div>
      <br />
      <div>
        <button onClick={setDefaultLanguage}>Set Default</button>
      </div>
      <br />
      <div className="codeEditor">
        <Editor language={language} value={code} onChange={setCode} />
      </div>
      <br />
      <textarea
        rows="8"
        cols="25"
        value={input}
        onChange={e => {
          setInput(e.target.value);
        }}
      ></textarea>
      <br />
      <p>{output}</p>
      <p>{jobId && `JobId ${jobId}`}</p>
      <p>{renderTimeDetails()}</p>
      <p>{status}</p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;