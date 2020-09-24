const models = require('../../model');

exports.GetBhospital = async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}