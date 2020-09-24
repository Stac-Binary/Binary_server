const models = require('../../model');

exports.Postreserve = async (req, res) => {
    const { body } = req;

    try {
        const data = await models.Reserve.findOne ({
            where: {
                userId: body.userId,
                hospitalIdx: body.hospitalIdx,
                service: body.service,
                day: body.day,
            }
        });

        if (data) {
            return res.status(401).json ({
                message: "이미 예약되어 있습니다.",
            });
        }

        await models.Reserve.create({
            userId: body.userId,
            hospitalIdx: body.hospitalIdx,
            service: body.service,
            day: body.day,
        });

        return res.status(200).json({
            message: "예약 성공!",
        });

    } catch (err) {
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

exports.Getreserve = async (req, res) => {
    try {
        let hostpials = [];
        hostpials = await models.Reserve.findAll ({});
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

exports.Getreserves = async (req, res) => {
    try {
        const reserve = await models.Reserve.findOne ({
            where: {
                idx: req.params.idx,
            },
            raw: true,
        });

        return res.status(200).json({
            message: "조회 성공!",
            data: {
                reserve,
            },
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}