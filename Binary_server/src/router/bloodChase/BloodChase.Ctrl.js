const model = require('../../model');

exports.getchases = async (req, res) => {
    try {
        const list = await model.BloodChase.findAll({
            where: {
                dogIdx: req.params.idx,
            },
        });

        return res.status(200).json({
            message: "조회 성공!",
            list,
        });
        
    } catch ( err ) {
        console.log( err );
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

exports.getchase = async (req, res) => {
    try {
        const data = await model.BloodChase.findOne({
            where: {
                idx: req.params.idx,
            },
        });

        return res.status(200).json({
            message: "조회 성공!",
            data,
        });

    } catch ( err ) {
        console.log( err );
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}