const defaults =  {
    "title": "HackRU Fall 2020",
    "dateText": "November 7th-8th",
    "locationText": "Virtual",
    "universityText": "Rutgers University",
    "slogan": "hack all knight",
    "mobileWidthThresholdSensitive": 1500,
    "mobileWidthThresholdRelaxed": 1200,
    "mobileHeightThresholdRelaxed": 650,
    "enableFlyingLogo": false,
    "poc": true,
    "rest": {
        "dev": "https://api.hackru.org/dev",
        "prod": "https://api.hackru.org/prod",
        "resumes": "https://hackru-resumes.s3.amazonaws.com",
        "s3": "http://hackru-misc.s3-website-us-west-2.amazonaws.com/",
        "teamru": "https://hki9olto2i.execute-api.us-east-1.amazonaws.com/dev",
        "teamruprod": "https://2f0yfjwjj0.execute-api.us-east-1.amazonaws.com/production"
    },
    "sponsorshipLogos": "https://s3-us-west-2.amazonaws.com/hackru-internal/sponsorship-logos/",
    "partnerLogos": "https://s3-us-west-2.amazonaws.com/hackru-internal/partners-logos/",
    "teamInfo": "https://s3-us-west-2.amazonaws.com/hackru-internal/hackru-team/",
    "freeze": false,
    "teamru": true,
    "teamru_user": true,
    "volunteers": {
        "display": true,
        "vol_url": "https://docs.google.com/forms/d/e/1FAIpQLSe_qBzqsJIKWd_BohZ7Xuju3XQhI2f6xtrwX7WO-otR0Q7ofg/viewform?usp=sf_link",
        "mentor_url": "https://docs.google.com/forms/d/e/1FAIpQLScG3eyzY67q58k52zh5nSscUBWRoYn8KayVNAXqYvJl8oqD8Q/viewform"
    },
    "mailing": "https://hackru.us3.list-manage.com/subscribe?u=457c42db47ebf530a0fc733fb&id=fb01885829",
    "dayof": false,
    "autocheckin": false //USE THIS FIELD TO AUTO CHECK-IN USERS!
};



export { defaults };