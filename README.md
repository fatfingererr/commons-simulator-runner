# The Commons Simulator runner

Running the Commons Simulator in headless browser using selenium (nodejs)

## Getting started (for Ubuntu)

1. Install `geckodriver`

```sh
cd ~
wget https://github.com/mozilla/geckodriver/releases/download/v0.24.0/geckodriver-v0.24.0-linux64.tar.gz
tar -xvzf geckodriver*
chmod +x geckodriver
sudo mv geckodriver /usr/local/bin/
```

2. Please make sure you have installed FireFox

```sh
firefox
# Show the firefox window
```

3. Create `parames.csv` based on the format in the `params.csv.example`

```sh
cp params.csv.example params.csv
```

3. Run NPM commands:

```
npm install
npm run start
```

4. All the results will write into the file `params.csv`

```text
score, participants, totalProposals, candidateProposals, activeProposals, completedProposals, failedProposals, hatchers, proposals, commonTribute, maxSpending, customDays, exitTribute
855,49, 304, 1, 2, 148, 153,3, 32, 87, 12, 104, 12
413,57, 272, 0, 3, 127, 142,50, 10, 1, 16, 12, 14
728,47, 275, 2, 2, 135, 136,29, 9, 67, 33, 16, 59
617,42, 308, 2, 0, 158, 148,9, 40, 23, 24, 69, 19
672,40, 313, 0, 0, 163, 150,9, 40, 23, 24, 69, 42
435,34, 315, 0, 2, 137, 176,25, 36, 36, 50, 62, 2
...
```

First column is **SCORE**, everyone can share your results in [ISSUES](https://github.com/fatfingererr/commons-simulator-runner/issues) of this repository :)

## Configuration

Please update the range you want to run in the session `User parameters` in `index.js`

And please notice that the combination of parameters is too large, you can modify the code for specifying the range of parameters set then running

`CASES_MAX` is making sure your nodejs will not run into insufficient memory issue, i.e., you only will run the first `CASES_MAX` cases.

## License

Apache 2.0