import chalk from "chalk";

export const portInUseErrorLogs = (port: number) => {
  console.log(chalk.red(`Port ${port} is already in use`));
  if (process.platform === "win32") {
    console.log(
      chalk.red(
        `Try ➤ "SET PORT=${
          port + 1
        } && npm run dev" to run the server on a different port`
      )
    );
  } else if (process.platform === "linux" || process.platform === "darwin") {
    console.log(
      chalk.yellow(
        `Try ➤ "PORT=${
          port + 1
        } npm run dev" to run the server on a different port`
      )
    );
  } else {
    console.log("Try running the server on a different port");
  }

  console.log("Exiting process...");
};
