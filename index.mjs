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
    console.log(date.toJSON().split('.'));

    const data = {
      slack_name: url.searchParams?.get("slack_name"),
      current_day: daysOfTheWeek[date.getDay()],
      // utc_time: "2023-08-21T15:04:05Z",
      utc_time: date.toJSON().split('.')[0] + 'Z',
      track: url.searchParams?.get("track"),
      github_file_url:
        "https://github.com/Tayoakosile/HNG-INTERNSHIP-TASK-ONE/blob/master/index.mjs",
      github_repo_url: "https://github.com/Tayoakosile/HNG-INTERNSHIP-TASK-ONE",
    };
    return res.end(JSON.stringify(data));
  }
  res.end(JSON.stringify(data));

  // res.end(JSON.stringify(req.url));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
