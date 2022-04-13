const fs = require('fs');
const { Builder, By, Key, until } = require('selenium-webdriver');

// Config parameters （you should not modify it)
const firefox = require('selenium-webdriver/firefox');
const TIMEOUT = 100000000;
const PAGE_TITLE_RESULTS = 'Results';
const SAVED_FILE_RESULTS = 'params.csv';
const screen = {
    width: 1920,
    height: 1080
};

// User parameters
const USER_NAME = '@CSRunner';
const ALL_HATCHERS = randomShuffleRange(25, 50);       // 3 ~ 50
const ALL_PROPOSALS = randomShuffleRange(1, 40);       // 1 ~ 40
const ALL_COMMON_TRIBUTE = randomShuffleRange(55, 85); // 1 ~ 99 (%)
const ALL_MAX_SPENDING = randomShuffleRange(35, 50);   // 5 ~ 50 (%)
const ALL_CUTOM_DAYS = randomShuffleRange(70, 100);    // 3 ~ 120
const ALL_EXIT_TRIBUTE = randomShuffleRange(1, 99);    // 1 ~ 99 (%)


const run = async (hatchers, proposals, commonTribute, maxSpending, customDays, exitTribute) => {
    let driver = await new Builder().forBrowser('firefox').setFirefoxOptions(new firefox.Options().headless().windowSize(screen)).build();
    const waitPageLoad = async () => driver.manage().setTimeouts({
        implicit: TIMEOUT, pageLoad:
            TIMEOUT, script: TIMEOUT
    });
    try {

        // Go to the Homepage of The Commons Simulator
        await driver.get('https://sim.commonsstack.org'); // https://sim.commonsstack.org
        await waitPageLoad();

        /*
        The Commons Simulator
        Press [ ENTER ]
        */
        await driver.findElement(By.xpath('/html/body/div/main/div/div[2]/div[2]/button')).click();
        await waitPageLoad();

        /*
        Initiating the RadicalxChange Commons
        Press [ Skip ]
        */
        await driver.findElement(By.xpath('/html/body/div/main/div/div[2]/div/button')).click();
        await waitPageLoad();

        /*
        Watch the Intro
        Press [ Skip ]
        */
        await driver.findElement(By.xpath('/html/body/div/main/div/div[9]/p')).click();
        await waitPageLoad();

        /*
        Choose the rules for the Commons
        Keyin USER_NAME
        Press [ I'M READY ]
        */
        await driver.findElement(By.xpath('/html/body/div/main/div/div[2]/input')).sendKeys(USER_NAME);
        await driver.findElement(By.xpath('/html/body/div/main/div/div[2]/button')).click();
        await waitPageLoad();

        /*
        You have been chosen to bring cadCAD back in time
        Press [ DESIGN THE COMMONS ]
        */
        await driver.findElement(By.xpath('/html/body/div/main/div/button')).click();
        await waitPageLoad();

        /*
        DESIGNING THE COMMONS
        Press [ NEXT ]
        */
        await driver.findElement(By.xpath('/html/body/div/main/div/div/button')).click();
        await waitPageLoad();

        /*
        Who can initiate a Commons?
        [ NEXT ]
        */
        await driver.findElement(By.xpath('/html/body/div/main/div/div/button')).click();
        await waitPageLoad();


        /*
        How many ‘Hatchers’ will you choose to initialize the RadicalxChange Commons?
        Keyin hatchers 
        Press [ NEXT ]
        */
        const HATCHERS_DEFAULT = await driver.findElement(By.xpath('/html/body/div/main/div/div[3]/div[2]/input')).getAttribute("value");
        if (hatchers > HATCHERS_DEFAULT) {
            for (let i = 0; i < hatchers - HATCHERS_DEFAULT; i++) {
                await driver.findElement(By.xpath('/html/body/div/main/div/div[3]/div[2]/input')).sendKeys(Key.RIGHT);
            }
        }
        else if (hatchers < HATCHERS_DEFAULT) {
            for (let i = 0; i < HATCHERS_DEFAULT - HATCHERS; i++) {
                await driver.findElement(By.xpath('/html/body/div/main/div/div[3]/div[2]/input')).sendKeys(Key.LEFT);
            }
        }
        await driver.findElement(By.xpath('/html/body/div/main/div/button')).click();
        await waitPageLoad();

        /*
        Great!
        Press [ NEXT ]
        */
        await driver.findElement(By.xpath('/html/body/div/main/div/div/button')).click();
        await waitPageLoad();

        /*
        How many proposals should be collected for the Hatchers to kick off their voting?
        Keyin proposals 
        Press [ NEXT ]
        */
        const PROPOSALS_RANGE_BAR = '/html/body/div/main/div/div[3]/div[2]/input';
        const PROPOSALS_DEFAULT = await driver.findElement(By.xpath(PROPOSALS_RANGE_BAR)).getAttribute("value");
        if (proposals > PROPOSALS_DEFAULT) {
            for (let i = 0; i < proposals - PROPOSALS_DEFAULT; i++) {
                await driver.findElement(By.xpath(PROPOSALS_RANGE_BAR)).sendKeys(Key.RIGHT);
            }
        }
        else if (proposals < PROPOSALS_DEFAULT) {
            for (let i = 0; i < PROPOSALS_DEFAULT - PROPOSALS; i++) {
                await driver.findElement(By.xpath()).sendKeys(Key.LEFT);
            }
        }
        await driver.findElement(By.xpath('/html/body/div/main/div/button')).click();
        await waitPageLoad();

        /*
        You are on a roll!
        Press [ NEXT ]
        */
        await driver.findElement(By.xpath('/html/body/div/main/div/div/button')).click();
        await waitPageLoad();

        /*
        What percent of the contributions will be allocated to the Funding Pool?
        Keyin proposals 
        Press [ NEXT ]
        */
        const COMMON_TRIBUTE_RANGE_BAR = '/html/body/div/main/div/div[2]/div[2]/div[2]/input';
        const COMMON_TRIBUTE_DEFAULT = await driver.findElement(By.xpath(COMMON_TRIBUTE_RANGE_BAR)).getAttribute("value");
        if (commonTribute > COMMON_TRIBUTE_DEFAULT) {
            for (let i = 0; i < commonTribute - COMMON_TRIBUTE_DEFAULT; i++) {
                await driver.findElement(By.xpath(COMMON_TRIBUTE_RANGE_BAR)).sendKeys(Key.RIGHT);
            }
        }
        else if (commonTribute < COMMON_TRIBUTE_DEFAULT) {
            for (let i = 0; i < COMMON_TRIBUTE_DEFAULT - COMMON_TRIBUTE; i++) {
                await driver.findElement(By.xpath()).sendKeys(Key.LEFT);
            }
        }
        await driver.findElement(By.xpath('/html/body/div/main/div/button')).click();
        await waitPageLoad();

        /*
         Well done!
         Press [ NEXT ]
         */
        await driver.findElement(By.xpath('/html/body/div/main/div/div/button')).click();
        await waitPageLoad();

        /*
        How much of the community funds can be distributed at any given time?
        Keyin maxSpending 
        Press [ NEXT ]
        */
        const MAX_SPENDING_RANGE_BAR = '/html/body/div/main/div/div[3]/div[2]/div[2]/input';
        const MAX_SPENDING_DEFAULT = await driver.findElement(By.xpath(MAX_SPENDING_RANGE_BAR)).getAttribute("value");
        if (maxSpending > MAX_SPENDING_DEFAULT) {
            for (let i = 0; i < maxSpending - MAX_SPENDING_DEFAULT; i++) {
                await driver.findElement(By.xpath(MAX_SPENDING_RANGE_BAR)).sendKeys(Key.RIGHT);
            }
        }
        else if (maxSpending < MAX_SPENDING_DEFAULT) {
            for (let i = 0; i < MAX_SPENDING_DEFAULT - MAX_SPENDING; i++) {
                await driver.findElement(By.xpath(MAX_SPENDING_RANGE_BAR)).sendKeys(Key.LEFT);
            }
        }
        await driver.findElement(By.xpath('/html/body/div/main/div/button')).click();
        await waitPageLoad();

        /*
         You did good.
         Press [ NEXT ]
         */
        await driver.findElement(By.xpath('/html/body/div/main/div/div/button')).click();
        await waitPageLoad();

        /*
        How much of the community funds can be distributed at any given time?
        Keyin VOTING_POWER 
        Press [ NEXT ]
        */
        const CUTOM_DAYS_INPUT = '/html/body/div/main/div/div[3]/div[2]/div[2]/label[5]/input';
        await driver.findElement(By.xpath(CUTOM_DAYS_INPUT)).clear();
        await driver.findElement(By.xpath(CUTOM_DAYS_INPUT)).sendKeys(customDays);
        await driver.findElement(By.xpath('/html/body/div/main/div/button')).click();
        await waitPageLoad();

        /*
        Almost there...
        Press [ NEXT ]
        */
        await driver.findElement(By.xpath('/html/body/div/main/div/div/button')).click();
        await waitPageLoad();


        /*
      What percentage goes to funding at exit?
       Keyin exitTribute  
       Press [ NEXT ]
       */
        const EXIT_TRIBUTE_RANGE_BAR = '/html/body/div/main/div/div[3]/div[2]/input';
        const EXIT_TRIBUTE_DEFAULT = await driver.findElement(By.xpath(EXIT_TRIBUTE_RANGE_BAR)).getAttribute("value");
        if (exitTribute > EXIT_TRIBUTE_DEFAULT) {
            for (let i = 0; i < exitTribute - EXIT_TRIBUTE_DEFAULT; i++) {
                await driver.findElement(By.xpath(EXIT_TRIBUTE_RANGE_BAR)).sendKeys(Key.RIGHT);
            }
        }
        else if (exitTribute < EXIT_TRIBUTE_DEFAULT) {
            for (let i = 0; i < EXIT_TRIBUTE_DEFAULT - EXIT_TRIBUTE; i++) {
                await driver.findElement(By.xpath(EXIT_TRIBUTE_RANGE_BAR)).sendKeys(Key.LEFT);
            }
        }
        await driver.findElement(By.xpath('/html/body/div/main/div/button')).click();
        await waitPageLoad();

        /*
        Inputs Received by cadCAD!
        Press [ RUN SIMULATION ]
        */
        await driver.findElement(By.xpath('/html/body/div/main/div/button')).click();
        await waitPageLoad();

        await driver.wait(until.titleIs(PAGE_TITLE_RESULTS), TIMEOUT);

        const XPATH_PARTICIPANTS = '/html/body/div/main/div/div[2]/div[2]/div[1]/p[2]';
        const XPATH_TOTAL_PROPOSALS = '/html/body/div/main/div/div[2]/div[2]/div[2]/p[2]';
        const XPATH_CANDIDATE_PROPOSALS = '/html/body/div/main/div/div[2]/div[2]/div[3]/p[2]';
        const XPATH_ACTIVE_PROPOSALS = '/html/body/div/main/div/div[2]/div[2]/div[4]/p[2]';
        const XPATH_COMPLETED_PROPOSALS = '/html/body/div/main/div/div[2]/div[2]/div[5]/p[2]';
        const XPATH_FAILED_PROPOSALS = '/html/body/div/main/div/div[2]/div[2]/div[6]/p[2]';

        const participants = await driver.findElement(By.xpath(XPATH_PARTICIPANTS)).getText();
        const totalProposals = await driver.findElement(By.xpath(XPATH_TOTAL_PROPOSALS)).getText();
        const candidateProposals = await driver.findElement(By.xpath(XPATH_CANDIDATE_PROPOSALS)).getText();
        const activeProposals = await driver.findElement(By.xpath(XPATH_ACTIVE_PROPOSALS)).getText();
        const completedProposals = await driver.findElement(By.xpath(XPATH_COMPLETED_PROPOSALS)).getText();
        const failedProposals = await driver.findElement(By.xpath(XPATH_FAILED_PROPOSALS)).getText();

        /*
        Did the RxC community create a sustainable Commons to support RxC gatherings? 
        Press [ SEE YOUR FUTURE ]
        */
        await driver.findElement(By.xpath('/html/body/div/main/div/div[4]/button[2]')).click();
        await waitPageLoad();

        /*
        Did the RxC community create a sustainable Commons to support RxC gatherings? 
        Press [ SEE YOUR FUTURE ]
        */
        const scoreStr = await driver.findElement(By.xpath('/html/body/div/main/div/div/div[1]/p[3]')).getText();
        const scores = scoreStr.split('/');
        const score = scores[0];

        const scoreResults = `${score}`;
        const inputsParams = `${hatchers}, ${proposals}, ${commonTribute}, ${maxSpending}, ${customDays}, ${exitTribute}`;
        const proposalsResults = `${participants}, ${totalProposals}, ${candidateProposals}, ${activeProposals}, ${completedProposals}, ${failedProposals}`;

        fs.appendFile(SAVED_FILE_RESULTS, `${scoreResults},${proposalsResults},${inputsParams}\n`, async function (err) {
            if (err) throw err;
        });
    } finally {
        await driver.quit();
    }
};

function shuffleArray(array) {
    let newArr = array;
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
    }
    return newArr;
}


function randomShuffleRange(start, end) {
    let array = Array(end - start + 1).fill().map((_, idx) => start + idx);
    array.sort(() => Math.random() - 0.5);
    return array;
}

/* 
Method 1. Rnuning the single paramter

*/
// const HATCHERS = 36;       // 3 ~ 50
// const PROPOSALS = 6;       // 1 ~ 40
// const COMMON_TRIBUTE = 66; // 1 ~ 99 (%)
// const MAX_SPENDING = 26;   // 5 ~ 50 (%)
// const CUTOM_DAYS = 116;    // 3 ~ 120
// const EXIT_TRIBUTE = 86;   // 1 ~ 99 (%)
// (async () => {
//     await run(HATCHERS, PROPOSALS, COMMON_TRIBUTE, MAX_SPENDING, CUTOM_DAYS, EXIT_TRIBUTE);
// })();


/*
 Method 2. Running multiple parameters sequentially
 Because the combination of parameters is too large, you can modify the following code for specifying the range of parameters set then running
 CASES_MAX is making sure your nodejs will not run into insufficient memory issue, i.e., you only will run the first CASES_MAX cases.

*/
const CASES_MAX = 12500000;
function getAllCases() {
    let array = [];
    for (let hatchers of ALL_HATCHERS) {
        for (let proposals of ALL_PROPOSALS) {
            for (let commonTribute of ALL_COMMON_TRIBUTE) {
                for (let maxSpending of ALL_MAX_SPENDING) {
                    for (let customDays of ALL_CUTOM_DAYS) {
                        for (let exitTribute of ALL_EXIT_TRIBUTE) {
                            array.push([
                                hatchers,
                                proposals,
                                commonTribute,
                                maxSpending,
                                customDays,
                                exitTribute
                            ]);
                            if (array.length > CASES_MAX) {
                                break;
                            }
                        };
                        if (array.length > CASES_MAX) {
                            break;
                        }
                    };
                    if (array.length > CASES_MAX) {
                        break;
                    }
                };
                if (array.length > CASES_MAX) {
                    break;
                }
            };
            if (array.length > CASES_MAX) {
                break;
            }
        };
        if (array.length > CASES_MAX) {
            break;
        }
    };
    return shuffleArray(array);
}

(async () => {
    const cases = getAllCases();
    for (let i = 0; i < cases.length; i++) {
        console.log('iter: ', i + 1, '/', cases.length);
        await run(cases[i][0], cases[i][1], cases[i][2], cases[i][3], cases[i][4], cases[i][5]);
    }
})();



