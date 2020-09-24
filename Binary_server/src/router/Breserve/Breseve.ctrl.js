const models = require('../../model');

exports.PostBreserve = async (req, res) => {
    const { body } = req;

    try {
        const data = await models.Breserve.findOne ({
            where: {
                userId: body.userId,
                dogIdx: body.dogIdx,
                bhospitalIdx: body.bhospitalIdx,
                bloodType: body.bloodType,
                time: body.time,
                date: body.date,
            }
        });

        if ( data ) {
            return res.status(401).json ({
                message: "이미 예약되어 있습니다!",
            });
        }

        await models.Breserve.create ({
            userId: body.userId,
            dogIdx: body.dogIdx,
            bhospitalIdx: body.bhospitalIdx,
            bloodType: body.bloodType,
            time: body.time,
            date: body.date,
        });

        return res.status(200).json ({
            message: "예약 성공",
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json ({
            message: "서버 오류",
        });
    }
}

exports.GetBreserve = async (req, res) => {
    try {
        let breserves = [];
        if (req.query.dogIdx) {
            breserves = await models.Breserve.findAll ({
                where: {
                    dogIdx: req.query.dogIdx,
                },
            });
        } else {
            breserves = await models.Breserve.findAll ({});
        }

        return res.status(200).json({
            message: "헌혈 예약 조회 성공!",
            date: {
                breserves,
            }
        });
        

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

exports.GetBreserves = async (req, res) => {
    try {
        const breserve = await models.Breserve.findOne ({
            where: {
                idx: req.params.idx,
            },
            raw: true,
        });

        return res.status(200).json ({
            message: "조회 성공!",
            data: {
                breserve,
            },
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json ({
            message: "서버 오류",
        });
    }
}