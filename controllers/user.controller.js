exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.LanceBoard = (req, res) => {
    res.status(200).send("Lance Content.");
};

exports.EnterpriseBoard = (req, res) => {
    res.status(200).send("Enterprise Content.");
};

exports.EnterpriseorLance = (req, res) => {
    res.status(200).send("Moderator Content.");
};