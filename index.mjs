import http from "http";

const port = process.env?.PORT || 3000;

const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Connection", "close");
  res.statusCode = 200;

  if (req.url?.includes("/api")) {
    const date = new Date();
    const url = new URL(req.url, `http://${req.headers.host}`);

    const daysOfTheWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const data = {
      slack_name: url.searchParams?.get("slack_name"),
      current_day: daysOfTheWeek[date.getDay()],

      utc_time: date.toJSON().split(".")[0] + "Z",
      track: url.searchParams?.get("track"),
      date,
      github_file_url:
        "https://github.com/Tayoakosile/HNG-INTERNSHIP-TASK-ONE/blob/master/index.mjs",
      github_repo_url: "https://github.com/Tayoakosile/HNG-INTERNSHIP-TASK-ONE",
    };
    return res.end(JSON.stringify(data));
  }
  const data = { message: "Hello World" };
  return res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
