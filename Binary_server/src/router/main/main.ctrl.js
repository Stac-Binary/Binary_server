const models = require('../../model');

exports.GetMain = async (req, res) => {
    try {
        const list = await models.Reserve.findAll ({
            where: {
                userId: req.query.userId,
            }
        });

        const blist = await models.Breserve.findAll ({
            where: {
                userId: req.query.userId,
            }
        });

        return res.status(200).json ({
            message: "메인 조회 성공!",
            data: {
                list,
                blist,
            },
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json ({
            message: "서버오류",
        });
    }
}