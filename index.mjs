import http from "http";

const port = 4081;

const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  const data = { message: "Hello World" };
  if (req.url?.includes("/api")) {
    const url = new URL(req.url, `http://${req.headers.host}`);

    res.setHeader("Content-Type", "application/json");
    res.setHeader("Connection", "close");
    res.statusCode = 200;

    const date = new Date();
    const daysOfTheWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    console.log(url);

    const data = {
      slack_name: url.searchParams?.get("slack_name") ?? "Tayo Akosile",
      current_day: daysOfTheWeek[date.getDay()],
      utc_time: "2023-08-21T15:04:05Z",
      track: url.searchParams?.get("track") ?? "backend",
      github_file_url:
        "https://github.com/username/repo/blob/main/file_name.ext",
      github_repo_url: "https://github.com/username/repo",
      //  “status_code”: 200
    };
    return res.end(JSON.stringify(data));
  }
  res.end(JSON.stringify(data));

  // res.end(JSON.stringify(req.url));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
