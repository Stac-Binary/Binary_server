const models = require('../../model');
const sequelize = require('sequelize');
const Op = sequelize.Op;

exports.GetHospital = async (req, res) => {
    try {
        let hospitals = []
        if (req.query.keyword) {
            hospitals = await models.Hospital.findAll ({
                where: {
                    hospitalName: {
                        [Op.like]: "%" + req.query.keyword + "%"
                    }
                },
                raw: true,
            });
        } else {
            hospitals = await models.Hospital.findAll ({
            });
        }

        return res.status(200).json({
            message: "조회 성공",
            data: {
                hospitals,
            }
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}
